import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';
import { containerClass } from '../lib/figma-assets';
import { faqs } from '../lib/faqs';

const BR_TAG = /<br\s*\/?>/gi;

function FaqAnswer({ text }: { text: string }) {
  const parts = text.split(BR_TAG).map((part) => part.trim());

  return (
    <p className="text-text-muted-2 text-base leading-7 pt-4">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          {part}
        </Fragment>
      ))}
    </p>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-bg-page py-16 md:py-20 lg:py-24 scroll-mt-28"
    >
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">
            Pogosta vprašanja
          </p>
          <h2
            id="faq-heading"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-text-primary leading-tight"
          >
            Odgovori na najpogostejša vprašanja o{' '}
            <span className="text-accent">elektro storitvah</span>
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[900px] flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-bg-card border border-accent rounded-lg overflow-hidden open:bg-bg-section transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-label text-base sm:text-lg text-text-primary text-left leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-border-subtle px-6 pb-5 sm:px-8 sm:pb-6">
                <FaqAnswer text={faq.answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
