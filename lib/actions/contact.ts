"use server"

import { contactSchema } from "@/lib/validations/contact"
import { buildWhatsAppLeadMessage } from "@/lib/utils"
import { SITE } from "@/lib/constants/site"
import type { ApiResponse } from "@/types"

export async function submitContactForm(
  formData: unknown
): Promise<ApiResponse> {
  // Validate
  const parsed = contactSchema.safeParse(formData)
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid form data.",
    }
  }

  const data = parsed.data

  try {
    // Run both notifications in parallel — fail gracefully
    await Promise.allSettled([
      sendWhatsAppNotification(data),
      sendEmailNotification(data),
    ])

    return {
      success: true,
      message:
        "Thank you! We have received your message and will contact you within 2 hours.",
    }
  } catch {
    return {
      success: false,
      message:
        "Something went wrong. Please try again or contact us directly on WhatsApp.",
    }
  }
}

async function sendWhatsAppNotification(
  data: ReturnType<typeof contactSchema.parse>
) {
  const token = process.env.WHATSAPP_API_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_ID
  const recipient = process.env.WHATSAPP_RECIPIENT_NUMBER

  if (!token || !phoneId || !recipient) return

  const message = buildWhatsAppLeadMessage(data)

  await fetch(
    `https://graph.facebook.com/v19.0/${phoneId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient,
        type: "text",
        text: { body: message },
      }),
    }
  )
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

async function sendEmailNotification(
  data: ReturnType<typeof contactSchema.parse>
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  const { Resend } = await import("resend")
  const resend = new Resend(apiKey)

  await resend.emails.send({
    from: "Ruhela Solutions <info@ruhelasolutions.com>",
    replyTo: "info@ruhelasolutions.com",
    to: [SITE.email],
    subject: `New Lead: ${data.name} — ${data.service}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4338CA;">New Lead — Ruhela Solutions</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px 0; color:#666; font-size:14px; width:120px;"><strong>Name</strong></td><td style="padding:8px 0; font-size:14px;">${data.name}</td></tr>
          <tr><td style="padding:8px 0; color:#666; font-size:14px;"><strong>Company</strong></td><td style="padding:8px 0; font-size:14px;">${data.company ?? "N/A"}</td></tr>
          <tr><td style="padding:8px 0; color:#666; font-size:14px;"><strong>Email</strong></td><td style="padding:8px 0; font-size:14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0; color:#666; font-size:14px;"><strong>Phone</strong></td><td style="padding:8px 0; font-size:14px;">${data.phone}</td></tr>
          <tr><td style="padding:8px 0; color:#666; font-size:14px;"><strong>Service</strong></td><td style="padding:8px 0; font-size:14px;">${data.service}</td></tr>
          <tr><td style="padding:8px 0; color:#666; font-size:14px;"><strong>Budget</strong></td><td style="padding:8px 0; font-size:14px;">${data.budget ?? "Not specified"}</td></tr>
        </table>
        <div style="margin-top:16px; padding:16px; background:#F5F8FF; border-radius:8px; font-size:14px; color:#1E1B4B;">
          <strong>Message:</strong><br/>${escapeHtml(data.message).replace(/\n/g, "<br/>")}
        </div>
      </div>
    `,
  })
}
