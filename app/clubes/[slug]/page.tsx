import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import SmartImage from "@/components/ui/SmartImage";
import IconList from "@/components/sections/IconList";
import ExploreGrid from "@/components/sections/ExploreGrid";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ContactForm from "@/components/sections/ContactForm";
import MembershipCard from "@/components/sections/MembershipCard";
import TemporaryPassList from "@/components/sections/TemporaryPassList";
import ClubRenovationLanding from "@/components/sections/ClubRenovationLanding";
import LocationBlock from "@/components/sections/LocationBlock";
import { CLUBS, type ClubSlug } from "@/content/clubs";
import { OPENING_HOURS, MAPS_EMBED } from "@/content/contact";
import { SPACES } from "@/content/spaces";
import { FAQS } from "@/content/faq";
import { MEMBERSHIPS, TEMPORARY_PASSES } from "@/content/memberships";
import { PHONE_DISPLAY, SITE_URL, whatsappHref } from "@/content/site";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/ui/Icon";

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

  const description = club.renovation ? club.renovation.subheading : club.intro[0];
  const title = club.renovation ? `${club.name} — Próxima Apertura` : club.name;
  const image = ogImageUrl(club.name, club.renovation ? club.renovation.eyebrow : club.eyebrow);
  return {
    title,
    description,
    alternates: { canonical: `/clubes/${club.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/clubes/${club.slug}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { images: [image] },
  };
}

export default async function ClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = CLUBS[slug as ClubSlug];
  if (!club) notFound();

  if (club.renovation) {
    return <ClubRenovationLanding club={club} />;
  }

  const hours = OPENING_HOURS[club.slug];
  const faqs = FAQS[club.slug];
  const memberships = MEMBERSHIPS[club.slug];
  const passes = TEMPORARY_PASSES[club.slug];
  const clubSpaces = SPACES.filter((space) => !space.avenidasOnly || club.slug === "avenidas");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: club.name,
    url: `${SITE_URL}/clubes/${club.slug}`,
    telephone: PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: club.addressLines[0],
      addressLocality: "Palma de Mallorca",
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    amenityFeature: club.whyChoose.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
  };

  const breadcrumbs = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Nuestros Clubes", href: "/clubes" },
    { label: club.name, href: `/clubes/${club.slug}` },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <div className="relative flex h-[90dvh] min-h-[560px] w-full items-end overflow-hidden bg-black text-white">
        <SmartImage
          src={club.heroImage}
          alt={club.heroImageAlt}
          placeholderLabel={club.heroImagePlaceholder}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <Container className="relative pb-16 pt-32 sm:pb-20">
          <FadeIn>
            <Eyebrow className="text-white/80">{club.eyebrow}</Eyebrow>
            <Heading as="h1" size="display" className="mt-4 max-w-4xl">
              {club.name}
            </Heading>
          </FadeIn>
        </Container>
      </div>

      {/* Conoce el centro */}
      <Section tone="white">
        <Container>
          <FadeIn className="mb-12 max-w-2xl">
            <Eyebrow>{club.shortName}</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Conoce el Centro
            </Heading>
          </FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="flex flex-col gap-6">
              {club.intro.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <p className="max-w-[65ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1} className="relative aspect-[3/4] w-full">
              <SmartImage
                src={club.introImage}
                alt={club.heroImageAlt}
                placeholderLabel={club.heroImagePlaceholder}
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Espacios y tecnología */}
      <Section tone="sand">
        <Container>
          <FadeIn className="mb-12 max-w-2xl">
            <Eyebrow>Instalaciones</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Espacios y Tecnología
            </Heading>
          </FadeIn>
        </Container>
        <Container className="px-0 sm:px-8 lg:px-16">
          <ExploreGrid spaces={clubSpaces} />
        </Container>
      </Section>

      {/* Servicios (por qué elegirnos) */}
      <Section tone="white">
        <Container>
          <FadeIn>
            <Heading as="h2" size="lg" className="max-w-3xl">
              {club.whyChooseTitle}
            </Heading>
          </FadeIn>
          <Divider className="my-12" />
          <IconList items={club.whyChoose} />

          <FadeIn delay={0.1} className="mt-16 max-w-2xl">
            <p className="text-base font-light leading-relaxed sm:text-lg">{club.closing}</p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12">
            <Button href="#membresias" variant="dark">
              Hazte Socio
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA banner */}
      <Section tone="black" className="py-20 md:py-28">
        <Container className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <FadeIn>
            <Heading as="p" size="md" className="max-w-xl">
              Ven a conocer {club.name}
            </Heading>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button href="#membresias" variant="light">
              Hazte Socio
            </Button>
            <Button
              href={whatsappHref(`Hola, me gustaría más información sobre ${club.name}.`)}
              external
              variant="light"
              className="gap-3"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Membresías */}
      <Section id="membresias" tone="white">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <Eyebrow>Membresías</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Precios y Planes
            </Heading>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {memberships.map((m) => (
              <MembershipCard key={m.id} membership={m} club={club} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Accesos temporales */}
      <Section tone="sand" className="pt-0">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <Eyebrow>¿Solo unos días en Palma?</Eyebrow>
            <Heading as="h3" size="md" className="mt-4">
              Accesos Temporales
            </Heading>
            <p className="mx-auto mt-6 max-w-[55ch] text-base font-light leading-relaxed text-gray-700">
              Entrena en Premier Gym durante tu estancia en Palma, sin necesidad de hacerte socio.
            </p>
          </FadeIn>
          <div className="mt-12">
            <TemporaryPassList passes={passes} club={club} />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <Container className="max-w-3xl">
          <FadeIn className="mb-12">
            <Eyebrow>Preguntas Frecuentes</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              ¿Tienes dudas?
            </Heading>
          </FadeIn>
          <FAQAccordion items={faqs} />
        </Container>
      </Section>

      {/* Contacto + Horario */}
      <Section tone="sand">
        <Container className="max-w-2xl">
          <FadeIn className="mb-12 text-center">
            <Eyebrow>Contacto</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Escríbenos
            </Heading>
            <p className="mx-auto mt-6 max-w-[55ch] text-base font-light leading-relaxed text-gray-700">
              Cuéntanos qué necesitas y te respondemos a la mayor brevedad, o llámanos al{" "}
              {PHONE_DISPLAY}.
            </p>
          </FadeIn>
          <ContactForm defaultClub={club.slug} />

          <FadeIn delay={0.1} className="mt-16 flex flex-col gap-2 border-t border-gray-300 pt-10 text-sm font-light text-gray-700">
            <Eyebrow>Horario</Eyebrow>
            <p className="mt-2">{hours.weekdays}</p>
            <p>{hours.weekend}</p>
          </FadeIn>
        </Container>
      </Section>

      {/* Ubicación */}
      <LocationBlock addressLines={club.addressLines} mapEmbed={MAPS_EMBED[club.slug]} tone="white" />
    </div>
  );
}
