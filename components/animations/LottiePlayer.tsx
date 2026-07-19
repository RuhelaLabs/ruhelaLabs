"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

type LottiePlayerProps = {
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export function LottiePlayer({
  src,
  className,
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(() => null)
  }, [src])

  if (!animationData) {
    return (
      <div
        className={`${className} rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse`}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={className} aria-hidden="true">
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
