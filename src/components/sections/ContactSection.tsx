import { CLINIC } from '../../data/nav'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
      <div>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos cuidar do seu"
          emphasis="movimento"
          description="Entre em contato para agendar sua avaliação. Nossa equipe responde rapidamente pelo WhatsApp ou telefone."
        />
        <Reveal delay={0.2}>
          <div className="mt-7">
            <Button href={CLINIC.whatsappHref} external>
              Entre em contato conosco
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <iframe
            title="Localização da Ortoclínica"
            src={CLINIC.mapsEmbedSrc}
            width="100%"
            height="360"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  )
}
