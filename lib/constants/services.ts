import {
  TrendingUp,
  Sparkles,
  Clapperboard,
  Share2,
  Megaphone,
  Target,
  Palette,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  gradient: string
}

export const SERVICES: Service[] = [
  {
    id: "ai-digital-marketing",
    title: "AI Digital Marketing",
    description:
      "Data-driven campaigns powered by AI that reach your exact audience, maximise ROI, and deliver measurable growth every single month.",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "ai-content-creation",
    title: "AI Content Creation",
    description:
      "High-quality blogs, captions, ad copy, and brand content created at scale using AI — consistent, on-brand, and conversion-focused.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "ai-video-editing",
    title: "AI Video Editing",
    description:
      "Professional short-form and long-form video editing enhanced with AI — perfect for Reels, YouTube, ads, and product showcases.",
    icon: Clapperboard,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Complete management of your social presence — strategy, content calendar, posting, engagement, and monthly performance reports.",
    icon: Share2,
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    id: "brand-promotion",
    title: "Brand Promotion",
    description:
      "Build a brand identity that commands attention and earns trust — across every digital touchpoint your customers interact with.",
    icon: Megaphone,
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Precision-targeted campaigns that attract your ideal customers, qualify them automatically, and deliver them directly to you.",
    icon: Target,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "Scroll-stopping visuals — social graphics, banners, presentations, and brand assets — designed to communicate and convert.",
    icon: Palette,
    gradient: "from-purple-600 to-violet-500",
  },
]
