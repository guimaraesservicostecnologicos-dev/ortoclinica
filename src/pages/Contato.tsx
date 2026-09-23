import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageBanner } from '../components/layout/PageBanner'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { CLINIC } from '../data/nav'

export function Contato() {
  return (
    <>
      <PageBanner title="Contato" />

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <Reveal>
          <div>
            <h2 className="font-serif text-2xl text-ink">Fale com a Ortoclínica</h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Estamos prontos para agendar sua consulta ou esclarecer qualquer dúvida sobre
              nossas especialidades.
            </p>

            <ul className="mt-8 space-y-5 text-sm text-ink">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <a href={CLINIC.phoneHref} className="hover:text-primary">
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                {CLINIC.address}
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                Segunda a sexta, 8h às 18h
              </li>
            </ul>

            <div className="mt-8">
              <Button href={CLINIC.whatsappHref} external>
                Conversar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="h-full min-h-80 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <iframe
              title="Localização da Ortoclínica"
              src={CLINIC.mapsEmbedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, minHeight: 320 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
