"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import { Store, Rocket, Stethoscope, GraduationCap } from "lucide-react"

const industries = [
  {
    icon: Store,
    title: "Small & Local Businesses",
    description:
      "Shops, salons, restaurants, and service providers looking to attract more local customers consistently.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Rocket,
    title: "Startups & Founders",
    description:
      "Early-stage startups building their brand, acquiring first customers, and establishing market presence.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description:
      "Doctors, clinics, and diagnostic centres reaching more patients and building online reputation.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    description:
      "Coaching institutes, tutors, and EdTech companies growing their student enrolments with AI marketing.",
    gradient: "from-indigo-600 to-violet-600",
  },
]

export function Industries() {
  return (
    <section
      className="section-alt py-20 lg:py-28"
      aria-label="Industries We Serve"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries We Serve"
          title="We Understand"
          titleHighlight="Your Industry"
          description="Whether you're a local business owner, a startup founder, a doctor, or a coaching institute — we've built strategies for businesses like yours."
        />

        <StaggerChildren
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
