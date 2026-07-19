"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import { Brain, UserCheck, FileText, Calendar, Building2, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "AI-Powered Approach",
    description:
      "We use cutting-edge AI tools to research, create, and optimise — giving you an unfair advantage over competitors still working manually.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description:
      "One person handles your account end-to-end. No passing around, no confusion — just a single point of contact who knows your business.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "Weekly reports with real data. You always know exactly what's happening with your campaigns, what's working, and what we're improving.",
  },
  {
    icon: Calendar,
    title: "No Long-Term Lock-In",
    description:
      "Monthly plans with no hidden contracts. We earn your trust every single month by delivering results — not by locking you in.",
  },
  {
    icon: Building2,
    title: "Multi-Industry Experience",
    description:
      "We work across small businesses, startups, healthcare, and education — bringing cross-industry insights to every campaign we run.",
  },
  {
    icon: TrendingUp,
    title: "Results Are Our Only Metric",
    description:
      "We don't celebrate impressions or followers. We celebrate your growth — more leads, more customers, more revenue. That's all that counts.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28" aria-label="Why Choose Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Built Different."
          titleHighlight="By Design."
          description="We didn't adapt to AI — we were built around it. Here's what that means for your business."
        />

        <StaggerChildren
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
