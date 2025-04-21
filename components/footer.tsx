"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const Footer = () => {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.email.value

    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
      form.reset()
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-black">
              Amar Constructions
            </h3>
            <p className="text-sm text-muted-foreground">
              Building excellence since 1995. Quality construction services for residential, commercial, and industrial
              projects.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook" className="hover:text-[#4d4d4d]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" className="hover:text-[#4d4d4d]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram" className="hover:text-[#4d4d4d]">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="hover:text-[#4d4d4d]">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-black flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/residential"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industrial"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Industrial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovation"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-sm text-muted-foreground hover:text-black flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Construction Consulting
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="pr-12 focus-visible:ring-amber-500"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 bottom-1 bg-black hover:bg-[#1a1a1a] text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amar Constructions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
