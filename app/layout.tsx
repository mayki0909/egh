import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Električar v Kranju in okolici | EGH - Elektroinštalacije Kranj, Škofja Loka",
  description: "Električar v Kranju, Škofji Loki in okolici. Licencirani in zavarovani električarji za domače in poslovne elektroinštalacije. Dežurni električar 24/7. Menjava vtičnic, montaža razsvetljave, priklop aparatov, nadgradnje električnih omaric. Hitra pomoč v Kranju, Škofji Loki, Radovljici, Kamniku.",
  keywords: "električar Kranj, električar v Kranju, električar Škofja Loka, električar okolica Kranja, električne storitve Kranj, elektroinštalacije Kranj, električar 24/7, dežurni električar Kranj, menjava vtičnic Kranj, montaža razsvetljave Kranj, električne popravila Kranj, električne instalacije Kranj, električar Radovljica, električar Kamnik",
  openGraph: {
    title: "Električar v Kranju in okolici | EGH - Elektroinštalacije",
    description: "Licencirani električar v Kranju, Škofji Loki in okolici. Strokovne električne storitve za domače in poslovne nepremičnine. Dežurni električar 24/7. Hitra pomoč.",
    type: "website",
    locale: "sl_SI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "EGH - Električar v Kranju",
    "description": "Licencirani in zavarovani električarji za kakovostne električne storitve v Kranju, Škofji Loki in okolici",
    "url": "https://www.egh.si",
    "telephone": "+38630628310",
    "email": "egh@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Groharjevo naselje 5",
      "addressLocality": "Škofja Loka",
      "postalCode": "4220",
      "addressCountry": "SI"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kranj"
      },
      {
        "@type": "City",
        "name": "Škofja Loka"
      },
      {
        "@type": "City",
        "name": "Radovljica"
      },
      {
        "@type": "City",
        "name": "Kamnik"
      },
      {
        "@type": "City",
        "name": "Ljubljana"
      }
    ],
    "serviceType": [
      "Domače električne storitve",
      "Poslovne električne storitve",
      "Namestitev razsvetljave",
      "Menjava vtičnic",
      "Montaža varovalk",
      "Priklop aparatov",
      "Nujna popravila",
      "Dežurna pomoč 24/7",
      "Varnostni pregledi",
      "Elektro meritve",
      "Nadgradnje električnih omaric",
      "Pametne inštalacije",
      "Montaža sončnih elektrarn"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-18:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Električne storitve v Kranju in okolici",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Električar v Kranju in okolici",
            "description": "Licencirani električar za domače in poslovne elektroinštalacije"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dežurni električar 24/7",
            "description": "Nujna pomoč tudi ponoči v Kranju, Škofji Loki in okolici"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Menjava vtičnic in stikal",
            "description": "Profesionalna menjava vtičnic in stikal v bloku, novogradnji ali samostojni hiši"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Montaža razsvetljave",
            "description": "Montaža vseh vrst svetil: stenske, stropne, lestenci, LED linijske svetil"
          }
        }
      ]
    }
  };

  return (
    <html lang="sl">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
