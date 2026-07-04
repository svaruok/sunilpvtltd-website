import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full"><defs><pattern id="g7" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g7)"/></svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <MessageSquare size={12} /> Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Get In Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Have a project? Need a quote? Our team is ready to help. Reach us by phone, email, or fill out the form below.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Contact</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gradient-section border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                primary: '+91 97654 92339',
                secondary: 'Mon–Sat: 9 AM – 7 PM',
                href: 'tel:+919765492339',
                color: 'from-blue-500 to-blue-700',
              },
              {
                icon: Mail,
                title: 'Email Us',
                primary: 'sunilind23@gmail.com',
                secondary: 'We reply within 24 hours',
                href: 'mailto:sunilind23@gmail.com',
                color: 'from-violet-500 to-violet-700',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                primary: 'Chhatrapati Sambhajinagar',
                secondary: 'Plot No. 69/2, Sector No. 05, AURIC, Shendra Industrial Area - 431154',
                href: 'https://maps.google.com/?q=AURIC,Shendra+Industrial+Area,Chhatrapati+Sambhajinagar',
                color: 'from-emerald-500 to-emerald-700',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                primary: 'Mon – Sat: 9 AM – 7 PM',
                secondary: 'Emergency: 24 / 7',
                href: null,
                color: 'from-amber-500 to-amber-700',
              },
            ].map((item) => {
              const Icon = item.icon
              const Card = (
                <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">{item.title}</div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">{item.primary}</div>
                  <div className="text-xs text-gray-500">{item.secondary}</div>
                </div>
              )
              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">{Card}</a>
              ) : (
                <div key={item.title}>{Card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal-left">
              <div className="section-badge mb-4"><MessageSquare size={12} /> Send Message</div>
              <h2 className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
                Request a <span className="gradient-text-blue">Free Quote</span>
              </h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the form and our team will respond within 24 hours with a detailed quote.</p>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-500 shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm">Message Sent Successfully!</div>
                    <div className="text-green-600 text-xs">Our team will contact you within 24 hours.</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-gray-700"
                  >
                    <option value="">Select a service...</option>
                    <option>Power Transmission</option>
                    <option>Electrical Infrastructure</option>
                    <option>Transformer Installation</option>
                    <option>EPC Projects</option>
                    <option>Substation Construction</option>
                    <option>Testing & Commissioning</option>
                    <option>Maintenance Services</option>
                    <option>Industrial Electrical Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project requirements, location, capacity, timeline..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : sent ? (
                    <><CheckCircle size={18} /> Message Sent!</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Map + Extra Info */}
            <div className="reveal-right space-y-6">
              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100" style={{ height: '360px' }}>
                <iframe
                  title="Sunil Transenergy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119777.67138760927!2d75.2954845!3d19.8956037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538eda3cbfaa!2sChhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address Card */}
              <div className="bg-gradient-section rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base" style={{ fontFamily: 'Montserrat' }}>Registered Office</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-800">Chhatrapati Sambhajinagar – 431154 (M.S.)</div>
                      <div className="text-gray-500 text-sm mt-1">Plot No. 69/2, Sector No. 05, AURIC, Shendra MIDC</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-500 shrink-0" />
                    <a href="tel:+919765492339" className="hover:text-blue-600 transition-colors font-semibold">+91 97654 92339</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-blue-500 shrink-0" />
                    <a href="mailto:sunilind23@gmail.com" className="hover:text-blue-600 transition-colors">sunilind23@gmail.com</a>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="text-xs text-gray-400">CIN: U31909MH2022PTC380948</div>
                  <div className="text-xs text-gray-400">ROC: Mumbai | Incorporated: April 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
