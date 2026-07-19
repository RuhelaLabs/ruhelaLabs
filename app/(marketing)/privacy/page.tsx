import type { Metadata } from "next"
import Link from "next/link"
import { SITE } from "@/lib/constants/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ruhela Solutions — AI-Powered Digital Marketing Agency.",
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: July 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h2>
            <p>
              When you submit our contact form, we collect your name, company name, email address,
              phone number, and the information you provide in your message. This data is used solely
              to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to contact you regarding your inquiry, deliver the
              services you requested, and improve our offerings. We do not sell, trade, or share your
              personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Data Security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal data
              against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Cookies</h2>
            <p>
              Our website uses minimal cookies necessary for analytics and performance measurement.
              We use Google Analytics to understand how visitors interact with our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
