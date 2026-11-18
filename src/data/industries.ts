import lawFirms from '../assets/images/law-firms.webp';
import lawFirms640 from '../assets/images/law-firms-640.webp';
import podcasters from '../assets/images/podcasters.webp';
import podcasters640 from '../assets/images/podcasters-640.webp';
import marketing from '../assets/images/marketing-agencies.webp';
import marketing640 from '../assets/images/marketing-agencies-640.webp';
import hrTeams from '../assets/images/hr-teams.webp';
import hrTeams640 from '../assets/images/hr-teams-640.webp';

export type IndustryKey = 'law' | 'podcast' | 'marketing' | 'hr';

export interface Industry {
  /** Tracking value for data-industry */
  key: IndustryKey;
  /** Short name used in menus and the footer */
  label: string;
  href: string;
  tile: {
    title: string;
    line: string;
    linkLabel: string;
    image: { src: string; srcSmall: string };
  };
}

export const industries: Industry[] = [
  {
    key: 'law',
    label: 'Law firms',
    href: '/law-firms',
    tile: {
      title: 'I run a law firm',
      line: 'Less time on drafting and admin. More time on clients.',
      linkLabel: 'AI for law firms →',
      image: { src: lawFirms, srcSmall: lawFirms640 },
    },
  },
  {
    key: 'podcast',
    label: 'Podcasters',
    href: '/podcasters',
    tile: {
      title: 'I make a podcast',
      line: 'Less time editing and publishing. More time making episodes.',
      linkLabel: 'AI for podcasters →',
      image: { src: podcasters, srcSmall: podcasters640 },
    },
  },
  {
    key: 'marketing',
    label: 'Marketing agencies',
    href: '/marketing-agencies',
    tile: {
      title: 'I run a marketing agency',
      line: 'Less time on reports and production. More time on strategy.',
      linkLabel: 'AI for marketing agencies →',
      image: { src: marketing, srcSmall: marketing640 },
    },
  },
  {
    key: 'hr',
    label: 'HR teams',
    href: '/hr-teams',
    tile: {
      title: 'I work in HR',
      line: 'Less time on paperwork and screening. More time on people.',
      linkLabel: 'AI for HR teams →',
      image: { src: hrTeams, srcSmall: hrTeams640 },
    },
  },
];
