import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

const services = [
  {
    icon: figmaAssets.iconLightning,
    title: 'Napeljava Električnih Instalacij',
    description:
      'Vgradnja električnih vodov, kablov in priprava napeljav za lokalne domove in podjetja.',
  },
  {
    icon: figmaAssets.iconCircuitry,
    title: 'Diagnostika in Odpravljanje Napake',
    description:
      'Hitra diagnostika in učinkovito odpravljanje električnih okvar na območju Škofje Loke, Kranja in Ljubljane.',
  },
  {
    icon: figmaAssets.iconHammer,
    title: 'Vzdrževanje Električnih Sistemov',
    description:
      'Redno vzdrževanje električnih sistemov za lokalne prebivalce in podjetja. Zamenjava dotrajanih komponent in pregled skladnosti z lokalnimi regulativami.',
  },
  {
    icon: figmaAssets.iconPlugCharging,
    title: 'Montaze in Priklopi Električnih Naprav',
    description:
      'Profesionalna namestitev gospodinjskih naprav, osvetlitvenih sistemov in varnostnih sistemov v Škofji Loki, Kranju in Ljubljani.',
  },
];

function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-16 h-16 shrink-0">
      <div className="absolute inset-0 rounded-lg bg-[rgba(87,196,201,0.06)] border border-[#d9d9d9]" />
      <FigmaAsset src={src} alt={alt} width={32} height={32} className="absolute left-4 top-4" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-bg-section py-16 md:py-20">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 max-w-[608px]">
          <p className="font-label text-accent text-base uppercase leading-7">
            Vrhunske Električne Storitve
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            Zaupajte Strokovnjakom za{' '}
            <span className="text-accent">Vaše Električne Potrebe</span>!
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[726px_1fr] gap-10 xl:gap-[172px] items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-bg-card border border-accent rounded-lg p-6 flex flex-col gap-6 min-h-[280px] md:min-h-[352px]"
              >
                <ServiceIcon src={service.icon} alt={service.title} />
                <div className="flex flex-col gap-3">
                  <h3 className="font-label text-xl md:text-2xl text-white">{service.title}</h3>
                  <p className="text-[#e0e0e0] text-base leading-7">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full aspect-[478/744] max-h-[744px] rounded-2xl overflow-hidden">
            <FigmaAsset
              src={figmaAssets.servicesImage}
              alt="Električne instalacije"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 478px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
