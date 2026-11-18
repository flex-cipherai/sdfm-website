// Site-wide settings. Contact entries left empty are hidden in the footer
// until a value is added.
interface SiteConfig {
  name: string;
  url: string;
  tagline: string;
  contact: { email: string; whatsapp: string; phone: string };
  social: { linkedin: string; instagram: string };
}

export const site: SiteConfig = {
  name: 'SDFM Group Limited',
  url: 'https://sdfmgroup.com',
  tagline: 'AI for law firms, podcasters, marketing agencies and HR teams.',
  contact: {
    email: 'flex@sdfmgroup.com',
    // International format, digits only, e.g. '254712345678'. Used for wa.me.
    whatsapp: '',
    // Display and tel: value, e.g. '+254 712 345 678'.
    phone: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/sdfm-group-limited',
    instagram: '',
  },
};
