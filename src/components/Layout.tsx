import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import CookieConsent from './CookieConsent';
import { pushEvent } from '../lib/tracking';

/** Scroll to #hash targets (e.g. /#industries), otherwise to the top on page change. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Virtual page views for GTM (single-page app)
  useEffect(() => {
    pushEvent({ event: 'page_view', page_path: pathname + hash, page_title: document.title });
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollOnNavigate();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CookieConsent />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
