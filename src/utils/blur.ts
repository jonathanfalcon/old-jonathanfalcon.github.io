import sharp from 'sharp'
import {decode, encode} from 'blurhash'
import path from 'path'

interface BlurHashData {
  data: Uint8ClampedArray,
  width: number,
  height: number,
  hash: string,
}

export default async function blurHashImage(imagePath: string, adjustedWidth: number = 20): Promise<string | undefined> {
  const processImage = async (): Promise<BlurHashData | undefined> => {
    try {
      const URL = path.resolve(
        path.join(
          import.meta.env.PROD ? './dist' : '.',
          imagePath.substring(imagePath.indexOf('/src'))
        )
      )
      
      const image = sharp(URL).resize(adjustedWidth)

      const [imageBuffer, { height, width }] = await Promise.all([
        image.raw().ensureAlpha().toBuffer(),
        image.metadata()
      ])

      if (!height || !width) {
        const undefinedDims = []

        if (!height) {
          undefinedDims.push('height')
        }
        if (!width) {
          undefinedDims.push('width')
        }

        console.warn(`Image ${undefinedDims.join(' and ')} ${undefinedDims.length > 1 ? 'are' : 'is'} undefined. Unable to construct blurHashData object.`)
        return
      }
      
      return {
        data: new Uint8ClampedArray(imageBuffer),
        width: adjustedWidth,
        height: Math.round(adjustedWidth * (height / width)),
        hash: '',
      }
      
    } catch (error) {
      console.error('Error processing image:', error)
      return
    }
  }
  
  const blurHashToDataURL = (blurHashData: BlurHashData): string | undefined => {
    if (blurHashData) {
      const pixels = decode(blurHashData.hash, blurHashData.width, blurHashData.height)
      return parsePixels(pixels, blurHashData.width, blurHashData.height)
    } else {
      return
    }
  }
  
  try {    
    const blurHashData = await processImage()
    
    if (!blurHashData) {
      console.warn('blurHashData is undefined. Unable to calculate blur hash.')
      return
    }
    
    blurHashData.hash = encode(blurHashData.data, blurHashData.width, blurHashData.height, 4, 4)
    
    return `background: center / cover url(${blurHashToDataURL(blurHashData)});`
  } catch (error) {
    console.error('Error creating blurhash:', error)
    return
  }
}


// thanks to https://github.com/wheany/js-png-encoder
function parsePixels(pixels: Uint8ClampedArray, width: number, height: number) {
  const pixelsString = [...pixels].map(byte => String.fromCharCode(byte)).join("")
  const pngString = generatePng(width, height, pixelsString)
  const dataURL = typeof Buffer !== "undefined"
    ? Buffer.from(getPngArray(pngString)).toString("base64")
    : btoa(pngString)
  return `data:image/png;base64,${dataURL}`
}

function getPngArray(pngString: string) {
  const pngArray = new Uint8Array(pngString.length)
  for (let i = 0; i < pngString.length; i++) {
    pngArray[i] = pngString.charCodeAt(i)
  }
  return pngArray
}

function generatePng(width: number, height: number, rgbaString: string) {
  const DEFLATE_METHOD = String.fromCharCode(0x78, 0x01)
  const CRC_TABLE: number[] = []
  const SIGNATURE = String.fromCharCode(137, 80, 78, 71, 13, 10, 26, 10)
  const NO_FILTER = String.fromCharCode(0)

  let n, c, k

  // make crc table
  for (n = 0; n < 256; n++) {
    c = n
    for (k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1)
      } else {
        c = c >>> 1
      }
    }
    CRC_TABLE[n] = c
  }

  // Functions
  function inflateStore(data: string) {
    const MAX_STORE_LENGTH = 65535
    let storeBuffer = ""
    let remaining
    let blockType

    for (let i = 0; i < data.length; i += MAX_STORE_LENGTH) {
      remaining = data.length - i
      blockType = ""

      if (remaining <= MAX_STORE_LENGTH) {
        blockType = String.fromCharCode(0x01)
      } else {
        remaining = MAX_STORE_LENGTH
        blockType = String.fromCharCode(0x00)
      }
      // little-endian
      storeBuffer += blockType + String.fromCharCode((remaining & 0xFF), (remaining & 0xFF00) >>> 8)
      storeBuffer += String.fromCharCode(((~remaining) & 0xFF), ((~remaining) & 0xFF00) >>> 8)

      storeBuffer += data.substring(i, i + remaining)
    }

    return storeBuffer
  }

  function adler32(data: string) {
    let MOD_ADLER = 65521
    let a = 1
    let b = 0

    for (let i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD_ADLER
      b = (b + a) % MOD_ADLER
    }

    return (b << 16) | a
  }

  function updateCrc(crc: number, buf: string) {
    let c = crc
    let b: number

    for (let n = 0; n < buf.length; n++) {
      b = buf.charCodeAt(n)
      c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8)
    }
    return c
  }

  function crc(buf: string) {
    return updateCrc(0xffffffff, buf) ^ 0xffffffff
  }

  function dwordAsString(dword: number) {
    return String.fromCharCode(
      (dword & 0xFF000000) >>> 24, (dword & 0x00FF0000) >>> 16, (dword & 0x0000FF00) >>> 8, (dword & 0x000000FF)
    )
  }

  function createChunk(length: number, type: string, data: string) {
    const CRC = crc(type + data)

    return dwordAsString(length) +
      type +
      data +
      dwordAsString(CRC)
  }

  function createIHDR(width: number, height: number) {
    const IHDRdata =
      dwordAsString(width) +
      dwordAsString(height) +
      // bit depth
      String.fromCharCode(8) +
      // color type: 6=truecolor with alpha
      String.fromCharCode(6) +
      // compression method: 0=deflate, only allowed value
      String.fromCharCode(0) +
      // filtering: 0=adaptive, only allowed value
      String.fromCharCode(0) +
      // interlacing: 0=none
      String.fromCharCode(0)

    return createChunk(13, "IHDR", IHDRdata)
  }

  // PNG creations

  const IEND = createChunk(0, "IEND", "")
  const IHDR = createIHDR(width, height)

  let scanlines = ""
  let scanline

  for (let y = 0; y < rgbaString.length; y += width * 4) {
    scanline = NO_FILTER
    if (Array.isArray(rgbaString)) {
      for (let x = 0; x < width * 4; x++) {
        scanline += String.fromCharCode(rgbaString[y + x] & 0xff)
      }
    } else {
      scanline += rgbaString.substr(y, width * 4)
    }
    scanlines += scanline
  }

  const compressedScanlines = DEFLATE_METHOD + inflateStore(scanlines) + dwordAsString(adler32(scanlines))
  const IDAT = createChunk(compressedScanlines.length, "IDAT", compressedScanlines)

  const pngString = SIGNATURE + IHDR + IDAT + IEND
  return pngString
}

