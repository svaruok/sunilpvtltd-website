import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Building2, Target, Eye, Heart, Users, Award, Clock, Shield, CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Shield, title: 'Safety First', desc: 'Uncompromising commitment to electrical safety in every project.' },
  { icon: Award, title: 'Quality Excellence', desc: 'ISO-certified processes ensuring highest standards of output.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'Disciplined project management for on-schedule completion.' },
  { icon: Users, title: 'Client Focus', desc: 'Building long-term partnerships through exceptional service.' },
  { icon: Zap, title: 'Innovation', desc: 'Adopting latest technologies for efficient, future-ready solutions.' },
  { icon: Heart, title: 'Integrity', desc: 'Transparent dealings and honest communication at every step.' },
]

const timeline = [
  { year: '2022', title: 'Company Founded', desc: 'Sunil Transenergy Pvt. Ltd. incorporated in April 2022 in Chhatrapati Sambhajinagar, Maharashtra with a vision to transform power infrastructure.' },
  { year: '2022', title: 'First Major Project', desc: 'Successfully executed first major transformer installation project, establishing our technical credibility in the region.' },
  { year: '2023', title: 'Team Expansion', desc: 'Grew the engineering team to handle larger EPC projects across Maharashtra. Established service operations.' },
  { year: '2023', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 quality management certification, reinforcing our commitment to excellence.' },
  { year: '2024', title: '50+ Projects', desc: 'Crossed 50 successfully completed projects milestone. Expanded client base across multiple districts.' },
  { year: '2025', title: 'Industry Recognition', desc: 'Annual General Meeting held, continued strong growth with ₹11 Cr in active projects and expanding infrastructure.' },
]

const team = [
  { name: 'Sunil Baliram Pawar', role: 'Managing Director', desc: 'Visionary leader with deep expertise in electrical engineering and power infrastructure.' },
  { name: 'Baliram Waghu Pawar', role: 'Director – Operations', desc: 'Experienced operations head ensuring efficient project delivery and quality standards.' },
  { name: 'Sarita Sunil Pawar', role: 'Director – Finance', desc: 'Strategic financial leader managing compliance, governance, and business growth.' },
]

export default function About() {
  useScrollReveal()

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid2)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <Building2 size={12} /> About Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              About Sunil Transenergy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A trusted name in electrical engineering and power infrastructure across Maharashtra, India.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">About</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Building2, title: 'Our Mission', color: 'from-blue-500 to-blue-700', desc: 'To deliver world-class electrical engineering solutions that power industry, support communities, and build a sustainable future — with safety, quality, and integrity at our core.' },
              { icon: Eye, title: 'Our Vision', color: 'from-indigo-500 to-violet-700', desc: 'To become the most trusted and innovative electrical infrastructure partner in Maharashtra, setting new standards of excellence in power engineering and EPC delivery.' },
              { icon: Target, title: 'Our Goal', color: 'from-cyan-500 to-blue-600', desc: 'To continuously elevate our technical capabilities, expand our footprint across India, and deliver sustainable, future-ready electrical solutions for a growing nation.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-gradient-section rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Montserrat' }}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Values */}
          <div className="text-center mb-12 reveal">
            <div className="section-badge"><Heart size={12} /> Our Core Values</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              The Principles That <span className="gradient-text-blue">Drive Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 shadow">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Montserrat' }}>{v.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Timeline */}
          <div className="text-center mb-12 reveal">
            <div className="section-badge"><Clock size={12} /> Our Journey</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              Company <span className="gradient-text-blue">Timeline</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center text-white font-black text-xs shadow-lg z-10" style={{ fontFamily: 'Montserrat' }}>
                    {item.year}
                  </div>
                  <div className="flex-1 bg-gradient-section rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="sm:hidden text-xs font-bold text-blue-600 mb-1">{item.year}</div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="section-badge"><Users size={12} /> Leadership</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              Meet Our <span className="gradient-text-blue">Directors</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg" style={{ fontFamily: 'Montserrat' }}>
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1" style={{ fontFamily: 'Montserrat' }}>{member.name}</h3>
                <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-blue text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Montserrat' }}>Ready to Work With Us?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let's discuss your electrical engineering project and deliver excellence together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <ArrowRight size={16} /> Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
