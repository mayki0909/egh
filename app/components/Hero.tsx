'use client';

import { Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
          alt="Professional Electrician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-700/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image src="/logo-white.png" alt="EGH Logo" width={200} height={80} className="h-16 sm:h-20 md:h-24 w-auto" priority />
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-white px-2">
          Professional Electrical Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-slate-100 max-w-3xl mx-auto px-2">
          Licensed & Insured Electricians Providing Quality Service for Residential & Commercial Properties
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="tel:030628310"
            className="bg-slate-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">030 628 310</span>
          </a>
          <a
            href="mailto:egh@gmail.com"
            className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">egh@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
