import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { services, serviceKeywords } from "./lib/services";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.egh.si";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Elektro Gal Harbaš | Električar v Kranju, Škofja Loka in okolici",
  description:
    "Elektro Gal Harbaš – industrijske in hišne elektroinštalacije, zamrzovalne komore, priklopi števcev, zasilna razsvetljava, meritve in poročila v Škofji Loki, Kranju in Ljubljani.",
  keywords: [
    "električar Kranj",
    "električar Škofja Loka",
    "elektroinštalacije",
    "Elektro Gal Harbaš",
    "industrijske instalacije",
    "hišne instalacije",
    serviceKeywords,
  ].join(", "),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elektro Gal Harbaš | Električar v Kranju in okolici",
    description:
      "Industrijske in hišne elektroinštalacije, meritve, zasilna razsvetljava in priklopi v Škofji Loki, Kranju in Ljubljani.",
    type: "website",
    locale: "sl_SI",
    url: siteUrl,
    images: [
      {
        url: "/assets/Industrija1.jpeg",
        width: 1200,
        height: 630,
        alt: "Industrijske elektro instalacije – Elektro Gal Harbaš",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elektro Gal Harbaš | Električar v Kranju in okolici",
    description:
      "Vrhunske električarske storitve v Škofji Loki, Kranju in Ljubljani.",
    images: ["/assets/Industrija1.jpeg"],
  },
};

const areaServed = [
  { "@type": "City" as const, name: "Kranj" },
  { "@type": "City" as const, name: "Škofja Loka" },
  { "@type": "City" as const, name: "Ljubljana" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Gal Harbaš, s.p.",
    description:
      "Industrijske in hišne elektroinštalacije, meritve, zasilna razsvetljava in priklopi v Škofji Loki, Kranju in Ljubljani",
    url: siteUrl,
    telephone: "+38630628310",
    email: "info@egh.si",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Groharjevo naselje 5",
      addressLocality: "Škofja Loka",
      postalCode: "4220",
      addressCountry: "SI",
    },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Električne storitve",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Electrician",
            name: "Elektro Gal Harbaš, s.p.",
          },
          areaServed,
        },
      })),
    },
  };

  return (
    <html lang="sl">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
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
