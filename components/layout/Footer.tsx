import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { PhoneIcon, MailIcon, WhatsAppIcon, InstagramIcon } from "@/components/ui/Icon";
import { NAV_ITEMS, FOOTER_LEGAL_LINKS } from "@/content/nav";
import { CLUB_LIST } from "@/content/clubs";
import { OPENING_HOURS } from "@/content/contact";
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  SOCIAL_LINKS,
} from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="grid gap-16 py-24 md:grid-cols-4 md:py-32">
        <div>
          <Link href="/" aria-label="Premier Gym — Inicio" className="relative block h-8 w-40">
            <Image
              src="/assets/logo/premier-gym-white.svg"
              alt="Premier Gym"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <Eyebrow className="text-white/50">Navegación</Eyebrow>
          <ul className="mt-6 space-y-3 text-sm font-light">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Eyebrow className="text-white/50">Nuestros Clubes</Eyebrow>
          <ul className="mt-6 space-y-6 text-sm font-light">
            {CLUB_LIST.map((club) => (
              <li key={club.slug}>
                <Link href={`/clubes/${club.slug}`} className="hover:text-white/70">
                  {club.name}
                </Link>
                <p className="mt-1 text-white/50">{club.addressLines[0]}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow className="text-white/50">Contacto</Eyebrow>
          <ul className="mt-6 space-y-3 text-sm font-light">
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-white/70">
                <PhoneIcon className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white/70"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 hover:text-white/70">
                <MailIcon className="size-4" />
                {EMAIL}
              </a>
            </li>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white/70"
                >
                  <InstagramIcon className="size-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-light text-white/50">{OPENING_HOURS.sescorxador.weekdays}</p>
          <p className="text-sm font-light text-white/50">{OPENING_HOURS.sescorxador.weekend}</p>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/15 py-8 text-xs uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LEGAL_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-white/70">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p>© 2026 Premier Gym. Palma de Mallorca.</p>
      </Container>
    </footer>
  );
}
