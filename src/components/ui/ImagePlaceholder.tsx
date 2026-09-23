import type { LucideIcon } from 'lucide-react'
import { ImageIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * Stand-in for real photography. Swap for an <img> once the clinic
 * provides photos — kept visually intentional rather than a broken box.
 */
export function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  className,
  rounded = 'rounded-2xl',
}: {
  label: string
  icon?: LucideIcon
  className?: string
  rounded?: string
}) {
  return (
    <div
      className={cn(
        'relative flex min-h-64 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-mid',
        rounded,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center text-white/80">
        <Icon size={34} strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </div>
  )
}
