export const SERVICES_SECTION_ID = 'services';

/** Sticky header height — section top at or above this line triggers dark theme */
export const SCROLL_THEME_TRIGGER_PX = 88;

export type ScrollThemeZone = 'above' | 'atOrBelow';

export function getScrollThemeZone(sectionTop: number): ScrollThemeZone {
  return sectionTop <= SCROLL_THEME_TRIGGER_PX ? 'atOrBelow' : 'above';
}

export function themeForScrollZone(zone: ScrollThemeZone): 'light' | 'dark' {
  return zone === 'atOrBelow' ? 'dark' : 'light';
}
