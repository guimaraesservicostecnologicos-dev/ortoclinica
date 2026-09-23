import { cn } from '../../lib/utils'
import { Pill } from './Pill'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  align = 'left',
  tone = 'light',
  className,
}: {
  eyebrow: string
  title: string
  emphasis?: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <Reveal>
        <Pill tone={tone === 'dark' ? 'dark' : 'light'}>{eyebrow}</Pill>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'mt-4 font-serif text-3xl leading-tight md:text-[2.5rem]',
            tone === 'dark' ? 'text-white' : 'text-ink',
          )}
        >
          {title} {emphasis && <span className="font-semibold text-accent">{emphasis}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'mt-4 max-w-xl text-base leading-relaxed',
              tone === 'dark' ? 'text-white/75' : 'text-body',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
