import FigmaAsset from './FigmaAsset';
import MobileScrollCarousel from './MobileScrollCarousel';
import { containerClass } from '../lib/figma-assets';
import { galleryImages } from '../lib/gallery';

function GalleryTile({
  src,
  alt,
  variant = 'grid',
}: {
  src: string;
  alt: string;
  variant?: 'scroll' | 'grid';
}) {
  const tileClass =
    variant === 'scroll'
      ? 'relative rounded-lg overflow-hidden w-full h-[180px] bg-bg-placeholder'
      : 'relative rounded-lg overflow-hidden h-[280px] md:h-[424px] bg-bg-placeholder';

  return (
    <div className={tileClass}>
      <FigmaAsset
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={
          variant === 'scroll'
            ? 'calc(100vw - 4rem)'
            : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
        }
      />
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = galleryImages;

  return (
    <section id="projects" className="bg-bg-page py-10 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-6 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">Naši Projekti</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            <span className="text-accent">Kvalitetna</span> Izvedba in{' '}
            <span className="text-accent">Zanesljiva</span> Storitev za Vaše Električne Naloge!
          </h2>
        </div>

        <MobileScrollCarousel
          ariaLabel="Galerija projektov"
          slideClassName="w-[min(72vw,260px)]"
          hintText="Podrsajte za več fotografij"
        >
          {galleryImages.map((img) => (
            <GalleryTile key={img.src} src={img.src} alt={img.alt} variant="scroll" />
          ))}
        </MobileScrollCarousel>

        <div className="hidden md:flex flex-col gap-6">
          {featured && (
            <div className="grid grid-cols-1 md:grid-cols-[1.42fr_1fr] gap-6">
              <GalleryTile src={featured.src} alt={featured.alt} />
              {rest[0] && <GalleryTile src={rest[0].src} alt={rest[0].alt} />}
            </div>
          )}
          {rest.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.slice(1).map((img) => (
                <GalleryTile key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
