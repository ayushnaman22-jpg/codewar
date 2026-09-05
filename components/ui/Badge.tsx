import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary/20 text-primary-hover": variant === "default",
          "border-transparent bg-surface-hover text-foreground": variant === "secondary",
          "border-border text-foreground": variant === "outline",
          "border-transparent bg-accent/20 text-accent": variant === "accent",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
