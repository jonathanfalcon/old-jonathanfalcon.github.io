const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const theme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      minHeight: {
        'small-screen-minus-nav': ['calc(100vh - 60px) /* fallback */', 'calc(100svh - 60px)'],
      },
      height: {
        'dynamic-screen-minus-nav': ['calc(100vh - 60px) /* fallback */', 'calc(100dvh - 60px)'],
      },
      screens: {
        'xs': '350px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: {
          DEFAULT: '#2C6E49',
          50: '#A6DCBE',
          100: '#9AD6B4',
          200: '#80CCA2',
          300: '#67C28F',
          400: '#4DB87C',
          500: '#40A16B',
          600: '#358257',
          700: '#2C6E49',
          800: '#1C462E',
          900: '#0C1E14'
        },
        secondary: {
          DEFAULT: '#4b5dd2',
          50: '#d5e2fb',
          100: '#dae4fb',
          200: '#cddaf9',
          300: '#a9c2f4',
          400: '#82a4ed',
          500: '#6485e8',
          600: '#516bdb',
          700: '#4b5dd2',
          800: '#3644bf',
          900: '#3644a1',
        },
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#001220',
        'slate': {
          DEFAULT: '#0b0e1c',
          50: '#f7fbff',
          100: '#f1f6ff',
          200: '#e4eafb',
          300: '#cfd6e8',
          400: '#b2b9ce',
          500: '#8d94ac',
          600: '#626a83',
          700: '#384057',
          800: '#161b2b',
          900: '#0b0e1c'
        },
        'nugget': {
          50: '#fcfaf4',
          100: '#f8f4e8',
          200: '#efe4c6',
          300: '#e5d3a3',
          400: '#d1b25e',
          500: '#bd9119',
          600: '#aa8317',
          700: '#8e6d13',
          800: '#71570f',
          900: '#5d470c'
        },
        'crater-brown': {
          50: '#f6f5f4',
          100: '#edeaea',
          200: '#d3cbca',
          300: '#b8abaa',
          400: '#826c6b',
          500: '#4d2d2b',
          600: '#452927',
          700: '#3a2220',
          800: '#2e1b1a',
          900: '#261615'
        },
        'space-cadet': {
          50: '#F2F4F7',
          100: '#E5E8F0',
          200: '#C9CEDF',
          300: '#A2ACC8',
          400: '#7684AD',
          500: '#2E364D',
          600: '#282F43',
          700: '#202636',
          800: '#202636',
          900: '#151923'
        },
        'fire-opal': {
          50: '#FDEEED',
          100: '#FBDEDA',
          200: '#F7BDB5',
          300: '#F39C90',
          400: '#EF7B6C',
          500: '#EB5745',
          600: '#DD2F18',
          700: '#A62312',
          800: '#6F170C',
          900: '#370C06'
        },
        'mikado-yellow': {
          50: '#FFFAF0',
          100: '#FFF6E0',
          200: '#FFEBBD',
          300: '#FFE099',
          400: '#FFD36B',
          500: '#FFC53A',
          600: '#F5AB00',
          700: '#D69600',
          800: '#B37D00',
          900: '#805900'
        },
        'bobcat': {
          50: '#F8DEDF',
          100: '#F0BCBE',
          200: '#E17A7D',
          300: '#D2373C',
          400: '#922125',
          500: '#501214',
          600: '#3E0E10',
          700: '#320B0D',
          800: '#210708',
          900: '#110404'
        },
        'longhorn': {
          50: '#FFEEE0',
          100: '#FFDDC2',
          200: '#FFB980',
          300: '#FF9742',
          400: '#FF7300',
          500: '#BF5700',
          600: '#994500',
          700: '#753500',
          800: '#4D2200',
          900: '#291200'
        },
      },
      fontFamily: {
        sans: ['proxima-nova', ...defaultTheme.fontFamily.sans],
        serif: ['quincy-cf', ...defaultTheme.fontFamily.serif],
        'mono': ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '4.5xl': ['2.625rem'],
        '2.5xl': ['1.6875rem', {lineHeight: '1.85rem',}],
        '1.5xl': ['1.375rem', {lineHeight: '1.75rem',}]
      },
      fontWeight: {
        normal: '500',
        medium: '600',
        semibold: '700',
        bold: '800',
        black: '900',
      },
      boxShadow: {
        '3xl': '0 10px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 10px 100px -20px rgba(0, 0, 0, 0.3)',
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: rem(17),
            lineHeight: round(28 / 17),
            color: null,
            maxWidth: null,
            
            code: {
              color: null,
            },

            'code::before': {
              content: null,
            },
            'code::after': {
              content: null,
            },
            
            blockquote: {
              color: null,
            },
            
            strong: {
              color: null,
              fontWeight: '700',
            },

            a: {
              fontWeight: null,
              textDecorationThickness: '2px',
            },
            
            table: {
              width: '100%',
              tableLayout: null,
              textAlign: 'left',
              overflow: 'auto',
              display: 'block',
            },
            thead: {
              borderBottomWidth: null,
              borderBottomColor: null,
            },
            'thead th': {
              color: null,
              fontWeight: '700',
              verticalAlign: 'bottom',
              minWidth: '150px',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-td-borders)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '7px',
            },
            'tbody td': {
              verticalAlign: 'middle',
            },
            tfoot: {
              borderTopWidth: '1px',
              borderTopColor: 'var(--tw-prose-th-borders)',
            },
            'tfoot td': {
              verticalAlign: 'top',
            },
            td: {
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            th: {
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            
            'ol > li::marker': {
              fontWeight: null,
              color: null,
            },
            'ul > li::marker': {
              color: null,
            },
            h2: {
              fontWeight: '800',
              fontSize: em(36, 20),
              marginTop: em(56, 36),
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36),
              color: null,
              textTransform: 'uppercase',
            },
            h3: {
              fontWeight: '800',
              fontSize: em(30, 20),
              marginTop: em(48, 30),
              marginBottom: em(20, 30),
              lineHeight: round(40 / 30),
              color: null,
            },
            h4: {
              fontWeight: '700',
              fontSize: em(24, 20),
              marginTop: em(36, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20),
              color: null,
            },
          },
        },
        xl: {
          css: {
            td: {
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            th: {
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            
            h2: {
              fontSize: em(48, 24),
              marginTop: em(72, 48),
              marginBottom: em(40, 48),
              lineHeight: round(52 / 48),
            },
            h3: {
              fontSize: em(36, 24),
              marginTop: em(56, 36),
              marginBottom: em(24, 36),
              lineHeight: round(44 / 36),
            },
            h4: {
              fontSize: em(30, 24),
              marginTop: em(40, 24),
              marginBottom: em(16, 24),
              lineHeight: round(36 / 24),
            },
          },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography', '@tailwindcss/forms'),
    function ({ addComponents, theme }) {
      addComponents({
        '.bg-resume': {
          background: 'right/cover url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xml:space=%22preserve%22 fill-rule=%22evenodd%22 stroke-linejoin=%22round%22 stroke-miterlimit=%222%22 clip-rule=%22evenodd%22 viewBox=%220 0 900 600%22%3E%3Cpath fill=%22%23FFFFFF%22 d=%22M0 0h900v600H0z%22/%3E%3Cpath fill=%22%23F2F4F7%22 fill-rule=%22nonzero%22 d=%22M359 600c58-49 117-97 134-169 16-71-8-166 25-213 33-48 123-48 196-66 74-19 130-56 186-93v541H359ZM541 0c-44 57-88 113-111 178-22 65-23 138-56 196s-99 100-167 126c-68 25-137 33-207 41V0h541Z%22/%3E%3Cpath fill=%22%23E5E8F0%22 fill-rule=%22nonzero%22 d=%22M630 600c29-24 58-49 66-84 9-36-4-84 13-107 16-24 62-24 98-33 37-9 65-28 93-46v270H630ZM270 0c-22 28-44 57-55 89-11 33-11 69-28 98s-50 50-83 63c-34 13-69 16-104 20V0h270Z%22/%3E%3C/svg%3E")'
        },
        '.bg-resume-dark': {
          background: 'right/cover url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xml:space=%22preserve%22 fill-rule=%22evenodd%22 stroke-linejoin=%22round%22 stroke-miterlimit=%222%22 clip-rule=%22evenodd%22 viewBox=%220 0 900 600%22%3E%3Cpath fill=%22%232e364d%22 d=%22M0 0h900v600H0z%22/%3E%3Cpath fill=%22%23172436%22 fill-rule=%22nonzero%22 d=%22M359 600c58-49 117-97 134-169 16-71-8-166 25-213 33-48 123-48 196-66 74-19 130-56 186-93v541H359ZM541 0c-44 57-88 113-111 178-22 65-23 138-56 196s-99 100-167 126c-68 25-137 33-207 41V0h541Z%22/%3E%3Cpath fill=%22%23001220%22 fill-rule=%22nonzero%22 d=%22M630 600c29-24 58-49 66-84 9-36-4-84 13-107 16-24 62-24 98-33 37-9 65-28 93-46v270H630ZM270 0c-22 28-44 57-55 89-11 33-11 69-28 98s-50 50-83 63c-34 13-69 16-104 20V0h270Z%22/%3E%3C/svg%3E")'
        },
        '.bg-home': {
          background: 'right/cover url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xml:space=%22preserve%22 fill-rule=%22evenodd%22 stroke-linejoin=%22round%22 stroke-miterlimit=%222%22 clip-rule=%22evenodd%22 viewBox=%220 0 960 540%22%3E%3Cpath fill=%22%23FFFFFF%22 d=%22M0 0h960v540H0z%22 /%3E%3Cpath fill=%22%23FFF0D0%22 fill-rule=%22nonzero%22 d=%22m0 0 165 33c58 12 121 27 152 70 32 43 32 116 58 164 27 49 80 73 112 115 32 41 42 100 53 158H0V0Zm960 540c-51-20-101-40-159-51-57-12-122-15-158-52s-44-107-66-158c-23-51-60-83-89-126-28-43-48-98-68-153h540v540Z%22 /%3E%3Cpath fill=%22%23FFD371%22 fill-rule=%22nonzero%22 d=%22m0 180 110 22c39 8 81 18 102 47s21 77 38 109c18 33 53 49 75 77 21 27 28 66 35 105H0V180Zm960 180c-34-13-67-26-106-34-38-8-81-10-106-35-24-24-29-71-44-105s-39-55-59-84c-18-29-32-65-45-102h360v360Z%22 /%3E%3Cpath fill=%22%23FFC53A%22 fill-rule=%22nonzero%22 d=%22m0 360 55 11c19 4 40 9 51 23 10 15 10 39 19 55s27 24 37 38c11 14 15 33 18 53H0V360Zm960-180c-17-7-34-13-53-17s-41-5-53-17c-12-13-14-36-22-53-7-17-20-28-29-42-10-14-16-33-23-51h180v180Z%22 /%3E%3C/svg%3E")'
        },
        '.bg-projects': {
          background: 'right/cover url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xml:space=%22preserve%22 fill-rule=%22evenodd%22 stroke-linejoin=%22round%22 stroke-miterlimit=%222%22 clip-rule=%22evenodd%22 viewBox=%220 0 900 600%22%3E%3Cpath fill=%22%23FFFFFF%22 d=%22M0 0h900v600H0z%22/%3E%3Cpath fill=%22%23FFAE9E%22 fill-rule=%22nonzero%22 d=%22M359 600c9-70 17-139 41-207 25-67 65-133 120-173 54-41 124-57 190-79 66-23 128-52 190-82v541H359ZM541 0c-48 55-95 110-116 176s-15 143-47 202c-32 58-102 98-171 122S69 532 0 541V0h541Z%22/%3E%3Cpath fill=%22%23EB5745%22 fill-rule=%22nonzero%22 d=%22M630 600c4-35 8-70 20-103 12-34 32-67 60-87 27-20 62-28 95-40 33-11 64-26 95-40v270H630ZM270 0c-23 28-47 55-57 88-11 33-8 72-24 101s-51 49-85 61c-35 12-70 16-104 20V0h270Z%22/%3E%3C/svg%3E")'
        },
        '.bg-contact': {
          background: 'left/cover url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 900 600%22%3E%3Cpath fill=%22%23FFFFFF%22 d=%22m0 121 22 3c21 3 64 9 107 9s85-6 128-14 86-18 129-7 85 43 128 62 86 25 129 21 85-18 128-35 86-37 108-47l21-10V0H0Z%22/%3E%3Cpath fill=%22%2395B59F%22 d=%22m0 373 22-10c21-10 64-30 107-24s85 38 128 48 86-2 129-18 85-36 128-41 86 5 129 24 85 47 128 61 86 14 108 14h21V101l-21 10c-22 10-65 30-108 47s-85 31-128 35-86-2-129-21-85-51-128-62-86-1-129 7-85 14-128 14-86-6-107-9l-22-3Z%22/%3E%3Cpath fill=%22%232C6E49%22 d=%22M0 601h900V425h-21c-22 0-65 0-108-14s-85-42-128-61-86-29-129-24-85 25-128 41-86 28-129 18-85-42-128-48-86 14-107 24L0 371Z%22/%3E%3C/svg%3E")'
        },
        '.highlight': {
          background: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22cu…1 1h-7zm-170-1h2l-2 1v-1zm180 0 12-1-6 1h-6zm-40-2h2-2V8z%22/%3E%3C/svg%3E")'
        },
        '.underline-position-under': {
          'text-underline-position': 'under',
        }
      })
    }],
  darkMode: 'class',  
};

