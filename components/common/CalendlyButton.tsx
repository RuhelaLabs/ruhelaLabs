"use client"

import { SITE } from "@/lib/constants/site"
import { cn } from "@/lib/utils"

type CalendlyButtonProps = {
  className?: string
  children: React.ReactNode
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

function loadCalendlyAndOpen() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: SITE.calendly })
    return
  }

  const link = document.createElement("link")
  link.href = "https://assets.calendly.com/assets/external/widget.css"
  link.rel = "stylesheet"
  document.head.appendChild(link)

  const script = document.createElement("script")
  script.src = "https://assets.calendly.com/assets/external/widget.js"
  script.onload = () => window.Calendly?.initPopupWidget({ url: SITE.calendly })
  document.head.appendChild(script)
}

export function CalendlyButton({ className, children }: CalendlyButtonProps) {
  return (
    <button
      onClick={loadCalendlyAndOpen}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </button>
  )
}
