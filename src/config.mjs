import defaultImage from './assets/images/opengraph.jpg';

const CONFIG = {
  name: 'Jonathan Falcon',

  origin: 'https://jonathanfalcon.com',
  basePathname: '/',
  trailingSlash: true,

  title: 'Jonathan Falcon',
  description:
    'As a marketing analyst, I leverage my multidisciplinary background to give you the most holistic understanding of your customers.',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: "G-576RL0XNE9", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false,

  blog: {
    disabled: false,
    postsPerPage: 10,

    post: {
      permalink: '/work/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'work', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
