"use client"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Code, Smartphone, Cloud, Database, Shield, Zap, CheckCircle, ArrowRight, Palette } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesPage() {
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
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Comprehensive <span className="text-secondary">Software Solutions</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed">
                From concept to deployment, we provide end-to-end software development services tailored to your
                business needs and objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Core Services</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              Cutting-edge solutions built with modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl flex items-center justify-center border border-secondary/20">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Web Development</h3>
                  <p className="text-neutral-400">Modern web solutions</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Custom web applications built with React, Next.js, and modern frameworks. We create responsive, scalable, and performant web solutions tailored to your business needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">React</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">Next.js</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">TypeScript</span>
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <Smartphone className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Mobile Development</h3>
                  <p className="text-neutral-400">iOS & Android apps</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance mobile apps that engage your users and drive business growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">React Native</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">Flutter</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">Swift</span>
              </div>
            </motion.div>

            {/* Cloud Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl flex items-center justify-center border border-green-500/20">
                  <Cloud className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Cloud Solutions</h3>
                  <p className="text-neutral-400">Scalable infrastructure</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Scalable infrastructure and deployment on AWS, Azure, and GCP. We help you migrate to the cloud and optimize your infrastructure for performance and cost-efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">AWS</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">Azure</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">GCP</span>
              </div>
            </motion.div>

            {/* AI Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl flex items-center justify-center border border-purple-500/20">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">AI Integration</h3>
                  <p className="text-neutral-400">Machine learning solutions</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Cutting-edge AI solutions and machine learning implementations. We integrate artificial intelligence into your business processes to automate tasks and gain valuable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">Machine Learning</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">NLP</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">Computer Vision</span>
              </div>
            </motion.div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-6 w-6 text-orange-400" />,
                title: "Database Solutions",
                description: "Robust data management and optimization",
                features: ["PostgreSQL & MySQL", "MongoDB & NoSQL", "Database Migration", "Performance Optimization"],
                color: "orange",
              },
              {
                icon: <Shield className="h-6 w-6 text-red-400" />,
                title: "Security & Compliance",
                description: "Enterprise-grade security implementation",
                features: ["Authentication & Authorization", "Data Encryption", "GDPR Compliance", "Security Audits"],
                color: "red",
              },
              {
                icon: <Palette className="h-6 w-6 text-pink-400" />,
                title: "UI/UX Design",
                description: "User-centered design and experience",
                features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
                color: "pink",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                        <CheckCircle className="h-3 w-3 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Our Development Process</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description: "We analyze your requirements, define project scope, and create a detailed roadmap",
              },
              {
                step: "2",
                title: "Design & Architecture",
                description: "Our team creates wireframes, designs, and technical architecture for your solution",
              },
              {
                step: "3",
                title: "Development & Testing",
                description: "Agile development with continuous testing and regular progress updates",
              },
              {
                step: "4",
                title: "Deployment & Support",
                description: "Smooth deployment to production with ongoing maintenance and support",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto border border-secondary/20">
                  <span className="text-2xl font-bold text-secondary">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{process.title}</h3>
                <p className="text-neutral-400 text-pretty">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-neutral-400 text-pretty">
              Let's discuss your requirements and create a custom solution that drives your business forward
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
