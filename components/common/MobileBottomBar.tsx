"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-pb">
      <Link
        href="/contact"
        prefetch={true}
        className="gradient-brand flex items-center justify-center gap-2 w-full py-4 text-white font-semibold text-sm tracking-wide"
      >
        Get Free Consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
