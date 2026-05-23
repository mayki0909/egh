export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Prišli so točno ob dogovorjeni uri, delo opravili brez napak in za sabo pustili urejeno. Vtičnice in stikala delujejo brezhibno. Priporočam!"',
    name: 'Marko Novak',
    role: 'Lastnik hiše, Kranj',
    stars: 5,
  },
  {
    quote:
      '"Komunikacija je bila jasna in strokovna. Pri obnovi inštalacije so predlagali izboljšave, ki so olajšale vsakodnevno uporabo. Rezultat je natančen in varen."',
    name: 'Ana Kovačič',
    role: 'Upravnica stanovanj, Ljubljana',
    stars: 5,
  },
  {
    quote:
      '"Potrebovali smo hitro menjavo varovalk v poslovnem objektu. Ekipa je bila odzivna, cena razumna in delo izvedeno v dogovorjenem roku. Zelo zadovoljni."',
    name: 'Tomaž Zupan',
    role: 'Lastnik podjetja, Škofja Loka',
    stars: 5,
  },
  {
    quote:
      '"Pri industrijski inštalaciji so pokazali natančnost in potrpežljivost. Meritve in poročilo sta bila pripravljena pravočasno za revizijo. Zanesljiv partner."',
    name: 'Petra Horvat',
    role: 'Investitorica, Gorenjska',
    stars: 5,
  },
  {
    quote:
      '"Odlična izkušnja od prvega klica do zaključka del. Prišli so pravočasno, vse pojasnili in delo opravili brez nepotrebnih zamud. Še enkrat bi jih poklicali."',
    name: 'Gregor Vidmar',
    role: 'Najemnik, Kranj',
    stars: 4,
  },
];
