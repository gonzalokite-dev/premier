import type { Metadata } from "next";
import Image from "next/image";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowDownIcon } from "@/components/ui/Icon";
import { CLUB_LIST } from "@/content/clubs";
import { SITE_URL } from "@/content/site";
import { ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gimnasio Premium en Palma de Mallorca",
  description:
    "Premier Gym: gimnasio premium en Palma de Mallorca con dos clubes, S'Escorxador y Avenidas. Circuito EGYM, InBody, BioAge y un ambiente sin masificaciones.",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: "Premier Gym | Gimnasio Premium en Palma de Mallorca",
    images: [{ url: ogImageUrl("Gimnasio Premium en Palma de Mallorca", "Premier Gym"), width: 1200, height: 630 }],
  },
  twitter: {
    images: [ogImageUrl("Gimnasio Premium en Palma de Mallorca", "Premier Gym")],
  },
};

export default function HomePage() {
  return (
    <div className="relative flex h-dvh min-h-dvh w-full flex-col overflow-hidden bg-black text-white">
      <h1 className="sr-only">Premier Gym — Gimnasio Premium en Palma de Mallorca</h1>

      <div className="absolute inset-0">
        {/* {{TBD: sustituir por vídeo de alta calidad cuando esté disponible}} */}
        <SmartImage
          src="/assets/images/sescorxador/reception.jpg"
          alt="Recepción de Premier Gym S'Escorxador, gimnasio premium en Palma de Mallorca"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
        <FadeIn>
          <div className="relative h-12 w-56 sm:h-16 sm:w-80">
            <Image
              src="/assets/logo/premier-gym-white.svg"
              alt="Premier Gym"
              fill
              sizes="320px"
              className="object-contain"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="mt-14 flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center"
        >
          {CLUB_LIST.map((club) => (
            <Button
              key={club.slug}
              href={`/clubes/${club.slug}`}
              variant="light"
              className="w-full sm:w-auto sm:flex-1"
            >
              {club.name}
            </Button>
          ))}
        </FadeIn>
      </div>

      <div className="relative flex justify-center pb-10">
        <span className="flex flex-col items-center gap-2 text-white/70" aria-hidden="true">
          <span className="h-10 w-px animate-pulse bg-white/50" />
          <ArrowDownIcon className="size-4" />
        </span>
      </div>
    </div>
  );
}
