export type ServiceOffering = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
};

export const services: ServiceOffering[] = [
  {
    slug: "industrijske-instalacije",
    title: "Industrijske instalacije",
    description:
      "Načrtovanje in izvedba elektroinštalacij v industrijskih objektih na območju Škofje Loke, Kranja in Ljubljane. Zanesljiva napajanja, razvodne omare in priključitve za proizvodne prostore.",
    image: "/assets/Industrija1.jpeg",
    alt: "Industrijske elektro instalacije v industrijskem objektu – Elektro Gal Harbaš",
  },
  {
    slug: "izdelava-zamrzovalnih-komor",
    title: "Izdelava zamrzovalnih komor",
    description:
      "Električna priprava in priklop zamrzovalnih komor za gostinstvo, trgovine in industrijo. Skladna z varnostnimi zahtevami in lokalnimi predpisi.",
    image: "/assets/ZamrzovalnaKomora1.jpeg",
    alt: "Električna instalacija zamrzovalne komore – Elektro Gal Harbaš",
  },
  {
    slug: "hisne-instalacije",
    title: "Hišne instalacije",
    description:
      "Popolne elektroinštalacije za stanovanjske hiše in večstanovanjske stavbe. Od predpriprave do končne priključitve v Škofji Loki, Kranju in okolici.",
    image: "/assets/HisneInstalacije1.jpeg",
    alt: "Hišna elektro instalacija v stanovanjski stavbi – Elektro Gal Harbaš",
  },
  {
    slug: "priklop-elektricnih-stevcev",
    title: "Priklop električnih števcev",
    description:
      "Priklop in menjava električnih števcev pri distributerju. Hitra in pravilna izvedba za gospodinjstva in poslovne objekte.",
    image: "/assets/PriklopiElektricnihStevcev.jpg",
    alt: "Priklop električnega števca – Elektro Gal Harbaš Kranj",
  },
  {
    slug: "predpriprava-instalacije-v-betonskih-ploscah",
    title: "Predpriprava instalacije v betonskih ploščah",
    description:
      "Predpriprava električnih vodov in dovodov v betonskih ploščah pred betonažo. Natančna izvedba za brezhibno nadaljnjo napeljavo.",
    image: "/assets/PredpipravaInstalacijeVBetonskihPloscah.jpeg",
    alt: "Predpriprava elektro instalacije v betonski plošči – Elektro Gal Harbaš",
  },
  {
    slug: "razni-priklopi",
    title: "Razni priklopi",
    description:
      "Priklopi različnih električnih naprav, razdelilcev in opreme. Prilagojeno vašim potrebam v domu ali podjetju.",
    image: "/assets/RazniPriklopi1.jpeg",
    alt: "Razni električni priklopi in montaža – Elektro Gal Harbaš",
  },
  {
    slug: "urejanje-instalacij",
    title: "Urejanje instalacij",
    description:
      "Pregled, preureditev in posodobitev obstoječih elektroinštalacij. Izboljšanje varnosti in skladnosti z veljavnimi predpisi.",
    image: "/assets/UrejanjeInstalacij.jpeg",
    alt: "Urejanje in preureditev elektro instalacij – Elektro Gal Harbaš",
  },
  {
    slug: "pregled-in-popravila-zasilnih-razsvetljav",
    title: "Pregled in popravila zasilnih razsvetljav",
    description:
      "Redni pregledi, vzdrževanje in popravila zasilne razsvetljave v skladu z zahtevami. Za varno evakuacijo v poslovnih in javnih objektih.",
    image: "/assets/PregledZasilnihRazsvetljav.jpg",
    alt: "Pregled zasilne razsvetljave v objektu – Elektro Gal Harbaš",
  },
  {
    slug: "priprava-za-ozemljitev-naprav",
    title: "Priprava za ozemljitev naprav",
    description:
      "Priprava in izvedba ozemljitvenih sistemov za varno delovanje električnih naprav. Zaščita pred električnim udarom.",
    image: "/assets/PripravaOzemplitve.jpg",
    alt: "Priprava ozemljitev električnih naprav – Elektro Gal Harbaš",
  },
  {
    slug: "popravila-strojev-in-elektricnih-naprav",
    title: "Popravila strojev in električnih naprav",
    description:
      "Diagnostika in popravila industrijskih strojev ter električnih naprav. Hitro odpravljanje okvar v Škofji Loki, Kranju in Ljubljani.",
    alt: "Popravila strojev in električnih naprav – Elektro Gal Harbaš",
  },
  {
    slug: "izvajanje-elektro-meritev-in-priprava-porocil",
    title: "Izvajanje elektro meritev in priprava poročil",
    description:
      "Meritve upornosti izolacije, ozemljitve in drugih električnih parametrov. Priprava uradnih poročil za revizije in predaje objektov.",
    alt: "Elektro meritve in priprava merilnih poročil – Elektro Gal Harbaš",
  },
];

export const serviceKeywords = services.map((s) => s.title).join(", ");
