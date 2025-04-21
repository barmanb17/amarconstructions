"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Boxes, Building, Building2, Hammer, HardHat, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeading from "@/components/section-heading"
import AnimatedImage from "@/components/animated-image"
import ScrollToTop from "@/components/scroll-to-top"
import { VortexDemo } from "@/components/vortexdemo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ContactForm from "@/components/ui/contact-form";


export default function HomePage() {
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
      icon: <Home className="h-10 w-10 text-white " />,
      href: "/services/residential",
      backgroundImage: "/s4.jpeg"
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities built to last.",
      icon: <Building className="h-10 w-10 text-white " />,
      href: "/services/commercial",
      backgroundImage: "/s5.jpg"
    },
    {
      title: "Industrial Construction",
      description: "Manufacturing plants, warehouses, and industrial facilities.",
      icon: <Building2 className="h-10 w-10 text-white " />,
      href: "/services/industrial",
      backgroundImage: "/s2.jpg"
    },
    {
      title: "Renovation Services",
      description: "Modernize and upgrade your existing residential or commercial space.",
      icon: <Hammer className="h-10 w-10 text-white " />,
      href: "/services/renovation",
      backgroundImage: "/s4.jpeg"
    },
    {
      title: "Construction Consulting",
      description: "Expert advice on planning, budgeting, and executing construction projects.",
      icon: <HardHat className="h-10 w-10 text-white " />,
      href: "/services/consulting",
      backgroundImage: "/s5.jpg"
    },

  ]

  const projects = [
    {
      title: "Modern Office Complex",
      description: "A 50,000 sq ft commercial office space with state-of-the-art facilities.",
      image: "/p12.jpg",
      category: "Commercial",
    }, 
    {
      title: "Luxury Residential Development",
      description: "A community of 25 custom-designed luxury homes.",
      image: "/p11.jpg",
      category: "Residential",
    },
    {
      title: "Manufacturing Facility",
      description: "A 100,000 sq ft manufacturing plant with advanced automation.",
      image: "/p3.jpg",
      category: "Industrial",
    },
    {
      title: "Historic Building Renovation",
      description: "Careful restoration of a 100-year-old historic downtown building.",
      image: "/p4.jpg",
      category: "Renovation",
    },
  ]

  const testimonials = [
    {
      quote:
        "ClientFirst delivered our project on time and within budget. Their attention to detail and quality of work exceeded our expectations.",
      author: "John Smith",
      position: "CEO, TechCorp Inc.",
      image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    },
    {
      quote:
        "Working with ClientFirst was a seamless experience. Their team was professional, responsive, and delivered exceptional results.",
      author: "Sarah Johnson",
      position: "Property Developer",
      image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    },
    {
      quote:
        "The ClientFirst team transformed our outdated office into a modern, functional space. We couldn't be happier with the results.",
      author: "Michael Brown",
      position: "Operations Director, Global Logistics",
      image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    },
  ]

  const clients = [
    { name: "Company 1", logo: "https://cdn.brandfetch.io/apple.com" },
    { name: "Company 2", logo: "https://cdn.brandfetch.io/microsoft.com" },
    { name: "Company 3", logo: "https://cdn.brandfetch.io/slack.com"  },
    { name: "Company 4", logo: "https://cdn.brandfetch.io/facebook.com" },
    { name: "Company 5", logo: "https://cdn.brandfetch.io/instagram.com"  },
    { name: "Company 6", logo: "https://cdn.brandfetch.io/vercel.com"  },
  ];

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer:
        "We handle a wide range of construction projects including residential, commercial, and industrial. This includes custom homes, office buildings, retail spaces, manufacturing facilities, warehouses, and renovation projects of all sizes.",
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "You can request a quote by filling out our contact form, calling our office, or sending us an email with details about your project. One of our representatives will get back to you within 24-48 hours to discuss your needs and schedule a consultation.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on the scope and complexity of the work. A small renovation might take a few weeks, while a large commercial building could take several months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
    },
    {
      question: "Do you provide warranties for your work?",
      answer:
        "Yes, we stand behind our work with comprehensive warranties. We offer a 1-year warranty on all workmanship and pass through manufacturer warranties on materials and equipment. Extended warranties are also available for certain projects.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, ConstructX is fully licensed, bonded, and insured in all the regions where we operate. We maintain comprehensive general liability insurance, workers' compensation, and all required professional licenses.",
    },
    {
      question: "Can you help with permits and approvals?",
      answer:
        "Absolutely. We handle all necessary permits and approvals as part of our service. Our team is experienced in navigating local building codes and regulations to ensure your project meets all requirements and passes inspections.",
    },
  ]
  

  return (
    
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={ref} className="relative h-screen min-h-[600px] top-0 left-0 w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 top-0 left-0 z-0">


<video
  className="absolute inset-0 top-0 left-0 w-full  h-full object-cover z-[-1]"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/herovideo.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/20 z-0 mix-blend-multiply" />
        </motion.div>

        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-[400px]  text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Building <span className="">Excellence</span>
            <br />
            Crafting <span className="">Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-2xl text-lg sm:text-xl"
          >
            Premium construction services for residential, commercial, and industrial projects. Excellence in every
            detail, from foundation to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="bg-black text-white"
              asChild
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>


      {/* Services Section */}
      <section className="py-2">
  <div className="container mx-auto px-4 max-w-6xl">
    <SectionHeading
      title="Our Services"
      subtitle="Comprehensive construction solutions tailored to your specific needs."
      center
    />
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.backgroundImage})`,
            }}
          >
            <div className="bg-white/20 h-full flex flex-col justify-between">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10  w-fit transition-all duration-300 group-hover:bg-primary/20">
                  <motion.div whileHover={{ rotate: 5 }} className="text-white">
                    {service.icon}
                  </motion.div>
                </div>
                <CardTitle >{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href={service.href} className="text-white">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 1 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Featured Projects Section */}
      <section className="bg-muted/30 py-24 overflow-hidden">
  <div className="container mx-auto px-4">
    <SectionHeading
      title="Featured Projects"
      subtitle="Explore our portfolio of successful construction projects."
      center
    />

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Carousel className="mx-auto w-full max-w-6xl">
        <CarouselContent className="-ml-2">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute right-2 top-2 rounded-full bg-[#1a1a1a] px-3 py-1 text-xs font-medium text-primary-foreground">
                      {project.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="group" asChild>
                      <Link href="/projects">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-8">
          <CarouselPrevious className="mr-2" />
          <CarouselNext />
        </div>
      </Carousel>
    </motion.div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Hear from our satisfied clients."
            center
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl text-primary/40">"</div>
                    <p className="mb-4 text-muted-foreground italic">{testimonial.quote}</p>
                  </CardContent>
                  <CardFooter className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Client Logos Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Trusted By"
            subtitle="We've worked with some of the most respected companies across industries."
            center
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 items-center"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex h-24 w-40 items-center justify-center rounded-md bg-background p-4 shadow-sm"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center relative  overflow-hidden">
          <VortexDemo/>
        </div>
      </section>
            {/* Contact Form Section - ✅ ADDED HERE */}
            <section className="bg-black/10 pt-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question or want to start a project? We'd love to hear from you."
            center
          />
          <ContactForm />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-muted/30 py-24">
  <div className="container mx-auto px-4">
    <SectionHeading
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our services and processes."
      center
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl"
    >
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="rounded-lg border border-border bg-background/80 backdrop-blur-sm shadow-sm transition-all"
            >
              <AccordionTrigger className="px-4 py-3 text-left text-md font-normal text-foreground hover:bg-muted rounded-t-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  </div>
</section>
      <ScrollToTop />
    </div>
  )
}
