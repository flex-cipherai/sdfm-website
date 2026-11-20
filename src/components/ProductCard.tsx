import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { ArrowRight, CheckIcon } from './Icons';
import './ProductCard.css';

export default function ProductCard({ product }: { product: Product }) {
  const { id, industry, name, tagline, outcomes, status, ctaLabel, ctaUrl, image } = product;
  const external = /^https?:\/\//.test(ctaUrl);

  return (
    <article className="pcard">
      <img className="pcard__img" src={image} alt="" width={1600} height={1000} loading="lazy" />
      <div className="pcard__body">
        <span className={`pcard__badge pcard__badge--${status}`}>{status === 'live' ? 'Live' : 'Early access'}</span>
        <h3 className="pcard__name">{name}</h3>
        <p className="pcard__tagline">{tagline}</p>
        <ul className="pcard__outcomes">
          {outcomes.map((o) => (
            <li key={o}>
              <CheckIcon size={16} />
              {o}
            </li>
          ))}
        </ul>
        <a
          href={ctaUrl}
          className="btn-primary pcard__cta"
          data-event="click_product_cta"
          data-industry={industry}
          data-product={id}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

/** Shown in the grid's place while an industry has no products yet. */
export function ProductEmptyCard({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="pcard pcard--empty">
      <div className="pcard__body">
        <h3 className="pcard__name">{heading}</h3>
        <p className="pcard__tagline">{body}</p>
        <Link to="#get-it-built" className="btn-primary pcard__cta" data-event="click_request_build" data-location="software">
          Request a custom build
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
