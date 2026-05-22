export const THEME_STORAGE_KEY = 'egh-theme';

export type Theme = 'light' | 'dark';

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (value === 'light' || value === 'dark') return value;
  } catch {
    /* private browsing */
  }
  return null;
}

export function resolveTheme(): Theme {
  return getStoredTheme() ?? 'light';
}
