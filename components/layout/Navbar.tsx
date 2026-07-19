import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants/nav"
import { SITE } from "@/lib/constants/site"
import { NavbarClient } from "./NavbarClient"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/50"
        aria-hidden="true"
      />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          aria-label={`${SITE.name} — Home`}
        >
          <Image
            src="/images/logo.svg"
            alt="Ruhela Solutions"
            width={36}
            height={36}
            unoptimized
            priority
          />
          <span className="gradient-brand-text font-extrabold text-xl tracking-tight">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                prefetch={true}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 gradient-brand rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            prefetch={true}
            className={cn(
              buttonVariants({ variant: "default" }),
              "gradient-brand text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-200"
            )}
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <NavbarClient navLinks={NAV_LINKS} />
      </nav>
    </header>
  )
}
