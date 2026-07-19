"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import { Brain, Target, TrendingUp, Handshake } from "lucide-react"

const values = [
  {
    icon: Brain,
    title: "Intelligence Over Instinct",
    description:
      "Every campaign we build starts with data, not assumptions. We use AI to understand your audience deeply, identify real opportunities, and make marketing decisions that are backed by intelligence — not guesswork or gut feeling.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Target,
    title: "Clarity Before Complexity",
    description:
      "We believe the most powerful strategies are the clearest ones. We strip away everything that doesn't directly serve your goals and focus entirely on what moves the needle — executed with precision, measured with honesty.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Results Are the Only Metric",
    description:
      "Impressions, likes, and follower counts mean nothing without business impact. We define success by the growth we create for our partners — more leads, more customers, more revenue. Everything else is just noise.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Handshake,
    title: "Partnerships, Not Projects",
    description:
      "We don't treat clients as transactions. Every business that works with us receives the same dedication, transparency, and commitment we would give our own brand — because your success is the only proof of ours that matters.",
    gradient: "from-indigo-600 to-violet-600",
  },
]

export function Values() {
  return (
    <section
      className="section-alt py-20 lg:py-28"
      aria-label="Our Core Values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Values"
          title="What We"
          titleHighlight="Stand For"
          description="Four principles that guide every decision we make, every campaign we run, and every partnership we build."
        />

        <StaggerChildren
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
