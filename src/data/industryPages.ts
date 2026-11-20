import type { IndustryKey } from './industries';
import lawFirmsHero from '../assets/images/law-firms-hero.webp';
import lawFirmsHero800 from '../assets/images/law-firms-hero-800.webp';

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
  h1: string;
  subline1: string;
  subline2: string;
  aiCheckLink: string;
  learnIntro: string;
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
  heroImage: { src: string; srcSmall: string; alt: string };
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
  h1: 'AI for law firms',
  subline1: 'Less time drafting, filing and chasing. More time on clients and billable work.',
  subline2:
    "Learn what AI can do in a law firm, use software we've built for law firms, or have us build exactly what your firm needs.",
  aiCheckLink: 'Not sure where to start? Get a free AI check for your firm',
  learnIntro:
    'Plain-English guides on what AI can do in a law firm, from contract review to client intake. No hype, no jargon.',
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
    src: lawFirmsHero,
    srcSmall: lawFirmsHero800,
    alt: 'Two lawyers reviewing documents at a desk, with a book titled The Law in the foreground',
  },
  ogImage: '/og-law-firms.jpg',
  seoTitle: 'AI for Law Firms: Guides, Software & Custom Builds | SDFM Group',
  seoDescription:
    'Practical guides on AI for law firms, software built for legal work, and custom tools built around your firm, with a first version live in 2 weeks.',
};
