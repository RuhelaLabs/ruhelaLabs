"use client"

import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations/FadeIn"

type SectionHeaderProps = {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <FadeIn delay={0}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full gradient-brand inline-block" />
            {badge}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
          {titleHighlight ? (
            <>
              {title}{" "}
              <span className="gradient-brand-text">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
