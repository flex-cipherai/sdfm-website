import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import report from '../assets/images/ai-check-report.webp';
import report640 from '../assets/images/ai-check-report-640.webp';
import './AiCheckBand.css';

/** Free AI check band. Reused on every industry page. */
export default function AiCheckBand() {
  return (
    <section id="ai-check" className="sec ai-band" aria-labelledby="ai-check-title">
      <svg className="connector ai-band__rings" aria-hidden="true" width="420" height="420" viewBox="0 0 420 420" fill="none">
        <circle cx="210" cy="210" r="200" stroke="#fff" strokeWidth="2" />
        <circle cx="210" cy="210" r="130" stroke="#fff" strokeWidth="2" />
        <circle cx="210" cy="210" r="60" stroke="#fff" strokeWidth="2" />
      </svg>
      <div className="wrap ai-band__grid">
        <div>
          <h2 id="ai-check-title" className="ai-band__title">
            Not sure where AI fits in your business?
          </h2>
          <p className="ai-band__body">
            Answer a few questions about how your team works. In about 10 minutes you'll get a report showing where AI
            would save you time and money, and what it would return. No call needed, and the report is yours to keep.
          </p>
          <div className="ai-band__actions">
            <Link to="/ai-gap-check" className="btn-white" data-event="click_ai_check" data-location="band">
              Get my free AI check
              <ArrowRight className="btn-white__arrow" />
            </Link>
            <Link to="/sample-report" className="ulink ai-band__secondary">
              See a sample report
            </Link>
          </div>
        </div>
        <img
          className="ai-band__img"
          src={report}
          srcSet={`${report640} 640w, ${report} 1200w`}
          sizes="(max-width: 899px) 100vw, 560px"
          width={1200}
          height={900}
          loading="lazy"
          alt=""
        />
      </div>
    </section>
  );
}
