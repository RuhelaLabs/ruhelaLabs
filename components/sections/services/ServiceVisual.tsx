"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa"
import { MdLanguage } from "react-icons/md"

// ── Shared shell ─────────────────────────────────────────────────────────────
function VisualCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative rounded-3xl p-6 w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1220 0%, #1a1f35 100%)",
        boxShadow: "0 0 60px #7c3aed22, 0 25px 50px rgba(0,0,0,0.5)",
        border: "1px solid rgba(167,139,250,0.12)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #a78bfa66, #22d3ee44, transparent)" }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#6b7280" }}>
      {children}
    </p>
  )
}

function useCounter(to: number, duration = 1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setVal(Math.floor(progress * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [to, duration])
  return val
}

// ── 1. AI Digital Marketing ──────────────────────────────────────────────────
function DigitalMarketingVisual() {
  const bars = [
    { label: "Impressions", value: 85, color: "#a78bfa", display: "12.4K" },
    { label: "Clicks",      value: 62, color: "#22d3ee", display: "4.7K"  },
    { label: "Conversions", value: 38, color: "#34d399", display: "320"   },
    { label: "Revenue",     value: 71, color: "#f59e0b", display: "₹2.8L" },
  ]
  const roas = useCounter(32)
  const ctr  = useCounter(68)

  return (
    <VisualCard>
      <SectionLabel>Live Campaign Performance</SectionLabel>
      <div className="space-y-3 mb-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-1">
              <span style={{ color: "#9ca3af" }}>{bar.label}</span>
              <span className="font-bold" style={{ color: bar.color }}>{bar.display}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: bar.color }}
                initial={{ width: 0 }}
                animate={{ width: `${bar.value}%` }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "ROAS", val: `${(roas / 10).toFixed(1)}x`, color: "#a78bfa" },
          { label: "CTR",  val: `${(ctr  / 10).toFixed(1)}%`, color: "#22d3ee" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-[10px] mb-0.5" style={{ color: "#6b7280" }}>{m.label}</p>
            <p className="text-2xl font-extrabold" style={{ color: m.color }}>{m.val}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

// ── 2. AI Content Creation ───────────────────────────────────────────────────
const TYPED = "Boost your business with AI-powered content that converts visitors into loyal, paying customers — consistently."

function ContentCreationVisual() {
  const [text, setText] = useState("")
  const [i, setI]       = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (i >= TYPED.length) { setDone(true); return }
    const t = setTimeout(() => { setText((p) => p + TYPED[i]); setI((p) => p + 1) }, 38)
    return () => clearTimeout(t)
  }, [i])

  const types = ["Blog Post", "Caption", "Ad Copy", "Newsletter", "Landing Page"]

  return (
    <VisualCard>
      <SectionLabel>AI Writing in Real-time</SectionLabel>
      <div className="rounded-2xl p-4 mb-4 min-h-[90px]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
          {text}
          {!done && <span className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse" style={{ background: "#a78bfa" }} />}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {types.map((t, idx) => (
          <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + idx * 0.1 }}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.25)" }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </VisualCard>
  )
}

// ── 3. AI Video Editing ──────────────────────────────────────────────────────
function VideoEditingVisual() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.7)), 50)
    return () => clearInterval(t)
  }, [])

  const tools = [
    { label: "Auto Cuts",    color: "#a78bfa" },
    { label: "AI Subtitles", color: "#22d3ee" },
    { label: "Music Sync",   color: "#34d399" },
    { label: "Color Grade",  color: "#f59e0b" },
  ]
  const secs = Math.floor((progress / 100) * 60)

  return (
    <VisualCard>
      <SectionLabel>Video Editor</SectionLabel>
      <div className="relative rounded-2xl mb-4 overflow-hidden flex items-center justify-center" style={{ height: 110, background: "linear-gradient(135deg, #1e1b4b, #312e81)" }}>
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(167,139,250,0.2)", border: "2px solid rgba(167,139,250,0.45)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="ml-1" style={{ width: 0, height: 0, borderTop: "11px solid transparent", borderBottom: "11px solid transparent", borderLeft: "20px solid #a78bfa" }} />
        </motion.div>
        <span className="absolute bottom-2 right-3 text-xs font-mono" style={{ color: "#6b7280" }}>
          0:{String(secs).padStart(2, "0")} / 1:00
        </span>
      </div>
      <div className="h-1.5 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #a78bfa, #22d3ee)", width: `${progress}%` }} />
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t.label} className="px-2.5 py-1 rounded-lg text-xs font-semibold" style={{ background: "rgba(255,255,255,0.05)", color: t.color, border: "1px solid rgba(255,255,255,0.07)" }}>
            {t.label}
          </span>
        ))}
      </div>
    </VisualCard>
  )
}

// ── 4. Social Media Management (FIXED bar chart) ─────────────────────────────
function SocialMediaVisual() {
  const followers = useCounter(247)
  const days      = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const pcts      = [55, 80, 45, 95, 65, 88]
  const MAX_H     = 64

  return (
    <VisualCard>
      <SectionLabel>Social Dashboard — This Week</SectionLabel>

      {/* Bar chart with fixed pixel heights */}
      <div className="flex items-end justify-between gap-2 mb-1" style={{ height: MAX_H }}>
        {pcts.map((pct, i) => {
          const barH = Math.floor((pct / 100) * MAX_H)
          return (
            <div key={days[i]} className="flex-1 flex flex-col items-center justify-end h-full">
              <motion.div
                className="w-full rounded-t-md"
                style={{ background: "linear-gradient(180deg, #a78bfa, #4f46e5)", height: barH, transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-between mb-5">
        {days.map((d) => (
          <p key={d} className="flex-1 text-center text-[9px] font-medium mt-1" style={{ color: "#6b7280" }}>{d}</p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "New Followers",    val: `+${followers}`, color: "#34d399" },
          { label: "Avg. Engagement",  val: "8.4%",          color: "#22d3ee" },
          { label: "Posts This Week",  val: "6",             color: "#a78bfa" },
          { label: "Reach",            val: "14.2K",         color: "#f59e0b" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-[10px]" style={{ color: "#6b7280" }}>{m.label}</p>
            <p className="text-lg font-extrabold mt-0.5" style={{ color: m.color }}>{m.val}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

// ── 5. Brand Promotion — Client brand story ──────────────────────────────────
const BRAND_COLORS = ["#7c3aed", "#4f46e5", "#22d3ee", "#f59e0b", "#ec4899"]

function BrandPromotionVisual() {
  const [phase, setPhase] = useState(0)
  const reach = useCounter(10847, 2500)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)   // logo drawing
    const t2 = setTimeout(() => setPhase(2), 1600)  // brand name + colors
    const t3 = setTimeout(() => setPhase(3), 2600)  // platforms
    const t4 = setTimeout(() => setPhase(4), 3400)  // reach
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  const platforms = [
    { name: "Website",   Icon: MdLanguage,  color: "#4f46e5" },
    { name: "Instagram", Icon: FaInstagram, color: "#e1306c" },
    { name: "LinkedIn",  Icon: FaLinkedin,  color: "#0077b5" },
    { name: "Google",    Icon: FaGoogle,    color: "#ea4335" },
  ]

  return (
    <VisualCard>
      <SectionLabel>Your Brand — Being Built Live</SectionLabel>

      {/* Logo drawing canvas */}
      <div
        className="rounded-2xl flex flex-col items-center justify-center gap-3 mb-4 py-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* SVG logo drawing */}
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
          <defs>
            <linearGradient id="bp-grad" x1="10" y1="8" x2="58" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {/* Outer diamond */}
          <motion.path
            d="M 34 6 L 62 34 L 34 62 L 6 34 Z"
            fill="none"
            stroke="url(#bp-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          {/* Inner vertical line */}
          <motion.line
            x1="34" y1="6" x2="34" y2="62"
            stroke="#a78bfa"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 0.5 : 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
          />
          {/* Inner horizontal line */}
          <motion.line
            x1="6" y1="34" x2="62" y2="34"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 0.5 : 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeInOut" }}
          />
          {/* Corner dots */}
          {[[34,6],[62,34],[34,62],[6,34]].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx} cy={cy} r="3"
              fill={i % 2 === 0 ? "#a78bfa" : "#22d3ee"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
              transition={{ delay: 1.0 + i * 0.1, duration: 0.3, ease: "backOut" }}
            />
          ))}
        </svg>

        {/* Brand name appears */}
        <motion.p
          className="text-sm font-extrabold tracking-[0.25em] uppercase"
          style={{ color: "#f3f4f6" }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 6 }}
          transition={{ duration: 0.5 }}
        >
          YOUR BRAND
        </motion.p>

        {/* Color palette */}
        <div className="flex items-center gap-1.5">
          {BRAND_COLORS.map((c, i) => (
            <motion.div
              key={c}
              className="rounded-full"
              style={{ width: 18, height: 18, background: c }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.3, ease: "backOut" }}
            />
          ))}
        </div>
      </div>

      {/* Platform spread */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 14 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "backOut" }}
            className="flex flex-col items-center gap-1.5 rounded-xl py-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p.Icon size={20} color={p.color} />
            <span className="text-[9px] font-semibold" style={{ color: "#9ca3af" }}>{p.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Reach counter */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 8 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between rounded-xl px-4 py-3"
        style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.22)" }}
      >
        <div>
          <p className="text-[10px] mb-0.5" style={{ color: "#9ca3af" }}>Total Brand Reach</p>
          <p className="text-xl font-extrabold" style={{ color: "#a78bfa" }}>
            {reach.toLocaleString()}+
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] mb-0.5" style={{ color: "#9ca3af" }}>Growth</p>
          <p className="text-base font-extrabold" style={{ color: "#34d399" }}>↑ 312%</p>
        </div>
      </motion.div>
    </VisualCard>
  )
}

// ── 6. Lead Generation ───────────────────────────────────────────────────────
const LEADS = [
  { name: "Rahul S.",  type: "New Lead",  color: "#34d399", delay: 0.5 },
  { name: "Priya M.",  type: "New Lead",  color: "#34d399", delay: 1.0 },
  { name: "Amit K.",   type: "Qualified", color: "#22d3ee", delay: 1.5 },
  { name: "Sneha R.",  type: "Converted", color: "#a78bfa", delay: 2.0 },
]

function LeadGenerationVisual() {
  const count = useCounter(12)
  return (
    <VisualCard>
      <SectionLabel>Live Lead Pipeline — Today</SectionLabel>
      <div className="space-y-2 mb-4">
        {LEADS.map((l) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: l.delay, duration: 0.4 }}
            className="flex items-center justify-between rounded-xl px-3 py-2.5"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: l.color }} />
              <span className="text-sm font-medium" style={{ color: "#d1d5db" }}>{l.name}</span>
            </div>
            <span className="text-xs font-semibold" style={{ color: l.color }}>{l.type}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex items-center justify-between rounded-xl px-4 py-3"
        style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.22)" }}
      >
        <span className="text-sm font-bold" style={{ color: "#34d399" }}>{count} new leads today</span>
        <span className="text-xs font-bold" style={{ color: "#34d399" }}>↑ 34%</span>
      </motion.div>
    </VisualCard>
  )
}

// ── 7. Creative Design — canvas workspace ────────────────────────────────────
const CD_PALETTE = [
  { hex: "#7C3AED", name: "Violet" },
  { hex: "#4F46E5", name: "Indigo" },
  { hex: "#22D3EE", name: "Cyan"   },
  { hex: "#34D399", name: "Mint"   },
  { hex: "#F8FAFC", name: "White"  },
]

const CD_FORMATS = [
  { label: "Social Post",   color: "#a78bfa" },
  { label: "Banner Ad",     color: "#22d3ee" },
  { label: "Brand Kit",     color: "#34d399" },
  { label: "Pitch Deck",    color: "#f59e0b" },
]

function CreativeDesignVisual() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),   // canvas bg + grid
      setTimeout(() => setPhase(2), 700),   // rulers
      setTimeout(() => setPhase(3), 1300),  // font tag
      setTimeout(() => setPhase(4), 1800),  // big headline
      setTimeout(() => setPhase(5), 2400),  // subheading + line
      setTimeout(() => setPhase(6), 3000),  // palette
      setTimeout(() => setPhase(7), 3500),  // formats
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <VisualCard>
      <SectionLabel>Design Canvas — Composing Your Visual</SectionLabel>

      {/* Canvas workspace */}
      <div
        className="relative rounded-2xl overflow-hidden mb-3"
        style={{
          height: 186,
          background: "linear-gradient(135deg, #0a0812 0%, #110f1e 100%)",
          border: "1px solid rgba(167,139,250,0.12)",
        }}
      >
        {/* Dot grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(167,139,250,0.18) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Top ruler */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-6 flex items-end pb-1 px-7 gap-[18px]"
          style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(167,139,250,0.1)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5 shrink-0">
              <span style={{ fontSize: 5, color: "rgba(167,139,250,0.35)", lineHeight: 1 }}>{(i + 1) * 50}</span>
              <div className="w-px h-1.5" style={{ background: "rgba(167,139,250,0.2)" }} />
            </div>
          ))}
        </motion.div>

        {/* Left ruler */}
        <motion.div
          className="absolute left-0 top-6 bottom-0 w-6 flex flex-col items-end pr-1 py-4 gap-[18px]"
          style={{ background: "rgba(255,255,255,0.025)", borderRight: "1px solid rgba(167,139,250,0.1)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-0.5 shrink-0">
              <span style={{ fontSize: 5, color: "rgba(167,139,250,0.35)", lineHeight: 1 }}>{(i + 1) * 40}</span>
              <div className="h-px w-1.5" style={{ background: "rgba(167,139,250,0.2)" }} />
            </div>
          ))}
        </motion.div>

        {/* Canvas content area */}
        <div className="absolute top-6 left-6 right-0 bottom-0 flex flex-col justify-center pl-8 pr-5 gap-2">

          {/* Font spec label */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : -6 }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-1 h-3 rounded-full" style={{ background: "#a78bfa" }} />
            <span style={{ fontSize: 9, color: "#a78bfa", fontFamily: "monospace", letterSpacing: "0.12em" }}>
              INTER EXTRABOLD · 36PX · TRACKING-TIGHT
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h3
            className="font-extrabold leading-none tracking-tight"
            style={{ fontSize: 30, color: "#ffffff", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Creative Vision.
          </motion.h3>

          {/* Subheading */}
          <motion.p
            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.01em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 5 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            Design that speaks to your audience.
          </motion.p>

          {/* Accent underline */}
          <motion.div
            className="rounded-full"
            style={{ height: 2, background: "linear-gradient(90deg, #a78bfa, #22d3ee, transparent)", maxWidth: 200 }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: phase >= 5 ? 1 : 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          {/* Color palette */}
          <motion.div
            className="flex items-center gap-2.5 pt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 6 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {CD_PALETTE.map((c, i) => (
              <motion.div
                key={c.hex}
                className="flex flex-col items-center gap-1"
                initial={{ scale: 0, y: 4 }}
                animate={{ scale: phase >= 6 ? 1 : 0, y: phase >= 6 ? 0 : 4 }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 340, damping: 18 }}
              >
                <div
                  className="w-5 h-5 rounded-md shadow-lg"
                  style={{
                    background: c.hex,
                    border: c.hex === "#F8FAFC" ? "1px solid rgba(255,255,255,0.15)" : "none",
                    boxShadow: `0 0 8px ${c.hex}55`,
                  }}
                />
                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>
                  {c.hex}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Selection box overlay (design tool feel) */}
        <motion.div
          className="absolute"
          style={{
            top: 38, left: 34, right: 16, bottom: 10,
            border: "1px dashed rgba(167,139,250,0.2)",
            borderRadius: 8,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 4 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner handles */}
        {phase >= 4 && [
          { top: 34, left: 30 }, { top: 34, right: 12 },
          { bottom: 6,  left: 30 }, { bottom: 6,  right: 12 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-sm"
            style={{ ...pos, background: "#a78bfa", boxShadow: "0 0 6px #a78bfa99" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.25 }}
          />
        ))}
      </div>

      {/* Output format chips */}
      <div className="grid grid-cols-4 gap-2">
        {CD_FORMATS.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: phase >= 7 ? 1 : 0, y: phase >= 7 ? 0 : 8 }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: "backOut" }}
            className="flex flex-col items-center gap-1.5 rounded-xl py-2.5"
            style={{ background: `${f.color}10`, border: `1px solid ${f.color}30` }}
          >
            <div className="w-4 h-4 rounded" style={{ background: f.color, opacity: 0.85 }} />
            <span className="text-[9px] font-semibold text-center leading-tight" style={{ color: "#9ca3af" }}>
              {f.label}
            </span>
          </motion.div>
        ))}
      </div>
    </VisualCard>
  )
}

// ── Router ────────────────────────────────────────────────────────────────────
export function ServiceVisual({ id }: { id: string }) {
  switch (id) {
    case "ai-digital-marketing":    return <DigitalMarketingVisual />
    case "ai-content-creation":     return <ContentCreationVisual />
    case "ai-video-editing":        return <VideoEditingVisual />
    case "social-media-management": return <SocialMediaVisual />
    case "brand-promotion":         return <BrandPromotionVisual />
    case "lead-generation":         return <LeadGenerationVisual />
    case "creative-design":         return <CreativeDesignVisual />
    default:                        return null
  }
}
