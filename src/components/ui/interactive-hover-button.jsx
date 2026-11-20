import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "tw:group tw:bg-background tw:relative tw:w-auto tw:cursor-pointer tw:overflow-hidden tw:rounded-full tw:border tw:p-2 tw:px-6 tw:text-center tw:font-semibold",
        className
      )}
      {...props}
    >
      <div className="tw:flex tw:items-center tw:justify-center tw:gap-2">
        <div className="tw:bg-primary tw:h-2 tw:w-2 tw:rounded-full tw:transition-all tw:duration-300 tw:group-hover:scale-[100.8]"></div>
        <span className="tw:inline-block tw:transition-all tw:duration-300 tw:group-hover:translate-x-12 tw:group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="tw:text-primary-foreground tw:absolute tw:top-0 tw:z-10 tw:flex tw:h-full tw:w-full tw:translate-x-12 tw:items-center tw:justify-center tw:gap-2 tw:opacity-0 tw:transition-all tw:duration-300 tw:group-hover:-translate-x-5 tw:group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}
