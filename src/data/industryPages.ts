import type { IndustryKey } from './industries';
import lawFirmsHero from '../assets/images/law-firms-hero.webp';
import lawFirmsHero800 from '../assets/images/law-firms-hero-800.webp';
import lawFirmsHeroJpg from '../assets/images/law-firms-hero.jpg';
import lawFirmsHero800Jpg from '../assets/images/law-firms-hero-800.jpg';
import podcastersHero from '../assets/images/podcasters-hero.webp';
import podcastersHero800 from '../assets/images/podcasters-hero-800.webp';
import podcastersHeroJpg from '../assets/images/podcasters-hero.jpg';
import podcastersHero800Jpg from '../assets/images/podcasters-hero-800.jpg';

// One config per industry page. The IndustryPage template holds the layout;
// everything industry-specific lives here.

export interface FaqItem {
  q: string;
  a: string;
}

export interface IndustryPageConfig {
  slug: string;
  industryKey: IndustryKey;
  navLabel: string;
  orgLabel: string;
  orgSizeLabel: string;
  /** Choices for the size question on the custom-build form */
  orgSizeOptions: string[];
  h1: string;
  subline1: string;
  subline2: string;
  aiCheckLink: string;
  learnIntro: string;
  guidesLinkLabel: string;
  signupHeading: string;
  softwareIntro: string;
  emptyCardHeading: string;
  emptyCardBody: string;
  buildIntro: string;
  taskPlaceholder: string;
  toolsLabel: string;
  toolsPlaceholder: string;
  aiCheckHeading: string;
  aiCheckBody: string;
  faqHeading: string;
  faq: FaqItem[];
  /** 4:3 hero photo: 1600×1200 and 800×600, WebP with JPG fallback */
  heroImage: { webp: string; webpSmall: string; jpg: string; jpgSmall: string; alt: string };
  /** 1200×630, in public/ */
  ogImage: string;
  seoTitle: string;
  seoDescription: string;
}

export const lawFirms: IndustryPageConfig = {
  slug: 'law-firms',
  industryKey: 'law',
  navLabel: 'Law firms',
  orgLabel: 'Firm name',
  orgSizeLabel: 'How many people work at your firm?',
  orgSizeOptions: ['1–5', '6–15', '16–50', '51–100', 'More than 100'],
  h1: 'AI for law firms',
  subline1: 'Less time drafting, filing and chasing. More time on clients and billable work.',
  subline2:
    "Learn what AI can do in a law firm, use software we've built for law firms, or have us build exactly what your firm needs.",
  aiCheckLink: 'Not sure where to start? Get a free AI check for your firm',
  learnIntro:
    'Plain-English guides on what AI can do in a law firm, from contract review to client intake. No hype, no jargon.',
  guidesLinkLabel: 'All law firm guides',
  signupHeading: 'Get one practical guide on AI in law, every two weeks',
  softwareIntro: "Software we've built for law firms. Pick a tool, sign up, and put it to work.",
  emptyCardHeading: 'Need software for your firm now?',
  emptyCardBody:
    "Tell us the task you want off your desk and we'll build the tool around how your firm works. First version live in 2 weeks.",
  buildIntro:
    "Every firm works differently. Tell us the task you want off your desk, and we'll build the tool around how your firm works.",
  taskPlaceholder: 'e.g. Writing first drafts of NDAs from our template, or chasing clients for missing documents.',
  toolsLabel: 'Which tools does your firm use today?',
  toolsPlaceholder: 'e.g. Microsoft 365, Clio, Google Drive',
  aiCheckHeading: 'Not sure where AI fits in your firm?',
  aiCheckBody:
    "Answer a few questions about how your firm works. In about 10 minutes you'll get a report showing where AI would save you time and money, and what it would return. No call needed, and the report is yours to keep.",
  faqHeading: 'Questions law firms ask',
  // TODO: add "How do you keep client information confidential?" once the
  // answer is written. Two answers below still need confirming.
  faq: [
    {
      q: 'Do we have to replace the tools we already use?',
      a: 'No. Wherever we can, we build around the tools your firm already uses, so your team keeps working the way it does now.',
    },
    {
      q: 'How long does a custom build take?',
      a: 'The first version goes live in 2 weeks. We then refine it with your team.',
    },
    {
      q: "What if it doesn't work the way we agreed?",
      a: 'We fix it, free.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on what the tool needs to do. You get a clear quote before any work starts.',
    },
    {
      q: 'Do you work with firms in any country?',
      a: 'Yes. We work with firms anywhere, and all our work is done remotely.',
    },
  ],
  heroImage: {
    webp: lawFirmsHero,
    webpSmall: lawFirmsHero800,
    jpg: lawFirmsHeroJpg,
    jpgSmall: lawFirmsHero800Jpg,
    alt: 'Two lawyers reviewing documents at a desk, with a book titled The Law in the foreground',
  },
  ogImage: '/og-law-firms.jpg',
  seoTitle: 'AI for Law Firms: Guides, Software & Custom Builds | SDFM Group',
  seoDescription:
    'Practical guides on AI for law firms, software built for legal work, and custom tools built around your firm, with a first version live in 2 weeks.',
};

export const podcasters: IndustryPageConfig = {
  slug: 'podcasters',
  industryKey: 'podcast',
  navLabel: 'Podcasters',
  orgLabel: 'Show or company name',
  orgSizeLabel: 'How many people work on your show?',
  orgSizeOptions: ['Just me', '2–5', '6–15', '16–50', 'More than 50'],
  h1: 'AI for podcasters',
  subline1: 'Less time editing, clipping and publishing. More time making episodes.',
  subline2:
    "Learn what AI can do for a podcast, use software we've built for podcasters, or have us build exactly what your show needs.",
  aiCheckLink: 'Not sure where to start? Get a free AI check for your show',
  learnIntro:
    'Plain-English guides on what AI can do for a podcast, from editing to growing your audience. No hype, no jargon.',
  guidesLinkLabel: 'All podcaster guides',
  signupHeading: 'Get one practical guide on AI for podcasters, every two weeks',
  softwareIntro: "Software we've built for podcasters. Pick a tool, sign up, and put it to work.",
  emptyCardHeading: 'Need software for your show now?',
  emptyCardBody:
    "Tell us the task you want off your plate and we'll build the tool around how your show works. First version live in 2 weeks.",
  buildIntro:
    "Every show works differently. Tell us the task you want off your plate, and we'll build the tool around how you make your podcast.",
  taskPlaceholder: 'e.g. Cutting every episode into short clips for TikTok and Reels, or writing show notes and chapters.',
  toolsLabel: 'Which tools do you use today?',
  toolsPlaceholder: 'e.g. Riverside, Descript, YouTube Studio, Spotify for Creators',
  aiCheckHeading: 'Not sure where AI fits in your show?',
  aiCheckBody:
    "Answer a few questions about how you make your podcast. In about 10 minutes you'll get a report showing where AI would save you time and money, and what it would return. No call needed, and the report is yours to keep.",
  faqHeading: 'Questions podcasters ask',
  // The content-ownership and existing-tools answers still need confirming.
  faq: [
    {
      q: "I'm a solo podcaster. Is this for me?",
      a: 'Yes. The guides and the free AI check work for shows of any size, and every custom build is quoted to what you actually need.',
    },
    {
      q: 'Will AI make my show sound generic?',
      a: 'No. The tools we build take on the repetitive work, like cutting, clipping and publishing. The creative calls stay yours.',
    },
    {
      q: 'Who owns my recordings and content?',
      a: 'Creators keep full ownership of their recordings and anything the tools produce.',
    },
    {
      q: 'Do I have to change my recording or hosting platform?',
      a: 'No. Wherever we can, we build around the tools you already use.',
    },
    {
      q: 'How long does a custom build take?',
      a: 'The first version goes live in 2 weeks. We then refine it with you.',
    },
    {
      q: "What if it doesn't work the way we agreed?",
      a: 'We fix it, free.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on what the tool needs to do. You get a clear quote before any work starts.',
    },
  ],
  heroImage: {
    webp: podcastersHero,
    webpSmall: podcastersHero800,
    jpg: podcastersHeroJpg,
    jpgSmall: podcastersHero800Jpg,
    alt: 'A studio microphone with a pop filter, ready to record in a podcast studio.',
  },
  ogImage: '/og-podcasters.jpg',
  seoTitle: 'AI for Podcasters: Guides, Software & Custom Builds | SDFM Group',
  seoDescription:
    'Practical guides on AI for podcasters, software built for podcast production, and custom tools built around your show, with a first version live in 2 weeks.',
};
