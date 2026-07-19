import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFAB } from "@/components/common/WhatsAppFAB"
import { MobileBottomBar } from "@/components/common/MobileBottomBar"
import { OrganizationJsonLd } from "@/components/common/JsonLd"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "AI-Powered Digital Marketing Agency | Ruhela Solutions",
    template: "%s | Ruhela Solutions",
  },
  description:
    "Ruhela Solutions is an AI-powered digital marketing agency helping small businesses, startups, clinics and coaching institutes grow faster. Get a free consultation today.",
  keywords: [
    "AI digital marketing agency India",
    "digital marketing agency Panchkula",
    "AI marketing agency",
    "social media management India",
    "lead generation agency",
    "AI content creation",
    "brand promotion agency Haryana",
  ],
  authors: [{ name: "Ruhela Solutions" }],
  creator: "Ruhela Solutions",
  metadataBase: new URL("https://ruhelasolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ruhelasolutions.com",
    siteName: "Ruhela Solutions",
    title: "AI-Powered Digital Marketing Agency | Ruhela Solutions",
    description:
      "We help businesses grow using AI-powered digital marketing. Based in Panchkula, India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ruhela Solutions — AI-Powered Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Marketing Agency | Ruhela Solutions",
    description:
      "We help businesses grow using AI-powered digital marketing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-background text-foreground antialiased font-sans">
        <OrganizationJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileBottomBar />
      </body>
    </html>
  )
}
