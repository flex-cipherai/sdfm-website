import { Link, useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './PlaceholderPage.css';

/** Temporary page for routes the homepage links to but that aren't built yet. */
export default function PlaceholderPage({ title }: { title: string }) {
  usePageMeta({ title, path: useLocation().pathname, noindex: true });

  return (
    <section className="sec placeholder">
      <div className="wrap">
        <p className="placeholder__label">Coming soon</p>
        <h1 className="placeholder__title">{title}</h1>
        <p className="placeholder__text">We're building this page now. Check back soon.</p>
        <p className="placeholder__links">
          <Link to="/" className="ulink">
            Back to the homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
