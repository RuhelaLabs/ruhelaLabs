"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "motion/react"
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { contactSchema, type ContactSchema } from "@/lib/validations/contact"
import { submitContactForm } from "@/lib/actions/contact"
import { cn } from "@/lib/utils"

const services = [
  "AI Digital Marketing",
  "AI Content Creation",
  "AI Video Editing",
  "Social Media Management",
  "Brand Promotion",
  "Lead Generation",
  "Creative Design",
  "Not Sure / Multiple Services",
]

const budgets = [
  "Under ₹10,000/month",
  "₹10,000 – ₹25,000/month",
  "₹25,000 – ₹50,000/month",
  "₹50,000+/month",
]

type SubmitState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactSchema) => {
    setSubmitState("loading")
    setErrorMessage("")

    const result = await submitContactForm(data)

    if (result.success) {
      setSubmitState("success")
      reset()
    } else {
      setSubmitState("error")
      setErrorMessage(result.message)
    }
  }

  if (submitState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We will contact you within 2 hours.
        </p>
        <button
          onClick={() => setSubmitState("idle")}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-primary/30 text-primary hover:bg-primary/5"
          )}
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full Name" required error={errors.name?.message}>
            <input
              {...register("name")}
              placeholder="Your name"
              className={inputClass(!!errors.name)}
            />
          </Field>
          <Field label="Company" error={errors.company?.message}>
            <input
              {...register("company")}
              placeholder="Company name (optional)"
              className={inputClass(!!errors.company)}
            />
          </Field>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email Address" required error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              placeholder="hello@yourcompany.com"
              className={inputClass(!!errors.email)}
            />
          </Field>
          <Field label="Phone Number" required error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+91 98765 43210"
              className={inputClass(!!errors.phone)}
            />
          </Field>
        </div>

        {/* Service */}
        <Field label="Service You Need" required error={errors.service?.message}>
          <select
            {...register("service")}
            className={inputClass(!!errors.service)}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        {/* Budget */}
        <Field label="Monthly Budget" error={errors.budget?.message}>
          <select
            {...register("budget")}
            className={inputClass(false)}
            defaultValue=""
          >
            <option value="">Select your budget (optional)</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        {/* Message */}
        <Field label="Message" required error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your business and what you'd like to achieve..."
            className={cn(inputClass(!!errors.message), "resize-none")}
          />
        </Field>

        {/* Error Banner */}
        <AnimatePresence>
          {submitState === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 text-sm"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <Button
          type="submit"
          disabled={submitState === "loading"}
          className="w-full gradient-brand text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-indigo-200 h-12 group"
        >
          {submitState === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          We reply within 2 hours
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-2.5 rounded-xl border bg-white/80 text-sm text-foreground placeholder:text-muted-foreground/60",
    "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200",
    hasError
      ? "border-destructive/50 bg-destructive/5"
      : "border-border hover:border-primary/30"
  )
}
