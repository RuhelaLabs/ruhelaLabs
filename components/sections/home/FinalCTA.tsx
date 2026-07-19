import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations/FadeIn"
import { CalendlyButton } from "@/components/common/CalendlyButton"

export function FinalCTA() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-brand" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mb-6">
            Ready to Grow?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call today. No templates. No
            guesswork. Just a plan built specifically around your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-primary hover:bg-white/90 font-bold hover:scale-[1.02] transition-all duration-200 shadow-2xl group"
              )}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CalendlyButton>
          </div>
          <p className="mt-6 text-sm text-white/60">
            ✓ Free &nbsp;•&nbsp; No commitment &nbsp;•&nbsp; Reply within 2 hours
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
