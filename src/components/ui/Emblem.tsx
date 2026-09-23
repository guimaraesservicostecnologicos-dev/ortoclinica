import { Cross } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Emblem({
  size = 64,
  tone = 'dark',
  className,
}: {
  size?: number
  tone?: 'dark' | 'light'
  className?: string
}) {
  const ring = tone === 'dark' ? 'border-accent' : 'border-accent-light'
  const inner = tone === 'dark' ? 'border-white/25 bg-primary-dark' : 'border-primary-dark/15 bg-white'
  const iconColor = tone === 'dark' ? 'text-accent' : 'text-primary-dark'

  return (
    <div
      style={{ width: size, height: size }}
      className={cn('relative flex shrink-0 items-center justify-center rounded-full border-2', ring, className)}
    >
      <div className={cn('flex h-[80%] w-[80%] items-center justify-center rounded-full border', inner)}>
        <Cross className={iconColor} size={size * 0.34} strokeWidth={1.5} />
      </div>
    </div>
  )
}
