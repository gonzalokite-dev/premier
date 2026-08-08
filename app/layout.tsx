import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import { SITE_URL } from "@/content/site";
import { ogImageUrl } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Premier Gym | Gimnasio Premium en Palma de Mallorca",
    template: "%s | Premier Gym",
  },
  description:
    "Premier Gym, gimnasio premium en Palma de Mallorca. Dos clubes, S'Escorxador y Avenidas, con EGYM, InBody, BioAge y un ambiente sin masificaciones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Premier Gym",
    url: SITE_URL,
    images: [
      {
        url: ogImageUrl("Gimnasio Premium en Palma de Mallorca", "Premier Gym"),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImageUrl("Gimnasio Premium en Palma de Mallorca", "Premier Gym")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Premier Gym",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo/premier-gym-black.svg`,
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-dvh flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
