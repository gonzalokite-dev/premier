import Button from "@/components/ui/Button";
import { whatsappHref } from "@/content/site";
import type { TemporaryPass } from "@/content/memberships";
import type { Club } from "@/content/clubs";

export default function TemporaryPassList({
  passes,
  club,
}: {
  passes: TemporaryPass[];
  club: Club;
}) {
  return (
    <div className="divide-y divide-gray-300 border-y border-gray-300">
      {passes.map((pass) => {
        const message = `Hola, estoy interesado/a en el ${pass.title} de ${club.name}.`;
        return (
          <div
            key={pass.id}
            className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-2xl">
              <h3 className="text-lg font-normal uppercase tracking-[0.1em]">{pass.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-700">{pass.text}</p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-6 sm:flex-col sm:items-end sm:gap-4">
              <span className="text-xl font-extralight">{pass.price} €</span>
              {/* Los accesos temporales se gestionan por WhatsApp, no por alta online */}
              <Button
                href={whatsappHref(message)}
                external
                variant="dark"
                className="px-6 py-3 text-xs"
              >
                Reservar
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
