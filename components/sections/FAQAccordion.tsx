import type { FAQItem } from "@/content/faq";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-gray-300 border-y border-gray-300">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal uppercase tracking-[0.08em] [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="relative size-4 flex-shrink-0 text-accent" aria-hidden="true">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-px w-4 bg-current" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-open:rotate-90">
                <span className="h-4 w-px bg-current" />
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-[65ch] text-base font-light leading-relaxed text-gray-700">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
