import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import ClubTileGrid from "@/components/sections/ClubTileGrid";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hazte Socio",
  description:
    "Elige tu club Premier Gym para ver membresías y accesos temporales. Las cuotas son diferentes en cada centro.",
  alternates: { canonical: "/hazte-socio" },
  openGraph: { images: [{ url: ogImageUrl("Hazte Socio"), width: 1200, height: 630 }] },
  twitter: { images: [ogImageUrl("Hazte Socio")] },
};

export default function HazteSocioPage() {
  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Hazte Socio", href: "/hazte-socio" },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-24 text-center md:py-32">
        <FadeIn>
          <Eyebrow>Elige tu club</Eyebrow>
          <Heading as="h1" size="display" className="mt-4">
            Hazte Socio
          </Heading>
          <p className="mx-auto mt-8 max-w-[55ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            Cada club tiene sus propias membresías y tarifas. Selecciona el tuyo para ver las opciones
            disponibles.
          </p>
        </FadeIn>
      </Container>
      <ClubTileGrid hrefBase="/hazte-socio" />
    </div>
  );
}
