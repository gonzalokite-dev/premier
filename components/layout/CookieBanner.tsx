"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const STORAGE_KEY = "premier-gym-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function save(consent: { analytics: boolean; marketing: boolean }) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ necessary: true, ...consent, decidedAt: Date.now() })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-300 bg-white"
    >
      <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-light leading-relaxed text-gray-700">
            Utilizamos cookies propias y de terceros para el correcto funcionamiento de la web y, con tu
            consentimiento, para analítica y marketing. Puedes aceptar todas, rechazar las no necesarias o
            configurar tus preferencias. Más información en nuestra{" "}
            <Link href="/cookies" className="underline underline-offset-4">
              Política de Cookies
            </Link>
            .
          </p>

          <fieldset className="mt-4 flex flex-wrap gap-6 text-xs uppercase tracking-[0.15em]">
            <legend className="sr-only">Categorías de cookies</legend>
            <label className="flex items-center gap-2 opacity-50">
              <input type="checkbox" checked disabled className="size-4" />
              Necesarias
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="size-4"
              />
              Analíticas
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="size-4"
              />
              Marketing
            </label>
          </fieldset>
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => save({ analytics: false, marketing: false })}
            className="min-h-[44px] border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => save({ analytics, marketing })}
            className="min-h-[44px] border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
          >
            Guardar preferencias
          </button>
          <button
            type="button"
            onClick={() => save({ analytics: true, marketing: true })}
            className="min-h-[44px] border border-black bg-black px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Aceptar todas
          </button>
        </div>
      </Container>
    </div>
  );
}
