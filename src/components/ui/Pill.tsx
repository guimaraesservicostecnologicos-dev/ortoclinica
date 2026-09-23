import { cn } from '../../lib/utils'

export function Pill({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wide uppercase',
        tone === 'light' && 'bg-tint text-primary',
        tone === 'dark' && 'bg-white/10 text-white',
        className,
      )}
    >
      {children}
    </span>
  )
}
