"use client"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced inventory management and analytics",
      image: "/ecommerce-platform-screenshot.jpg",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "Patient management system with telemedicine capabilities",
      image: "/healthcare-mobile-app-screenshot.jpg",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics and reporting platform",
      image: "/financial-dashboard-screenshot.jpg",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "Chart.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Logistics Management System",
      description: "Comprehensive supply chain and logistics tracking solution",
      image: "/logistics-management-screenshot.jpg",
      category: "Enterprise",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "AI-powered social media monitoring and analytics platform",
      image: "/social-media-analytics-screenshot.jpg",
      category: "AI/ML",
      technologies: ["React", "Python", "TensorFlow", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Restaurant POS System",
      description: "Complete point-of-sale system for restaurants with inventory tracking",
      image: "/restaurant-pos-screenshot.jpg",
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Stripe", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Enterprise", "AI/ML"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
                Our Portfolio
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Showcasing Our <span className="text-secondary">Best Work</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed">
                Explore our portfolio of successful projects across various industries and technologies. Each project
                represents our commitment to excellence and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                className={
                  category === activeCategory
                    ? "bg-secondary hover:bg-secondary/90"
                    : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <div className="text-secondary/60 text-sm">Project Screenshot</div>
                  </div>
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Link href={project.liveUrl}>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-secondary/20 text-secondary">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm text-pretty">{project.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="text-xs bg-white/10 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Featured Case Study</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              Deep dive into one of our most successful projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <div className="text-secondary/60">Case Study Visual</div>
              </div>
              <div className="p-8 lg:p-12 space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">Case Study</Badge>
                  <h3 className="text-3xl font-bold text-white">E-Commerce Platform Transformation</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    We helped a growing retail business transform their outdated e-commerce platform into a modern,
                    scalable solution that increased their online sales by 300% within six months.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Challenge</h4>
                    <p className="text-sm text-neutral-400">
                      Legacy system with poor performance and limited scalability
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Solution</h4>
                    <p className="text-sm text-neutral-400">
                      Modern React-based platform with microservices architecture
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">300%</div>
                    <div className="text-sm text-neutral-400">Sales Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">50%</div>
                    <div className="text-sm text-neutral-400">Faster Loading</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">99.9%</div>
                    <div className="text-sm text-neutral-400">Uptime</div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Technologies We Use</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              We stay current with the latest technologies to deliver cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "Vue.js",
              "Node.js",
              "Python",
              "TypeScript",
              "React Native",
              "Flutter",
              "AWS",
              "Docker",
              "PostgreSQL",
              "MongoDB",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto hover:bg-white/20 transition-colors">
                  <span className="text-secondary font-semibold text-sm">{tech.slice(0, 2)}</span>
                </div>
                <div className="text-sm font-medium text-white">{tech}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-neutral-400 text-pretty">
              Let's discuss your project and see how we can help bring your vision to life
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
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
