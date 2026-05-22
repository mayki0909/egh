'use client';

import { useEffect } from 'react';
import {
  getScrollThemeZone,
  SERVICES_SECTION_ID,
  themeForScrollZone,
  type ScrollThemeZone,
} from '../lib/scroll-theme';
import { useTheme } from './ThemeProvider';

export default function ScrollThemeSync() {
  const { setThemeFromScroll, unlockScrollTheme } = useTheme();

  useEffect(() => {
    const section = document.getElementById(SERVICES_SECTION_ID);
    if (!section) return;

    let raf = 0;
    let lastZone: ScrollThemeZone | null = null;

    const sync = () => {
      const zone = getScrollThemeZone(section.getBoundingClientRect().top);

      if (lastZone !== null && zone !== lastZone) {
        unlockScrollTheme();
      }
      lastZone = zone;

      setThemeFromScroll(themeForScrollZone(zone));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [setThemeFromScroll, unlockScrollTheme]);

  return null;
}
