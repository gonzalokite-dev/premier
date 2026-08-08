import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import type { Space } from "@/content/spaces";

export default function ExploreGrid({ spaces }: { spaces: Space[] }) {
  return (
    <div className="grid gap-px bg-gray-300 sm:grid-cols-2 lg:grid-cols-4">
      {spaces.map((space) => (
        <Link
          key={space.slug}
          href={`/espacios/${space.slug}`}
          className="group relative flex aspect-[3/4] items-end overflow-hidden bg-black"
        >
          <SmartImage
            src={space.image}
            alt={space.imageAlt}
            placeholderLabel={space.imagePlaceholder}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
          <span className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-5 text-xs font-medium uppercase tracking-[0.15em] text-white">
            {space.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
