import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './PlaceholderPage.css';

export default function NotFoundPage() {
  usePageMeta('Page not found', { noindex: true });

  return (
    <section className="sec placeholder">
      <div className="wrap">
        <p className="placeholder__label">404</p>
        <h1 className="placeholder__title">We couldn't find that page.</h1>
        <p className="placeholder__text">It may have moved. Start from the homepage and pick your industry.</p>
        <p className="placeholder__links">
          <Link to="/#industries" className="btn-primary">
            Pick your industry
          </Link>
        </p>
      </div>
    </section>
  );
}
