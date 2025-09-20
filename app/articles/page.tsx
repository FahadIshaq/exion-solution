"use client"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks.",
      content: "Full article content here...",
      author: "Sarah Chen",
      authorRole: "CTO",
      authorImage: "/female-cto-headshot.png",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["React", "Next.js", "AI", "Trends"],
      image: "/modern-software-development-team-working-on-laptop.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn best practices for creating mobile applications that can grow with your business needs.",
      content: "Full article content here...",
      author: "Michael Johnson",
      authorRole: "Lead Developer",
      authorImage: "/male-lead-developer-headshot.png",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile Development",
      tags: ["React Native", "Mobile", "Scalability"],
      image: "/modern-office-space-with-developers-working.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Architecture Patterns for Modern Applications",
      excerpt: "Discover proven cloud architecture patterns that ensure reliability and performance at scale.",
      content: "Full article content here...",
      author: "David Wilson",
      authorRole: "DevOps Engineer",
      authorImage: "/professional-headshot-of-male-devops-engineer.jpg",
      publishDate: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      tags: ["AWS", "Architecture", "Scalability"],
      image: "/modern-software-development-team-working-on-laptop.jpg",
      featured: false
    },
    {
      id: 4,
      title: "The Art of User Experience Design in 2024",
      excerpt: "How to create intuitive and engaging user experiences that drive business success.",
      content: "Full article content here...",
      author: "Emily Davis",
      authorRole: "UX/UI Designer",
      authorImage: "/female-ux-designer-headshot.png",
      publishDate: "2024-01-01",
      readTime: "4 min read",
      category: "Design",
      tags: ["UX", "UI", "Design", "User Research"],
      image: "/modern-office-space-with-developers-working.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Data-Driven Decision Making with Analytics",
      excerpt: "Leverage data analytics to make informed business decisions and drive growth.",
      content: "Full article content here...",
      author: "Alex Rodriguez",
      authorRole: "CEO",
      authorImage: "/male-ceo-headshot.png",
      publishDate: "2023-12-28",
      readTime: "8 min read",
      category: "Business Intelligence",
      tags: ["Analytics", "Data", "Business"],
      image: "/modern-software-development-team-working-on-laptop.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Security Best Practices for Web Applications",
      excerpt: "Essential security measures every developer should implement to protect user data.",
      content: "Full article content here...",
      author: "Lisa Thompson",
      authorRole: "Project Manager",
      authorImage: "/female-project-manager-headshot.png",
      publishDate: "2023-12-20",
      readTime: "6 min read",
      category: "Security",
      tags: ["Security", "Web Development", "Best Practices"],
      image: "/modern-office-space-with-developers-working.jpg",
      featured: false
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Cloud Computing", "Design", "Business Intelligence", "Security"]

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FloatingNavbar showLogo={true} logoSize="medium" />

      {/* Hero Section */}
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
                Our Blog
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Latest <span className="text-secondary">Insights</span> & Articles
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed">
                Stay updated with the latest trends, insights, and innovations in technology and software development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-black">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-secondary/20 text-secondary">
                        {article.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-400 text-sm text-pretty line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} className="text-xs bg-white/10 text-white border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">{article.author}</p>
                        <p className="text-xs text-neutral-400">{article.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right text-xs text-neutral-400">
                      <p>{new Date(article.publishDate).toLocaleDateString()}</p>
                      <p>{article.readTime}</p>
                    </div>
                  </div>

                  <Link href={`/articles/${article.id}`}>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-black">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
