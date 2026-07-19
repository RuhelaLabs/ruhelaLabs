import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .trim(),
  company: z.string().max(80, "Company name is too long").trim().optional(),
  email: z.string().email("Please enter a valid email address").trim(),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number")
    .trim(),
  service: z.enum(
    [
      "AI Digital Marketing",
      "AI Content Creation",
      "AI Video Editing",
      "Social Media Management",
      "Brand Promotion",
      "Lead Generation",
      "Creative Design",
      "Not Sure / Multiple Services",
    ],
    { message: "Please select a service" }
  ),
  budget: z
    .enum([
      "Under ₹10,000/month",
      "₹10,000 – ₹25,000/month",
      "₹25,000 – ₹50,000/month",
      "₹50,000+/month",
    ] as const)
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .trim(),
})

export type ContactSchema = z.infer<typeof contactSchema>
