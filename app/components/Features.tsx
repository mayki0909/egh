import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';
import { featureHighlights } from '../lib/features';

const iconByKey = {
  sealCheck: figmaAssets.iconSealCheck,
  shieldCheck: figmaAssets.iconShieldCheck,
  certificate: figmaAssets.iconCertificate,
} as const;

function IconBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-16 h-16 shrink-0">
      <div className="absolute inset-0 rounded-lg bg-[rgba(87,196,201,0.06)] border border-[#d9d9d9]" />
      <FigmaAsset src={src} alt={alt} width={32} height={32} className="absolute left-4 top-4" />
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="zakaj-nas"
      aria-labelledby="features-heading"
      className="bg-bg-page py-16 md:py-20 lg:py-24"
    >
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">
            Zakaj Elektro Gal Harbaš
          </p>
          <h2
            id="features-heading"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight"
          >
            Vaš <span className="text-accent">električar v Kranju</span> in Škofji Loki za
            zanesljive elektro rešitve
          </h2>
          <p className="text-[#dadada] text-base md:text-lg leading-8">
            Specializirani smo za industrijske in hišne elektroinštalacije, meritve, zasilno
            razsvetljavo ter vzdrževanje. Z lokalno prisotnostjo in strokovno izvedbo zagotavljamo
            varnost, kakovost in dolgoročno zadovoljstvo strank v Gorenjski regiji in na območju
            Ljubljane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="bg-bg-section border border-accent rounded-lg p-8 md:p-12 flex flex-col gap-4"
            >
              <IconBox
                src={iconByKey[feature.iconKey]}
                alt={`${feature.title} – Elektro Gal Harbaš`}
              />
              <h3 className="font-label text-xl md:text-2xl text-white">{feature.title}</h3>
              <p className="text-[#dadada] text-base leading-7">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
