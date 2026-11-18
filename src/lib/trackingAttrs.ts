// The data attributes a tracked link carries (see lib/tracking.ts).
export type TrackingAttrs = {
  'data-event': 'click_industry_tile' | 'click_ai_check' | 'click_custom_builds' | 'click_guide';
  'data-industry'?: string;
  'data-location'?: string;
  'data-slug'?: string;
};
