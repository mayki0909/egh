'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-[5px] border border-border-subtle text-text-primary hover:text-accent hover:border-accent/50 transition-colors ${className}`}
      aria-label={isDark ? 'Preklopi na svetlo temo' : 'Preklopi na temno temo'}
      title={isDark ? 'Svetla tema' : 'Temna tema'}
    >
      {isDark ? <Sun className="h-5 w-5" strokeWidth={2} /> : <Moon className="h-5 w-5" strokeWidth={2} />}
    </button>
  );
}
