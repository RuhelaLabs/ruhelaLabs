import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
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
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed, #4f46e5)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <div className="flex items-center gap-5 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg shrink-0`}
              >
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Our Services
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {service.longDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* What's Included */}
            <FadeIn direction="left">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Benefits + For Who */}
            <div className="space-y-8">
              <FadeIn direction="right">
                <div className="glass-card rounded-3xl p-8">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    What You Get
                  </h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <div className="glass-card rounded-3xl p-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Who Is This For?
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.forWho}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* CTA */}
          <FadeIn direction="up" delay={0.15}>
            <div className="mt-16 text-center glass-card rounded-3xl p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Book a free 30-minute strategy call. We&apos;ll understand your business and show you exactly how{" "}
                <span className="text-primary font-semibold">{service.title}</span> can work for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CalendlyButton
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "gradient-brand text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-xl shadow-indigo-200 group"
                  )}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CalendlyButton>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "font-semibold"
                  )}
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
