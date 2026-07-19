import type { Metadata } from "next"
import { QuickContact } from "@/components/sections/contact/QuickContact"
import { ContactForm } from "@/components/sections/contact/ContactForm"
import { FadeIn } from "@/components/animations/FadeIn"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ruhela Solutions for a free marketing strategy consultation. We reply within 2 hours. WhatsApp, Email and Call available.",
  alternates: {
    canonical: "https://ruhelasolutions.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Quick Contact Info */}
          <QuickContact />

          {/* Right — Contact Form */}
          <FadeIn direction="right" delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
