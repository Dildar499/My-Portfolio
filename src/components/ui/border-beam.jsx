import { motion } from "motion/react";

import { cn } from "@/lib/utils"

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1
}) => {
  return (
    <div
      className="tw:pointer-events-none tw:absolute tw:inset-0 tw:rounded-[inherit] tw:border-(length:--border-beam-width) tw:border-transparent tw:mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] tw:mask-intersect tw:[mask-clip:padding-box,border-box]"
      style={
        {
          "--border-beam-width": `${borderWidth}px`
        }
      }
    >
      <motion.div
        className={cn(
          "tw:absolute tw:aspect-square",
          "tw:bg-linear-to-l tw:from-(--color-from) tw:via-(--color-to) tw:to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style
          }
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
}
