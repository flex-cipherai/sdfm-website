import { useEffect } from 'react';
import { site } from '../config/site';

const DEFAULTS = {
  title: 'AI for Law Firms, Podcasters, Agencies & HR Teams | SDFM Group',
  description:
    'Guides on AI in your industry, software built for law firms, podcasters, marketing agencies and HR teams, and custom builds live in 2 weeks.',
  ogImage: '/og-image.jpg',
};

interface PageMeta {
  /** Short title; " | SDFM Group" is appended. Ignored when fullTitle is set. */
  title?: string;
  fullTitle?: string;
  description?: string;
  /** Path for the canonical and og:url, e.g. '/law-firms' */
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  /** JSON-LD objects to add as structured data */
  jsonLd?: object[];
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Sets title, description, canonical, og tags and structured data for a page. */
export function usePageMeta({ title, fullTitle, description, path = '/', ogImage, noindex = false, jsonLd }: PageMeta = {}) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const t = fullTitle ?? (title ? `${title} | SDFM Group` : DEFAULTS.title);
    const d = description ?? DEFAULTS.description;
    const url = `${site.url}${path === '/' ? '/' : path}`;

    document.title = t;
    setMeta('name', 'description', d);
    setMeta('property', 'og:title', t);
    setMeta('property', 'og:description', d);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', `${site.url}${ogImage ?? DEFAULTS.ogImage}`);
    setCanonical(url);

    const added: HTMLElement[] = [];
    if (noindex) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      added.push(robots);
    }
    if (ld) {
      for (const obj of JSON.parse(ld) as object[]) {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.textContent = JSON.stringify(obj);
        added.push(s);
      }
    }
    added.forEach((el) => document.head.appendChild(el));
    return () => added.forEach((el) => el.remove());
  }, [title, fullTitle, description, path, ogImage, noindex, ld]);
}
