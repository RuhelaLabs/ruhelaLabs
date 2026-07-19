"use client"

import { motion } from "motion/react"

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex items-center justify-center"
    >
      <div className="relative w-full max-w-lg">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, oklch(0.452 0.222 271.9), oklch(0.523 0.267 293.1))",
          }}
          aria-hidden="true"
        />

        {/* Card */}
        <div
          className="relative rounded-3xl p-10 sm:p-14 flex flex-col items-center gap-10"
          style={{ background: "linear-gradient(135deg, #0d1220 0%, #1a1f35 100%)" }}
        >
          {/* Top decoration */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, transparent, #6c63ff66, #00cfff66, transparent)" }}
            aria-hidden="true"
          />

          {/* Logo lockup — icon left, wordmark right */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* Icon */}
            <div className="shrink-0">
              <svg width="80" height="80" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hv-bg" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1a1f35" />
                    <stop offset="100%" stopColor="#0d1220" />
                  </linearGradient>
                  <linearGradient id="hv-orb" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6c63ff" />
                    <stop offset="100%" stopColor="#00cfff" />
                  </linearGradient>
                  <linearGradient id="hv-ring" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#00cfff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#6c63ff" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="hv-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="hv-soft" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <rect width="72" height="72" rx="16" fill="url(#hv-bg)" />
                <ellipse cx="36" cy="36" rx="27" ry="11" fill="none" stroke="url(#hv-ring)" strokeWidth="1.2" transform="rotate(-30 36 36)" opacity="0.7" />
                <ellipse cx="36" cy="36" rx="27" ry="11" fill="none" stroke="url(#hv-ring)" strokeWidth="1.2" transform="rotate(30 36 36)" opacity="0.45" />
                <circle cx="36" cy="36" r="9" fill="url(#hv-orb)" filter="url(#hv-soft)" />
                <circle cx="33" cy="33.5" r="2.5" fill="white" opacity="0.35" />
                <line x1="43" y1="29" x2="56" y2="17" stroke="#00cfff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" filter="url(#hv-glow)" />
                <line x1="56" y1="17" x2="52" y2="16" stroke="#00cfff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                <line x1="29" y1="43" x2="16" y2="55" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" filter="url(#hv-glow)" />
                <line x1="16" y1="55" x2="20" y2="56" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
                <line x1="45" y1="36" x2="60" y2="36" stroke="#00cfff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" filter="url(#hv-glow)" />
                <circle cx="60" cy="36" r="1.8" fill="#00cfff" opacity="0.9" filter="url(#hv-glow)" />
                <line x1="36" y1="27" x2="36" y2="13" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" filter="url(#hv-glow)" />
                <circle cx="36" cy="13" r="1.8" fill="#6c63ff" opacity="0.85" filter="url(#hv-glow)" />
                <circle cx="57" cy="31" r="2" fill="#6c63ff" opacity="0.9" filter="url(#hv-glow)" />
                <circle cx="15" cy="41" r="2" fill="#00cfff" opacity="0.7" filter="url(#hv-glow)" />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col gap-1">
              <span
                className="text-4xl sm:text-5xl font-bold leading-none tracking-tight"
                style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #a8b8ff 55%, #00cfff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ruhela
              </span>
              <span
                className="text-xs font-medium tracking-[0.35em] uppercase"
                style={{ color: "#4a5a8a" }}
              >
                Solutions
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, #6c63ff33, #00cfff33, transparent)" }}
            aria-hidden="true"
          />

          {/* Tagline */}
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase text-center"
            style={{ color: "#2e3d6a" }}
          >
            AI &nbsp;·&nbsp; Marketing &nbsp;·&nbsp; Content &nbsp;·&nbsp; Growth
          </p>

          {/* Bottom decoration dots */}
          <div className="flex items-center gap-2" aria-hidden="true">
            {[0.9, 0.5, 0.3].map((op, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === 0 ? 6 : 4,
                  height: i === 0 ? 6 : 4,
                  background: i % 2 === 0 ? "#6c63ff" : "#00cfff",
                  opacity: op,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
