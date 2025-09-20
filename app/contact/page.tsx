"use client"
import { FloatingNavbar } from "@/components/floating-navbar"
import type React from "react"

import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FloatingNavbar showLogo={true} logoSize="medium" />

      {/* Hero Section with Aceternity Effects */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <BackgroundBeams />
        <GridBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge
                variant="secondary"
                className="text-sm font-medium bg-secondary/10 text-secondary border-secondary/20"
              >
                Get In Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Let's Build Something <span className="text-secondary">Amazing Together</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed">
                Ready to transform your ideas into reality? We're here to help you create innovative solutions that
                drive your business forward.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Send us a message</h2>
                <p className="text-neutral-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-secondary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-secondary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-secondary"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-secondary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Get in touch</h2>
                <p className="text-neutral-400">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-neutral-400 text-sm mb-2">Send us an email anytime!</p>
                    <a href="mailto:hello@exionsolutions.com" className="text-secondary hover:underline">
                      hello@exionsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-neutral-400 text-sm mb-2">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+1234567890" className="text-secondary hover:underline">
                      +923405955570
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-neutral-400 text-sm mb-2">Come say hello at our office HQ</p>
                    <p className="text-secondary">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-neutral-400 text-sm mb-2">Monday - Friday</p>
                    <p className="text-secondary">8:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Why Work With Us?</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              We're committed to delivering exceptional results and building lasting partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
                title: "Clear Communication",
                description: "Regular updates and transparent communication throughout your project",
              },
              {
                icon: <Users className="h-8 w-8 text-green-400" />,
                title: "Expert Team",
                description: "Experienced developers and designers dedicated to your success",
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-400" />,
                title: "Fast Delivery",
                description: "Agile development process ensuring quick turnaround times",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-neutral-400 text-pretty">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What's your development process?",
                answer:
                  "We follow an agile development methodology with regular check-ins and updates. Our process includes discovery, design, development, testing, and deployment phases with continuous client collaboration.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! We offer comprehensive maintenance and support packages to keep your application running smoothly. This includes updates, security patches, and technical support.",
              },
              {
                question: "What technologies do you work with?",
                answer:
                  "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best technology stack for each project's specific needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
