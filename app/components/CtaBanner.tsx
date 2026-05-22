import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

export default function CtaBanner() {
  return (
    <section className="bg-bg-page pb-16 md:pb-20">
      <div className={containerClass}>
        <div className="relative bg-accent rounded-2xl overflow-hidden py-12 md:py-14 px-6 md:px-12 flex flex-col items-center gap-8 text-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <FigmaAsset
              src={figmaAssets.ctaLightningFrame}
              alt=""
              width={748}
              height={793}
              className="absolute -left-[280px] -top-[240px] opacity-30 rotate-[153deg] w-[min(60%,524px)] h-auto"
            />
            <FigmaAsset
              src={figmaAssets.ctaLightningGroup}
              alt=""
              width={458}
              height={531}
              className="absolute right-0 top-[-32%] opacity-40 w-[min(40%,280px)] h-auto"
            />
          </div>

          <h2 className="relative font-heading font-bold text-3xl md:text-4xl lg:text-[56px] lg:leading-[64px] text-text-dark max-w-[620px]">
            Potrebujete električarske storitve?
          </h2>
          <a
            href="mailto:info@egh.si"
            className="relative inline-flex items-center justify-center bg-bg-section text-white font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Začnimo z vašim projektom
          </a>
        </div>
      </div>
    </section>
  );
}
