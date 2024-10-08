'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, MenuIcon } from "lucide-react"
import Link from 'next/link'
import { motion } from 'framer-motion'


// type CryptoType = 'bitcoin' | 'ethereum'

// interface CryptoIcon {
//   x: number
//   y: number
//   vx: number
//   vy: number
//   type: CryptoType
// }

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="z-20 p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pacifico-regular pl-6">
          RIZZ.money
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/contact" className="hover:text-purple-400 transition-colors pacifico-regular">Contact Us</Link>
          <Link href="https://x.com/rizzprotocol" target="_blank" rel="noopener noreferrer">
            <X className="w-6 h-6 hover:text-purple-400 transition-colors" />
          </Link>
          {/* <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <Send className="w-6 h-6 hover:text-purple-400 transition-colors" />
          </Link> */}
        </nav>
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <nav className="flex flex-col space-y-8 items-center relative w-full h-full">
            <button 
              className="absolute top-4 right-4" 
              onClick={() => setIsMenuOpen(false)}
            >
              <MenuIcon className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
            </button>
            <a href="mailto:hi@rizz.money" className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:text-purple-400 transition-colors pacifico-regular pt-10" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <Link href="https://x.com/rizzprotocol" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              <X className="w-12 h-12 bg-clip-text text-white hover:text-purple-400 transition-colors" />
            </Link>
            {/* <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Send className="w-12 h-12 hover:text-purple-400 transition-colors" />
            </Link> */}
          </nav>
        </div>
      )}

      {/* Main content */}
      <div className="z-10 flex-grow flex flex-col items-center justify-center text-center space-y-8 p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pacifico-regular"
        >
          Tinder for the Gamblers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto pacifico-regular"
        >
          We know you love to YOLO your money.
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://app.rizz.money">
              <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 shadow-lg animate-pulse hover:animate-none relative overflow-hidden group pacifico-regular">
                <span className="relative z-10">Rizz me UP🚀</span>
                <span className="absolute inset-0 bg-white opacity-25 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Button>
              </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://docs.rizz.money">
              <Button className="text-lg px-8 py-6 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300 shadow-lg relative overflow-hidden group pacifico-regular">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Futuristic elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900 to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </div>
  )
}