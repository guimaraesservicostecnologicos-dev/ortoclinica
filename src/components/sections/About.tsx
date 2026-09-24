import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../lib/utils'
import ambulatorio from '../../assets/about/ambulatorio.webp'
import urgencia from '../../assets/about/urgencia.webp'
import cirurgia from '../../assets/about/cirurgia.webp'

const BLOCKS = [
  {
    label: 'Ambulatório',
    text: 'Especialistas de cada área do aparelho locomotor, diagnóstico por imagem e reabilitação reunidos no mesmo hospital.',
    tags: ['Consultas'],
    image: ambulatorio,
    alt: 'Ortopedista da Ortoclínica analisando uma radiografia no consultório',
  },
  {
    label: 'Urgência',
    text: 'Fraturas, luxações e traumas atendidos a qualquer hora, com equipe de plantão no mesmo prédio.',
    tags: ['24 horas', 'Trauma'],
    image: urgencia,
    alt: 'Entrada da urgência da Ortoclínica',
  },
  {
    label: 'Cirurgia',
    text: 'Centro cirúrgico equipado para procedimentos de alta complexidade, das técnicas artroscópicas às próteses.',
    tags: ['Centro cirúrgico', 'Internação'],
    image: cirurgia,
    alt: 'Equipe cirúrgica da Ortoclínica em procedimento',
  },
]

export function About() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  // Arrows stay inert while every card fits; they wake up once the track
  // overflows, so adding a fourth service needs no extra wiring.
  const syncArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft >= max - 1)
  }, [])

  useEffect(() => {
    syncArrows()
    window.addEventListener('resize', syncArrows)
    return () => window.removeEventListener('resize', syncArrows)
  }, [syncArrows])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const hasOverflow = !(atStart && atEnd)

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          A Ortoclínica
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-2xl font-sans text-3xl leading-[1.15] font-normal tracking-tight text-ink md:text-[2.5rem]">
          Do atendimento planejado à urgência que não pode esperar.
        </h2>
      </Reveal>

      {/* One Reveal around the whole track: per-card reveals would leave the
          off-screen cards stuck at their initial transform, which overflows
          the scroller vertically */}
      <Reveal delay={0.12}>
        <div
          ref={trackRef}
          onScroll={syncArrows}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:mt-16"
        >
          {BLOCKS.map((block) => (
            <article
              key={block.label}
              className="group w-[80%] shrink-0 snap-start sm:w-[46%] md:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={block.image}
                  alt={block.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />

                <div className="pointer-events-none absolute top-4 right-4 flex flex-wrap justify-end gap-2">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Frosted band carries the label over the photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/35 px-5 py-4 backdrop-blur-md">
                  <h3 className="font-sans text-lg font-normal tracking-tight text-white">
                    {block.label}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-body">{block.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 flex justify-center gap-3">
        {[
          { dir: -1 as const, Icon: ChevronLeft, label: 'Ver serviços anteriores', disabled: atStart },
          { dir: 1 as const, Icon: ChevronRight, label: 'Ver próximos serviços', disabled: atEnd },
        ].map(({ dir, Icon, label, disabled }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={() => scrollByCard(dir)}
            disabled={disabled}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-200',
              disabled
                ? 'cursor-default text-ink/25'
                : 'cursor-pointer hover:border-ink/40 hover:bg-ink/5',
            )}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {!hasOverflow && (
        <p className="sr-only">Todos os serviços estão visíveis; a navegação lateral está inativa.</p>
      )}
    </section>
  )
}
