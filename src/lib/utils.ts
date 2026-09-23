import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names and resolves Tailwind conflicts, so a `className`
 * passed by a caller actually overrides a component's base styles
 * (plain clsx would keep both and let CSS source order decide).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
