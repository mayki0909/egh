export type FeatureHighlight = {
  iconKey: "sealCheck" | "shieldCheck" | "certificate" | "plugCharging";
  title: string;
  description: string;
};

export const featureHighlights: FeatureHighlight[] = [
  {
    iconKey: "sealCheck",
    title: "Lokalna ekipa s hitro odzivnostjo",
    description:
      "Ekipa EGH deluje na območju Škofje Loke, Kranja, Ljubljane in okolice. Zaradi lokalne prisotnosti zagotavljamo hitro odzivnost, krajši čas izvedbe in osebni pristop pri vsakem projektu.",
  },
  {
    iconKey: "shieldCheck",
    title: "Varnost in izvedba po veljavnih predpisih",
    description:
      "Vsako inštalacijo, priklop ali pregled izvedemo strokovno in skladno z aktualnimi elektro standardi ter predpisi. Izvajamo tudi elektro meritve in pripravo dokumentacije za revizije ter predajo objektov."
  },
  {
    iconKey: "certificate",
    title: "Celovite elektro storitve na enem mestu",
    description:
      "Od novogradenj do prenov, od hišnih instalacij do industrijskih sistemov — poskrbimo za celotno izvedbo elektro del, vzdrževanje in podporo tudi po zaključku projekta.",
  },
  {
    iconKey: "plugCharging",
    title: "Kakovost, ki ostane dolgoročno",
    description:
      "Pri delu uporabljamo preverjene materiale in rešitve, ki zagotavljajo zanesljivo delovanje, večjo energetsko učinkovitost in manj možnosti za kasnejše okvare."
  },
];
