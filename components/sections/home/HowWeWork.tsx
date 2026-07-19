"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import { MessageSquare, Lightbulb, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "We start by understanding your business, your goals, and the challenges holding you back. No pitches — just honest conversation.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Custom AI Strategy",
    description:
      "We build a marketing strategy tailored specifically to your business using AI-powered research, audience analysis, and competitive insights.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Precision Execution",
    description:
      "Our team launches your campaigns with speed and precision — content, ads, social media, and creative — all aligned to your goals.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Results & Optimisation",
    description:
      "We track every metric that matters, share transparent weekly reports, and continuously optimise for better performance.",
  },
]

export function HowWeWork() {
  return (
    <section className="section-alt py-20 lg:py-28" aria-label="How We Work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How We Work"
          title="From First Call to"
          titleHighlight="Real Results"
          description="A simple, transparent process designed to get you results without wasting time."
        />

        <StaggerChildren
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.12}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-full h-[2px] bg-gradient-to-r from-border to-transparent z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 glass-card rounded-2xl p-6 h-full">
                  {/* Step number */}
                  <span className="text-5xl font-extrabold gradient-brand-text opacity-30 leading-none block mb-3">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
