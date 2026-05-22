'use client';

import { useState } from 'react';
import Link from 'next/link';
import FigmaAsset from './FigmaAsset';
import { Menu, X } from 'lucide-react';
import { containerClass, figmaAssets } from '../lib/figma-assets';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Storitve', href: '#services' },
  { label: 'O nas', href: '#about' },
  { label: 'Projekti', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-section border-b border-border-subtle">
      <div className={`${containerClass} flex h-[72px] md:h-[87px] items-center justify-between gap-4`}>
        <Link href="#" className="shrink-0">
          <FigmaAsset
            src={figmaAssets.logo}
            alt="Elektro Gal Harbaš"
            width={90}
            height={40}
            className="logo-theme h-8 w-auto md:h-10"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium uppercase tracking-wide text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3 md:gap-4 shrink-0">
          <ThemeToggle className="hidden lg:inline-flex" />
          <a
            href="mailto:info@egh.si"
            className="bg-accent text-text-dark-btn font-bold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 rounded-[5px] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            info@egh.si
          </a>
          <a
            href="tel:030628310"
            className="bg-accent text-text-dark-btn font-bold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 rounded-[5px] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            030 628 310
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden shrink-0">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Zapri meni' : 'Odpri meni'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-bg-section px-4 pb-6">
          <nav className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium uppercase tracking-wide text-text-muted"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between py-2 lg:hidden">
            <span className="text-sm font-medium text-text-muted">Tema</span>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-3 sm:hidden">
            <a
              href="mailto:info@egh.si"
              className="bg-accent text-text-dark-btn font-bold text-center text-sm px-4 py-3 rounded-[5px]"
            >
              info@egh.si
            </a>
            <a
              href="tel:030628310"
              className="bg-accent text-text-dark-btn font-bold text-center text-sm px-4 py-3 rounded-[5px]"
            >
              030 628 310
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
