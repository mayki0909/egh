import FigmaAsset from './FigmaAsset';
import { containerClass } from '../lib/figma-assets';

export default function Hero() {
  return (
    <section className="bg-bg-section pt-[72px] md:pt-[87px]">
      <div className={`${containerClass} py-12 md:py-16 lg:py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl xl:text-[80px] xl:leading-[88px] tracking-[-1px] text-white">
              Vaš Partner za Zanesljive in Učinkovite{' '}
              <span className="text-accent">Rešitve!</span>
            </h1>
            <p className="text-[#e3e3e3] text-base md:text-lg lg:text-xl leading-8 max-w-[594px]">
              Industrijske in hišne instalacije, priklopi, meritve in vzdrževanje — izvajamo
              celovite elektro storitve v Škofji Loki, Kranju in Ljubljani.
            </p>
            <a
              href="mailto:info@egh.si"
              className="inline-flex w-fit items-center justify-center bg-accent text-text-dark-btn font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Začnimo z vašim Projektom
            </a>
          </div>

          <div className="relative w-full max-w-[550px] lg:max-w-none lg:ml-auto">
            <div
              className="relative aspect-[550/678] w-full overflow-hidden rounded-tl-[40px] md:rounded-tl-[82px] shadow-[0px_4.403px_36.652px_11.006px_rgba(87,196,201,0.08)]"
            >
              <FigmaAsset
                src="/assets/Industrija1.jpeg"
                alt="Industrijska elektro instalacija – Elektro Gal Harbaš Kranj"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
