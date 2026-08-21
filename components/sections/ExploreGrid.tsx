import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import type { Space } from "@/content/spaces";

export default function ExploreGrid({ spaces }: { spaces: Space[] }) {
  return (
    // Flex en lugar de grid: con un número impar de zonas, grid deja celdas
    // vacías que muestran el fondo. Aquí la última fila queda centrada.
    <div className="flex flex-wrap justify-center gap-px">
      {spaces.map((space) => (
        <Link
          key={space.slug}
          href={`/espacios/${space.slug}`}
          className="group relative flex aspect-[3/4] basis-full items-end overflow-hidden bg-black sm:basis-[calc(50%-1px)] lg:basis-[calc(33.333%-1px)] xl:basis-[calc(20%-1px)]"
        >
          <SmartImage
            src={space.image}
            alt={space.imageAlt}
            placeholderLabel={space.imagePlaceholder}
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
