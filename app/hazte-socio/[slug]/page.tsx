import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import MembershipCard from "@/components/sections/MembershipCard";
import TemporaryPassList from "@/components/sections/TemporaryPassList";
import { CLUBS, type ClubSlug } from "@/content/clubs";
import { MEMBERSHIPS, TEMPORARY_PASSES } from "@/content/memberships";
import { SITE_URL } from "@/content/site";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

const SLUGS: ClubSlug[] = ["sescorxador", "avenidas"];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = CLUBS[slug as ClubSlug];
  if (!club) return {};

  const image = ogImageUrl(`Hazte Socio — ${club.shortName}`, club.eyebrow);
  return {
    title: `Hazte Socio — ${club.shortName}`,
    description: `Membresía mensual y trimestral, además de day pass, week pass y 15 day pass en ${club.name}.`,
    alternates: { canonical: `/hazte-socio/${club.slug}` },
    openGraph: {
      url: `${SITE_URL}/hazte-socio/${club.slug}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { images: [image] },
  };
}

export default async function HazteSocioClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = CLUBS[slug as ClubSlug];
  if (!club) notFound();

  const memberships = MEMBERSHIPS[club.slug];
  const passes = TEMPORARY_PASSES[club.slug];

  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Hazte Socio", href: "/hazte-socio" },
    { label: club.name, href: `/hazte-socio/${club.slug}` },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="white">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <Eyebrow>{club.name}</Eyebrow>
            <Heading as="h1" size="display" className="mt-4">
              Hazte Socio
            </Heading>
          </FadeIn>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {memberships.map((m) => (
              <MembershipCard key={m.id} membership={m} club={club} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <FadeIn>
            <Eyebrow>Accesos Temporales</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Entrena en Premier Gym durante tu estancia en Palma
            </Heading>
          </FadeIn>
          <div className="mt-12">
            <TemporaryPassList passes={passes} club={club} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
