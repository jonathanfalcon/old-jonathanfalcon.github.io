import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Work',
      href: getBlogPermalink(),
    },
    {
      text: 'Resume',
      href: '/resume/',
    },
    {
      text: 'Contact',
      href: '/contact/',
    }
  ],
  actions: [
    /*{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }*/
  ],
};
  
export const footerData = {
  links: [
    {
      links: [
        { text: 'Home', href: '/' }
      ],
    },
    {
      links: [
          { text: 'Work', href: getBlogPermalink() }
      ],
    },
    {
      links: [
        { text: 'Resume', href: '/resume/' }
      ],
    },
    {
      links: [
        { text: 'Get in Touch', href: '/contact/' }
      ],
    },
  ],
  /*secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],*/
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/in/jqfalcon/' },
    { ariaLabel: 'GitHub', icon: 'simple-icons:github', href: 'https://github.com/jonathanfalcon' },
    { ariaLabel: 'Unsplash', icon: 'simple-icons:unsplash', href: 'https://unsplash.com/@jonathanfalcon' },
  ],
};
