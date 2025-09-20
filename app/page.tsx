"use client"
import React from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { ArrowRight, Code, Smartphone, Cloud, Users, Zap, Shield, Rocket, DollarSign, Lightbulb, Heart, Cpu, Users2, Database, Brain, Server, Wrench, Briefcase, Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HomePage() {
  const words = "Modern Software Solutions for Growing Businesses"
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FloatingNavbar showLogo={false} />

      {/* Hero Section with Aceternity Effects */}
      <section className="min-h-65vh] w-full relative flex items-center justify-center overflow-hidden md:py-20 py-10">
        <Spotlight className="-top-20 left-0 md:left-60 md:-top-10" fill="white" />
        <BackgroundBeams />
        <GridBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Logo at Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <Link href="/" className="hover:scale-105 transition-all duration-300">
                <Image
                  src="/logo.svg"
                  alt="Exion Solutions"
                  width={150}
                  height={100}
                  className="md:w-[400px] w-[300px] md:h-[100px] h-[80px] object-contain"
                />
              </Link>
            </motion.div>

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
                🚀 Transforming Ideas into Digital Reality
              </Badge>

              <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
                <TextGenerateEffect words={words} className="text-white" />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed"
              >
                We craft innovative web applications, mobile solutions, and cloud platforms that drive business growth
                and deliver exceptional user experiences.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 animate-shimmer text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View Our Work
              </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
        <section className="md:py-20 py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold text-secondary">{stat.number}</div>
                <div className="text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Think Section */}
      <section className="md:py-20 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">HOW WE THINK</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              Our Focus
            </p>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto text-pretty">
              Take a moment to familiarize yourself with our mindset. These are the guiding principles and insights about us that provide a deeper understanding of our identity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">We help our clients generate revenue</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                In our design approach, we prioritize the primary business needs and goals. Recognizing that profitability is fundamental to every project, we aim to deliver solutions that contribute to our clients' financial success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">We are moving towards innovations</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                We stay at the forefront of design innovations and trends. Constantly integrating the latest practices in UX and UI, we explore emerging niches such as VR/AR to ensure our approach remains modern and impactful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">We prioritize user experience</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                User experience is at the heart of everything we create. We design intuitive interfaces that not only look great but also provide seamless interactions that keep users engaged and satisfied.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">We embrace cutting-edge technology</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                We leverage the latest technologies and frameworks to build scalable, efficient solutions. Our team stays updated with emerging tech trends to deliver future-proof applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Our Core Services</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto text-pretty">
              We design solutions that help businesses operate smarter, scale faster, and achieve lasting growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Users2 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Staff Augmentation</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                When you need specialized talent on demand, our staff augmentation services give you access to skilled professionals who seamlessly integrate with your team. It's a flexible way to fill skill gaps, strengthen projects, and stay agile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">ERP Solutions</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                We provide powerful ERP systems that unify business operations across departments. From finance to supply chain, our solutions bring visibility, efficiency, and control—helping organizations run smoother and make better decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Data & AI</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                Data is the new fuel, and AI is the engine. We help companies harness both to unlock insights, automate workflows, and innovate faster. Whether it's predictive analytics or intelligent automation, we turn data into opportunity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <Server className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Solutions</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                Our cloud services enable scalability, flexibility, and security—without the overhead of traditional infrastructure. We design cloud strategies that streamline operations, reduce costs, and empower businesses to adapt quickly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Custom Software Development</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                Every business is unique, so we build software tailored to fit. From concept to launch, our custom solutions automate processes, solve real challenges, and give your business the competitive edge it needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Business Process Outsourcing (BPO)</h3>
              <p className="text-neutral-400 text-pretty leading-relaxed">
                We take care of non-core functions so you can focus on what matters most. Our BPO services deliver efficiency, consistency, and cost savings while ensuring high-quality outcomes across your business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Why Choose Exion Solutions?</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: "Expert Team",
                description:
                  "Our experienced developers and designers work collaboratively to bring your vision to life",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-400" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control ensure your software performs flawlessly",
              },
              {
                icon: <Rocket className="h-8 w-8 text-green-400" />,
                title: "Fast Delivery",
                description: "We prioritize efficiency and maintain transparent communication throughout the project",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-neutral-400 text-pretty">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white">Latest Insights</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-pretty">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link href="/articles/1">
                    <div className="group cursor-pointer">
                      <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                        <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                          <Brain className="h-16 w-16 text-blue-400" />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Dec 15, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>5 min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                          The Future of AI in Business Operations
                        </h3>
                        <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                          Explore how artificial intelligence is revolutionizing business processes and what it means for your organization's future growth and efficiency.
                        </p>
                        <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                          <span className="text-sm font-medium">Read More</span>
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link href="/articles/2">
                    <div className="group cursor-pointer">
                      <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                        <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg mb-6 flex items-center justify-center">
                          <Server className="h-16 w-16 text-green-400" />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Dec 10, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>7 min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                          Cloud Migration Best Practices for 2024
                        </h3>
                        <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                          Learn the essential strategies and considerations for successfully migrating your business operations to the cloud while maintaining security and performance.
                        </p>
                        <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                          <span className="text-sm font-medium">Read More</span>
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-6 flex items-center justify-center">
                        <Users2 className="h-16 w-16 text-purple-400" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Dec 5, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>6 min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                        Building High-Performance Remote Teams
                      </h3>
                      <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                        Discover proven strategies for managing and scaling remote development teams while maintaining productivity and team cohesion in today's digital workplace.
                      </p>
                      <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-6 flex items-center justify-center">
                        <Wrench className="h-16 w-16 text-orange-400" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Nov 28, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>8 min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                        Custom Software Development: ROI Analysis
                      </h3>
                      <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                        Understand the true return on investment of custom software solutions and how to measure success metrics for your development projects.
                      </p>
                      <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-6 flex items-center justify-center">
                        <Database className="h-16 w-16 text-cyan-400" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Nov 20, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>4 min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                        ERP Implementation: Common Pitfalls to Avoid
                      </h3>
                      <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                        Learn about the most common mistakes in ERP implementation and how to ensure a smooth transition that maximizes your business efficiency.
                      </p>
                      <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="w-full h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                        <Briefcase className="h-16 w-16 text-pink-400" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Nov 15, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>6 min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                        BPO Services: When to Outsource vs. In-House
                      </h3>
                      <p className="text-neutral-400 text-pretty leading-relaxed mb-6 flex-grow">
                        A comprehensive guide to help you decide which business processes to outsource and which to keep in-house for optimal operational efficiency.
                      </p>
                      <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4 text-white border-white/20 hover:bg-white/10" />
              <CarouselNext className="right-4 text-white border-white/20 hover:bg-white/10" />
            </Carousel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/articles">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-400 text-pretty">
              Let's discuss your project and explore how we can help you achieve your digital goals
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
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
