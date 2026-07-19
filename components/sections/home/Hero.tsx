"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeroVisual } from "@/components/sections/home/HeroVisual"
import { CalendlyButton } from "@/components/common/CalendlyButton"

const badgeText = "✦ AI-Powered Marketing Agency"
const headline = ["Grow Your Business", "With The Power of AI"]
const subheadline =
  "We help small businesses, startups, clinics and coaching institutes get more customers using AI-powered digital marketing."

const badges = [
  "Free Consultation",
  "No commitment",
  "Reply within 2 hours",
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Gradient Blob Background */}
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.452 0.222 271.9), oklch(0.523 0.267 293.1))",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.523 0.267 293.1), oklch(0.452 0.222 271.9))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full gradient-brand animate-pulse" />
                {badgeText}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              {headline.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {i === 1 ? (
                    <span className="gradient-brand-text">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <CalendlyButton
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gradient-brand text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-xl shadow-indigo-200 group"
                )}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CalendlyButton>
              <Link
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-border text-foreground hover:bg-muted hover:border-primary/40 transition-all duration-200 font-semibold"
                )}
              >
                See Our Services
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Brand Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
