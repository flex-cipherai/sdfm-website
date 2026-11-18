import { Link } from 'react-router-dom';
import type { IndustryKey } from '../data/industries';
import './IndustryTile.css';

export interface IndustryTileProps {
  title: string;
  line: string;
  linkLabel: string;
  href: string;
  image: { src: string; srcSmall: string };
  industry: IndustryKey;
  /** Heading level for the title; H3 on the homepage */
  headingLevel?: 'h2' | 'h3';
}

export default function IndustryTile({ title, line, linkLabel, href, image, industry, headingLevel = 'h3' }: IndustryTileProps) {
  const Heading = headingLevel;
  return (
    <Link to={href} className="tile" data-event="click_industry_tile" data-industry={industry}>
      <img
        className="tile__img"
        src={image.src}
        srcSet={`${image.srcSmall} 640w, ${image.src} 1200w`}
        sizes="(max-width: 767px) 116px, (max-width: 1023px) 50vw, 300px"
        width={1200}
        height={900}
        alt=""
      />
      <div className="tile__body">
        <Heading className="tile__title">{title}</Heading>
        <p className="tile__line">{line}</p>
        <span className="tile__link">{linkLabel}</span>
      </div>
    </Link>
  );
}
