import { Link } from 'react-router-dom';
import IndustryTile from '../components/IndustryTile';
import { industries } from '../data/industries';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <svg className="connector hero__motif" aria-hidden="true" width="520" height="360" viewBox="0 0 520 360" fill="none">
        <path d="M60 60 H300 V180 H460" stroke="#E6E0D6" strokeWidth="2" />
        <path d="M300 180 V300 H400" stroke="#E6E0D6" strokeWidth="2" />
        <path d="M180 60 V140 H240" stroke="#E6E0D6" strokeWidth="2" />
        <circle cx="60" cy="60" r="9" stroke="#E6E0D6" strokeWidth="2" fill="#FAF8F4" />
        <circle cx="240" cy="140" r="7" stroke="#E6E0D6" strokeWidth="2" fill="#FAF8F4" />
        <circle cx="400" cy="300" r="7" stroke="#E6E0D6" strokeWidth="2" fill="#FAF8F4" />
        <circle cx="460" cy="180" r="11" stroke="#ED1E09" strokeWidth="2.5" fill="#FAF8F4" />
      </svg>

      <div className="wrap hero__inner">
        <h1 className="hero__title">
          AI that takes the <span className="hero__accent">busywork</span> off law firms, podcasters, marketing agencies
          and HR teams.
        </h1>
        <p className="hero__lead">
          Read our guides on what AI can do in your industry, use software we've built for it, or have us build exactly
          what your team needs.
        </p>

        <div className="hero__pick">
          <h2 className="hero__pick-title">
            <span className="node-marker" aria-hidden="true" />
            Pick your industry
          </h2>

          <div id="industries" className="hero__tiles">
            {industries.map((it) => (
              <IndustryTile key={it.key} {...it.tile} href={it.href} industry={it.key} />
            ))}
          </div>

          <p className="hero__fallback">
            Not sure where to start?{' '}
            <Link to="/ai-gap-check" className="ulink" data-event="click_ai_check" data-location="hero">
              Get a free AI check →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
