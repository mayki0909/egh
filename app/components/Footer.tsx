import Link from 'next/link';
import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';
import { services } from '../lib/services';

const footerServices = services.slice(0, 6);
const companyName = 'Elektroinštalacije, Gal Harbaš s.p.';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-section relative overflow-hidden">
      <div className={`${containerClass} py-16 md:py-20 flex flex-col gap-16 md:gap-40`}>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col gap-[18px]">
            <FigmaAsset
              src={figmaAssets.logo}
              alt={companyName}
              width={90}
              height={40}
              className="logo-theme h-10 w-auto self-start"
            />
            <p className="text-text-primary text-lg md:text-xl font-medium opacity-80">
              {companyName}

            </p>
            <p className="text-text-primary text-base md:text-lg font-medium opacity-80">
              Groharjevo naselje 5,<br />4220 Škofja Loka
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-text-primary text-sm uppercase tracking-[0.56px] opacity-40 font-medium">
              Kontakt
            </p>
            <ul className="flex flex-col gap-4 text-lg md:text-xl text-text-primary opacity-80 font-medium">
              <li>
                <a href="mailto:info@egh.si" className="hover:opacity-100 transition-opacity">
                  info@egh.si
                </a>
              </li>
              <li>
                <a href="tel:030628310" className="hover:opacity-100 transition-opacity">
                  030 628 310
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-text-primary text-sm uppercase tracking-[0.56px] opacity-40 font-medium">
              Storitve
            </p>
            <ul className="flex flex-col gap-3 text-base text-text-primary opacity-80 font-medium">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`#${service.slug}`}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-[10px] text-text-primary opacity-40 font-medium flex flex-col gap-1">
          <p>© {currentYear} {companyName}</p>
          <p>
            Created by{' '}
            <a
              href="https://znidar.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Miha Žnidar
            </a>
          </p>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-[min(40%,572px)] h-[300px] pointer-events-none overflow-hidden hidden lg:block">
        <FigmaAsset
          src={figmaAssets.footerLightning}
          alt=""
          fill
          className="object-contain object-right-bottom opacity-60"
        />
      </div>
    </footer>
  );
}
