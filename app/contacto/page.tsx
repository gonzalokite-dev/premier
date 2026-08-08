import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/ui/FadeIn";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ContactForm from "@/components/sections/ContactForm";
import { PhoneIcon, MailIcon, WhatsAppIcon, PinIcon, ClockIcon } from "@/components/ui/Icon";
import { CLUB_LIST } from "@/content/clubs";
import { OPENING_HOURS, MAPS_EMBED } from "@/content/contact";
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  whatsappHref,
} from "@/content/site";
import { breadcrumbJsonLd, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Premier Gym en Palma de Mallorca. Dirección, teléfono, WhatsApp y horario de nuestros clubes S'Escorxador y Avenidas.",
  alternates: { canonical: "/contacto" },
  openGraph: { images: [{ url: ogImageUrl("Contacto"), width: 1200, height: 630 }] },
  twitter: { images: [ogImageUrl("Contacto")] },
};

export default function ContactoPage() {
  const jsonLd = breadcrumbJsonLd([
    { label: "Inicio", href: "/" },
    { label: "Contacto", href: "/contacto" },
  ]);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="white">
        <Container>
          <FadeIn className="text-center">
            <Eyebrow>Palma de Mallorca</Eyebrow>
            <Heading as="h1" size="display" className="mt-4">
              Contacto
            </Heading>
          </FadeIn>

          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-16">
              <FadeIn>
                <a
                  href={whatsappHref("Hola, me gustaría más información sobre Premier Gym.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-black px-8 py-6 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  <WhatsAppIcon className="size-5" />
                  Escríbenos por WhatsApp
                </a>
              </FadeIn>

              <div className="flex flex-col gap-10">
                {CLUB_LIST.map((club, i) => (
                  <FadeIn key={club.slug} delay={0.05 + i * 0.05}>
                    <Eyebrow>{club.name}</Eyebrow>
                    <div className="mt-4 flex items-start gap-3">
                      <PinIcon className="mt-1 size-4 flex-shrink-0 text-accent" />
                      <address className="not-italic text-base font-light leading-relaxed text-gray-700">
                        {club.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.15}>
                <Eyebrow>Contacto</Eyebrow>
                <ul className="mt-4 flex flex-col gap-3 text-base font-light text-gray-700">
                  <li>
                    <a href={PHONE_HREF} className="inline-flex items-center gap-3 hover:text-black">
                      <PhoneIcon className="size-4 text-accent" /> {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 hover:text-black"
                    >
                      <WhatsAppIcon className="size-4 text-accent" /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href={EMAIL_HREF} className="inline-flex items-center gap-3 hover:text-black">
                      <MailIcon className="size-4 text-accent" /> {EMAIL}
                    </a>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Eyebrow>Horario</Eyebrow>
                <div className="mt-4 flex items-start gap-3 text-base font-light leading-relaxed text-gray-700">
                  <ClockIcon className="mt-1 size-4 flex-shrink-0 text-accent" />
                  <div>
                    <p>{OPENING_HOURS.sescorxador.weekdays}</p>
                    <p>{OPENING_HOURS.sescorxador.weekend}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-10">
              {CLUB_LIST.map((club) => {
                const embed = MAPS_EMBED[club.slug];
                return (
                  <FadeIn key={club.slug} className="flex flex-col gap-3">
                    <Eyebrow>{club.name}</Eyebrow>
                    {embed ? (
                      <iframe
                        src={embed}
                        title={`Mapa de ${club.name}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full grayscale"
                        style={{ border: 0 }}
                      />
                    ) : (
                      <PlaceholderImage
                        alt={`Mapa de ${club.name}`}
                        label="{{TBD: dirección completa Avenidas}}"
                        className="aspect-[4/3] w-full"
                      />
                    )}
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <Eyebrow>Formulario de Contacto</Eyebrow>
            <Heading as="h2" size="lg" className="mt-4">
              Escríbenos
            </Heading>
          </FadeIn>
          <Divider className="my-12" />
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
