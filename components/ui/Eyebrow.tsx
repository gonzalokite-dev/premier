import { ElementType, ReactNode } from "react";

export default function Eyebrow({
  children,
  as: As = "p",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return (
    <As className={`text-xs font-normal uppercase tracking-[0.25em] text-gray-500 ${className}`}>
      {children}
    </As>
  );
}
