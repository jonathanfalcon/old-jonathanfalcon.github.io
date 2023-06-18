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
  /*secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],*/
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/in/jqfalcon/' },
    { ariaLabel: 'GitHub', icon: 'simple-icons:github', href: 'https://github.com/jonathanfalcon' },
    { ariaLabel: 'Tableau Public', icon: 'simple-icons:tableau', href: 'https://public.tableau.com/app/profile/falcon' },
    { ariaLabel: 'Unsplash', icon: 'simple-icons:unsplash', href: 'https://unsplash.com/@jonathanfalcon' },
  ],
};
