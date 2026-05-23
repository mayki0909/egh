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
    title: "Industrijske elektroinštalacije",
    description:
      "Načrtovanje in izvedba elektroinštalacij za industrijske objekte, proizvodne prostore in delavnice. Poskrbimo za zanesljivo napajanje, razvodne sisteme, priklope strojev in optimalno delovanje industrijskih procesov.",
    image: "/assets/Industrija1.jpeg",
    alt: "Industrijske elektro instalacije - EGH",
  },
  {
    slug: "hisne-instalacije",
    title: "Hišne elektroinštalacije",
    description:
      "Izvedba celotnih elektroinštalacij za novogradnje, prenove stanovanj, hiš in večstanovanjskih objektov — od grobe priprave do končne montaže in priklopa.",
    image: "/assets/HisneInstalacije1.jpeg",
    alt: "Hišna elektro instalacija - EGH",
  },
  {
    slug: "priklop-elektricnih-stevcev",
    title: "Priklop električnih števcev",
    description:
      "Uredimo priklop ali menjavo električnih števcev ter pripravimo vse potrebno za pravilno in varno priključitev pri distributerju električne energije.",
    image: "/assets/PriklopiElektricnihStevcev.jpg",
    alt: "Priklop električnega števca - EGH",
  },
  {
    slug: "predpriprava-instalacije-v-betonskih-ploscah",
    title: "Predpriprava inštalacij v betonskih ploščah",
    description:
      "Natančna priprava električnih vodov, cevi in dovodov pred betoniranjem za brezhibno nadaljnjo izvedbo elektroinštalacij.",
    image: "/assets/PredpipravaInstalacijeVBetonskihPloscah.jpeg",
    alt: "Predpriprava elektro instalacije v betonski plošči - EGH",
  },
  {
    slug: "razni-priklopi",
    title: "Različni električni priklopi",
    description:
      "Izvajamo priklope električnih naprav, razdelilnih omaric, strojev, razsvetljave in druge električne opreme za dom ali poslovne objekte.",
    image: "/assets/RazniPriklopi1.jpeg",
    alt: "Različni električni priklopi - EGH",
  },
  {
    slug: "urejanje-instalacij",
    title: "Urejanje in posodobitev instalacij",
    description:
      "Pregledamo obstoječe elektroinštalacije, odpravimo nepravilnosti ter posodobimo sistem za večjo varnost, zanesljivost in skladnost s predpisi.",
    image: "/assets/UrejanjeInstalacij.jpeg",
    alt: "Urejanje in preureditev elektro instalacij - EGH",
  },
  {
    slug: "pregled-in-popravila-zasilnih-razsvetljav",
    title: "Pregled in servis zasilne razsvetljave",
    description:
      "Redni pregledi, vzdrževanje in popravila zasilne razsvetljave za poslovne, industrijske in javne objekte v skladu z varnostnimi zahtevami.",
    image: "/assets/PregledZasilnihRazsvetljav.jpg",
    alt: "Pregled zasilne razsvetljave v objektu - EGH",
  },
  {
    slug: "izdelava-zamrzovalnih-komor",
    title: "Električna priprava zamrzovalnih komor",
    description:
      "Izvedba električnih povezav in priklopov zamrzovalnih komor za gostinske, trgovinske in industrijske objekte.",
    image: "/assets/ZamrzovalnaKomora1.jpeg",
    alt: "Električna instalacija zamrzovalne komore – Elektro Gal Harbaš",
  },
  {
    slug: "priprava-za-ozemljitev-naprav",
    title: "Ozemljitve električnih naprav",
    description:
      "Izdelava in priprava ozemljitvenih sistemov za zaščito naprav, objektov in uporabnikov pred električnimi okvarami ter udari.",
    image: "/assets/PripravaOzemplitve.jpg",
    alt: "Priprava ozemljitev električnih naprav - EGH",
  },
  {
    slug: "popravila-strojev-in-elektricnih-naprav",
    title: "Popravila strojev in električnih naprav",
    description:
      "Diagnostika napak ter popravilo industrijskih strojev, naprav in električnih sistemov z učinkovitim odpravljanjem okvar.",
    image: "/assets/PopravilaStrojevInElektricnihNaprav.jpg",
    alt: "Tehnik pri popravilu električnega razdelilnega panela - EGH",
  },
  {
    slug: "izvajanje-elektro-meritev-in-priprava-porocil",
    title: "Elektro meritve in priprava poročil",
    description:
      "Izvajamo meritve elektroinštalacij, meritve ozemljitve, izolacije in drugih električnih parametrov ter pripravimo uradna poročila za potrebe revizij in tehničnih pregledov.",
    image: "/assets/ElektroMeritveInPorocila.jpg",
    alt: "Električar pri merjenju napetosti v razdelilni omarici z multimetrom - EGH",
  },
];

export const serviceKeywords = services.map((s) => s.title).join(", ");
