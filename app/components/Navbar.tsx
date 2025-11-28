'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled past hero (approximately screen height)
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-50 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo-black.png" alt="EGH Logo" width={120} height={40} className="h-8 sm:h-10 w-auto" priority />
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:030628310"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">030 628 310</span>
            </a>
            <a
              href="mailto:egh@gmail.com"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 border-2 border-slate-700 text-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
