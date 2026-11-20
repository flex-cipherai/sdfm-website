import type { IndustryKey } from './industries';

// Software products. Each industry page lists every published entry whose
// industry matches. A product that serves two industries is two entries,
// one per industry, so each page's copy can differ.
//
// Example entry (shape only, not a real product):
// {
//   id: 'example-product',
//   industry: 'law',
//   name: 'Product name',
//   tagline: 'What it does, 10 words max',
//   outcomes: ['Verb-first outcome 1', 'Verb-first outcome 2', 'Verb-first outcome 3'],
//   status: 'live',
//   ctaLabel: 'Start free trial',
//   ctaUrl: 'https://product-site.com',
//   image: '/images/products/example-product.png', // 16:10, in public/
//   order: 1,
//   published: true,
// }

export interface Product {
  id: string;
  industry: IndustryKey;
  name: string;
  /** 10 words max */
  tagline: string;
  /** Exactly 3, each starting with a verb */
  outcomes: [string, string, string];
  status: 'live' | 'early-access';
  ctaLabel: string;
  ctaUrl: string;
  /** 16:10 screenshot or image */
  image: string;
  order: number;
  /** false hides the product without deleting it */
  published: boolean;
}

export const products: Product[] = [];

const statusRank = { live: 0, 'early-access': 1 } as const;

/** Published products for one industry: Live first, then Early access, then by order. */
export const productsFor = (industry: IndustryKey, all: Product[] = products) =>
  all
    .filter((p) => p.industry === industry && p.published)
    .sort((a, b) => statusRank[a.status] - statusRank[b.status] || a.order - b.order);
