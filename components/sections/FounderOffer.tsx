import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { CheckIcon } from "@/components/ui/Icon";
import type { ClubFounderOffer } from "@/content/clubs";

export default function FounderOffer({
  offer,
  ctaHref,
}: {
  offer: ClubFounderOffer;
  ctaHref: string;
}) {
  return (
    <Section tone="black" className="py-24 md:py-32">
      <Container className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <Eyebrow className="text-accent">{offer.eyebrow}</Eyebrow>
          <Heading as="h2" size="display" className="mt-4">
            {offer.heading}
          </Heading>
          <div className="mt-8 flex flex-col items-center gap-1">
            {offer.highlights.map((highlight) => (
              <p key={highlight} className="text-lg font-normal text-white sm:text-xl">
                {highlight}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-[50ch] text-sm font-light text-white/60">
            {offer.note}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 flex items-center justify-center gap-6">
          <span className="text-2xl font-light text-white/40 line-through">
            {offer.priceOriginal}
          </span>
          <span className="text-[clamp(3rem,6vw,5rem)] font-extralight leading-none">
            {offer.priceFounder}
          </span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-[55ch] text-sm font-light leading-relaxed text-white/70">
            {offer.priceNote}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Divider className="my-10 border-white/20" />
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-4">
            {offer.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm font-light text-white/85">
                <CheckIcon className="size-4 flex-shrink-0 text-accent" />
                {benefit}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12">
          <Button href={ctaHref} external variant="light" className="px-12 py-5 text-base">
            {offer.ctaLabel}
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
