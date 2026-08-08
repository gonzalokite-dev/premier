"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { MenuIcon } from "@/components/ui/Icon";
import MenuOverlay from "./MenuOverlay";

const HERO_ROUTES = new Set(["/", "/clubes/sescorxador", "/clubes/avenidas"]);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHeroRoute = HERO_ROUTES.has(pathname ?? "");
  const transparent = isHeroRoute && !scrolled && !open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          transparent ? "bg-transparent" : "border-b border-gray-300 bg-white"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Premier Gym — Inicio" className="relative z-10 block h-8 w-40">
            <Image
              src={transparent ? "/assets/logo/premier-gym-white.svg" : "/assets/logo/premier-gym-black.svg"}
              alt="Premier Gym"
              fill
              sizes="160px"
              className="object-contain object-left"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className={`relative z-10 flex size-11 items-center justify-center ${
              transparent ? "text-white" : "text-black"
            }`}
          >
            <MenuIcon className="size-6" />
          </button>
        </Container>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
