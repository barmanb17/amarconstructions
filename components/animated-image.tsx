"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className={cn("object-cover", className)}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isLoaded ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-muted/20"
      />
    </div>
  )
}
