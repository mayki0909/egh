import FigmaAsset from './FigmaAsset';
import MobileScrollCarousel from './MobileScrollCarousel';
import { containerClass } from '../lib/figma-assets';
import { services } from '../lib/services';

function ServiceCard({
  slug,
  title,
  description,
  image,
  alt,
  withAnchorId = true,
}: {
  slug: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
  withAnchorId?: boolean;
}) {
  return (
    <article
      {...(withAnchorId ? { id: slug } : {})}
      className="bg-bg-card border border-accent rounded-lg overflow-hidden flex flex-col scroll-mt-28 h-full"
    >
      <div className="relative w-full aspect-[4/3] bg-bg-placeholder">
        {image ? (
          <FigmaAsset
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(87,196,201,0.08)]">
            <div className="w-16 h-16 rounded-lg border border-[#d9d9d9] bg-[rgba(87,196,201,0.06)]" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-label text-xl md:text-2xl text-text-primary">{title}</h3>
        <p className="text-text-muted-3 text-base leading-7">{description}</p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-bg-section py-10 md:py-20">
      <div className={`${containerClass} flex flex-col gap-6 md:gap-14`}>
        <div className="flex flex-col gap-4 max-w-[871px]">
          <p className="font-label text-accent text-base uppercase leading-7">STORITVE</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-text-primary leading-tight">
            Celovite <span className="text-accent">elektro storitve</span> za dom, podjetja in industrijo
          </h2>
          <p className="text-text-muted-3 text-base md:text-lg leading-8 max-w-[720px]">
            Ekipa EGH izvaja profesionalne elektro storitve za stanovanjske, poslovne in industrijske objekte na območju Škofje Loke, Kranja, Ljubljane in širše Gorenjske.
          </p>
        </div>

        <MobileScrollCarousel
          ariaLabel="Seznam storitev"
          slideClassName="w-[calc(100vw-4rem)]"
          hintText="Podrsajte za več storitev"
          chevronClassName="top-[calc((100vw-4rem)*3/8)] -translate-y-1/2"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} withAnchorId={false} />
          ))}
        </MobileScrollCarousel>

        <div className="hidden md:grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
