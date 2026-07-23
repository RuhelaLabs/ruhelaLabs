import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Users, TrendingUp } from "lucide-react"
import { SERVICES } from "@/lib/constants/services"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CalendlyButton } from "@/components/common/CalendlyButton"
import { FadeIn } from "@/components/animations/FadeIn"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)
  if (!service) return {}
  return {
    title: `${service.title} | Ruhela Solutions`,
    description: service.description,
    alternates: { canonical: `https://ruhelasolutions.com/services/${id}` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)
  if (!service) notFound()

  const Icon = service.icon

  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div
          className="absolute top-0 left-0 right-0 h-[500px] opacity-10 blur-3xl"
          style={{ background: `radial-gradient(ellipse at 50% 0%, #7c3aed, transparent 70%)` }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>

            {/* Icon + badge row */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl shrink-0`}
              >
                <Icon className="h-7 w-7 sm:h-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
                Our Service
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {service.longDescription}
            </p>

            {/* Quick CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gradient-brand text-white font-bold hover:opacity-90 transition-all shadow-xl shadow-indigo-200 group"
                )}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CalendlyButton>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold")}
              >
                Send a Message
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 lg:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                What&apos;s Included
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10">
              Everything you get with this service
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <FadeIn key={feature} direction="up" delay={i * 0.05}>
                <div className="flex items-start gap-4 glass-card rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium leading-snug">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 lg:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Results You Can Expect
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10">
              What changes for your business
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={benefit} direction="left" delay={i * 0.07}>
                <div className="flex items-center gap-5 glass-card rounded-2xl p-5 sm:p-6">
                  <span className="text-2xl font-extrabold text-primary/20 w-8 shrink-0 text-right">
                    0{i + 1}
                  </span>
                  <div className="w-px h-10 bg-border shrink-0" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="py-16 lg:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Ideal For
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
              Who should choose this service?
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {service.forWho}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 lg:py-24 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div
              className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
                boxShadow: "0 0 60px #4f46e533, 0 25px 50px rgba(0,0,0,0.4)",
              }}
            >
              {/* shimmer top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #a78bfa, #22d3ee, transparent)" }}
                aria-hidden="true"
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 shadow-xl`}
              >
                <Icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to get started with{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {service.title}?
                </span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Book a free 30-minute strategy call. No commitment, no pressure — just a clear plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CalendlyButton
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-white text-primary font-bold hover:bg-white/90 hover:scale-[1.02] transition-all shadow-2xl group"
                  )}
                >
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CalendlyButton>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/30 text-white hover:bg-white/10 font-semibold")}
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/40">
                Free consultation &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Reply within 2 hours
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
