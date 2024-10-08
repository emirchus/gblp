// eslint-disable-next-line import/no-unresolved
import { Gabarito, Syne } from 'next/font/google';

export const fontHeading = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const fontBody = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const siteConfig = {
  name: 'GBLP',
  url: 'https://gblp.emirchus.ar',
  ogImage: '',
  description:
    'Develop a proof-of-concept for a gamified learning platform that combines educational content with game-like elements to enhance user engagement and learning outcomes.',
  links: {
    twitter: 'https://twitter.com/emirchus',
    github: 'https://github.com/emirchus',
  },
};

export type SiteConfig = typeof siteConfig;
