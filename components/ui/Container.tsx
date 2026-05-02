import { cn } from "@/lib/cn"

type Props = {
  children: React.ReactNode
  className?: string
  size?: "default" | "narrow" | "wide"
}

export function Container({ children, className, size = "default" }: Props) {
  const max = size === "narrow" ? "max-w-[920px]" : size === "wide" ? "max-w-[1280px]" : "max-w-[1200px]"
  return (
    <div className={cn("mx-auto px-6 md:px-8 lg:px-12", max, className)}>
      {children}
    </div>
  )
}
