import type { Metadata } from "next";
import LegalPageLayout from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Premier Gym, gimnasio premium en Palma de Mallorca.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPageLayout eyebrow="Información Legal" title="Política de Cookies">
      <p>{"{{TBD: texto de Política de Cookies a aportar por el cliente}}"}</p>
      <p>
        Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu consentimiento,
        cookies analíticas y de marketing. Puedes cambiar tus preferencias en cualquier momento
        borrando los datos de navegación de este sitio.
      </p>
    </LegalPageLayout>
  );
}
