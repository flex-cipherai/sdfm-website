import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard';
import { type Guide, guideHref, latestGuides, readTime, toExcerpt } from '../data/guides';
import './LatestGuides.css';

/** The 3 most recent guides. Hidden entirely until at least 3 are published. */
export default function LatestGuides({ guides }: { guides: Guide[] }) {
  if (guides.length < 3) return null;

  return (
    <section id="guides" className="sec">
      <div className="wrap">
        <h2 className="h2">Latest guides</h2>
        <p className="guides__intro">What AI can do in your industry, explained plainly.</p>
        <div className="guides__grid">
          {latestGuides(guides).map((g) => (
            <GuideCard
              key={`${g.industrySlug}/${g.slug}`}
              industry={g.industry}
              title={g.title}
              excerpt={toExcerpt(g.summary)}
              readTime={readTime(g.wordCount)}
              href={guideHref(g)}
              slug={g.slug}
            />
          ))}
        </div>
        <p className="guides__all">
          <Link to="/guides" className="ulink" data-event="click_guide" data-slug="all">
            All guides →
          </Link>
        </p>
      </div>
    </section>
  );
}
