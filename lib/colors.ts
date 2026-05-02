/**
 * Convert "#RRGGBB" -> "R G B" string for Tailwind's CSS-var alpha syntax:
 *   rgb(var(--color-primary) / <alpha-value>)
 */
export function hexToRgbTriplet(hex: string): string {
  const h = hex.replace("#", "")
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `${r} ${g} ${b}`
}
