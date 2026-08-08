import type { Metadata } from "next";
import LegalPageLayout from "@/components/sections/LegalPageLayout";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Premier Gym, gimnasio premium en Palma de Mallorca.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout eyebrow="Información Legal" title="Aviso Legal">
      <p>{"{{TBD: texto de Aviso Legal a aportar por el cliente}}"}</p>
    </LegalPageLayout>
  );
}
