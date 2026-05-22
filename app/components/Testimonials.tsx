'use client';

import { useState } from 'react';
import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

const testimonials = [
  {
    quote:
      '"Tomorro has dramatically improved our ability to manage contracts accurately and quickly. Its intuitive interface and robust feature set perfectly match the requirements of our industry."',
    name: 'Alexia Delahousse',
    role: 'Vp Legal, Qonto',
    stars: 4,
  },
  {
    quote:
      '"Tomorro has dramatically improved our ability to manage contracts accurately and quickly. Its intuitive interface and robust feature set perfectly match the requirements of our industry."',
    name: 'Alexia Delahousse',
    role: 'Vp Legal, Qonto',
    stars: 5,
  },
  {
    quote:
      '"Tomorro has dramatically improved our ability to manage contracts accurately and quickly. Its intuitive interface and robust feature set perfectly match the requirements of our industry."',
    name: 'Alexia Delahousse',
    role: 'Vp Legal, Qonto',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <FigmaAsset
          key={i}
          src={figmaAssets.iconLightningStar}
          alt=""
          width={24}
          height={24}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-bg-page py-16 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">Stranke</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            Kaj menijo naše stranke
          </h2>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-bg-card rounded-lg p-10 flex flex-col justify-between gap-20 min-h-[485px]"
            >
              <p className="text-white text-xl leading-8 font-medium">{t.quote}</p>
              <div className="flex flex-col gap-2">
                <FigmaAsset
                  src={figmaAssets.testimonialAvatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <p className="text-lg">
                  <span className="font-bold text-accent">{t.name}</span>
                  <span className="text-[#f4f4f4] font-medium"> • {t.role}</span>
                </p>
                <StarRating count={t.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="lg:hidden flex flex-col gap-10 items-center">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <div className="bg-bg-card rounded-lg p-8 flex flex-col gap-12 min-h-[400px]">
                    <p className="text-white text-lg leading-8 font-medium">{t.quote}</p>
                    <div className="flex flex-col gap-2">
                      <FigmaAsset
                        src={figmaAssets.testimonialAvatar}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                      <p className="text-base">
                        <span className="font-bold text-accent">{t.name}</span>
                        <span className="text-[#f4f4f4] font-medium"> • {t.role}</span>
                      </p>
                      <StarRating count={t.stars} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={goPrev}
              className="hover:opacity-80 transition-opacity"
              aria-label="Prejšnja mnenja"
            >
              <FigmaAsset src={figmaAssets.carouselPrev} alt="" width={60} height={60} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="hover:opacity-80 transition-opacity"
              aria-label="Naslednja mnenja"
            >
              <FigmaAsset src={figmaAssets.carouselNext} alt="" width={60} height={60} />
            </button>
          </div>
        </div>

        {/* Desktop carousel controls (decorative, same as Figma) */}
        <div className="hidden lg:flex justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="w-[60px] h-[60px] relative hover:opacity-80 transition-opacity"
            aria-label="Prejšnja mnenja"
          >
            <FigmaAsset src={figmaAssets.carouselPrev} alt="" width={60} height={60} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="w-[60px] h-[60px] relative hover:opacity-80 transition-opacity"
            aria-label="Naslednja mnenja"
          >
            <FigmaAsset src={figmaAssets.carouselNext} alt="" width={60} height={60} />
          </button>
        </div>
      </div>
    </section>
  );
}
