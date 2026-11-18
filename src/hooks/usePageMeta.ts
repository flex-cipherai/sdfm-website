import { useEffect } from 'react';

const DEFAULT_TITLE = 'AI for Law Firms, Podcasters, Agencies & HR Teams | SDFM Group';

/** Sets the document title, and optionally hides the page from search engines. */
export function usePageMeta(title?: string, { noindex = false } = {}) {
  useEffect(() => {
    document.title = title ? `${title} | SDFM Group` : DEFAULT_TITLE;

    let robots: HTMLMetaElement | null = null;
    if (noindex) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
    }
    return () => {
      robots?.remove();
    };
  }, [title, noindex]);
}
