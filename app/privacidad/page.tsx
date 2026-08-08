import type { Metadata } from "next";
import LegalPageLayout from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Premier Gym, gimnasio premium en Palma de Mallorca.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPageLayout eyebrow="Información Legal" title="Política de Privacidad">
      <p>{"{{TBD: texto de Política de Privacidad a aportar por el cliente}}"}</p>
    </LegalPageLayout>
  );
}
