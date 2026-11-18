import { Link } from 'react-router-dom';
import { AppIcon, BookIcon, WrenchIcon } from './Icons';
import type { TrackingAttrs } from '../lib/trackingAttrs';
import './HelpCard.css';

const icons = { book: BookIcon, app: AppIcon, wrench: WrenchIcon };

export interface HelpCardProps {
  icon: keyof typeof icons;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  /** data-event plus its property, when the link is tracked */
  event?: TrackingAttrs;
}

export default function HelpCard({ icon, title, body, linkLabel, href, event }: HelpCardProps) {
  const Icon = icons[icon];
  return (
    <div className="help-card">
      <div className="help-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="help-card__title">{title}</h3>
      <p className="help-card__body">{body}</p>
      <Link to={href} className="clink" {...event}>
        {linkLabel}
      </Link>
    </div>
  );
}
