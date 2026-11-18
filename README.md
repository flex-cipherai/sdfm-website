# SDFM Group website

React (Vite + React Router + TypeScript), hosted on Netlify.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`.

## Structure

```
src/
  components/   SiteHeader, SiteFooter, IndustryTile, HelpCard, AiCheckBand, GuideCard, CookieConsent, Layout
  sections/     Homepage sections: Hero, HowWeHelp, LatestGuides, AnyBusiness
  pages/        HomePage, PlaceholderPage (pages not built yet), NotFoundPage
  data/         industries.ts (tiles, menus, footer), guides.ts (Latest guides)
  config/       site.ts (contact details, social links)
  lib/          tracking.ts (click events, GTM, consent mode), consent.ts
  styles/       global.css (design tokens and base styles)
```

`IndustryTile` and `AiCheckBand` are built to be reused on the industry pages.

## Tracking

Every tracked link carries `data-event` plus one property (`data-industry`,
`data-location` or `data-slug`). One click listener in `src/lib/tracking.ts`
pushes them to `window.dataLayer`:

| Event                 | Property                                          |
| --------------------- | ------------------------------------------------- |
| `click_industry_tile` | `industry`: law, podcast, marketing, hr           |
| `click_ai_check`      | `location`: header, hero, band, any_business      |
| `click_custom_builds` | `location`: how_we_help, any_business             |
| `click_guide`         | `slug`: the guide's slug, or `all`                |

A `page_view` event is also pushed on every route change.

Set `VITE_GTM_ID` (see `.env.example`) in Netlify's environment variables to
load Google Tag Manager. Consent Mode v2 defaults to denied until the visitor
allows analytics in the cookie banner; "Cookie preferences" in the footer
reopens it.

## Content to fill in

- `src/config/site.ts`: WhatsApp and phone numbers, Instagram URL (hidden in
  the footer until set).
- `src/data/guides.ts`: add guides here. The Latest guides section appears once
  there are at least 3.
- Placeholder routes in `src/App.tsx`: replace each with its real page.

## Redirects

`netlify.toml` holds the 301s from the old site (`/industry-solutions` →
`/#industries`, `/case-summaries` → `/`) and the single-page-app fallback.
