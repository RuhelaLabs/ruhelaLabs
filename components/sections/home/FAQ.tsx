"use client"

import { SectionHeader } from "@/components/common/SectionHeader"
import { FadeIn } from "@/components/animations/FadeIn"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How soon will I see results?",
    answer:
      "Most clients begin seeing early indicators — improved engagement, more inquiries, better ad performance — within the first 30 days. Significant, measurable results typically build over 60–90 days as campaigns are optimised. Marketing is an investment, and we set realistic expectations from day one.",
  },
  {
    question: "What is your minimum monthly budget?",
    answer:
      "We work with businesses across different stages and budgets. Our packages start from ₹8,000/month for essential services. During your free consultation, we'll recommend a plan aligned with your goals and current budget — with no pressure to spend more than what makes sense.",
  },
  {
    question: "Do you work with small businesses and local shops?",
    answer:
      "Absolutely. Some of our most rewarding work is with small and local businesses. We understand that every rupee matters when you're running a small operation, which is why we focus on strategies that deliver the highest ROI for your specific situation.",
  },
  {
    question: "How exactly is AI used in your services?",
    answer:
      "We use AI across every part of our work — audience research and targeting, content creation and optimisation, ad copy generation and testing, competitor analysis, performance prediction, and reporting. AI doesn't replace human strategy — it amplifies it, allowing us to work faster and smarter than traditional agencies.",
  },
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. We operate on monthly plans with no long-term contracts. We believe in earning your business every month by delivering consistent results. That said, marketing compounds over time — clients who stay longer see dramatically better outcomes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Get Free Consultation' anywhere on this website. We'll schedule a 30-minute call to understand your business, discuss your goals, and recommend the right strategy. No cost, no obligation — just a genuine conversation about your growth.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-28" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Questions We"
          titleHighlight="Get Asked Often"
          description="Everything you need to know before getting started. Can't find your answer? Just reach out."
        />

        <FadeIn delay={0.2} className="mt-12">
          <Accordion className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={index}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
