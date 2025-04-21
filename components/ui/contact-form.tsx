'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import  SectionHeading  from '@/components/section-heading'
import { MapPin, Phone, Mail, Building, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const locations = [
  {
    name: 'Guwahati',
    address: '123 Main St, New York, NY 10001',
    phone: '(123) 456-7890',
    email: 'nyoffice@example.com',
    hours: 'Mon-Fri: 9am - 6pm',
  },
  {
    name: 'Nagaon',
    address: '456 Market St, San Francisco, CA 94105',
    phone: '(987) 654-3210',
    email: 'sfoffice@example.com',
    hours: 'Mon-Fri: 9am - 6pm',
  },
  {
    name: 'Tezpur',
    address: '789 Oxford St, London W1D 2ES, UK',
    phone: '+44 20 7946 0958',
    email: 'londonoffice@example.co.uk',
    hours: 'Mon-Fri: 9am - 5pm',
  },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Section */}
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
                      className="bg-black hover:bg-[#1a1a1a] text-white"
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
                  className="bg-black hover:from-amber-600 hover:bg-[#1a1a1a] text-white"
                >
                  Send Message
                </Button>
              </motion.form>
            )}
          </motion.div>

          {/* Locations Section */}
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
                    {location.name.split(' - ')[0]}
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

            {/* Placeholder Map */}
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
  )
}
