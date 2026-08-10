import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { PinIcon, ClockIcon } from "@/components/ui/Icon";
import { googleMapsDirectionsUrl } from "@/content/site";
import type { OpeningHours } from "@/content/contact";

export default function LocationBlock({
  addressLines,
  mapEmbed,
  hours,
  tone = "white",
}: {
  addressLines: string[];
  mapEmbed: string | null;
  hours?: OpeningHours;
  tone?: "white" | "sand";
}) {
  const address = addressLines.join(", ");

  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
        <FadeIn>
          <Eyebrow>Ubicación</Eyebrow>
          <Heading as="h2" size="lg" className="mt-4">
            Dónde Estamos
          </Heading>
          <div className="mt-6 flex items-start gap-3">
            <PinIcon className="mt-1 size-4 flex-shrink-0 text-accent" />
            <address className="not-italic text-base font-light leading-relaxed text-gray-700">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          {hours && (
            <div className="mt-4 flex items-start gap-3">
              <ClockIcon className="mt-1 size-4 flex-shrink-0 text-accent" />
              <p className="text-base font-light leading-relaxed text-gray-700">
                <span className="block">{hours.weekdays}</span>
                <span className="block">{hours.weekend}</span>
              </p>
            </div>
          )}
          <Button href={googleMapsDirectionsUrl(address)} external variant="dark" className="mt-8">
            Cómo llegar
          </Button>
        </FadeIn>

        <FadeIn delay={0.1}>
          {mapEmbed ? (
            <iframe
              src={mapEmbed}
              title="Mapa de ubicación"
              loading="lazy"
              className="aspect-[4/3] w-full grayscale"
              style={{ border: 0 }}
            />
          ) : (
            <PlaceholderImage alt="Mapa de ubicación" className="aspect-[4/3] w-full" />
          )}
        </FadeIn>
      </Container>
    </Section>
  );
}
