import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Zap, ArrowRight, Send, Share2, Globe } from 'lucide-react'

// Social SVG icons (lucide-react does not export Facebook/Twitter/Instagram/Linkedin)
const SocialFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const SocialLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const SocialTwitter = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const SocialInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
]

const serviceLinks = [
  'Power Transmission',
  'Transformer Installation',
  'EPC Projects',
  'Substation Construction',
  'Testing & Commissioning',
  'Maintenance Services',
]

export default function Footer({ onOpenInquiry }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1220] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Power Your Project?
            </h3>
            <p className="text-blue-100 text-sm">Get in touch with our expert team for a free consultation.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              <Phone size={16} />
              Contact Us Now
            </Link>
            <a
              href="mailto:sunilind23@gmail.com"
              className="flex items-center gap-2 border-2 border-white/60 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-auto bg-white rounded-lg p-1 overflow-hidden">
                <img src="/logo.jpg" alt="Sunil Transenergy Pvt. Ltd." className="h-full object-contain" />
              </div>
              <div>
                <div className="font-black text-white text-sm leading-tight" style={{ fontFamily: 'Montserrat' }}>
                  SUNIL TRANSENERGY
                </div>
                <div className="text-[10px] text-blue-400 font-semibold tracking-widest">PVT. LTD.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading electrical engineering and power infrastructure company in Chhatrapati Sambhajinagar, Maharashtra. Delivering excellence in power transmission and electrical solutions since 2022.
            </p>
            <div className="space-y-3">
              <a href="tel:+919765492339" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors group text-sm">
                <Phone size={15} className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 97654 92339</span>
              </a>
              <a href="mailto:sunilind23@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors group text-sm">
                <Mail size={15} className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>sunilind23@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 group text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Plot No. 69/2, Sector No. 05, AURIC, Shendra Industrial Area, Chhatrapati Sambhajinagar - 431154 (M.S.)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/gallery" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <button onClick={onOpenInquiry} className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group w-full text-left">
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
                  >
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest updates on projects and industry news.</p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 text-white placeholder-gray-500 px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors">
                <Send size={16} />
              </button>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider font-medium">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { Icon: SocialFacebook, href: '#', label: 'Facebook' },
                  { Icon: SocialLinkedin, href: '#', label: 'LinkedIn' },
                  { Icon: SocialTwitter, href: '#', label: 'Twitter' },
                  { Icon: SocialInstagram, href: '#', label: 'Instagram' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sunil Transenergy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Sitemap</a>
          </div>
          <p className="text-gray-600 text-xs">CIN: U31909MH2022PTC380948</p>
        </div>
      </div>
    </footer>
  )
}
