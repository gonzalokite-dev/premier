import { WhatsAppIcon } from "@/components/ui/Icon";
import { WHATSAPP_URL } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex size-14 items-center justify-center rounded-full border border-black bg-white text-black shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
