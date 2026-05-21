import Link from 'next/link';
import FigmaAsset from './FigmaAsset';
import { containerClass, figmaAssets } from '../lib/figma-assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-section relative overflow-hidden">
      <div className={`${containerClass} py-16 md:py-20 flex flex-col gap-16 md:gap-40`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[184px]">
          <div className="flex flex-col gap-[18px]">
            <FigmaAsset
              src={figmaAssets.logo}
              alt="Elektro Gal Harbaš"
              width={90}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-white text-lg md:text-xl font-medium opacity-80">
              Elektro Gal Harbaš, s.p.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-sm uppercase tracking-[0.56px] opacity-40 font-medium">
              NAV
            </p>
            <ul className="flex flex-col gap-4 text-lg md:text-xl text-white opacity-80 font-medium">
              <li>
                <Link href="#about" className="hover:opacity-100 transition-opacity">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Storitve
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:opacity-100 transition-opacity">
                  Projeckti
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-sm uppercase tracking-[0.56px] opacity-40 font-medium">
              Contact us
            </p>
            <ul className="flex flex-col gap-4 text-lg md:text-xl text-white opacity-80 font-medium">
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
            <p className="text-white text-sm uppercase tracking-[0.56px] opacity-40 font-medium">
              Info
            </p>
            <ul className="flex flex-col gap-4 text-lg md:text-xl text-white opacity-80 font-medium">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] text-white opacity-40 font-medium">
          <p>© {currentYear} — Copyright</p>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Privacy
          </a>
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
