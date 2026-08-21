import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ZoneSection from "@/components/sections/ZoneSection";
import ZoneGallery from "@/components/sections/ZoneGallery";
import { SPACES } from "@/content/spaces";
import { SITE_URL } from "@/content/site";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

export function generateStaticParams() {
  return SPACES.map((space) => ({ slug: space.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const space = SPACES.find((s) => s.slug === slug);
  if (!space) return {};

  const image = ogImageUrl(space.title, "Espacios");
  return {
    title: space.title,
    description: space.text.slice(0, 155),
    alternates: { canonical: `/espacios/${space.slug}` },
    openGraph: {
      title: space.title,
      description: space.text,
      url: `${SITE_URL}/espacios/${space.slug}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { images: [image] },
  };
}

export default async function SpacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const space = SPACES.find((s) => s.slug === slug);
  if (!space) notFound();

  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Espacios", href: "/espacios" },
    { label: space.title, href: `/espacios/${space.slug}` },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ZoneSection space={space} />
      {space.gallery && <ZoneGallery images={space.gallery} title={space.title} />}
      <Section tone="sand" className="py-16 md:py-20">
        <Container>
          <Link
            href="/espacios"
            className="text-sm font-medium uppercase tracking-[0.15em] underline underline-offset-4"
          >
            Ver todos los espacios
          </Link>
        </Container>
      </Section>
    </div>
  );
}
