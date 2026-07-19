import { AnimatedCounter } from "@/components/animations/AnimatedCounter"
import { FadeIn } from "@/components/animations/FadeIn"

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Campaigns Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

export function TrustBar() {
  return (
    <section className="section-alt border-y border-border" aria-label="Stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold gradient-brand-text">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
