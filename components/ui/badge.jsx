import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        live:
          "border-transparent bg-green-400 text-primary-foreground shadow hover:bg-green-500/80",
        building:
          "border-transparent bg-yellow-400 text-primary-foreground hover:bg-yellow-400/80",
        failed:
          "border-transparent bg-red-400 text-primary-foreground hover:bg-red-400/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "live",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
