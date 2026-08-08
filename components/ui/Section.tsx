import { ReactNode } from "react";

type Tone = "white" | "sand" | "black";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-black",
  sand: "bg-sand-50 text-black",
  black: "bg-black text-white",
};

export default function Section({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-40 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  );
}
