import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/551639476524"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-whatsapp text-white rounded-full flex items-center justify-center hover:bg-whatsapp/90 transition-colors shadow-sm group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 stroke-[2]" />
    </a>
  );
}
