import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import Heading from "@/components/ui/Heading";
import { CLUB_LIST } from "@/content/clubs";

export default function ClubTileGrid({ hrefBase }: { hrefBase: string }) {
  return (
    <div className="grid gap-px bg-gray-300 sm:grid-cols-2">
      {CLUB_LIST.map((club) => (
        <Link
          key={club.slug}
          href={`${hrefBase}/${club.slug}`}
          className="group relative flex aspect-[4/5] items-end overflow-hidden bg-black sm:aspect-[3/4]"
        >
          <SmartImage
            src={club.tileImage}
            alt={club.heroImageAlt}
            placeholderLabel={club.heroImagePlaceholder}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
          <Heading
            as="span"
            size="md"
            className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-8 text-white"
          >
            {club.name}
          </Heading>
        </Link>
      ))}
    </div>
  );
}
