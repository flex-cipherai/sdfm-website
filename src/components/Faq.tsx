import type { FaqItem } from '../data/industryPages';
import { PlusIcon } from './Icons';
import './Faq.css';

/** Accordion, all items closed by default. */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq__item">
          <summary className="faq__q">
            <h3 className="faq__q-text">{item.q}</h3>
            <PlusIcon className="faq__icon" />
          </summary>
          <p className="faq__a">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data built from the same items */
export const faqJsonLd = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});
