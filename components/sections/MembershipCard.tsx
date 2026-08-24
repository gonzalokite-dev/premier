import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { CheckIcon } from "@/components/ui/Icon";
import { whatsappHref, SIGNUP_URL_SESCORXADOR } from "@/content/site";
import type { Membership } from "@/content/memberships";
import type { Club } from "@/content/clubs";

export default function MembershipCard({
  membership,
  club,
}: {
  membership: Membership;
  club: Club;
}) {
  const message = `Hola, estoy interesado/a en la ${membership.title} de ${club.name}.`;
  const signupHref = club.slug === "sescorxador" ? SIGNUP_URL_SESCORXADOR : whatsappHref(message);

  return (
    <div
      className={`flex h-full flex-col border p-8 sm:p-10 ${
        membership.highlight ? "border-black bg-sand-50" : "border-gray-300"
      }`}
    >
      {/* El distintivo va en el flujo, nunca superpuesto: en móvil el título
          ocupa dos líneas y antes se solapaba. La tarjeta sin distintivo
          reserva el mismo hueco a partir de lg para que ambos títulos queden
          alineados en la vista de dos columnas. */}
      <span
        aria-hidden={!membership.highlight}
        className={`mb-6 inline-flex self-start px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] ${
          membership.highlight ? "bg-black text-white" : "invisible max-lg:hidden"
        }`}
      >
        {membership.highlight ?? "—"}
      </span>
      <Heading as="h3" size="md">
        {membership.title}
      </Heading>
      <p className="mt-4 text-base font-light leading-relaxed text-gray-700">{membership.text}</p>
      <ul className="mt-8 flex flex-col gap-3">
        {membership.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-light text-gray-700">
            <CheckIcon className="mt-0.5 size-4 flex-shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-1 flex-col justify-end gap-6">
        <p className="text-2xl font-extralight">{membership.price}</p>
        {/* {{TBD: enlace de alta online para Avenidas — de momento deriva a WhatsApp}} */}
        <Button href={signupHref} external variant="dark">
          Hazte Socio
        </Button>
      </div>
    </div>
  );
}
