import FigmaAsset from './FigmaAsset';
import { containerClass } from '../lib/figma-assets';

export default function Hero() {
  return (
    <section className="bg-bg-section pt-[72px] md:pt-[87px]">
      <div className={`${containerClass} py-12 md:py-16 lg:py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className="flex w-full min-w-0 flex-col gap-6 md:gap-8">
            <h1 className="w-full max-w-none font-heading font-bold text-3xl sm:text-4xl md:text-[40px] md:leading-tight lg:text-[48px] lg:leading-[56px] xl:text-[56px] xl:leading-[64px] tracking-tight text-text-primary">
              <span className="text-accent">Elektro</span> Ghal — strokovnost, odzivnost in zanesljivost
            </h1>
            <p className="w-full text-text-muted text-base md:text-lg lg:text-xl leading-8">
              Pri EGH smo zavezani kakovostni, varni in zanesljivi izvedbi elektro storitev na
              območju Škofje Loke, Kranja, Ljubljane in širše Gorenjske regije. Specializirani smo
              za hišne in industrijske elektroinštalacije, elektro meritve, priklope ter vzdrževanje
              električnih sistemov.

            </p>
            <p className="w-full text-text-muted text-base md:text-lg lg:text-xl leading-8">
              Naše delo temelji na natančnosti, odgovornosti in kakovostni izvedbi, saj verjamemo,
              da so varne elektroinštalacije osnova vsakega funkcionalnega objekta. Pri vsakem
              projektu se prilagodimo potrebam naročnika ter poiščemo učinkovite in dolgoročno
              zanesljive rešitve.
            </p>
            <p className="w-full text-text-muted text-base md:text-lg lg:text-xl leading-8">
              Stavimo na strokovno izvedbo, hitro odzivnost in dolgoročno varnost vsakega
              objekta — od stanovanjskih hiš do zahtevnejših industrijskih sistemov.
            </p>
            <a
              href="tel:030628310"
              className="inline-flex md:hidden w-fit items-center justify-center bg-accent text-text-dark-btn font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              030 628 310
            </a>
            <a
              href="mailto:info@egh.si"
              className="hidden md:inline-flex w-fit items-center justify-center bg-accent text-text-dark-btn font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Začnimo z vašim projektom
            </a>
          </div>

          <div className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[400px] xl:max-w-[440px] lg:justify-self-end">
            <div
              className="relative aspect-[550/678] w-full overflow-hidden rounded-[40px] md:rounded-none md:rounded-tl-[82px] shadow-[0px_4.403px_36.652px_11.006px_rgba(87,196,201,0.08)]"
            >
              <FigmaAsset
                src="/assets/Industrija1.jpeg"
                alt="Industrijska elektro instalacija – Elektro Gal Harbaš Kranj"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 440px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
