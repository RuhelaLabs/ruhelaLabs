import { FadeIn } from "@/components/animations/FadeIn"

const paragraphs = [
  "The marketing industry was changing faster than most agencies could keep up with. AI was no longer the future — it was the present. So we made a choice: build an agency that was native to this new era, not struggling to adapt to it.",
  "Ruhela Solutions was founded on a straightforward belief — that every business, regardless of size or budget, deserves marketing that is intelligent, intentional, and built around real, measurable growth. Not noise. Not vanity metrics. Actual results.",
  "We work with small businesses, startups, clinics, and coaching institutes who are serious about scaling. We bring AI-powered strategy, sharp creative execution, and a genuine commitment to our partners' success — because when you grow, we grow.",
]

export function OurStory() {
  return (
    <section className="section-alt py-20" aria-label="Our Story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                <div className="space-y-6">
                  {[
                    { label: "Founded", value: "2026" },
                    { label: "Location", value: "Panchkula, Haryana" },
                    { label: "Mission", value: "AI-Powered Growth for Every Business" },
                    { label: "Approach", value: "Intelligence Over Instinct" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-24 shrink-0 pt-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl gradient-brand opacity-10 blur-xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full gradient-brand opacity-10 blur-2xl"
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          {/* Right — Story */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full gradient-brand inline-block" />
                Our Story
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Built for{" "}
                <span className="gradient-brand-text">This Moment.</span>
              </h2>
            </FadeIn>

            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <FadeIn key={i} delay={0.25 + i * 0.1}>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
