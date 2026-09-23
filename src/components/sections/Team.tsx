import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { TEAM, type TeamMember } from '../../data/team'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../lib/utils'

/** Branded stand-in until the real portraits arrive. */
function Portrait({ member, className }: { member: TeamMember; className?: string }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={cn('h-full w-full object-cover object-top', className)}
      />
    )
  }
  return (
    <div
      aria-hidden
      className={cn(
        'flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-dark to-primary',
        className,
      )}
    >
      <span className="font-sans text-5xl font-light tracking-wide text-white/70">
        {member.initials}
      </span>
    </div>
  )
}

export function Team() {
  const trackRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)
  const [selected, setSelected] = useState<TeamMember | null>(null)

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

  // Escape closes the detail view, and the page behind it stays put
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <section id="equipe" className="bg-primary-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-accent-steel uppercase">
            Nossa equipe
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 text-center font-sans text-3xl leading-tight font-normal tracking-tight text-white md:text-[2.5rem]">
            Conheça nossos especialistas
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-white/70">
            Cada área da ortopedia com um especialista dedicado. Toque em um profissional para
            ver a formação completa.
          </p>
        </Reveal>

        {/* One Reveal around the whole track: per-card reveals would leave the
            off-screen cards stuck at their initial transform, which overflows
            the scroller vertically */}
        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            onScroll={syncArrows}
            className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:mt-16"
          >
          {TEAM.map((member) => (
            <article key={member.name} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-[30%]">
              <button
                type="button"
                onClick={() => setSelected(member)}
                aria-label={`Ver detalhes de ${member.name}`}
                className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 hover:ring-white/25"
              >
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <Portrait member={member} />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="font-sans text-lg leading-tight font-medium text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{member.role}</p>
                </div>
              </button>
            </article>
          ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {[
          { dir: -1 as const, Icon: ChevronLeft, label: 'Ver especialistas anteriores', disabled: atStart },
          { dir: 1 as const, Icon: ChevronRight, label: 'Ver próximos especialistas', disabled: atEnd },
        ].map(({ dir, Icon, label, disabled }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={() => scrollByCard(dir)}
            disabled={disabled}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200',
              disabled
                ? 'cursor-default border-white/10 text-white/25'
                : 'cursor-pointer hover:border-white/50 hover:bg-white/10',
            )}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-primary-darker/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="medico-nome"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative grid max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white md:grid-cols-[minmax(0,42%)_1fr]"
            >
              <div className="aspect-[3/4] w-full md:aspect-auto md:h-full">
                <Portrait member={selected} />
              </div>

              <div className="p-7 md:p-9">
                <h3
                  id="medico-nome"
                  className="font-sans text-2xl leading-tight font-medium tracking-tight text-ink"
                >
                  {selected.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">{selected.role}</p>

                <p className="mt-4 text-xs tracking-wide text-body/70 uppercase">
                  {selected.crm} · {selected.rqe}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-body">{selected.bio}</p>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
