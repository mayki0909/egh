export type FeatureHighlight = {
  iconKey: "sealCheck" | "shieldCheck" | "certificate";
  title: string;
  description: string;
};

export const featureHighlights: FeatureHighlight[] = [
  {
    iconKey: "sealCheck",
    title: "Lokalni električar z hitro odzivnostjo",
    description:
      "Elektro Gal Harbaš pokriva Škofjo Loko, Kranj, Ljubljano in okolico. Kratke poti do objekta pomenijo hitrejši začetek del, manj izpadov in osebno svetovanje na terenu.",
  },
  {
    iconKey: "shieldCheck",
    title: "Varnost in skladnost z predpisi",
    description:
      "Vsaka instalacija, priklop in pregled zasilne razsvetljave izvedemo skladno z veljavnimi predpisi. Izvajamo elektro meritve in pripravimo poročila za revizije ter predajo objektov.",
  },
  {
    iconKey: "certificate",
    title: "Celovita izvedba od A do Ž",
    description:
      "Od hišnih in industrijskih instalacij do zamrzovalnih komor, priklopov števcev in urejanja obstoječih napeljav — en partner za vse električne naloge v vašem domu ali podjetju.",
  },
];
