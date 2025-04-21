"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0
      const step = end / (duration * 60) // 60fps

      const counter = setInterval(() => {
        start += step
        setCount(Math.floor(start))

        if (start >= end) {
          setCount(end)
          clearInterval(counter)
          setHasAnimated(true)
        }
      }, 1000 / 60)

      return () => clearInterval(counter)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
