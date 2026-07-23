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
  longDescription: string
  icon: LucideIcon
  gradient: string
  features: string[]
  benefits: string[]
  forWho: string
}

export const SERVICES: Service[] = [
  {
    id: "ai-digital-marketing",
    title: "AI Digital Marketing",
    description:
      "Data-driven campaigns powered by AI that reach your exact audience, maximise ROI, and deliver measurable growth every single month.",
    longDescription:
      "We use cutting-edge AI tools to analyse your market, identify your ideal customers, and run highly targeted campaigns across Google, Meta, and other platforms. Every rupee you spend is tracked, optimised, and reported — so you always know exactly what's working.",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-violet-500",
    features: [
      "AI-powered audience targeting & segmentation",
      "Google Ads & Meta Ads campaign management",
      "Monthly performance reports with insights",
      "A/B testing for ads and landing pages",
      "Keyword research & competitor analysis",
      "Retargeting campaigns for lost visitors",
    ],
    benefits: [
      "More leads at a lower cost per acquisition",
      "Full transparency — you own all accounts & data",
      "Campaigns optimised weekly, not monthly",
      "No long-term contracts — results speak for themselves",
    ],
    forWho:
      "Startups, clinics, coaching institutes, and small businesses looking to get consistent leads through paid digital marketing.",
  },
  {
    id: "ai-content-creation",
    title: "AI Content Creation",
    description:
      "High-quality blogs, captions, ad copy, and brand content created at scale using AI — consistent, on-brand, and conversion-focused.",
    longDescription:
      "Content is the backbone of every successful digital strategy. We combine AI speed with human creativity to produce content that sounds like your brand, speaks to your audience, and drives action — blogs, captions, email newsletters, ad copy, and more.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
    features: [
      "SEO-optimised blog posts & articles",
      "Social media captions (Instagram, LinkedIn, Facebook)",
      "Ad copy for Google & Meta campaigns",
      "Email newsletters & drip sequences",
      "Website copy & landing page content",
      "Brand voice guide creation",
    ],
    benefits: [
      "Consistent content output without the burnout",
      "Content designed to rank on Google",
      "Tone and voice perfectly matched to your brand",
      "Save 10+ hours per week on content creation",
    ],
    forWho:
      "Businesses that struggle to post consistently or want to scale their content without hiring a full-time team.",
  },
  {
    id: "ai-video-editing",
    title: "AI Video Editing",
    description:
      "Professional short-form and long-form video editing enhanced with AI — perfect for Reels, YouTube, ads, and product showcases.",
    longDescription:
      "Video is the highest-converting content format today. We take your raw footage and transform it into polished, scroll-stopping videos using AI-enhanced editing — fast turnaround, cinematic quality, and optimised for every platform.",
    icon: Clapperboard,
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Instagram Reels & YouTube Shorts editing",
      "Long-form YouTube video editing",
      "AI-generated subtitles & captions",
      "Transitions, effects & motion graphics",
      "Product showcase & testimonial videos",
      "Ad creatives for Meta & Google video campaigns",
    ],
    benefits: [
      "Fast 48–72 hour turnaround",
      "Platform-optimised formats (9:16, 16:9, 1:1)",
      "Consistent brand look across all videos",
      "Higher engagement with professional quality",
    ],
    forWho:
      "Coaches, clinics, e-commerce brands, and businesses who want to leverage video content without the hassle of editing.",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Complete management of your social presence — strategy, content calendar, posting, engagement, and monthly performance reports.",
    longDescription:
      "Your social media is your brand's first impression. We handle everything — from building a content strategy to daily posting, comment replies, and monthly analytics — so you can focus on running your business while we grow your audience.",
    icon: Share2,
    gradient: "from-indigo-600 to-violet-600",
    features: [
      "Monthly content calendar & strategy",
      "Daily/weekly posting on Instagram, Facebook & LinkedIn",
      "Story & Reel creation",
      "Comment & DM management",
      "Hashtag research & optimisation",
      "Monthly analytics & growth report",
    ],
    benefits: [
      "Consistent brand presence without the time investment",
      "Growing, engaged follower base",
      "Professional content that builds credibility",
      "More inbound inquiries from social platforms",
    ],
    forWho:
      "Business owners who don't have time to manage social media but understand its importance for brand building and lead generation.",
  },
  {
    id: "brand-promotion",
    title: "Brand Promotion",
    description:
      "Build a brand identity that commands attention and earns trust — across every digital touchpoint your customers interact with.",
    longDescription:
      "A strong brand is more than just a logo — it's the feeling your customers get every time they interact with your business. We help you define, build, and promote a brand identity that stands out in a crowded market and builds lasting customer trust.",
    icon: Megaphone,
    gradient: "from-violet-600 to-indigo-500",
    features: [
      "Brand identity development (logo, colours, fonts)",
      "Brand messaging & positioning strategy",
      "Online reputation management",
      "PR & digital press coverage",
      "Influencer & collaboration outreach",
      "Consistent branding across all platforms",
    ],
    benefits: [
      "Instantly recognisable brand in your niche",
      "Higher trust = higher conversion rates",
      "Customers remember and refer you",
      "Premium positioning that justifies higher prices",
    ],
    forWho:
      "New businesses building from scratch and established businesses looking to rebrand or strengthen their market position.",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Precision-targeted campaigns that attract your ideal customers, qualify them automatically, and deliver them directly to you.",
    longDescription:
      "We design and run lead generation funnels that do the heavy lifting — attracting the right people, filtering out tyre-kickers, and delivering warm, ready-to-buy leads directly to your inbox or WhatsApp. No cold calling. No guesswork.",
    icon: Target,
    gradient: "from-indigo-500 to-purple-600",
    features: [
      "Landing page design & copywriting",
      "Lead magnet creation (guides, offers, free consultations)",
      "Meta & Google lead generation ads",
      "Automated lead qualification & follow-up",
      "CRM integration & lead tracking",
      "WhatsApp & email lead nurture sequences",
    ],
    benefits: [
      "Steady flow of qualified leads every month",
      "Automated follow-up so no lead goes cold",
      "Lower cost per lead than traditional marketing",
      "You focus on closing — we handle the pipeline",
    ],
    forWho:
      "Clinics, coaching institutes, real estate agents, and service businesses who need a consistent, predictable flow of new customers.",
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "Scroll-stopping visuals — social graphics, banners, presentations, and brand assets — designed to communicate and convert.",
    longDescription:
      "Great design makes people stop, look, and act. Our creative team produces visuals that are on-brand, eye-catching, and built for the digital world — whether it's a social media post, a business presentation, or a full set of marketing collateral.",
    icon: Palette,
    gradient: "from-purple-600 to-violet-500",
    features: [
      "Social media graphics & templates",
      "Banner ads & display creatives",
      "Business presentations & pitch decks",
      "Brochures, flyers & print-ready designs",
      "Infographics & data visualisations",
      "Brand asset library (icons, illustrations, patterns)",
    ],
    benefits: [
      "Professional look that builds instant credibility",
      "Consistent visual identity across all channels",
      "Faster turnaround than traditional agencies",
      "Designs optimised for both digital & print",
    ],
    forWho:
      "Any business that wants to look professional and stand out visually — from startups to established brands refreshing their look.",
  },
]
