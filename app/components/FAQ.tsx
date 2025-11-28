'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Na kaj moram biti pozoren oz. kakšni so znaki ko prihaja do električnih težav doma?',
      answer: 'Najpogostejši znaki za težave z elektroinštalacijo v samostojnem domačem objektu ali v bloku v Kranju in okolici so: nenavadno utripanje luči ali izguba intenzitete svetlobe, redni izmet varovalk, šumenje ali brenčanju podobni zvoki v bližini električne napeljave, tople ali razbarvane vtičnice, vonj po zažganem brez razloga, iskrenje ob uporabi stikala ali vtičnice, ter nerazumno povišani stroški elektrike. V primeru vonja po zažganem nujno izklopite vse varovalke, saj je to lahko prvi znak za požarno nevarnost.'
    },
    {
      question: 'Ali lahko isti električar opravlja delo na stanovanjskih in poslovnih objektih?',
      answer: 'Električar, ki je tako dobro izobražen in strokovno podkovan, da lahko elektroinštalacijska dela opravlja v industrijskih in drugih obratih, prav gotovo lahko več kot kvalitetno delo opravi tudi na vašem domu v Kranju, Škofji Loki in okolici. Posledica najema takšnega strokovnjaka se po navadi pokaže v višji strokovnosti in zanesljivosti.'
    },
    {
      question: 'Kakšne so razlike med stanovanjskimi in poslovnimi električarji?',
      answer: 'Najočitnejša razlika med domačimi električarji in električarji, ki izvajajo elektroinštalacijska dela na poslovnih objektih v Kranju in okolici, je zahtevnost in obsežnost dela. Delo električarja za končne stranke običajno obsega manj kompleksna dela kot so menjava vtičnic in stikal, inštalacija svetil, inštalacija bele tehnike. Komercialni električarji pa upravljajo z večjimi sistemi, kot je razsvetljava za pisarne, priklopi industrijske opreme, montaža sončnih elektrarn ali pametnih inštalacij.'
    },
    {
      question: 'Ali imajo električarji licenco in zavarovanje?',
      answer: 'Da, vsak električar, ki izvaja elektroinštalacijska dela v Kranju in okolici, mora pridobiti obrtno dovoljenje in se vpisati v obrtni register pri Obrtno-podjetniški zbornici Slovenije. Električar, ki želi opravljati dejavnost gradbeništva, mora imeti vpisano dejavnost gradbeništva v poslovni register kot gospodarski subjekt in zavarovano odgovornost za škodo v zvezi z opravljanjem svoje dejavnosti.'
    },
    {
      question: 'Kaj storiti v primeru izrednega dogodka oz. nesreče?',
      answer: 'Če je možno in varno, izklopite vse varovalke doma. Ne dotikajte se nobenih žic, ki bi morebiti gledale iz zidov vašega doma. Sebe in svoje najdražje umaknite iz stanovanja ali hiše na varnostno razdaljo. Pokličite dežurnega električarja v Kranju in okolici na 030 628 310! V primeru požara pokličite 112.'
    },
    {
      question: 'Kaj naj storim, če pride do izpada električne energije?',
      answer: 'V kolikor vidite, da težava ni v varovalki in preobremenjenosti električne napeljave zaradi prevelike uporabe številnih naprav, preverite ali je elektrike zmanjkalo tudi pri sosedih. V kolikor elektrike ni na širšem območju, lahko pokličete Elektro Ljubljana za informacije o izklopu električnega toka. V kolikor je težava omejena le na vaše stanovanje ali hišo, pa pokličite električarja v Kranju ali okolici, da odkrije težavo oz. napako, ki povzroča izpade električne energije.'
    },
    {
      question: 'Kakšne so prednosti nadgradnje električnega sistema v stanovanju ali hiši?',
      answer: 'Nadgradnja vašega električnega sistema v Kranju in okolici ima številne prednosti. Med najbolj očitnimi je povečana varnost pred rizikom vžiga ali večjih izpadov električne energije, izboljša se delovanje vaših električnih naprav in njihova življenjska doba, zmanjša se poraba električne energije in s tem stroški, sistem lahko nadgradite v pametni sistem za pametni dom.'
    },
    {
      question: 'Kaj so najpogostejše nadgradnje elektroinštalacij pri prenovi starejšega doma?',
      answer: 'Najpogostejše nadgradnje elektroinštalacij pri prenovi starejšega doma v Kranju in okolici vključujejo: zamenjavo zastarele električne napeljave s sodobnimi materiali, namestitev dodatnih vtičnic za zmanjšanje odvisnosti od podaljškov, nadgradnjo omarice z varovalkami za povečanje zmogljivosti, namestitev GFCI vtičnic v kuhinjah in kopalnicah za večjo varnost, dodajanje energetsko učinkovite razsvetljave in tehnologije pametnega doma.'
    },
    {
      question: 'Ali lahko električarji pomagajo pri izboljšavah energetske učinkovitosti?',
      answer: 'Seveda, električarji v Kranju in okolici lahko pomagajo pri izboljšavah energetske učinkovitosti. Po želji naročnika, vam bo električar svetoval, priporočil in namestil energetsko učinkovito razsvetljavo, pametne termostate in sisteme za upravljanje z energijo.'
    },
    {
      question: 'Kaj moram storiti in pripraviti pred obiskom električarja?',
      answer: 'Pred obiskom električarja v Kranju ali okolici priporočamo: naredite seznam vseh električnih težav ali projektov, o katerih se želite pogovoriti, očistite delovno območje ovir za lažji dostop, zagotovite, da so hišni ljubljenčki zavarovani in zaprti v varen prostor, bodite na voljo za odgovore na vprašanja in omogočite dostop do omarice z varovalkami.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">
            Pogosta vprašanja o električnih storitvah v Kranju in okolici
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Odgovori na najpogostejša vprašanja o električnih storitvah, dežurni pomoči in elektroinštalacijah v Kranju, Škofji Loki in okolici
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 sm:px-8 sm:py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-700 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
