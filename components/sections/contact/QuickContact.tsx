import { Mail, Phone, Calendar } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/constants/site"
import { buildWhatsAppUrl } from "@/lib/utils"
import { FadeIn } from "@/components/animations/FadeIn"
import { CalendlyButton } from "@/components/common/CalendlyButton"

export function QuickContact() {
  return (
    <div className="space-y-6">
      <FadeIn direction="left">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full gradient-brand inline-block" />
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Let&apos;s Talk About{" "}
            <span className="gradient-brand-text">Your Growth</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Fill out the form and we&apos;ll get back to you within 2 hours.
            Prefer a direct conversation? Use any of the options below.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={0.1}>
        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass-card rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2C6.477 2 2 6.478 2 12.004c0 1.76.46 3.41 1.26 4.845L2 22l5.27-1.24A9.956 9.956 0 0 0 12.004 22C17.529 22 22 17.522 22 11.996 22 6.478 17.529 2 12.004 2zm0 18.126a8.118 8.118 0 0 1-4.146-1.135l-.297-.178-3.126.735.782-2.985-.195-.31A8.127 8.127 0 1 1 12.004 20.126z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {SITE.whatsapp}
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-4 glass-card rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {SITE.email}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-4 glass-card rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {SITE.phone}
              </p>
            </div>
          </a>
        </div>
      </FadeIn>

      {/* Calendly */}
      <FadeIn direction="left" delay={0.2}>
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0">
              <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Book a Free 30-min Strategy Call
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Choose a time that works for you — no back-and-forth needed.
              </p>
            </div>
          </div>
          <CalendlyButton
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full gradient-brand text-white font-semibold hover:opacity-90 transition-opacity"
            )}
          >
            Schedule a Call
          </CalendlyButton>
        </div>
      </FadeIn>

      {/* Response time */}
      <FadeIn direction="left" delay={0.3}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          We reply within 2 hours &nbsp;•&nbsp; Mon – Sat, 9AM – 8PM
        </div>
      </FadeIn>
    </div>
  )
}
