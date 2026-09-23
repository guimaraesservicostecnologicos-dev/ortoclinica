import { MessageCircle } from 'lucide-react'
import { CLINIC } from '../../data/nav'

export function WhatsAppButton() {
  return (
    <a
      href={CLINIC.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 md:right-8 md:bottom-8"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  )
}
