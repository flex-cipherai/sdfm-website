import { Link } from 'react-router-dom';
import './AnyBusiness.css';

export default function AnyBusiness() {
  return (
    <section id="any-business" className="any-business">
      <div className="wrap">
        <p className="any-business__text">
          Not a law firm, podcaster, agency or HR team? The free AI check and custom builds work for any business.{' '}
          <Link to="/ai-gap-check" className="ulink nowrap" data-event="click_ai_check" data-location="any_business">
            Get a free AI check →
          </Link>{' '}
          <span className="any-business__sep" aria-hidden="true">
            ·
          </span>{' '}
          <Link to="/custom-builds" className="ulink nowrap" data-event="click_custom_builds" data-location="any_business">
            See custom builds →
          </Link>
        </p>
      </div>
    </section>
  );
}
