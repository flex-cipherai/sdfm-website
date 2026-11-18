// Published guides. Empty until the first guides are written; the Latest
// guides section stays hidden until there are at least 3.
//
// Example entry:
// {
//   industry: 'Law firms',
//   industrySlug: 'law-firms',
//   slug: 'ai-contract-review',
//   title: 'How law firms are using AI to review contracts',
//   summary: 'Contract review is where most firms start with AI. ...',
//   wordCount: 1150,
//   publishedAt: '2026-11-20',
// }

export interface Guide {
  /** Industry category shown as the tag, e.g. 'Law firms' */
  industry: string;
  /** URL segment for the industry, e.g. 'law-firms' */
  industrySlug: string;
  slug: string;
  title: string;
  /** Summary field, or the guide's first 20 words */
  summary: string;
  wordCount: number;
  /** ISO date, used to pick the most recent */
  publishedAt: string;
}

export const guides: Guide[] = [];

export const guideHref = (g: Guide) => `/guides/${g.industrySlug}/${g.slug}`;

export const readTime = (wordCount: number) => `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

/** First 20 words, with an ellipsis if the text was longer */
export const toExcerpt = (text: string, words = 20) => {
  const parts = text.trim().split(/\s+/);
  return parts.length <= words ? text.trim() : `${parts.slice(0, words).join(' ')}…`;
};

export const latestGuides = (all: Guide[], count = 3) =>
  [...all].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, count);
