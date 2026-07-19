import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SITE } from "@/lib/constants/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage)
  const number = SITE.whatsapp.replace(/\D/g, "")
  return `https://wa.me/${number}?text=${text}`
}

export function buildWhatsAppLeadMessage(data: {
  name: string
  email: string
  phone: string
  service: string
  budget?: string
  message: string
  company?: string
}): string {
  return `🔔 *New Lead — Ruhela Solutions*

*Name:* ${data.name}
*Company:* ${data.company || "N/A"}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Budget:* ${data.budget || "Not specified"}

*Message:*
${data.message}`
}
