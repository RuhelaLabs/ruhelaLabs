import type { Metadata } from "next"
import { Hero } from "@/components/sections/home/Hero"
import { TrustBar } from "@/components/sections/home/TrustBar"
import { Services } from "@/components/sections/home/Services"
import { HowWeWork } from "@/components/sections/home/HowWeWork"
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs"
import { Industries } from "@/components/sections/home/Industries"
import { FAQ } from "@/components/sections/home/FAQ"
import { FinalCTA } from "@/components/sections/home/FinalCTA"

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency | Ruhela Solutions",
  description:
    "Ruhela Solutions helps small businesses, startups, clinics and coaching institutes grow faster using AI-powered digital marketing. Get a free consultation today.",
  alternates: {
    canonical: "https://ruhelasolutions.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <Industries />
      <FAQ />
      <FinalCTA />
    </>
  )
}
