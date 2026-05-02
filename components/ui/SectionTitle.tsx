import { cn } from "@/lib/cn"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  invert?: boolean
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  className,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left"
  const eyebrowColor = invert ? "text-accent" : "text-accent-dark"
  const titleColor = invert ? "text-white" : "text-dark"
  const subColor = invert ? "text-white/70" : "text-slate-600"
  return (
    <div className={cn("max-w-[760px]", alignCls, className)}>
      {eyebrow && (
        <div
          className={cn(
            "font-mono text-[11px] uppercase tracking-[0.18em] mb-3",
            eyebrowColor
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] leading-[1.05] text-balance",
          titleColor
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            subColor
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
