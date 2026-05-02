import { Icon } from "./Icon"
import { cn } from "@/lib/cn"

type Props = {
  description: string
  aspect?: "square" | "portrait" | "landscape" | "wide" | "auto"
  className?: string
  tone?: "primary" | "accent" | "neutral"
}

const aspectMap = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  wide: "aspect-[16/9]",
  auto: "",
}

const toneMap = {
  primary:
    "bg-gradient-to-br from-primary/20 via-primary/10 to-primary-dark/20 border-primary/20",
  accent:
    "bg-gradient-to-br from-accent/20 via-accent/10 to-accent-dark/20 border-accent/20",
  neutral:
    "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 border-slate-300",
}

export function PhotoPlaceholder({
  description,
  aspect = "landscape",
  className,
  tone = "primary",
}: Props) {
  return (
    <div
      className={cn(
        "relative rounded-lg border overflow-hidden flex items-center justify-center",
        aspectMap[aspect],
        toneMap[tone],
        className
      )}
      role="img"
      aria-label={description}
    >
      <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
        <Icon
          name="camera"
          className={cn(
            "h-8 w-8",
            tone === "neutral" ? "text-slate-500" : "text-current opacity-50"
          )}
        />
        <div
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.18em] max-w-[200px]",
            tone === "neutral" ? "text-slate-500" : "opacity-70"
          )}
        >
          Photo: {description}
        </div>
      </div>
    </div>
  )
}
