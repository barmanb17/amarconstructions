"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/CardContainer"
import Link from "next/link"
import { ReactNode } from "react"

interface ThreeDCardDemoProps {
  children?: ReactNode
  className?: string
}

export default function ThreeDCardDemo({ children, className = "" }: ThreeDCardDemoProps) {
  return (
    <CardContainer className={`inter-var ${className}`}>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {children}
      </CardBody>
    </CardContainer>
  )
}
