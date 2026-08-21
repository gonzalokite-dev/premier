import type { Metadata } from "next";
import { Fragment } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import ZoneSection from "@/components/sections/ZoneSection";
import MachineBrandsRow from "@/components/sections/MachineBrandsRow";
import { SPACES, MULTIPURPOSE_ROOM_COPY } from "@/content/spaces";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Espacios",
  description:
    "Descubre las zonas de Premier Gym: EGYM, Cardio, Máquinas y Discos, Peso Libre, vestuarios y la exclusiva Recovery Zone en Palma de Mallorca.",
  alternates: { canonical: "/espacios" },
  openGraph: { images: [{ url: ogImageUrl("Espacios"), width: 1200, height: 630 }] },
  twitter: { images: [ogImageUrl("Espacios")] },
};

export default function EspaciosPage() {
  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Espacios", href: "/espacios" },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-24 text-center md:py-32">
        <FadeIn>
          <Eyebrow>Premier Gym</Eyebrow>
          <Heading as="h1" size="display" className="mt-4">
            Espacios
          </Heading>
          <p className="mx-auto mt-8 max-w-[60ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            Zonas diseñadas con la misma exigencia que el resto del club: tecnología, orden y espacio
            para entrenar con calma.
          </p>
        </FadeIn>
      </Container>

      {SPACES.map((space, i) => (
        <Fragment key={space.slug}>
          <ZoneSection space={space} reverse={i % 2 === 1} />
          {space.slug === "peso-libre" && <MachineBrandsRow />}
        </Fragment>
      ))}

      {MULTIPURPOSE_ROOM_COPY && (
        <Section tone="sand">
          <Container>
            <FadeIn>
              <Heading as="h2" size="lg">
                Sala Polivalente
              </Heading>
              <p className="mt-6 max-w-[60ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
                {MULTIPURPOSE_ROOM_COPY}
              </p>
            </FadeIn>
          </Container>
        </Section>
      )}
    </div>
  );
}
