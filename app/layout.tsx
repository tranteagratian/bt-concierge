import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concierge auto România — Cumpără mașini second hand verificate | B&T Prime",
  description:
    "Servicii concierge auto în România: îți cumpărăm mașina dorită din Europa, verificată complet și adusă la cheie. Economisești mii de euro fără adaos de dealer. Peste 50 de clienți mulțumiți.",
  keywords: [
    "concierge auto România",
    "cumpărare mașină second hand",
    "mașini verificate import",
    "achiziție auto la cheie",
    "mașină second hand din Germania",
    "verificare istoric mașină",
    "import auto Europa",
    "cumpărare mașină rulată",
  ],
  alternates: { canonical: "https://btprime.ro/" },
  openGraph: {
    title: "Concierge auto România — Cumpără mașini second hand verificate",
    description:
      "Îți alegem, verificăm și aducem mașina perfectă din Europa. Taxă fixă, fără adaos de dealer, fără bătăi de cap. Economia medie: 3.200€.",
    type: "website",
    locale: "ro_RO",
    siteName: "B&T Prime Solutions",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={manrope.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "B&T Prime Solutions",
              description:
                "Concierge auto pentru cumpărători individuali din România. Identificăm, verificăm și aducem la cheie mașina dorită din piețele auto europene.",
              areaServed: "RO",
              address: {
                "@type": "PostalAddress",
                addressLocality: "București",
                addressCountry: "RO",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
