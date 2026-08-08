import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  club?: string;
  message?: string;
  consent?: boolean;
  honeypot?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, email, phone, club, message, consent, honeypot } = payload;

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !consent || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  // {{TBD: proveedor de email — Resend o similar}}
  if (process.env.RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Premier Gym <web@premiergym.es>",
        to: "premiergymsescorxador@gmail.com",
        subject: `Nuevo contacto web — ${club || "sin club"}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone ?? "-"}\nClub: ${club || "-"}\n\n${message}`,
      }),
    });
  } else {
    console.info("[contacto] proveedor de email no configurado. Envío recibido:", {
      name,
      email,
      phone,
      club,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
