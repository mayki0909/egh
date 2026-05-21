import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Elektro Gal Harbaš | Električar v Kranju, Škofja Loka in okolici",
  description:
    "Elektro Gal Harbaš – vrhunske električarske storitve v Škofji Loki, Kranju in Ljubljani. Zanesljivost, varnost in kakovost izvedbe za domače in poslovne objekte.",
  keywords:
    "električar Kranj, električar Škofja Loka, elektroinštalacije, Elektro Gal Harbaš, električne storitve",
  openGraph: {
    title: "Elektro Gal Harbaš | Električar v Kranju in okolici",
    description:
      "Vrhunske električarske storitve v Škofji Loki, Kranju in Ljubljani.",
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
    name: "Elektro Gal Harbaš, s.p.",
    description:
      "Vrhunske električarske storitve v Škofji Loki, Kranju in Ljubljani",
    url: "https://www.egh.si",
    telephone: "+38630628310",
    email: "info@egh.si",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Groharjevo naselje 5",
      addressLocality: "Škofja Loka",
      postalCode: "4220",
      addressCountry: "SI",
    },
    areaServed: [
      { "@type": "City", name: "Kranj" },
      { "@type": "City", name: "Škofja Loka" },
      { "@type": "City", name: "Ljubljana" },
    ],
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
