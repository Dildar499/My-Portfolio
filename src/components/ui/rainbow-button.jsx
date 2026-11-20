import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all animate-rainbow",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-sm outline-none focus-visible:ring-[3px] aria-invalid:border-destructive",
    "text-sm font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ),
  {
    variants: {
      variant: {
        default:
          "tw:border-0 tw:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] tw:bg-[length:200%] tw:text-primary-foreground tw:[background-clip:padding-box,border-box,border-box] tw:[background-origin:border-box] tw:[border:calc(0.125rem)_solid_transparent] tw:before:absolute tw:before:bottom-[-20%] tw:before:left-1/2 tw:before:z-0 tw:before:h-1/5 tw:before:w-3/5 tw:before:-translate-x-1/2 tw:before:animate-rainbow tw:before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] tw:before:bg-[length:200%] tw:before:[filter:blur(0.75rem)] tw:dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
        outline:
          "tw:border tw:border-input tw:border-b-transparent tw:bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] tw:bg-[length:200%] tw:text-accent-foreground tw:[background-clip:padding-box,border-box,border-box] tw:[background-origin:border-box] tw:before:absolute tw:before:bottom-[-20%] tw:before:left-1/2 tw:before:z-0 tw:before:h-1/5 tw:before:w-3/5 tw:before:-translate-x-1/2 tw:before:animate-rainbow tw:before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] tw:before:bg-[length:200%] tw:before:[filter:blur(0.75rem)] tw:dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
      },
      size: {
        default: "tw:h-9 tw:px-4 tw:py-2",
        sm: "tw:h-8 tw:rounded-xl tw:px-3 tw:text-xs",
        lg: "tw:h-11 tw:rounded-xl tw:px-8",
        icon: "tw:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const RainbowButton = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(rainbowButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

RainbowButton.displayName = "RainbowButton"

export { RainbowButton, rainbowButtonVariants };
