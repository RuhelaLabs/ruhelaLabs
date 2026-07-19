"use client"

import { ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/common/CalendlyButton"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-pb">
      <CalendlyButton className="gradient-brand flex items-center justify-center gap-2 w-full py-4 text-white font-semibold text-sm tracking-wide">
        Get Free Consultation
        <ArrowRight className="h-4 w-4" />
      </CalendlyButton>
    </div>
  )
}
