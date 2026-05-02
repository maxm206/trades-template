import Link from "next/link"
import { cn } from "@/lib/cn"

type Variant = "primary" | "secondary" | "ghost" | "outline"
type Size = "sm" | "md" | "lg"

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  external?: boolean
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white border border-accent shadow-glow hover:bg-transparent hover:text-accent transition-colors",
  secondary:
    "bg-white text-dark border border-white hover:bg-transparent hover:text-white transition-colors",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors",
  outline:
    "bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-white transition-colors",
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base md:text-lg",
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  external,
  ariaLabel,
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-lg font-display font-bold tracking-tight",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  )
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
