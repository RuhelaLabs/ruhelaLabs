import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-extrabold gradient-brand-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "gradient-brand text-white font-semibold hover:opacity-90"
          )}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
