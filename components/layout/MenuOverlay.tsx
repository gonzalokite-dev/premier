"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { CloseIcon, WhatsAppBrandIcon, PhoneIcon, MailIcon, InstagramIcon } from "@/components/ui/Icon";
import { NAV_ITEMS } from "@/content/nav";
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  SOCIAL_LINKS,
} from "@/content/site";

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyOpen = useRef(false);

  useEffect(() => {
    if (previouslyOpen.current) onClose();
    previouslyOpen.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (open) {
      previouslyOpen.current = true;
      closeRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-black text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <Container className="flex h-20 flex-shrink-0 items-center justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="flex size-11 items-center justify-center"
            >
              <CloseIcon className="size-6" />
            </button>
          </Container>

          <nav className="flex flex-1 flex-col justify-center py-12">
            <Container>
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="group inline-block py-2 text-[clamp(2rem,6vw,4.5rem)] font-extralight uppercase leading-none tracking-[0.06em]"
                    >
                      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1px]">
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </Container>
          </nav>

          <Container className="flex flex-shrink-0 flex-col gap-4 border-t border-white/20 py-8 text-xs uppercase tracking-[0.2em] text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-white">
                <PhoneIcon className="size-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <WhatsAppBrandIcon className="size-4" /> WhatsApp
              </a>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 hover:text-white">
                <MailIcon className="size-4" /> {EMAIL}
              </a>
            </div>
            {SOCIAL_LINKS.length > 0 && (
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <InstagramIcon className="size-4" /> {s.label}
                  </a>
                ))}
              </div>
            )}
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
