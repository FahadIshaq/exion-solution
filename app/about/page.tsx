import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Award, TrendingUp, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FloatingNavbar showLogo={true} logoSize="medium" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                About Exion Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Building the Future of <span className="text-secondary">Digital Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Founded in 2019, Exion Solutions has been at the forefront of digital transformation, helping businesses
                leverage cutting-edge technology to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Exion Solutions was born from a simple yet powerful vision: to bridge the gap between innovative
                  technology and practical business solutions. Our founders, seasoned software engineers with decades of
                  combined experience, recognized the need for a development partner that truly understands both
                  technical excellence and business objectives.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service software
                  development company, serving clients from startups to Fortune 500 companies. We've successfully
                  delivered over 150 projects, each one reinforcing our commitment to quality, innovation, and client
                  success.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in software development, embracing
                  emerging technologies while maintaining our core values of reliability, transparency, and exceptional
                  service.
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img src="/modern-office-space-with-developers-working.jpg" alt="Exion Solutions office" className="rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground text-pretty">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and
                  competitive advantage in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  To be the leading software development partner, recognized for our technical excellence, innovation,
                  and unwavering commitment to client success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground text-pretty">
                  Integrity, innovation, collaboration, and excellence in everything we do. We believe in building
                  lasting partnerships based on trust and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable results that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-muted px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/male-ceo-headshot.png"
                    alt="Alex Rodriguez"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alex Rodriguez</h3>
                  <p className="text-secondary font-medium">CEO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    15+ years in software development and business strategy. Passionate about building scalable
                    solutions.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            {/* Team Member 2 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/female-cto-headshot.png"
                    alt="Sarah Chen"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sarah Chen</h3>
                  <p className="text-secondary font-medium">CTO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    Expert in cloud architecture and modern web technologies. Leads our technical innovation
                    initiatives.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            {/* Team Member 3 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/male-lead-developer-headshot.png"
                    alt="Michael Johnson"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-secondary font-medium">Lead Developer</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    Full-stack developer specializing in React, Node.js, and mobile development. 10+ years of
                    experience.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            {/* Team Member 4 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/female-ux-designer-headshot.png"
                    alt="Emily Davis"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Emily Davis</h3>
                  <p className="text-secondary font-medium">UX/UI Designer</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    Creative designer focused on user-centered design and creating intuitive digital experiences.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            {/* Team Member 5 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/professional-headshot-of-male-devops-engineer.jpg"
                    alt="David Wilson"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">David Wilson</h3>
                  <p className="text-secondary font-medium">DevOps Engineer</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    Infrastructure specialist ensuring reliable, scalable, and secure deployment of our applications.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            {/* Team Member 6 */}
            {/* <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src="/female-project-manager-headshot.png"
                    alt="Lisa Thompson"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lisa Thompson</h3>
                  <p className="text-secondary font-medium">Project Manager</p>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">
                    Experienced project manager ensuring smooth delivery and excellent client communication.
                  </p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card> */}
          {/* </div>
        </div>
      </section>  */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Ready to Work Together?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Let's discuss how our experienced team can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
