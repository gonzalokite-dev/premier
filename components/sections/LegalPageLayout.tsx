import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";

export default function LegalPageLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-20">
      <Section tone="white">
        <Container className="max-w-3xl">
          <FadeIn>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading as="h1" size="lg" className="mt-4">
              {title}
            </Heading>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="mt-12 flex flex-col gap-6 text-base font-light leading-relaxed text-gray-700"
          >
            {children}
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
