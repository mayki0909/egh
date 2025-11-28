import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Domov', href: '#' },
    { name: 'Storitve', href: '#services' },
    { name: 'O nas', href: '#about' },
    { name: 'Pogosta vprašanja', href: '#faq' },
    { name: 'Kontakt', href: '#contact' }
  ];

  const services = [
    'Domače električne storitve',
    'Poslovne električne storitve',
    'Namestitev razsvetljave',
    'Nujna popravila',
    'Varnostni pregledi',
    'Nadgradnje električnih omaric'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Image src="/logo-white.png" alt="EGH Električar v Kranju" width={120} height={48} className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Električar v Kranju, Škofji Loki, Radovljici, Kamniku in širši okolici. Strokovne električne storitve in elektroinštalacije, ki jim lahko zaupate. Licencirano, zavarovano in predano odličnosti. Dežurna pomoč 24/7.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Hitre povezave</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Naše storitve</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Kontakt</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li>
                <p>Groharjevo naselje 5</p>
                <p>4220 Škofja Loka</p>
              </li>
              <li>
                <a href="tel:030628310" className="hover:text-gray-200 transition-colors">
                  030 628 310
                </a>
              </li>
              <li>
                <a href="mailto:egh@gmail.com" className="hover:text-gray-200 transition-colors">
                  egh@gmail.com
                </a>
              </li>
              <li className="text-gray-200">
                Nujna pomoč 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">
              © {currentYear} EGH - Električar v Kranju. Vse pravice pridržane.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-gray-200 transition-colors">
                Pravilnik o zasebnosti
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-gray-200 transition-colors">
                Pogoji storitve
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
