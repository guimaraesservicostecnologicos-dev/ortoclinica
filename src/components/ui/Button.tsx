import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type CommonProps = {
  children: React.ReactNode
  variant?: 'solid' | 'solid-light' | 'outline' | 'outline-light'
  /** `pill` is the fully-rounded shape used by the header CTA. */
  shape?: 'rounded' | 'pill'
  className?: string
}

type ButtonProps = CommonProps & {
  href: string
  external?: boolean
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer'

const shapes = {
  rounded: 'rounded-md',
  pill: 'rounded-full',
}

const variants = {
  solid: 'bg-accent text-white hover:bg-accent-dark',
  /** White fill for dark backgrounds — the hero's primary CTA */
  'solid-light': 'bg-white text-primary-darker hover:bg-white/90',
  outline: 'border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white',
  'outline-light': 'border border-white/70 text-white hover:bg-white hover:text-primary-dark',
}

export function Button({
  children,
  href,
  variant = 'solid',
  shape = 'rounded',
  external,
  className,
}: ButtonProps) {
  const classes = cn(baseStyles, shapes[shape], variants[variant], className)

  if (external || href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}
