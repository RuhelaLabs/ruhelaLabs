"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
}

const directionMap = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const initial = { opacity: 0, ...directionMap[direction] }
  const animate = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
