"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { NavLink } from "@/lib/constants/nav"
import { motion, AnimatePresence } from "motion/react"

type NavbarClientProps = {
  navLinks: NavLink[]
}

export function NavbarClient({ navLinks }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-b border-border shadow-xl"
          >
            <ul className="px-4 py-6 flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "gradient-brand text-white font-semibold w-full hover:opacity-90 transition-opacity"
                  )}
                >
                  Get Free Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
