import type { Metadata } from "next"
import Link from "next/link"
import { SITE } from "@/lib/constants/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ruhela Solutions — AI-Powered Digital Marketing Agency.",
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Ruhela Solutions website, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Services</h2>
            <p>
              Ruhela Solutions provides AI-powered digital marketing services including but not limited
              to content creation, social media management, lead generation, and brand promotion.
              Specific service terms are outlined in individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the
              property of Ruhela Solutions and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Limitation of Liability</h2>
            <p>
              Ruhela Solutions shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Contact</h2>
            <p>
              For any questions regarding these Terms, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
