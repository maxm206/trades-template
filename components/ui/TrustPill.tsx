import { Icon } from "./Icon"
import { cn } from "@/lib/cn"

type Props = {
  children: React.ReactNode
  iconName?: string
  invert?: boolean
}

export function TrustPill({ children, iconName = "check", invert = false }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]",
        invert
          ? "bg-white/5 border-white/15 text-white/85"
          : "bg-white border-slate-200 text-slate-700 shadow-card"
      )}
    >
      <Icon
        name={iconName}
        className={cn("h-3.5 w-3.5", invert ? "text-accent" : "text-accent-dark")}
      />
      {children}
    </span>
  )
}
