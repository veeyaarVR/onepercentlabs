import type { ImageMetadata } from 'astro';
import heroPhones from '../assets/hero-phones.png';
import timewiseIcon from '../assets/timewise.png';
import memdeckIcon from '../assets/memdeck.png';
import historyNotesIcon from '../assets/history-notes.png';
import founderPhoto from '../assets/founder.jpeg';

/**
 * All page content lives here, so copy and links change in one place.
 *
 * Images: drop the files into src/assets, import them at the top of this file
 * (e.g. `import timewiseIcon from '../assets/timewise.png'`) and assign them below.
 * While a value is undefined, the page shows a dashed placeholder instead.
 */

export const site = {
  name: 'One Percent Labs',
  url: 'https://onepercentlabs.io',
  tagline: 'Calm softwares for a loud internet',
  description:
    'One Percent Labs is a one-person studio making apps and websites that respect your attention. No endless feeds. No engagement tricks.',
  email: 'vigneshmarimuthu@onepercentlabs.io',
};

/** Transparent PNG of three phones, 1600 x 800. */
export const heroImage: ImageMetadata | undefined = heroPhones;

export interface Product {
  name: string;
  line: string;
  description: string;
  /** Where the arrow button goes. */
  href: string;
  /** 512 x 512 app icon. */
  icon?: ImageMetadata;
}

export const products: Product[] = [
  {
    name: 'TimeWise',
    line: "Screen time tracking you'll enjoy opening.",
    description:
      'Set a daily target, get an alert when you pass it, and see which apps you reach for most.',
    icon: timewiseIcon,
    href: 'https://vigneshmarimuthu.com/apps/timewise',
  },
  {
    name: 'MemDeck',
    line: 'Memorize anything in a few minutes a day.',
    description:
      'Spaced-repetition flashcards on the SM-2 schedule, with a daily shuffle, weak-spot practice, streaks and sync. No ads.',
    icon: memdeckIcon,
    href: 'https://vigneshmarimuthu.com/apps/memdeck',
  },
  {
    name: 'History Notes',
    line: 'Notes that arrange themselves into a timeline.',
    description:
      'Give each note a date and the app keeps them in order. Made for students and researchers.',
    icon: historyNotesIcon,
    href: 'https://play.google.com/store/apps/details?id=com.veeraakurilil.historynotes',
  },
];

export const founder = {
  name: 'Vignesh Marimuthu',
  initials: 'VM',
  website: 'https://www.vigneshmarimuthu.com',
  /** Square photo, at least 440 x 440. */
  photo: founderPhoto,
  bio: [
    "I'm a solo developer and the person behind One Percent Labs. I built TimeWise, MemDeck and History Notes because I wanted software that helps me use my phone on purpose instead of pulling me into a feed.",
    'I design and build every piece myself, from the first sketch to the store listing.',
  ],
};
