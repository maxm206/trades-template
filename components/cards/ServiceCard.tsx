import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Icon } from "@/components/ui/Icon"
import type { Service } from "@/config/site"

type Props = { service: Service }

export function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <div className="p-6 flex flex-col h-full">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent/15 group-hover:text-accent-dark transition-colors">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display font-bold text-lg md:text-xl text-dark tracking-[-0.01em]">
          {service.name}
        </h3>
        <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed flex-1">
          {service.description}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 font-display font-bold text-sm text-primary group-hover:text-accent-dark transition-colors">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </div>
      </div>
    </Link>
  )
}
