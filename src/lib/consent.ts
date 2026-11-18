import type { ConsentChoice } from './tracking';

const KEY = 'sdfm-consent';
export const OPEN_COOKIE_PREFS = 'sdfm:open-cookie-preferences';

export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    // Storage blocked: the choice applies to this visit only.
  }
}

/** Used by the footer's "Cookie preferences" button */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFS));
}
