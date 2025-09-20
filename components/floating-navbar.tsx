"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface FloatingNavbarProps {
  showLogo?: boolean
  logoSize?: "small" | "medium" | "large"
}

export function FloatingNavbar({ showLogo = true, logoSize = "medium" }: FloatingNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ]

  const logoSizeClasses = {
    small: "w-[80px] h-[60px]",
    medium: "w-[120px] h-[80px]",
    large: "w-[150px] h-[100px]"
  }

  return (
    <>
      {/* Mobile: Floating Hamburger Menu */}
      {/* Mobile: Floating Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full w-12 h-12 p-0 shadow-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-black/90 backdrop-blur-xl border-r border-white/20 p-6"
          >
            <div className="flex flex-col space-y-6 mt-4">
              <Link href="/" className="mb-0">
                <Image
                  src="/logo.svg"
                  alt="Exion Solution"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-contain"
                />
              </Link>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white text-lg font-medium transition-all duration-300 hover:translate-x-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6">
                <Button 
                  className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop: Apple-style Floating Navbar at Bottom */}
      <nav className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="h-6 w-px bg-white/20"></div>
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 rounded-full px-6"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
