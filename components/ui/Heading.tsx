import { ElementType, ReactNode } from "react";

type Size = "display" | "lg" | "md";

const sizeClasses: Record<Size, string> = {
  display: "text-[clamp(2.5rem,5vw+1rem,6rem)] font-extralight",
  lg: "text-[clamp(2rem,3vw+1rem,3.5rem)] font-extralight",
  md: "text-[clamp(1.5rem,2vw+1rem,2.25rem)] font-light",
};

export default function Heading({
  children,
  as: As = "h2",
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  size?: Size;
  className?: string;
}) {
  return (
    <As className={`uppercase leading-[1.1] tracking-[0.14em] ${sizeClasses[size]} ${className}`}>
      {children}
    </As>
  );
}
