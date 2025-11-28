import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Električar v Kranju in okolici | EGH - Strokovne električne storitve",
  description: "Električar v Kranju in okolici. Licencirani in zavarovani električarji za vašo domačo in poslovno nepremičnino. Hitra pomoč 24/7. Kakovostne električne storitve v Kranju, Škofji Loki in okolici.",
  keywords: "električar Kranj, električar v Kranju, električar okolica Kranja, električne storitve Kranj, električar Škofja Loka, električar 24/7, električne popravila Kranj, električne instalacije Kranj",
  openGraph: {
    title: "Električar v Kranju in okolici | EGH",
    description: "Licencirani električar v Kranju in okolici. Strokovne električne storitve za domače in poslovne nepremičnine. Hitra pomoč 24/7.",
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
    "areaServed": {
      "@type": "City",
      "name": ["Kranj", "Škofja Loka", "Radovljica", "Kamnik", "Ljubljana"]
    },
    "serviceType": [
      "Domače električne storitve",
      "Poslovne električne storitve",
      "Namestitev razsvetljave",
      "Nujna popravila",
      "Varnostni pregledi",
      "Nadgradnje električnih omaric"
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
      "name": "Električne storitve",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Električar v Kranju in okolici"
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
