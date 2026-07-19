"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[Global Error]", error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "Poppins, system-ui, sans-serif",
          backgroundColor: "#F5F8FF",
          margin: 0,
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "420px" }}>
          <p
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #4338CA, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "12px",
            }}
          >
            Oops
          </p>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#1E1B4B",
              marginBottom: "12px",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "#64748b", marginBottom: "28px", lineHeight: 1.6 }}>
            An unexpected error occurred. Please try refreshing the page or
            contact us at{" "}
            <a
              href="mailto:hello@ruhelasolutions.com"
              style={{ color: "#4338CA" }}
            >
              hello@ruhelasolutions.com
            </a>
            .
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 28px",
              background: "linear-gradient(135deg, #4338CA, #7C3AED)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
