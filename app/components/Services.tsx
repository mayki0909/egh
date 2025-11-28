import { Zap, Home, Building2, Lightbulb, ShieldCheck, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Domače električne storitve',
      description: 'Kompletne električne storitve za domače nepremičnine v Kranju, Škofji Loki in okolici. Menjava vtičnic in stikal v bloku, novogradnji ali samostojni hiši. Priklop aparatov, montaža bele tehnike, elektroinštalacije za talno gretje. Vse delo opravimo varno, profesionalno in trajno.'
    },
    {
      icon: Building2,
      title: 'Poslovne električne storitve',
      description: 'Strokovne električne rešitve za podjetja, pisarne, proizvodne hale in poslovne nepremičnine v Kranju, Škofji Loki in okolici. Jako-točne in šibko-točne instalacije, razsvetljava za pisarne, priklopi industrijske opreme, montaža sončnih elektrarn. Minimalni izpadli časi.'
    },
    {
      icon: Lightbulb,
      title: 'Namestitev razsvetljave',
      description: 'Strokovno načrtovanje in montaža vseh vrst svetil v Kranju in okolici: stenske, stropne, lestenci, kot vgradne ali novodobne LED linijske svetil. Notranja in zunanja razsvetljava za izboljšanje atmosfere in energetske učinkovitosti.'
    },
    {
      icon: Zap,
      title: 'Nujna popravila in dežurna pomoč',
      description: 'Dežurni električar 24/7 v Kranju, Škofji Loki in okolici. Nujna električna popravila tudi ponoči. Hitro reševanje nujnih električnih težav, izpadov električne energije in obnovitev oskrbe. Reagiranje takoj, ne glede na čas.'
    },
    {
      icon: ShieldCheck,
      title: 'Varnostni pregledi in elektro meritve',
      description: 'Temeljiti varnostni pregledi električnih naprav in napeljav v Kranju in okolici. Elektro meritve, preverjanje izpolnjevanja električnih predpisov in standardov. Zagotavljanje varnosti vaše nepremičnine.'
    },
    {
      icon: Wrench,
      title: 'Nadgradnje električnih omaric',
      description: 'Menjava starih električnih omaric s klasičnimi varovalkami z modernejšo omarico in novimi varovalkami v Kranju in okolici. Enostavnejše upravljanje, varno in učinkovito obvladovanje sodobnih zahtev po električni energiji.'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">Električne storitve v Kranju, Škofji Loki in okolici</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Električar v Kranju, Škofji Loki, Radovljici, Kamniku in širši okolici. Obsežne elektroinštalacijske storitve za domače in poslovne nepremičnine. Menjava vtičnic, montaža razsvetljave, priklop aparatov, nadgradnje električnih omaric in dežurna pomoč 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-200 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-700" strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
