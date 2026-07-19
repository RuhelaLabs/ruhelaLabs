import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about/AboutHero"
import { OurStory } from "@/components/sections/about/OurStory"
import { MissionVision } from "@/components/sections/about/MissionVision"
import { Values } from "@/components/sections/about/Values"
import { FinalCTA } from "@/components/sections/home/FinalCTA"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Ruhela Solutions uses AI to deliver smarter digital marketing strategies for businesses across India. Based in Panchkula, Haryana.",
  alternates: {
    canonical: "https://ruhelasolutions.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Values />
      <FinalCTA />
    </>
  )
}
