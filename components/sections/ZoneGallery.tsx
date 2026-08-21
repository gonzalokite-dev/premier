import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/ui/FadeIn";
import type { SpaceImage } from "@/content/spaces";

export default function ZoneGallery({
  images,
  title,
}: {
  images: SpaceImage[];
  title: string;
}) {
  if (!images.length) return null;

  return (
    <Section tone="white" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <Eyebrow>{title}</Eyebrow>
          <Divider className="my-8" />
        </FadeIn>

        {/* Flex y no grid: así la última fila queda centrada cuando no
            se completa, en vez de alinearse a la izquierda. */}
        <ul className="flex flex-wrap justify-center gap-4">
          {images.map((image, i) => (
            <FadeIn
              as="li"
              key={image.src}
              delay={i * 0.06}
              className="basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
