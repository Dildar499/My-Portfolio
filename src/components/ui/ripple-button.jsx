import React, { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils"

function ButtonRipple({
  ripple,
  duration,
  rippleColor,
  onDone
}) {
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        onDone(ripple.key)
      },
      parseInt(duration, 10)
    )

    return () => {
      clearTimeout(timeout)
    }
  }, [duration, onDone, ripple.key])

  return (
    <span
      className="tw:animate-rippling tw:bg-background tw:absolute tw:rounded-full tw:opacity-30"
      style={
        {
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          top: `${ripple.y}px`,
          left: `${ripple.x}px`,
          backgroundColor: rippleColor,
          transform: `scale(0)`,
          "--duration": duration
        }
      }
    />
  );
}

export const RippleButton = React.forwardRef((
  {
    className,
    children,
    rippleColor = "#ffffff",
    duration = "600ms",
    onClick,
    ...props
  },
  ref
) => {
  const [buttonRipples, setButtonRipples] = useState([])
  const nextKeyRef = useRef(0)

  const removeRipple = useCallback((key) => {
    setButtonRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.key !== key)
    )
  }, [])

  const handleClick = (event) => {
    createRipple(event)
    onClick?.(event)
  }

  const createRipple = (event) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    nextKeyRef.current += 1
    const newRipple = { x, y, size, key: nextKeyRef.current }
    setButtonRipples((prevRipples) => [...prevRipples, newRipple])
  }

  return (
    <button
      className={cn(
        "tw:bg-background tw:text-primary tw:relative tw:flex tw:cursor-pointer tw:items-center tw:justify-center tw:overflow-hidden tw:rounded-xl tw:border-2 tw:px-4 tw:py-2 tw:text-center",
        className
      )}
      onClick={handleClick}
      ref={ref}
      {...props}
    >
      <div className="tw:relative tw:z-10">{children}</div>
      <span className="tw:pointer-events-none tw:absolute tw:inset-0">
        {buttonRipples.map((ripple) => (
          <ButtonRipple
            key={ripple.key}
            duration={duration}
            onDone={removeRipple}
            ripple={ripple}
            rippleColor={rippleColor}
          />
        ))}
      </span>
    </button>
  )
})

RippleButton.displayName = "RippleButton"
