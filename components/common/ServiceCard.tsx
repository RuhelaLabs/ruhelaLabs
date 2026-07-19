"use client"

import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import type { Service } from "@/lib/constants/services"

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      variants={itemVariants}
      className="group glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      {/* Icon Box */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}
