"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";
import { CLUB_LIST, type ClubSlug } from "@/content/clubs";

type Status = "idle" | "loading" | "success" | "error";

const fieldClasses =
  "min-h-[44px] border border-gray-300 bg-white px-4 py-3 text-base font-light text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black";
const labelClasses = "text-xs font-normal uppercase tracking-[0.2em] text-gray-500";

export default function ContactForm({ defaultClub }: { defaultClub?: ClubSlug }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !message || !consent || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: data.get("phone"),
          club: data.get("club"),
          message,
          consent,
          honeypot: data.get("company"),
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Nombre
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            Teléfono
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="club" className={labelClasses}>
            Club de interés
          </label>
          <select id="club" name="club" defaultValue={defaultClub ?? ""} className={fieldClasses}>
            <option value="">Sin preferencia</option>
            {CLUB_LIST.map((club) => (
              <option key={club.slug} value={club.slug}>
                {club.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Mensaje
        </label>
        <textarea id="message" name="message" required rows={5} className={fieldClasses} />
      </div>

      {/* Honeypot antispam: campo oculto de forma visual pero accesible a bots */}
      <div className="absolute left-[-9999px] top-0" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm font-light text-gray-700">
        <input type="checkbox" name="consent" required className="mt-1 size-4" />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacidad" className="underline underline-offset-4">
            Política de Privacidad
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className={`${buttonBaseClasses} ${buttonVariantClasses.dark} self-start disabled:opacity-50`}
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <div role="status" aria-live="polite" className="text-sm font-light">
        {status === "success" && <p className="text-gray-700">Gracias, hemos recibido tu mensaje.</p>}
        {status === "error" && (
          <p className="text-gray-700">
            No hemos podido enviar tu mensaje. Revisa los campos o escríbenos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
