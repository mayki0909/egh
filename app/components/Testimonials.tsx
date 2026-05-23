import FigmaAsset from './FigmaAsset';
import MobileScrollCarousel from './MobileScrollCarousel';
import { containerClass, figmaAssets } from '../lib/figma-assets';
import { testimonials } from '../lib/testimonials';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <FigmaAsset
          key={i}
          src={figmaAssets.iconLightningStar}
          alt=""
          width={24}
          height={24}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  stars,
  compact,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`bg-bg-card rounded-lg flex flex-col justify-between h-full ${
        compact ? 'p-8 gap-12 min-h-[400px]' : 'p-10 gap-20 min-h-[485px]'
      }`}
    >
      <p
        className={`text-text-primary font-medium leading-8 ${
          compact ? 'text-lg' : 'text-xl'
        }`}
      >
        {quote}
      </p>
      <div className="flex flex-col gap-2">
        <p className={compact ? 'text-base' : 'text-lg'}>
          <span className="font-bold text-accent">{name}</span>
          <span className="text-text-muted-2 font-medium"> • {role}</span>
        </p>
        <StarRating count={stars} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-page py-16 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-6 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">Stranke</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-text-primary leading-tight">
            Kaj menijo naše stranke
          </h2>
        </div>

        <MobileScrollCarousel
          ariaLabel="Mnenja strank"
          slideClassName="w-[calc(100vw-4rem)]"
          hintText="Podrsajte za več"
          chevronClassName="top-[45%] -translate-y-1/2"
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              role={t.role}
              stars={t.stars}
              compact
            />
          ))}
        </MobileScrollCarousel>

        <div className="hidden md:flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                stars={t.stars}
              />
            ))}
          </div>
          {testimonials.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[872px] mx-auto w-full">
              {testimonials.slice(3).map((t) => (
                <TestimonialCard
                  key={t.name}
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  stars={t.stars}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
