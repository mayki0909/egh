'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';
import { testimonials } from '../lib/testimonials';

const SLIDE_COUNT = testimonials.length;
const LG_MEDIA = '(min-width: 1024px)';

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

function TestimonialCard({
  quote,
  name,
  role,
  stars,
  compact,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`bg-bg-card rounded-lg flex flex-col justify-between ${
        compact
          ? 'p-8 gap-12 min-h-[400px]'
          : 'p-10 gap-20 min-h-[485px]'
      }`}
    >
      <p
        className={`text-text-primary font-medium leading-8 ${
          compact ? 'text-lg' : 'text-xl'
        }`}
      >
        {quote}
      </p>
      <div className="flex flex-col gap-2">
        <p className={compact ? 'text-base' : 'text-lg'}>
          <span className="font-bold text-accent">{name}</span>
          <span className="text-text-muted-2 font-medium"> • {role}</span>
        </p>
        <StarRating count={stars} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const maxIndex = Math.max(0, SLIDE_COUNT - visibleCount);
  const clampedIndex = Math.min(activeIndex, maxIndex);

  const applyTranslate = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const slide = viewport.querySelectorAll('[data-slide]')[clampedIndex] as
      | HTMLElement
      | undefined;
    track.style.transform = `translateX(-${slide?.offsetLeft ?? 0}px)`;
  }, [clampedIndex]);

  useEffect(() => {
    const mq = window.matchMedia(LG_MEDIA);
    const apply = () => {
      const nextVisible = mq.matches ? 3 : 1;
      setVisibleCount(nextVisible);
      setActiveIndex((i) =>
        Math.min(i, Math.max(0, SLIDE_COUNT - nextVisible)),
      );
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useLayoutEffect(() => {
    applyTranslate();
  }, [applyTranslate, visibleCount]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const ro = new ResizeObserver(() => applyTranslate());
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [applyTranslate]);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? maxIndex : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === maxIndex ? 0 : i + 1));

  return (
    <section id="testimonials" className="bg-bg-page py-16 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">Stranke</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-text-primary leading-tight">
            Kaj menijo naše stranke
          </h2>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div ref={viewportRef} className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-300 ease-out"
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  data-slide
                  className="shrink-0 w-full lg:w-[calc((100%-3rem)/3)]"
                >
                  <TestimonialCard
                    quote={t.quote}
                    name={t.name}
                    role={t.role}
                    stars={t.stars}
                    compact={visibleCount === 1}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="w-[60px] h-[60px] relative hover:opacity-80 transition-opacity"
              aria-label="Prejšnja mnenja"
            >
              <FigmaAsset
                src={figmaAssets.carouselPrev}
                alt=""
                width={60}
                height={60}
                className="pointer-events-none"
              />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-[60px] h-[60px] relative hover:opacity-80 transition-opacity"
              aria-label="Naslednja mnenja"
            >
              <FigmaAsset
                src={figmaAssets.carouselNext}
                alt=""
                width={60}
                height={60}
                className="pointer-events-none"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
