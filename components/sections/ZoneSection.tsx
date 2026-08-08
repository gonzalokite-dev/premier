import SmartImage from "@/components/ui/SmartImage";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import type { Space } from "@/content/spaces";

export default function ZoneSection({
  space,
  reverse = false,
}: {
  space: Space;
  reverse?: boolean;
}) {
  return (
    <section id={space.slug} className="grid scroll-mt-24 items-stretch lg:min-h-[70dvh] lg:grid-cols-2">
      <div className={`relative min-h-[45dvh] lg:min-h-0 ${reverse ? "lg:order-2" : ""}`}>
        <SmartImage
          src={space.image}
          alt={space.imageAlt}
          placeholderLabel={space.imagePlaceholder}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex items-center bg-white">
        <FadeIn className="px-6 py-16 sm:px-12 lg:px-16 xl:px-20">
          {space.avenidasOnly && (
            <Eyebrow className="mb-4 text-accent">
              Disponible por el momento solo en Premier Gym Avenidas
            </Eyebrow>
          )}
          <Heading as="h2" size="lg">
            {space.title}
          </Heading>
          <p className="mt-6 max-w-[60ch] text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            {space.text}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
