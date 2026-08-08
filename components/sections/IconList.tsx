import { CheckIcon } from "@/components/ui/Icon";
import FadeIn from "@/components/ui/FadeIn";

export default function IconList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-x-10 gap-y-5 sm:grid-cols-2 ${className}`}>
      {items.map((item, i) => (
        <FadeIn as="li" key={item} delay={i * 0.05} className="flex items-start gap-4">
          <CheckIcon className="mt-0.5 size-4 flex-shrink-0 text-accent" />
          <span className="text-base font-light leading-relaxed">{item}</span>
        </FadeIn>
      ))}
    </ul>
  );
}
