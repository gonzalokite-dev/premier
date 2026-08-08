import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import ClubTileGrid from "@/components/sections/ClubTileGrid";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nuestros Clubes",
  description:
    "Los dos clubes Premier Gym en Palma de Mallorca: S'Escorxador, en pleno centro, y Avenidas, con Recovery Zone y sala de Pilates y Yoga.",
  alternates: { canonical: "/clubes" },
  openGraph: { images: [{ url: ogImageUrl("Nuestros Clubes"), width: 1200, height: 630 }] },
  twitter: { images: [ogImageUrl("Nuestros Clubes")] },
};

export default function ClubesPage() {
  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Nuestros Clubes", href: "/clubes" },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-24 text-center md:py-32">
        <FadeIn>
          <Eyebrow>Palma de Mallorca</Eyebrow>
          <Heading as="h1" size="display" className="mt-4">
            Nuestros Clubes
          </Heading>
        </FadeIn>
      </Container>
      <ClubTileGrid hrefBase="/clubes" />
    </div>
  );
}
