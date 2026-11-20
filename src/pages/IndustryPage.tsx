import { Link } from 'react-router-dom';
import type { IndustryPageConfig } from '../data/industryPages';
import { guides as allGuides, guideHref, latestGuides, readTime, toExcerpt } from '../data/guides';
import { productsFor } from '../data/products';
import { site } from '../config/site';
import { usePageMeta } from '../hooks/usePageMeta';
import GuideCard from '../components/GuideCard';
import GuideSignup from '../components/GuideSignup';
import ProductCard, { ProductEmptyCard } from '../components/ProductCard';
import CustomBuildForm from '../components/CustomBuildForm';
import AiCheckBand from '../components/AiCheckBand';
import Faq, { faqJsonLd } from '../components/Faq';
import { ArrowDown, ClockIcon, QuoteIcon, RepairIcon } from '../components/Icons';
import './IndustryPage.css';

const jumpLinks = [
  { label: "Learn what's possible", href: '#learn', target: 'learn' },
  { label: 'Use our software', href: '#software', target: 'software' },
  { label: 'Get it built', href: '#get-it-built', target: 'get_it_built' },
];

const promises = [
  { icon: ClockIcon, text: 'First version live in 2 weeks' },
  { icon: RepairIcon, text: "If it doesn't do what we agreed, we fix it free" },
  { icon: QuoteIcon, text: 'A clear quote before any work starts' },
];

/** Template for /law-firms, /podcasters, /marketing-agencies and /hr-teams. */
export default function IndustryPage({ config: c }: { config: IndustryPageConfig }) {
  const key = c.industryKey;
  const path = `/${c.slug}`;
  const guides = latestGuides(allGuides.filter((g) => g.industrySlug === c.slug), 6);
  const products = productsFor(key);

  usePageMeta({
    fullTitle: c.seoTitle,
    description: c.seoDescription,
    path,
    ogImage: c.ogImage,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: c.navLabel, item: `${site.url}${path}` },
        ],
      },
      ...(c.faq.length ? [faqJsonLd(c.faq)] : []),
    ],
  });

  return (
    <>
      {/* 2. Hero */}
      <section id="hero" className="ind-hero">
        <div className="wrap ind-hero__grid">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li aria-current="page">{c.navLabel}</li>
              </ol>
            </nav>
            <h1 className="ind-hero__title">{c.h1}</h1>
            <p className="ind-hero__lead">{c.subline1}</p>
            <p className="ind-hero__sub">{c.subline2}</p>

            <ul className="jumps">
              {jumpLinks.map((j) => (
                <li key={j.target}>
                  <Link to={j.href} className="jump" data-event="click_jump_link" data-target={j.target}>
                    <span className="dot" aria-hidden="true" />
                    {j.label}
                    <ArrowDown size={16} className="jump__arrow" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="ind-hero__fallback">
              <Link
                to={`/ai-gap-check?industry=${key}`}
                className="ulink"
                data-event="click_ai_check"
                data-location="hero"
                data-industry={key}
              >
                {c.aiCheckLink} →
              </Link>
            </p>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${c.heroImage.webpSmall} 800w, ${c.heroImage.webp} 1600w`}
              sizes="(max-width: 899px) 100vw, 560px"
            />
            <img
              className="ind-hero__img"
              src={c.heroImage.jpg}
              srcSet={`${c.heroImage.jpgSmall} 800w, ${c.heroImage.jpg} 1600w`}
              sizes="(max-width: 899px) 100vw, 560px"
              width={1600}
              height={1200}
              alt={c.heroImage.alt}
              // React 18 only passes the lowercase attribute through
              {...{ fetchpriority: 'high' }}
            />
          </picture>
        </div>
      </section>

      {/* 3. Learn what's possible */}
      <section id="learn" className="sec ind-learn">
        <div className="wrap">
          <h2 className="h2">Learn what's possible</h2>
          <p className="ind-intro">{c.learnIntro}</p>
          {guides.length > 0 && (
            <>
              <div className="ind-grid">
                {guides.map((g) => (
                  <GuideCard
                    key={g.slug}
                    industry={g.industry}
                    title={g.title}
                    excerpt={toExcerpt(g.summary)}
                    readTime={readTime(g.wordCount)}
                    href={guideHref(g)}
                    slug={g.slug}
                    trackIndustry={key}
                  />
                ))}
              </div>
              <p className="ind-after">
                <Link to={`/guides/${c.slug}`} className="ulink" data-event="click_guide" data-slug="all" data-industry={key}>
                  {c.guidesLinkLabel} →
                </Link>
              </p>
            </>
          )}
          <div className={guides.length > 0 ? 'ind-signup' : undefined}>
            <GuideSignup heading={c.signupHeading} industry={key} />
          </div>
        </div>
      </section>

      {/* 4. Use our software */}
      <section id="software" className="sec">
        <div className="wrap">
          <h2 className="h2">Use our software</h2>
          <p className="ind-intro">{c.softwareIntro}</p>
          <div className="ind-grid ind-grid--products">
            {products.length > 0 ? (
              products.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <ProductEmptyCard heading={c.emptyCardHeading} body={c.emptyCardBody} />
            )}
          </div>
          {products.length > 0 && (
            <p className="ind-after">
              Don't see what you need?{' '}
              <Link to="#get-it-built" className="ulink" data-event="click_request_build" data-location="software">
                Request a custom build →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* 5. Get it built */}
      <section id="get-it-built" className="sec ind-build">
        <div className="wrap ind-build__grid">
          <div>
            <h2 className="h2">Get it built</h2>
            <p className="ind-intro ind-build__intro">{c.buildIntro}</p>
            <ul className="promises">
              {promises.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="promises__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <CustomBuildForm
            industry={key}
            orgLabel={c.orgLabel}
            orgSizeLabel={c.orgSizeLabel}
            orgSizeOptions={c.orgSizeOptions}
            taskPlaceholder={c.taskPlaceholder}
            toolsLabel={c.toolsLabel}
            toolsPlaceholder={c.toolsPlaceholder}
          />
        </div>
      </section>

      {/* 6. Free AI check */}
      <AiCheckBand heading={c.aiCheckHeading} body={c.aiCheckBody} industry={key} />

      {/* 7. FAQ */}
      <section id="faq" className="sec">
        <div className="wrap ind-faq">
          <h2 className="h2 ind-faq__title">{c.faqHeading}</h2>
          <div>
            <Faq items={c.faq} />
            <p className="ind-after">
              Still have a question?{' '}
              <Link to="#get-it-built" className="ulink">
                Request a custom build →
              </Link>{' '}
              <span className="ind-sep">· or email</span>{' '}
              <a href={`mailto:${site.contact.email}`} className="ulink">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
