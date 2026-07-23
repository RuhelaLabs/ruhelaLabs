"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { itemVariants } from "@/components/animations/StaggerChildren"
import type { Service } from "@/lib/constants/services"

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={`/services/${service.id}`}
        className="group glass-card rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300 flex sm:flex-col items-start gap-4 sm:gap-0 h-full"
      >
        {/* Icon Box */}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2 tracking-tight">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-2 sm:mt-4 group-hover:gap-2 transition-all duration-200">
            Learn more <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
