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
          style={{ background: "radial-gradient(circle, #7c3aed, #4f46e5)" }}
          aria-hidden="true"
        />

        {/* Card */}
        <div
          className="relative rounded-3xl p-10 sm:p-14 flex flex-col items-center gap-10"
          style={{ background: "linear-gradient(135deg, #0d1220 0%, #1a1f35 100%)" }}
        >
          {/* Top border shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, transparent, #a78bfa66, #22d3ee66, transparent)" }}
            aria-hidden="true"
          />

          {/* Logo lockup — icon left, wordmark right */}
          <div className="flex items-center gap-7 sm:gap-9">

            {/* Spark Prism icon */}
            <div className="shrink-0">
              <svg width="110" height="110" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hv-bg" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1c1145" />
                    <stop offset="100%" stopColor="#08091e" />
                  </linearGradient>
                  <linearGradient id="hv-prism" x1="22" y1="20" x2="52" y2="58" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="hv-left" x1="22" y1="20" x2="36" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <filter id="hv-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="hv-halo" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                  <filter id="hv-dot" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <rect x="8" y="8" width="56" height="56" rx="13" fill="#6d28d9" opacity="0.2" filter="url(#hv-halo)" />
                <rect width="72" height="72" rx="18" fill="url(#hv-bg)" />
                <rect x="0.75" y="0.75" width="70.5" height="70.5" rx="17.25" fill="none" stroke="rgba(167,139,250,0.2)" strokeWidth="0.75" />
                <path d="M 18 1 Q 1 1 1 18" stroke="rgba(200,185,255,0.3)" strokeWidth="1" fill="none" strokeLinecap="round" />
                {/* Left ray */}
                <line x1="36" y1="19" x2="20" y2="7" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" filter="url(#hv-glow)" />
                <circle cx="20" cy="7" r="2" fill="#a78bfa" opacity="0.9" filter="url(#hv-dot)" />
                {/* Centre ray */}
                <line x1="36" y1="19" x2="36" y2="5" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" filter="url(#hv-glow)" />
                <circle cx="36" cy="5" r="2.4" fill="#22d3ee" filter="url(#hv-dot)" />
                {/* Right ray */}
                <line x1="36" y1="19" x2="52" y2="7" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" filter="url(#hv-glow)" />
                <circle cx="52" cy="7" r="2" fill="#67e8f9" opacity="0.9" filter="url(#hv-dot)" />
                {/* Left face */}
                <path d="M 36 19 L 22 38 L 36 56 Z" fill="url(#hv-left)" filter="url(#hv-glow)" />
                {/* Right face */}
                <path d="M 36 19 L 50 38 L 36 56 Z" fill="url(#hv-prism)" filter="url(#hv-glow)" />
                <line x1="36" y1="19" x2="36" y2="56" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
                <line x1="24" y1="38" x2="48" y2="38" stroke="rgba(255,255,255,0.09)" strokeWidth="0.75" />
                <circle cx="36" cy="19" r="3" fill="#c4b5fd" opacity="0.6" filter="url(#hv-dot)" />
                <circle cx="36" cy="56" r="2" fill="#22d3ee" opacity="0.5" filter="url(#hv-glow)" />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col gap-2">
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
                className="text-base font-semibold tracking-[0.3em] uppercase"
                style={{ color: "#4a3890" }}
              >
                Solutions
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, #a78bfa33, #22d3ee33, transparent)" }}
            aria-hidden="true"
          />

          {/* Tagline */}
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase text-center"
            style={{ color: "#2e3d6a" }}
          >
            AI &nbsp;·&nbsp; Digital Marketing &nbsp;·&nbsp; Content &nbsp;·&nbsp; Growth
          </p>
        </div>
      </div>
    </motion.div>
  )
}
