import Link from "next/link";
import { ReactNode } from "react";

type Variant = "dark" | "light";

export const buttonBaseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-3 border px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-[400ms] ease-out";

export const buttonVariantClasses: Record<Variant, string> = {
  dark: "border-black text-black hover:bg-black hover:text-white",
  light: "border-white text-white hover:bg-white hover:text-black",
};

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${buttonBaseClasses} ${buttonVariantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
