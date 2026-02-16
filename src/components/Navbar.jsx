import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const apkUrl = "https://github.com/gurusanjay2322/SkingSight_Mobile/releases/download/v1.1.1/v_1_1_1.apk"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Technology', href: '#technology' },
    { name: 'Gallery', href: '#gallery' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gradient">SkinSight</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href).scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </a>
            ))}
            
            <a
              href={apkUrl}
              download="SkinSight.apk"
              className="px-5 py-2.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md"
            >
              Download
            </a>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <a
              href={apkUrl}
              download="SkinSight.apk"
              className="px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm hover:bg-primary-700 transition-colors shadow-md"
            >
              Download
            </a>
            
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
