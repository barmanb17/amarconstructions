"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle, Clock, Shield } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import AnimatedCounter from "@/components/animated-counter"
import AnimatedImage from "@/components/animated-image"
import ScrollToTop from "@/components/scroll-to-top"
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function AboutPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const timeline = [
    {
      year: "1995",
      title: "Company Founded",
      description: "ConstructX was founded with a vision to deliver quality construction services.",
    },
    {
      year: "2000",
      title: "Expansion to Commercial Projects",
      description: "Expanded services to include commercial construction projects.",
    },
    {
      year: "2005",
      title: "Industrial Division Launch",
      description: "Launched our industrial construction division to serve manufacturing clients.",
    },
    {
      year: "2010",
      title: "Regional Expansion",
      description: "Expanded operations to cover the entire state with multiple regional offices.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Implemented green building practices and sustainable construction methods.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adopted advanced digital tools and BIM technology for improved project delivery.",
    },
    {
      year: "Present",
      title: "Industry Leadership",
      description: "Recognized as an industry leader with award-winning projects across sectors.",
    },
  ]

  const team = [
    {
      name: "Robert Johnson",
      position: "CEO & Founder",
      bio: "With over 30 years of experience in construction, Robert founded ConstructX with a vision of excellence.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jennifer Williams",
      position: "Chief Operations Officer",
      bio: "Jennifer oversees all operations, ensuring projects are delivered on time and within budget.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      position: "Chief Architect",
      bio: "Michael brings innovative design solutions to every project, balancing aesthetics with functionality.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Rodriguez",
      position: "Project Director",
      bio: "Sarah manages our largest projects, coordinating teams and resources for optimal results.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { label: "Years of Experience", value: 28 },
    { label: "Projects Completed", value: 500 },
    { label: "Team Members", value: 120 },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      icon: <Award className="h-8 w-8 " />,
    },
    {
      title: "LEED Certified",
      description: "Leadership in Energy and Environmental Design",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "OSHA Compliance",
      description: "Occupational Safety and Health Administration",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Safety Excellence",
      description: "National Safety Council Recognition",
      icon: <Shield className="h-8 w-8" />,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section ref={ref} className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <AnimatedImage
            src="/placeholder.svg?height=800&width=1600"
            alt="Construction team"
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
            About <span className="text-black">Amar Constructions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg"
          >
            Building excellence through quality, innovation, and integrity since 1995.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2022, ClientFirst has grown from a small residential contractor to a full-service
                  construction company serving clients across residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our mission is to deliver exceptional construction services that exceed client expectations, while
                  maintaining the highest standards of quality, safety, and integrity.
                </p>
                <p>
                  With a team of experienced professionals and a commitment to innovation, we have successfully
                  completed hundreds of projects ranging from custom homes to large-scale industrial facilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] overflow-hidden rounded-lg"
            >
              <AnimatedImage
                src="/q1.jpg"
                alt="ClientFirst headquarters"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="A timeline of our growth and achievements over the years."
            center
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center justify-center gap-8`}
                >
                  <div className="w-1/2 text-right">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-bold text-white ml-auto"
                      >
                        {item.year}
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-sm"
                  >
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </motion.div>
                  <div className="w-1/2">
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-black *:text-lg font-bold text-white"
                      >
                        {item.year}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experienced professionals who lead our company."
            center
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 w-full overflow-hidden">
                    <AnimatedImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Certifications & Standards"
            subtitle="We maintain the highest industry standards and certifications."
            center
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="text-center h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <motion.div className="mx-auto text-primary" whileHover={{ rotate: 10 }}>
                      {cert.icon}
                    </motion.div>
                    <CardTitle>{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
