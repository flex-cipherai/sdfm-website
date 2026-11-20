import { Link } from 'react-router-dom';
import { ArrowRight, ClockIcon } from './Icons';
import './GuideCard.css';

export interface GuideCardProps {
  industry: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
  slug: string;
  /** Industry key added to the click_guide event on industry pages */
  trackIndustry?: string;
}

export default function GuideCard({ industry, title, excerpt, readTime, href, slug, trackIndustry }: GuideCardProps) {
  return (
    <Link to={href} className="gcard" data-event="click_guide" data-slug={slug} data-industry={trackIndustry}>
      <span className="gcard__tag">{industry}</span>
      <h3 className="gcard__title">{title}</h3>
      <p className="gcard__excerpt">{excerpt}</p>
      <div className="gcard__meta">
        <span className="gcard__read">
          <ClockIcon />
          {readTime}
        </span>
        <ArrowRight size={20} className="gcard__arrow" />
      </div>
    </Link>
  );
}
