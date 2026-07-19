import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { SITE } from "@/lib/constants/site"
import { NAV_LINKS } from "@/lib/constants/nav"
import { SERVICES } from "@/lib/constants/services"
import { buildWhatsAppUrl } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.svg"
                alt="Ruhela Solutions"
                width={32}
                height={32}
                unoptimized
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              AI-powered digital marketing agency helping businesses grow
              smarter, faster, and more profitably.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: SITE.social.instagram, label: "Instagram", abbr: "IG" },
                { href: SITE.social.linkedin, label: "LinkedIn", abbr: "in" },
                { href: SITE.social.twitter, label: "Twitter / X", abbr: "𝕏" },
                { href: SITE.social.facebook, label: "Facebook", abbr: "fb" },
              ].map(({ href, label, abbr }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center text-xs font-bold text-background"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-background/60 hover:text-white transition-colors"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <span className="text-sm text-background/60">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-primary group-hover:text-white transition-colors shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-background/60">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    {SITE.location.city}, {SITE.location.state},{" "}
                    {SITE.location.country}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-background/40 hover:text-background/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-background/40 hover:text-background/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
