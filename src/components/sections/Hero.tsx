import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import heroBg from '../../assets/hero/frente-ortoclinica.png'

export function Hero() {
  // No top padding here: the header's own bottom padding is the entire gap,
  // which keeps the logo optically centered in the white band above the card.
  return (
    <div className="px-[var(--frame)] pb-[var(--frame)]">
      {/* Font test scoped to the hero only — remove this <link> along with the
          inline fontFamily overrides below once a font decision is made. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      />
      <section
        className="relative flex min-h-[calc(100dvh-var(--header-h)-var(--frame))] items-center overflow-hidden rounded-3xl bg-cover bg-center px-6 py-16 md:rounded-[2rem] md:px-12 md:py-20"
        style={{ fontFamily: "'Inter', sans-serif", backgroundImage: `url(${heroBg})` }}
      >
        {/* Brand-color wash over the photo: heavier on the left so the copy
            stays legible, lighter on the right to let the image read through */}
        <div className="pointer-events-none absolute inset-0 bg-primary-darker/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-darker/70 via-primary-darker/35 to-transparent" />

        <div className="relative max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl leading-[1.05] font-normal tracking-tight text-white md:text-[3.25rem]"
            style={{ fontFamily: 'inherit' }}
          >
            Ortopedia de excelência,
            <br />
            feita para você.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75"
          >
            Acesso imediato a especialistas de referência em cada área da ortopedia, com
            diagnóstico preciso, tecnologia avançada e acompanhamento próximo do primeiro
            atendimento até a reabilitação completa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9"
          >
            <Button href="/contato" variant="solid-light">
              Agende sua consulta
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#sobre"
          aria-label="Rolar para o conteúdo"
          className="absolute bottom-8 left-1/2 flex h-11 w-11 -translate-x-1/2 animate-bounce-slow items-center justify-center rounded-full border border-white/30 text-white/80"
        >
          <ChevronDown size={20} />
        </motion.a>
      </section>
    </div>
  )
}
