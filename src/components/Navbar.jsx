import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Zap, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0B1220] text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919765492339" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={13} />
              <span>+91 97654 92339</span>
            </a>
            <a href="mailto:sunilind23@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={13} />
              <span>sunilind23@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <Zap size={13} />
            <span className="text-xs font-medium tracking-wider uppercase">Powering Progress Since 2022</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-50'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center h-14 w-auto group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.jpg" alt="Sunil Transenergy Pvt. Ltd." className="h-full object-contain mix-blend-multiply" />
              </div>
              <div>
                <div className="font-black text-gray-900 text-base leading-tight tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  SUNIL TRANSENERGY
                </div>
                <div className="text-[10px] text-blue-600 font-semibold tracking-widest uppercase leading-none">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 active'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                <Phone size={15} />
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="pt-3 border-t border-gray-100 mt-2">
                  <a href="tel:+919765492339" className="flex items-center gap-2 text-sm text-gray-600 py-2 px-4">
                    <Phone size={14} /> +91 97654 92339
                  </a>
                  <a href="mailto:sunilind23@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 py-2 px-4">
                    <Mail size={14} /> sunilind23@gmail.com
                  </a>
                </div>
                <Link to="/contact" className="btn-primary w-full justify-center text-sm mt-2">
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
