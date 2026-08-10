import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import SmartImage from "@/components/ui/SmartImage";
import IconList from "@/components/sections/IconList";
import FounderOffer from "@/components/sections/FounderOffer";
import LocationBlock from "@/components/sections/LocationBlock";
import { WhatsAppIcon } from "@/components/ui/Icon";
import type { Club } from "@/content/clubs";
import { whatsappHref, SIGNUP_URL_AVENIDAS } from "@/content/site";
import { MAPS_EMBED } from "@/content/contact";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function ClubRenovationLanding({ club }: { club: Club }) {
  const renovation = club.renovation;
  if (!renovation) return null;

  const breadcrumbs = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Nuestros Clubes", href: "/clubes" },
    { label: club.name, href: `/clubes/${club.slug}` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <div className="relative flex h-[80dvh] min-h-[520px] w-full items-end overflow-hidden bg-black text-white">
        <SmartImage
          src={club.heroImage}
          alt={club.heroImageAlt}
          placeholderLabel={club.heroImagePlaceholder}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <Container className="relative pb-16 pt-32 sm:pb-20">
          <FadeIn>
            <Eyebrow className="text-white/80">{renovation.eyebrow}</Eyebrow>
            <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
              {renovation.heading}
            </Heading>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
              {renovation.subheading}
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Socio Fundador */}
      <FounderOffer offer={renovation.founder} ctaHref={SIGNUP_URL_AVENIDAS} />

      {/* Dónde estamos */}
      <LocationBlock addressLines={club.addressLines} mapEmbed={MAPS_EMBED[club.slug]} tone="sand" />

      {/* Descripción + teaser */}
      <Section tone="white">
        <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="flex flex-col gap-6">
            {renovation.description.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <p className="max-w-[65ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <Eyebrow>Lo que encontrarás</Eyebrow>
            <Divider className="my-6" />
            <IconList items={renovation.teaser} className="sm:grid-cols-1" />
          </FadeIn>
        </Container>
      </Section>

      {/* Mientras tanto */}
      <Section tone="sand" className="py-20 md:py-28">
        <Container className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <FadeIn>
            <Heading as="p" size="md" className="max-w-xl">
              Mientras tanto, entrena en Premier Gym S&apos;Escorxador
            </Heading>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button href="/clubes/sescorxador" variant="dark">
              Conocer S&apos;Escorxador
            </Button>
            <Button
              href={whatsappHref(
                `Hola, quiero más información sobre la apertura de ${club.name}.`
              )}
              external
              variant="dark"
              className="gap-3"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
