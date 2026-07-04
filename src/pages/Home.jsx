import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Zap, Phone, ArrowRight, Shield, Clock, Award, Users, 
  CheckCircle, Star, Mail, MapPin, TrendingUp, Wrench, Building2,
  Radio, Layers, FlaskConical, Lightbulb,
  Quote, ChevronDown, Send
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ---------- Counter animation ----------
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ---------- Service cards data ----------
const services = [
  { icon: Radio, title: 'Power Transmission', desc: 'End-to-end high voltage power transmission systems with advanced engineering solutions.', color: 'from-blue-500 to-blue-700' },
  { icon: Building2, title: 'Electrical Infrastructure', desc: 'Complete electrical infrastructure design, installation and commissioning.', color: 'from-indigo-500 to-indigo-700' },
  { icon: Zap, title: 'Transformer Installation', desc: 'Expert installation of distribution and power transformers across all capacities.', color: 'from-violet-500 to-violet-700' },
  { icon: Layers, title: 'EPC Projects', desc: 'Full Engineering, Procurement & Construction project management services.', color: 'from-sky-500 to-sky-700' },
  { icon: Building2, title: 'Substation Construction', desc: 'Design and construction of outdoor & indoor substations to latest standards.', color: 'from-cyan-500 to-cyan-700' },
  { icon: FlaskConical, title: 'Testing & Commissioning', desc: 'Comprehensive testing, commissioning and quality assurance for all electrical systems.', color: 'from-teal-500 to-teal-700' },
  { icon: Wrench, title: 'Maintenance Services', desc: 'Preventive and corrective maintenance services for uninterrupted power supply.', color: 'from-emerald-500 to-emerald-700' },
  { icon: Lightbulb, title: 'Industrial Electrical', desc: 'Specialized electrical solutions for industrial plants, factories and facilities.', color: 'from-amber-500 to-amber-700' },
]

// ---------- Features ----------
const features = [
  { icon: Award, title: 'ISO Certified', desc: 'Quality management systems certified to international standards' },
  { icon: Clock, title: 'On-Time Delivery', desc: '98% project completion rate on or before deadline' },
  { icon: Users, title: 'Expert Team', desc: 'Highly qualified electrical engineers and technicians' },
  { icon: Shield, title: '24/7 Support', desc: 'Round-the-clock technical support and emergency response' },
  { icon: TrendingUp, title: 'Latest Technology', desc: 'Cutting-edge equipment and modern engineering practices' },
  { icon: Star, title: 'Client Satisfaction', desc: '100+ satisfied clients across Maharashtra and beyond' },
]

// ---------- Clients ----------
const clients = [
  'MSEDCL', 'Maharashtra Govt', 'L&T ECC', 'PGCIL', 'CESC', 
  'Adani Power', 'Tata Projects', 'KEC International', 'BHEL',
  'NTPC Limited', 'Power Grid Corp', 'Torrent Power'
]

// ---------- Testimonials ----------
const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Project Manager, MSEDCL',
    text: 'Sunil Transenergy delivered exceptional quality on our substation project. Professional team, on-time delivery, and excellent post-installation support.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Engineering Head, L&T ECC',
    text: 'Outstanding technical expertise and project management. Their team handled a complex EPC project flawlessly. Highly recommended for any power infrastructure work.',
    rating: 5,
  },
  {
    name: 'Vikram Patil',
    role: 'Director, Aurangabad Industries',
    text: 'We have been partnering with Sunil Transenergy for our industrial electrical needs for 2 years. Reliable, professional and technically sound team.',
    rating: 5,
  },
]

// ---------- FAQ ----------
const faqs = [
  { q: 'What types of transformers do you install?', a: 'We specialize in installation of distribution transformers, power transformers, dry-type transformers, hermetically sealed transformers, and furnace duty transformers across all capacities.' },
  { q: 'What is your service area?', a: 'We serve clients across Maharashtra with primary focus on Aurangabad, Pune, Nashik, Nagpur and surrounding districts. We also undertake projects across India for major clients.' },
  { q: 'Do you provide maintenance contracts?', a: 'Yes, we offer comprehensive annual maintenance contracts (AMC) for all electrical systems we install, as well as standalone maintenance services for existing infrastructure.' },
  { q: 'What certifications do you hold?', a: 'Sunil Transenergy Pvt. Ltd. holds ISO 9001:2015 quality management certification along with various industry-specific approvals and electrical contractor licenses.' },
  { q: 'How quickly can you respond to emergencies?', a: 'Our emergency response team is available 24/7. We typically respond within 2-4 hours for critical power infrastructure issues in and around Aurangabad.' },
]

export default function Home() {
  useScrollReveal()
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-x-hidden">
      
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/92 via-[#0B1220]/75 to-[#0B1220]/40" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl animate-float-delay" />
        </div>

        {/* Animated energy lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="8 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="0" y1="60%" x2="100%" y2="40%" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#93c5fd" strokeWidth="0.5" strokeDasharray="4 8">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="4s" repeatCount="indefinite"/>
          </line>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-6"
            >
              <Zap size={12} />
              <span>Powering Progress Since 2022</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Empowering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Electrical
              </span>
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Expert electrical engineering, power transmission, and EPC solutions across Maharashtra. Certified, reliable, and built for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/contact" className="btn-primary text-base px-7 py-4">
                <Phone size={18} />
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline text-base px-7 py-4">
                Explore Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              {['ISO Certified', 'Licensed Contractor', 'Govt. Approved', '24/7 Support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { value: 50, suffix: '+', label: 'Projects Completed' },
              { value: 100, suffix: '+', label: 'Happy Clients' },
              { value: 3, suffix: '+', label: 'Years Experience' },
              { value: 99, suffix: '%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-blue-300 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ============================================================
          ABOUT SNAPSHOT
      ============================================================ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-badge">
                <Building2 size={12} />
                About Our Company
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Montserrat' }}>
                Delivering Power
                <span className="block gradient-text-blue">Infrastructure Excellence</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Sunil Transenergy Pvt. Ltd. is a premier electrical engineering company based in Aurangabad, Maharashtra, incorporated in April 2022. We specialize in power transmission, transformer installation, EPC projects, and complete electrical infrastructure solutions.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Our experienced team of electrical engineers and technicians brings world-class expertise to every project — from small industrial installations to large-scale substation construction — with an unwavering commitment to safety, quality, and on-time delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Registered in India', detail: 'CIN: U31909MH2022PTC380948' },
                  { label: 'Headquartered at', detail: 'Aurangabad, Maharashtra' },
                  { label: 'Directors', detail: 'Sunil Pawar, Baliram Pawar' },
                  { label: 'Capital', detail: '₹2.00 Crore' },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-800">{item.detail}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="relative">
                <img
                  src="/manufacturing.png"
                  alt="Sunil Transenergy Manufacturing"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{ height: '480px' }}
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Award size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-xl">ISO</div>
                      <div className="text-xs text-gray-500 font-medium">Certified Company</div>
                    </div>
                  </div>
                </div>
                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 text-white text-center shadow-xl">
                  <div className="text-3xl font-black" style={{ fontFamily: 'Montserrat' }}>3+</div>
                  <div className="text-xs font-medium text-blue-200">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
      ============================================================ */}
      <section id="services" className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-badge">
              <Zap size={12} />
              What We Do
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Core <span className="gradient-text-blue">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Comprehensive electrical engineering services from initial planning to final commissioning, delivered with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="service-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/services"
                    className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all duration-200 group-hover:text-blue-700"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US
      ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-badge">
                <Star size={12} />
                Why Choose Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Montserrat' }}>
                Your Trusted
                <span className="block gradient-text-blue">Power Partner</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                With over 3 years of focused experience in the electrical engineering sector, we've built a reputation for delivering complex power projects on time, within budget, and to the highest quality standards.
              </p>

              <div className="space-y-4">
                {[
                  'Highly experienced electrical engineers & technicians',
                  'ISO 9001:2015 certified quality management system',
                  'State-of-the-art testing and commissioning equipment',
                  'Strict safety standards and compliance',
                  'Competitive pricing with no hidden charges',
                  '24/7 emergency response team',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle size={13} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-gradient-section rounded-2xl p-5 border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 shadow-md">
                        <Icon size={18} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Montserrat' }}>{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLIENTS MARQUEE
      ============================================================ */}
      <section className="py-14 bg-gradient-blue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat' }}>Trusted By Leading Organizations</h3>
          <p className="text-blue-200 text-sm">Our clients across the power and infrastructure sector</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 bg-white/15 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 shrink-0"
              >
                <span className="text-white font-bold text-sm tracking-wide">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="section-badge">
              <Quote size={12} />
              Client Reviews
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              What Our <span className="gradient-text-blue">Clients Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedTestimonial testimonial={testimonials[activeTestimonial]} key={activeTestimonial} />
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeTestimonial ? 'w-8 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300 hover:bg-blue-300'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
      ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="section-badge">
              <Lightbulb size={12} />
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Montserrat' }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-blue-600 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT QUICK
      ============================================================ */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
                  <Phone size={12} />
                  Get In Touch
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-400 text-base mb-8">
                  Contact our team of electrical engineering experts today for a free consultation and competitive quote.
                </p>
                <div className="space-y-4">
                  <a href="tel:+919765492339" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Phone size={18} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Call Us</div>
                      <div className="text-white font-semibold">+91 97654 92339</div>
                    </div>
                  </a>
                  <a href="mailto:sunilind23@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Mail size={18} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Email Us</div>
                      <div className="text-white font-semibold">sunilind23@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/30 flex items-center justify-center">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Visit Us</div>
                      <div className="text-white font-semibold text-sm">Itkheda, Aurangabad, Maharashtra 431001</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <QuickContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

// ---- Testimonial card ----
function AnimatedTestimonial({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 relative"
    >
      <div className="absolute top-6 right-8 text-blue-100">
        <Quote size={60} />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-base">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-bold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ---- Quick contact form ----
function QuickContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: 'Montserrat' }}>Send Us a Message</h3>
      <div className="space-y-3">
        {[
          { key: 'name', placeholder: 'Your Name', type: 'text' },
          { key: 'email', placeholder: 'Email Address', type: 'email' },
          { key: 'phone', placeholder: 'Phone Number', type: 'tel' },
        ].map(({ key, placeholder, type }) => (
          <input
            key={key}
            type={type}
            placeholder={placeholder}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-white/20"
          />
        ))}
        <textarea
          placeholder="Your Message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-white/20 resize-none"
        />
        <button
          type="submit"
          className="w-full btn-primary justify-center text-sm py-3"
        >
          {sent ? (
            <><CheckCircle size={16} /> Message Sent!</>
          ) : (
            <><Send size={16} /> Send Message</>
          )}
        </button>
      </div>
    </form>
  )
}
