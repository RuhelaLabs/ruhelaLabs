import { FadeIn } from "@/components/animations/FadeIn"

export function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      aria-label="About Hero"
    >
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.452 0.222 271.9), oklch(0.523 0.267 293.1))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full gradient-brand inline-block" />
            About Us
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            We Are Not Here to Follow{" "}
            <span className="gradient-brand-text">Marketing Trends.</span>
            <br />
            We Are Here to Set the Standard.
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ruhela Solutions is where artificial intelligence meets ambitious
            business strategy — built for brands that refuse to blend in, based
            in Panchkula, India, and built to grow businesses nationwide.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
