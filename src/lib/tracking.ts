// Click tracking. Every tracked link carries data-event plus one property
// (data-industry / data-location / data-slug). A single document listener
// turns those clicks into Google Tag Manager dataLayer events.

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const TRACKED_PROPS = ['industry', 'location', 'slug'] as const;

export function pushEvent(payload: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (import.meta.env.DEV) console.info('[track]', payload);
}

function handleClick(e: MouseEvent) {
  const target = e.target as Element | null;
  const el = target?.closest<HTMLElement>('[data-event]');
  if (!el) return;

  const payload: DataLayerEvent = { event: el.dataset.event };
  for (const prop of TRACKED_PROPS) {
    const value = el.dataset[prop];
    if (value) payload[prop] = value;
  }
  pushEvent(payload);
}

let listening = false;

export function initClickTracking() {
  if (listening) return;
  listening = true;
  // Capture phase so the event fires before any navigation handler runs.
  document.addEventListener('click', handleClick, { capture: true });
}

/** gtag-style helper; GTM reads these commands from the dataLayer */
function gtag(..._args: unknown[]) {
  // GTM expects the Arguments object here, not an array
  window.dataLayer.push(arguments);
}

export type ConsentChoice = 'granted' | 'denied';

/** Consent Mode v2: everything denied until the visitor accepts. */
export function setDefaultConsent(stored: ConsentChoice | null) {
  window.dataLayer = window.dataLayer || [];
  const value = stored ?? 'denied';
  gtag('consent', 'default', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    wait_for_update: 500,
  });
}

export function updateConsent(choice: ConsentChoice) {
  gtag('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  pushEvent({ event: 'consent_update', consent: choice });
}

export function loadGtm(id: string | undefined) {
  if (!id || document.getElementById('gtm-script')) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.id = 'gtm-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}
