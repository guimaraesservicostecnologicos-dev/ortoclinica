import { CONVENIOS } from '../../data/convenios'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

// Repeated so the track stays wider than any viewport — with only a couple of
// logos a single pass would leave a visible gap mid-scroll.
const LANE = Array.from({ length: 6 }, () => CONVENIOS).flat()

export function Convenios() {
  return (
    <section id="convenios" className="overflow-hidden py-20 md:py-28">
      <SectionHeading
        eyebrow="Convênios"
        title="Atendemos os principais"
        emphasis="planos de saúde"
        description="Não encontrou o seu plano? Fale com a gente — também atendemos consultas particulares."
        align="center"
        className="mx-auto max-w-2xl px-6 md:px-10"
      />

      <Reveal delay={0.16}>
        <div
          className="group relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          aria-label="Convênios aceitos"
        >
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            {[0, 1].map((lane) => (
              <ul key={lane} className="flex items-center" aria-hidden={lane === 1}>
                {LANE.map((convenio, i) => (
                  <li key={`${convenio.name}-${i}`} className="px-8 md:px-12">
                    <img
                      src={convenio.logo}
                      alt={lane === 0 ? convenio.name : ''}
                      className="h-16 w-auto max-w-[200px] object-contain md:h-20"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
