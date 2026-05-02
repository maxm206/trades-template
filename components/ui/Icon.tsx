import {
  Snowflake,
  Flame,
  Plus,
  Wind,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  Calendar,
  MessageCircle,
  Camera,
  ArrowRight,
  Quote,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

const map: Record<string, LucideIcon> = {
  snowflake: Snowflake,
  flame: Flame,
  fire: Flame,
  plus: Plus,
  wind: Wind,
  wrench: Wrench,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  clock: Clock,
  shield: ShieldCheck,
  check: CheckCircle2,
  star: Star,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  x: X,
  menu: Menu,
  calendar: Calendar,
  message: MessageCircle,
  camera: Camera,
  "arrow-right": ArrowRight,
  quote: Quote,
  sparkles: Sparkles,
}

type Props = {
  name: string
  className?: string
  strokeWidth?: number
  "aria-hidden"?: boolean
}

export function Icon({ name, className, strokeWidth = 2, "aria-hidden": ah = true }: Props) {
  const Comp = map[name] ?? Sparkles
  return <Comp className={className} strokeWidth={strokeWidth} aria-hidden={ah} />
}
