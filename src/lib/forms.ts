// Form submissions. No endpoint is connected yet: submitForm validates on the
// page, logs the payload and resolves, so the success message shows.
// Connect the SDFM pipeline/CRM (plus the email alert to flex@sdfmgroup.com)
// here; every form on the site goes through this one function.

export type FormName = 'custom-build' | 'guide-signup';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export async function submitForm(form: FormName, data: Record<string, string>): Promise<void> {
  if (!ENDPOINT) {
    console.warn(`[forms] No endpoint set; "${form}" submission not sent.`, data);
    await new Promise((r) => setTimeout(r, 400));
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form, ...data }),
  });
  if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'] as const;

/** UTM values from the current URL, for hidden fields */
export function readUtm(search: string = window.location.search) {
  const params = new URLSearchParams(search);
  return Object.fromEntries(UTM_KEYS.map((k) => [k, params.get(k) ?? '']));
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
