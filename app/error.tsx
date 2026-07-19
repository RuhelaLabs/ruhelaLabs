"use client"

import { useEffect } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[App Error]", error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-extrabold gradient-brand-text mb-4">Oops</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-8">
          We encountered an unexpected error. Please try again or reach out to
          us directly on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className={cn(
              buttonVariants({ variant: "default" }),
              "gradient-brand text-white font-semibold hover:opacity-90"
            )}
          >
            Try Again
          </button>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-primary/30 text-primary hover:bg-primary/5"
            )}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
