import { SITE } from "@/lib/constants/site"

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.svg`,
    description:
      "AI-powered digital marketing agency helping businesses grow using AI. Based in Panchkula, Haryana, India.",
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.state,
      addressCountry: SITE.location.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "AI Digital Marketing",
      "AI Content Creation",
      "AI Video Editing",
      "Social Media Management",
      "Brand Promotion",
      "Lead Generation",
      "Creative Design",
    ],
    sameAs: [
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.twitter,
      SITE.social.facebook,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
