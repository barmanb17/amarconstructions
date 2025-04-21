"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import SectionHeading from "@/components/section-heading"
import AnimatedImage from "@/components/animated-image"
import ScrollToTop from "@/components/scroll-to-top"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const { toast } = useToast()

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    })
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const locations = [
    {
      name: "Headquarters",
      address: "123 Construction Way, Metro City, MC 12345",
      phone: "(555) 123-4567",
      email: "info@constructx.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
    {
      name: "Regional Office - North",
      address: "456 Builder Avenue, North City, NC 67890",
      phone: "(555) 987-6543",
      email: "north@constructx.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
    {
      name: "Regional Office - South",
      address: "789 Project Street, South City, SC 54321",
      phone: "(555) 456-7890",
      email: "south@constructx.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
  ]

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
      <section ref={ref} className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0  z-0">
          <AnimatedImage
            src="/placeholder.svg?height=800&width=1600"
            alt="Contact us"
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
            Contact <span className="text-black">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg"
          >
            Get in touch with our team to discuss your construction needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:px-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Get in Touch"
                subtitle="Fill out the form below and one of our representatives will get back to you as soon as possible."
              />

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-green-600 dark:text-green-400 flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Thank You!
                      </CardTitle>
                      <CardDescription>
                        Your message has been submitted successfully. We'll get back to you shortly.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="focus-visible:ring-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="focus-visible:ring-black"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="focus-visible:ring-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="focus-visible:ring-black"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-black"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-black hover:bg-[#1a1a1a] text-white"
                  >
                    Send Message
                  </Button>
                </motion.form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Our Locations"
                subtitle="Visit one of our offices or contact us via phone or email."
              />

              <Tabs defaultValue={locations[0].name} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                  {locations.map((location, index) => (
                    <TabsTrigger
                      key={index}
                      value={location.name}
                      className="data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      {location.name.split(" - ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {locations.map((location, index) => (
                  <TabsContent key={index} value={location.name} className="mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden">
                        <CardHeader>
                          <CardTitle>{location.name}</CardTitle>
                          <CardDescription>Visit us at our office</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                            <MapPin className="mt-0.5 h-5 w-5 text-black" />
                            <p>{location.address}</p>
                          </motion.div>
                          <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                            <Phone className="h-5 w-5 text-black" />
                            <p>{location.phone}</p>
                          </motion.div>
                          <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                            <Mail className="h-5 w-5 text-black" />
                            <p>{location.email}</p>
                          </motion.div>
                          <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                            <Building className="h-5 w-5 text-black" />
                            <p>{location.hours}</p>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">Google Maps would be embedded here</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-muted-foreground/20">
                    <AccordionTrigger className="hover:text-black">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedImage
            src="/placeholder.svg?height=800&width=1600"
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
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-white/90"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
