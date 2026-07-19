"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { ServiceCard } from "@/components/common/ServiceCard"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { SERVICES } from "@/lib/constants/services"

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Every Service Built"
          titleHighlight="Around Your Growth"
          description="We combine AI technology with proven marketing strategies to deliver results that actually move your business forward."
        />
        <StaggerChildren
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
