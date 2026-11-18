import HelpCard, { type HelpCardProps } from '../components/HelpCard';
import './HowWeHelp.css';

// Same three labels on every page, so visitors learn them once.
const cards: HelpCardProps[] = [
  {
    icon: 'book',
    title: "Learn what's possible",
    body: 'Practical guides on what AI can do in your industry, written for the people who do the work.',
    linkLabel: 'Browse guides →',
    href: '/guides',
    event: { 'data-event': 'click_guide', 'data-slug': 'all' },
  },
  {
    icon: 'app',
    title: 'Use our software',
    body: "Ready-made software we've built for your industry. Find yours on your industry page.",
    linkLabel: 'Pick your industry →',
    href: '/#industries',
  },
  {
    icon: 'wrench',
    title: 'Get it built',
    body: "Work that no ready-made tool fits? Tell us the task and we'll build the tool. First version live in 2 weeks. If it doesn't do what we agreed, we fix it free.",
    linkLabel: 'See custom builds →',
    href: '/custom-builds',
    event: { 'data-event': 'click_custom_builds', 'data-location': 'how_we_help' },
  },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="sec how">
      <div className="wrap">
        <h2 className="h2 how__title">Three ways we help, on every industry page</h2>
        <div className="how__body">
          <div className="connector how__line" aria-hidden="true" />
          <div className="how__grid">
            {cards.map((c) => (
              <HelpCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
