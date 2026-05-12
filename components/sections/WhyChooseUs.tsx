import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Icon } from "@/components/ui/Icon"

const VALUES = [
  {
    icon: "shield",
    title: "Licensed & Insured",
    body: "CSLB license on file. Workers comp + general liability coverage on every truck.",
  },
  {
    icon: "clock",
    title: "Same-Day Service",
    body: "Most repair calls land a tech at your door within hours, not days.",
  },
  {
    icon: "check",
    title: "Satisfaction Guarantee",
    body: "Not happy with the work? We come back, no questions, no surcharge.",
  },
  {
    icon: "sparkles",
    title: "Financing Available",
    body: "0% APR options through Synchrony for qualified applicants. New systems made affordable.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-dark text-white">
      <Container>
        <SectionTitle
          invert
          eyebrow="Why choose us"
          title="The basics, done right. Every time."
        />
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="card-glass hover:-translate-y-0.5 p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Icon name={v.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
