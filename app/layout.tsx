import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export const metadata: Metadata = {
  title: "Amar Constructions - Building Excellence",
  description: "Premium construction services for residential, commercial, and industrial projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'



