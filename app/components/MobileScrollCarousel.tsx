'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type MobileScrollCarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  /** Tailwind width class per slide, e.g. w-[calc(100vw-4rem)] */
  slideClassName: string;
  gapClassName?: string;
  hintText?: string;
  /** Vertical position of prev/next buttons. Default centers on slide. */
  chevronClassName?: string;
};

export default function MobileScrollCarousel({
  ariaLabel,
  children,
  slideClassName,
  gapClassName = 'gap-4',
  hintText = 'Podrsajte za več',
  chevronClassName = 'top-1/2 -translate-y-1/2',
}: MobileScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = Children.toArray(children);
  const slideCount = slides.length;

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || slideCount === 0) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    let closest = 0;
    let closestDistance = Infinity;

    Array.from(el.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, [slideCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateActiveIndex();
    el.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      el.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    const slide = el?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  const goPrev = () => scrollToIndex(activeIndex === 0 ? slideCount - 1 : activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex === slideCount - 1 ? 0 : activeIndex + 1);

  if (slideCount === 0) return null;

  const canNavigate = slideCount > 1;

  return (
    <div className="flex md:hidden flex-col gap-3 -mx-4">
      <div className="relative">
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto snap-x snap-mandatory px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${gapClassName}`}
          aria-label={ariaLabel}
        >
          {slides.map((slide, index) => (
            <div key={index} className={`shrink-0 snap-start ${slideClassName}`}>
              {slide}
            </div>
          ))}
        </div>

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className={`absolute left-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-bg-page/90 border border-border-subtle text-accent shadow-md hover:bg-bg-page ${chevronClassName}`}
              aria-label="Prejšnji"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className={`absolute right-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-bg-page/90 border border-border-subtle text-accent shadow-md hover:bg-bg-page ${chevronClassName}`}
              aria-label="Naslednji"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </>
        )}
      </div>

      {canNavigate && (
        <div className="flex flex-col items-center gap-3 px-6">
          <p className="text-sm text-text-muted text-center">{hintText}</p>

          <div className="flex items-center gap-3 w-full max-w-xs justify-center">
            <span className="text-xs font-medium text-accent tabular-nums shrink-0">
              {activeIndex + 1} / {slideCount}
            </span>

            <div
              className="flex justify-center items-center gap-1.5 flex-1 flex-wrap"
              role="tablist"
              aria-label={`${ariaLabel} – indikator`}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`${index + 1} od ${slideCount}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === activeIndex
                      ? 'w-5 bg-accent'
                      : 'w-2 bg-text-primary/25 hover:bg-text-primary/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
