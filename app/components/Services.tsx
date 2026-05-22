import FigmaAsset from './FigmaAsset';
import { containerClass } from '../lib/figma-assets';
import { services } from '../lib/services';

function ServiceCard({
  slug,
  title,
  description,
  image,
  alt,
}: {
  slug: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
}) {
  return (
    <article
      id={slug}
      className="bg-bg-card border border-accent rounded-lg overflow-hidden flex flex-col scroll-mt-28"
    >
      <div className="relative w-full aspect-[4/3] bg-bg-placeholder">
        {image ? (
          <FigmaAsset
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(87,196,201,0.08)]">
            <div className="w-16 h-16 rounded-lg border border-[#d9d9d9] bg-[rgba(87,196,201,0.06)]" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-label text-xl md:text-2xl text-white">{title}</h3>
        <p className="text-[#e0e0e0] text-base leading-7">{description}</p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-bg-section py-16 md:py-20">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 max-w-[871px]">
          <p className="font-label text-accent text-base uppercase leading-7">Kaj ponujamo</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            Celovite <span className="text-accent">elektro storitve</span> za dom, industrijo in
            poslovne objekte
          </h2>
          <p className="text-[#e0e0e0] text-base md:text-lg leading-8 max-w-[720px]">
            Od industrijskih in hišnih instalacij do meritev, zasilne razsvetljave in priklopov —
            izvajamo vse na območju Škofje Loke, Kranja in Ljubljane.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
