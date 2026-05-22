import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

export default function About() {
  return (
    <section id="about" className="bg-bg-page py-16 md:py-20">
      <div className={containerClass}>
        <div className="bg-bg-card border border-accent rounded-lg p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[110px] items-center">
            <div className="flex flex-col gap-6 md:gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-label text-accent text-base uppercase leading-7">
                  Vrhunske Električne Storitve
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
                  Zaupajte Strokovnjakom za{' '}
                  <span className="text-accent">Vaše Električne Potrebe</span>!
                </h2>
              </div>
              <p className="text-lg leading-8 text-white">
                Pri Elektro Gal Harbaš smo predani temu, da vam zagotovimo vrhunske električarske
                storitve na lokalnem območju{' '}
                <span className="font-bold text-accent">Škofje Loke, Kranja in Ljubljane</span>.
                S strokovnostjo in zanesljivostjo izvajamo hišne in industrijske instalacije,
                zamrzovalne komore, meritve ter vzdrževanje v domovih, podjetjih in industrijskih
                objektih.
              </p>
              <a
                href="mailto:info@egh.si"
                className="inline-flex w-fit items-center justify-center bg-accent text-text-dark-btn font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Začnimo z projektom
              </a>
            </div>

            <div className="relative w-full aspect-[664/459] max-h-[459px]">
              <FigmaAsset
                src={figmaAssets.mapImage}
                alt="Zemljevid pokritosti storitev"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 664px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
