"use client"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spotlight } from "@/components/ui/spotlight"
import { GridBackground } from "@/components/ui/grid-background"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

export default function ArticlePage() {
  const params = useParams()
  const articleId = params.id

  // In a real app, you'd fetch this data based on the articleId
  const article = {
    id: articleId,
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>Web development is evolving at an unprecedented pace, with new technologies and frameworks emerging constantly. As we move through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>
      
      <h2>1. Artificial Intelligence Integration</h2>
      <p>AI is becoming increasingly integrated into web development workflows. From automated code generation to intelligent testing, AI tools are helping developers work more efficiently and create more sophisticated applications.</p>
      
      <p>Tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code, while AI-powered testing frameworks are making it easier to catch bugs before they reach production.</p>
      
      <h2>2. Edge Computing and Performance</h2>
      <p>With users expecting faster load times and better performance, edge computing is becoming crucial. By bringing computation closer to users, we can significantly reduce latency and improve user experience.</p>
      
      <p>Technologies like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge are making it easier than ever to deploy code at the edge.</p>
      
      <h2>3. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is enabling high-performance applications to run in the browser. From games to complex data processing, WASM is opening up new possibilities for web applications.</p>
      
      <p>Frameworks like Blazor and technologies like Rust are making it easier for developers to leverage WebAssembly in their projects.</p>
      
      <h2>4. Progressive Web Apps (PWAs) Evolution</h2>
      <p>PWAs continue to evolve, offering native app-like experiences in the browser. With improved offline capabilities and better integration with device features, PWAs are becoming a viable alternative to native mobile apps.</p>
      
      <h2>5. Sustainability in Web Development</h2>
      <p>As environmental concerns grow, sustainable web development practices are gaining traction. This includes optimizing for energy efficiency, reducing data transfer, and choosing green hosting providers.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, developers can build better, faster, and more sustainable web applications that serve users effectively.</p>
    `,
    author: "Sarah Chen",
    authorRole: "CTO",
    authorImage: "/female-cto-headshot.png",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "AI", "Trends"],
    image: "/modern-software-development-team-working-on-laptop.jpg",
    featured: true
  }

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <FloatingNavbar showLogo={true} logoSize="medium" />

      {/* Article Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link href="/articles">
              <Button variant="ghost" className="text-neutral-400 hover:text-white mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>

            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                {article.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-white">
                {article.title}
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Explore the latest trends shaping the future of web development, from AI integration to new frameworks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{article.author}</p>
                  <p className="text-sm text-neutral-400">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-neutral-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-auto">
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-start space-x-4">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">About {article.author}</h3>
                <p className="text-neutral-400 mb-3">{article.authorRole} at Exion Solutions</p>
                <p className="text-neutral-300 leading-relaxed">
                  {article.author} is a seasoned professional with extensive experience in technology leadership and innovation. 
                  She leads our technical strategy and drives innovation across all our development projects.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3].map((i) => (
                <Link key={i} href={`/articles/${i}`} className="group">
                  <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors mb-2">
                      Related Article {i}
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Brief description of the related article content...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
