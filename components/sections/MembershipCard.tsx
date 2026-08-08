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
    <div className="relative flex h-full flex-col border border-gray-300 p-8 sm:p-10">
      {membership.highlight && (
        <span className="absolute right-8 top-8 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
          {membership.highlight}
        </span>
      )}
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
