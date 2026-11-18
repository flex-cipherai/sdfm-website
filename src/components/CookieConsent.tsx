import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { OPEN_COOKIE_PREFS, readConsent, saveConsent } from '../lib/consent';
import { type ConsentChoice, updateConsent } from '../lib/tracking';
import './CookieConsent.css';

/**
 * Cookie banner. Shown until the visitor chooses; reopened from the footer's
 * "Cookie preferences" button. Analytics stay off unless accepted.
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(() => readConsent() === null);
  const [current, setCurrent] = useState<ConsentChoice | null>(() => readConsent());
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reopen = () => {
      setOpen(true);
      requestAnimationFrame(() => panelRef.current?.focus());
    };
    window.addEventListener(OPEN_COOKIE_PREFS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    updateConsent(choice);
    setCurrent(choice);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div ref={panelRef} className="cookie" role="region" aria-label="Cookie preferences" tabIndex={-1}>
      <p className="cookie__text">
        We use cookies to see which pages help visitors most. Analytics stay off unless you allow them.{' '}
        <Link to="/privacy-policy" className="ulink">
          Privacy policy
        </Link>
        {current && <span className="cookie__current"> Current choice: {current === 'granted' ? 'allowed' : 'declined'}.</span>}
      </p>
      <div className="cookie__actions">
        <button type="button" className="cookie__btn cookie__btn--ghost" onClick={() => choose('denied')}>
          Decline
        </button>
        <button type="button" className="cookie__btn cookie__btn--primary" onClick={() => choose('granted')}>
          Allow analytics
        </button>
      </div>
    </div>
  );
}
