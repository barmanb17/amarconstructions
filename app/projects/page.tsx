"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeading from "@/components/section-heading"
import AnimatedImage from "@/components/animated-image"
import ScrollToTop from "@/components/scroll-to-top"

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      description: "A 50,000 sq ft commercial office space with state-of-the-art facilities.",
      category: "Commercial",
      location: "Downtown Metro",
      completionDate: "2023",
      client: "TechCorp Inc.",
      images: [
        "/p1.jpg",
        "/p2.jpg",
        "/p3.jpg",
      ],
      details:
        "This modern office complex features open workspaces, meeting rooms, a cafeteria, and recreational areas. The building incorporates sustainable design elements including solar panels, rainwater harvesting, and energy-efficient systems.",
    },
    {
      id: 2,
      title: "Luxury Residential Development",
      description: "A community of 25 custom-designed luxury homes.",
      category: "Residential",
      location: "Hillside Estates",
      completionDate: "2022",
      client: "Premier Homes",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This luxury residential development includes 25 custom homes ranging from 3,000 to 5,000 square feet. Each home features high-end finishes, smart home technology, and energy-efficient systems. The community includes shared amenities such as a clubhouse, pool, and walking trails.",
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      description: "A 100,000 sq ft manufacturing plant with advanced automation.",
      category: "Industrial",
      location: "Industrial Park",
      completionDate: "2021",
      client: "Global Manufacturing Inc.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This state-of-the-art manufacturing facility includes production areas, warehousing, offices, and loading docks. The building was designed to accommodate specialized equipment and optimize workflow efficiency. The project included extensive mechanical, electrical, and plumbing systems to support manufacturing operations.",
    },
    {
      id: 4,
      title: "Historic Building Renovation",
      description: "Careful restoration of a 100-year-old historic downtown building.",
      category: "Renovation",
      location: "Historic District",
      completionDate: "2022",
      client: "Heritage Preservation Society",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This renovation project involved the careful restoration of a 100-year-old building in the historic downtown district. The project preserved the building's historic character while updating systems and spaces for modern use. The renovated building now houses retail spaces on the ground floor and offices on the upper floors.",
    },
    {
      id: 5,
      title: "Retail Shopping Center",
      description: "A 75,000 sq ft shopping center with multiple retail spaces.",
      category: "Commercial",
      location: "Suburban Area",
      completionDate: "2021",
      client: "Retail Developers LLC",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This shopping center includes multiple retail spaces ranging from small boutiques to larger anchor stores. The project included site development, building construction, and infrastructure for utilities and parking. The center features a modern design with ample natural light and pedestrian-friendly layout.",
    },
    {
      id: 6,
      title: "Custom Luxury Home",
      description: "A 6,000 sq ft custom-designed luxury residence.",
      category: "Residential",
      location: "Lakefront Property",
      completionDate: "2023",
      client: "Private Homeowner",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This custom luxury home features 5 bedrooms, 6 bathrooms, a gourmet kitchen, home theater, wine cellar, and indoor pool. The design emphasizes indoor-outdoor living with expansive windows and multiple terraces overlooking the lake. High-end finishes and custom details are featured throughout the home.",
    },
    {
      id: 7,
      title: "Warehouse Distribution Center",
      description: "A 200,000 sq ft distribution center with advanced logistics systems.",
      category: "Industrial",
      location: "Logistics Hub",
      completionDate: "2022",
      client: "Global Logistics Corp",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This distribution center includes warehouse space, loading docks, offices, and advanced logistics systems. The building was designed to optimize material flow and storage efficiency. The project included specialized flooring, lighting, and mechanical systems to support distribution operations.",
    },
    {
      id: 8,
      title: "Hotel Renovation",
      description: "Complete renovation of a 150-room hotel.",
      category: "Renovation",
      location: "City Center",
      completionDate: "2023",
      client: "Hospitality Group",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details:
        "This hotel renovation project included updates to all 150 guest rooms, lobby, restaurant, meeting spaces, and amenities. The project was completed in phases to allow the hotel to remain partially operational during construction. The renovated hotel features modern design, updated systems, and enhanced guest amenities.",
    },
  ]

  const categories = ["All", "Commercial", "Residential", "Industrial", "Renovation"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={ref} className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <AnimatedImage
            src="/placeholder.svg?height=800&width=1600"
            alt="Construction projects"
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
            Our <span className="text-black">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg"
          >
            Explore our portfolio of successful construction projects across various sectors.
          </motion.p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Project Portfolio"
            subtitle="Browse our completed projects and see the quality of our work."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center">
                <TabsList className="bg-muted/50">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <TabsContent value={activeCategory} className="mt-12">
                <motion.div
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-28"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                              <div className="relative h-48 w-full overflow-hidden">
                                <AnimatedImage
                                  src={project.images[0]}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute right-2 top-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                                  {project.category}
                                </div>
                              </div>
                              <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.location}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                              </CardContent>
                              <CardFooter>
                                <p className="text-sm text-muted-foreground">Completed: {project.completionDate}</p>
                              </CardFooter>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{project.title}</DialogTitle>
                              <DialogDescription>
                                {project.category} | {project.location}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                                <AnimatedImage
                                  src={project.images[0]}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {project.images.slice(1).map((image, index) => (
                                  <div key={index} className="relative h-[150px] w-full overflow-hidden rounded-lg">
                                    <AnimatedImage
                                      src={image}
                                      alt={`${project.title} ${index + 2}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-medium">Project Details</h3>
                                <p>{project.details}</p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                  <div>
                                    <h4 className="text-sm font-medium">Client</h4>
                                    <p className="text-sm text-muted-foreground">{project.client}</p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium">Completion Date</h4>
                                    <p className="text-sm text-muted-foreground">{project.completionDate}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
