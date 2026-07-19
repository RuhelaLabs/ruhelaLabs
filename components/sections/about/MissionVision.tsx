"use client"

import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import { Compass, Eye } from "lucide-react"

const items = [
  {
    icon: Compass,
    label: "Our Mission",
    text: "To make AI-powered marketing accessible to every business — not just the ones with enterprise budgets. We believe intelligent marketing should be a right, not a privilege.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be recognized across India as the agency that redefined what digital marketing could achieve — where technology, creativity, and strategy work together to build brands that outlast trends and outperform expectations, consistently.",
  },
]

export function MissionVision() {
  return (
    <section className="py-20" aria-label="Mission and Vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.15}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full gradient-brand opacity-5 blur-2xl"
                  aria-hidden="true"
                />
                <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                  {item.label}
                </span>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
