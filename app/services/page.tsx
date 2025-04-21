"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building, Building2, Hammer, HardHat, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import AnimatedImage from "@/components/animated-image"
import ScrollToTop from "@/components/scroll-to-top"

export default function ServicesPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions for your dream living space.",
      longDescription:
        "Our residential construction services cover everything from custom home building to renovations and additions. We work closely with homeowners to bring their vision to life, focusing on quality craftsmanship, attention to detail, and timely delivery.",
      icon: <Home className="h-10 w-10 text-black" />,
      image: "/p2.jpg",
      href: "/services/residential",
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities built to last.",
      longDescription:
        "Our commercial construction team specializes in building office spaces, retail centers, restaurants, hotels, and other commercial facilities. We understand the unique requirements of commercial projects and deliver solutions that enhance functionality and aesthetics while meeting strict timelines and budgets.",
      icon: <Building className="h-10 w-10 text-black" />,
      image: "/p3.jpg",
      href: "/services/commercial",
    },
    {
      title: "Industrial Construction",
      description: "Manufacturing plants, warehouses, and industrial facilities.",
      longDescription:
        "Our industrial construction services cater to manufacturing plants, warehouses, distribution centers, and other industrial facilities. We have the expertise and equipment to handle complex industrial projects, ensuring compliance with industry regulations and safety standards.",
      icon: <Building2 className="h-10 w-10 text-black" />,
      image: "/p4.jpg",
      href: "/services/industrial",
    },
    {
      title: "Renovation Services",
      description: "Modernize and upgrade your existing residential or commercial space.",
      longDescription:
        "Our renovation services help breathe new life into existing structures. Whether it's a home remodel, office renovation, or historic building restoration, our team combines modern techniques with respect for the original structure to create spaces that are both functional and beautiful.",
      icon: <Hammer className="h-10 w-10 text-black" />,
      image: "/p11.jpg",
      href: "/services/renovation",
    },
    {
      title: "Construction Consulting",
      description: "Expert advice on planning, budgeting, and executing construction projects.",
      longDescription:
        "Our construction consulting services provide expert guidance throughout the construction process. From initial planning and budgeting to project management and quality control, our consultants help clients make informed decisions that optimize project outcomes and minimize risks.",
      icon: <HardHat className="h-10 w-10 text-black" />,
      image: "/p12.jpg",
      href: "/services/consulting",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={ref} className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <AnimatedImage
            src="/p11.jpg"
            alt="Construction services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </motion.div>

        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Our <span className="text-black">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg"
          >
            Comprehensive construction solutions tailored to your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We Offer"
            subtitle="From residential to industrial construction, we provide a wide range of services to meet your needs."
            center
          />

          <div className="space-y-32 lg:px-28">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                    <AnimatedImage src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                      <motion.div whileHover={{ rotate: 10 }} className="text-primary">
                        {service.icon}
                      </motion.div>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                    <p className="mb-6 text-muted-foreground">{service.longDescription}</p>
                    <Button
                      className="bg-black hover:bg-[#1a1a1a] text-white"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedImage
            src="/p2.jpg"
            alt="Construction background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-white/90"
          >
            Contact us today to discuss your construction needs and get a free quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
