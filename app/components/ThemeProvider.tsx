'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  applyTheme,
  getStoredTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from '../lib/theme';

type SetThemeOptions = {
  persist?: boolean;
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme, options?: SetThemeOptions) => void;
  setThemeFromScroll: (theme: Theme) => void;
  unlockScrollTheme: () => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const scrollThemeLockedRef = useRef(false);

  const apply = useCallback((next: Theme, persist: boolean) => {
    setThemeState(next);
    applyTheme(next);
    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    const stored = getStoredTheme();
    const initial = stored ?? 'light';
    apply(initial, false);
  }, [apply]);

  const setTheme = useCallback(
    (next: Theme, options?: SetThemeOptions) => {
      scrollThemeLockedRef.current = true;
      apply(next, options?.persist !== false);
    },
    [apply],
  );

  const setThemeFromScroll = useCallback(
    (next: Theme) => {
      if (scrollThemeLockedRef.current) return;
      apply(next, false);
    },
    [apply],
  );

  const unlockScrollTheme = useCallback(() => {
    scrollThemeLockedRef.current = false;
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === 'light' ? 'dark' : 'light';
      scrollThemeLockedRef.current = true;
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      setThemeFromScroll,
      unlockScrollTheme,
      toggleTheme,
    }),
    [theme, setTheme, setThemeFromScroll, unlockScrollTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
