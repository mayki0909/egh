import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

const features = [
  {
    icon: figmaAssets.iconSealCheck,
    title: 'Zanesljivost',
    description:
      'Iskanje zanesljivega električarja v Sloveniji je lahko zahtevna naloga, vendar smo mi tukaj, da vam olajšamo ta proces.',
  },
  {
    icon: figmaAssets.iconShieldCheck,
    title: 'Varnostna zavest',
    description:
      'Iskanje zanesljivega električarja v Sloveniji je lahko zahtevna naloga, vendar smo mi tukaj, da vam olajšamo ta proces.',
  },
  {
    icon: figmaAssets.iconCertificate,
    title: 'Kakovost izdelave',
    description:
      'Iskanje zanesljivega električarja v Sloveniji je lahko zahtevna naloga, vendar smo mi tukaj, da vam olajšamo ta proces.',
  },
];

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
    <section className="bg-bg-page py-16 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[767px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">
            Naše največje prednosti
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            Razkrivamo Naše Največje Moči za{' '}
            <span className="text-accent">Vaš Uspeh</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[81px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-section border border-accent rounded-lg p-8 md:p-12 flex flex-col gap-4"
            >
              <IconBox src={feature.icon} alt={feature.title} />
              <h3 className="font-label text-2xl text-white">{feature.title}</h3>
              <p className="text-[#dadada] text-base leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
