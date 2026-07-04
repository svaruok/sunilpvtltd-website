import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Building2, Layers, FlaskConical, Wrench, Lightbulb, Radio, Settings, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: Radio,
    title: 'Power Transmission',
    color: 'from-blue-500 to-blue-700',
    short: 'High voltage power transmission systems from design to commissioning.',
    desc: 'We provide comprehensive power transmission services including design, engineering, procurement, and installation of high voltage transmission lines, towers, conductors, and associated hardware. Our team has expertise in EHV, HV, and MV power systems.',
    features: ['HV/EHV Transmission Lines', 'Tower Erection & Stringing', 'Substation Interconnection', 'Load Flow Analysis', 'Protection Relay Setting', 'Grid Connectivity'],
  },
  {
    icon: Building2,
    title: 'Electrical Infrastructure',
    color: 'from-indigo-500 to-indigo-700',
    short: 'Complete electrical infrastructure design, installation and commissioning.',
    desc: 'End-to-end electrical infrastructure solutions for industrial facilities, commercial complexes, and public utilities. From initial feasibility studies to final commissioning, we manage every aspect with precision.',
    features: ['MV/LV Distribution Systems', 'Cable Laying & Termination', 'Switchgear Installation', 'Bus Duct Systems', 'Earthing & Lightning Protection', 'Control Panels'],
  },
  {
    icon: Zap,
    title: 'Transformer Installation',
    color: 'from-violet-500 to-violet-700',
    short: 'Expert installation and commissioning of all types of transformers.',
    desc: 'Specialized installation services for all types of power and distribution transformers. We handle everything from site preparation and foundation work to final testing and energization, ensuring safe and reliable operation.',
    features: ['Power Transformers (up to 100 MVA)', 'Distribution Transformers', 'Dry-Type Transformers', 'Furnace Duty Transformers', 'Transformer Relocation', 'Oil Testing & Filtration'],
  },
  {
    icon: Layers,
    title: 'EPC Projects',
    color: 'from-sky-500 to-sky-700',
    short: 'Full Engineering, Procurement & Construction project management.',
    desc: 'Turnkey EPC contracts for electrical infrastructure projects. We handle the complete project lifecycle — engineering design, procurement of materials, construction, testing, commissioning, and handover — under a single contract.',
    features: ['Turnkey Project Execution', 'Multi-discipline Engineering', 'Supply Chain Management', 'Quality Assurance & Control', 'Project Documentation', 'Handover & Training'],
  },
  {
    icon: Building2,
    title: 'Substation Construction',
    color: 'from-cyan-500 to-cyan-700',
    short: 'Design and construction of outdoor & indoor substations.',
    desc: 'Complete substation engineering and construction services from concept to commissioning. We specialize in EHV, HV, and MV substations for utilities, industries, and infrastructure projects.',
    features: ['132KV/33KV Substations', 'Indoor/Outdoor Substations', 'GIS Substations', 'Control Building Construction', 'SCADA Integration', 'Protection & Metering'],
  },
  {
    icon: FlaskConical,
    title: 'Testing & Commissioning',
    color: 'from-teal-500 to-teal-700',
    short: 'Comprehensive testing and quality assurance for all electrical systems.',
    desc: 'Rigorous testing and commissioning services ensuring all electrical systems operate safely and efficiently. We use state-of-the-art testing equipment and follow international testing standards.',
    features: ['Pre-commissioning Tests', 'Protection Relay Testing', 'Transformer Testing', 'Cable Testing (HV)', 'Power Quality Analysis', 'Commissioning Reports'],
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    color: 'from-emerald-500 to-emerald-700',
    short: 'Preventive and corrective maintenance for uninterrupted power supply.',
    desc: 'Comprehensive maintenance services to ensure maximum availability and reliability of your electrical infrastructure. We offer both annual maintenance contracts and emergency breakdown services.',
    features: ['Annual Maintenance Contracts', 'Preventive Maintenance', 'Emergency Breakdown Response', 'Transformer Maintenance', 'Switchgear Maintenance', 'Infrared Thermography'],
  },
  {
    icon: Lightbulb,
    title: 'Industrial Electrical Solutions',
    color: 'from-amber-500 to-amber-700',
    short: 'Specialized electrical solutions for industrial plants and facilities.',
    desc: 'Custom electrical solutions for manufacturing plants, process industries, and industrial facilities. We understand the unique requirements of industrial environments and deliver reliable, efficient electrical systems.',
    features: ['Factory Power Distribution', 'Motor Control Centers (MCC)', 'PLC & Automation Panels', 'APFC Panels', 'Industrial Lighting', 'Energy Audit & Optimization'],
  },
]

export default function Services() {
  useScrollReveal()
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full"><defs><pattern id="g3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g3)"/></svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <Zap size={12} /> Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Electrical Engineering Services
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Comprehensive power infrastructure and electrical solutions for industry, utilities, and infrastructure.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Services</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-badge"><Settings size={12} /> What We Offer</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Full Spectrum of <span className="gradient-text-blue">Electrical Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 border ${
                    active === i
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-2 shadow`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className={`text-xs font-bold ${active === i ? 'text-blue-600' : 'text-gray-700'}`} style={{ fontFamily: 'Montserrat' }}>
                    {s.title}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active service detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-section rounded-3xl p-8 md:p-12 border border-blue-100"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                {(() => {
                  const Icon = services[active].icon
                  return (
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[active].color} flex items-center justify-center mb-6 shadow-xl`}>
                      <Icon size={30} className="text-white" />
                    </div>
                  )
                })()}
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {services[active].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{services[active].desc}</p>
                <Link to="/contact" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Capabilities</h4>
                <div className="grid grid-cols-1 gap-3">
                  {services[active].features.map((f) => (
                    <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-blue-50 shadow-sm">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '50+', label: 'Projects Completed' },
            { val: '100+', label: 'Satisfied Clients' },
            { val: '8', label: 'Service Verticals' },
            { val: '24/7', label: 'Support Available' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black mb-1" style={{ fontFamily: 'Montserrat' }}>{s.val}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>Need a Custom Solution?</h2>
          <p className="text-gray-500 mb-8">Our engineers will design the perfect electrical solution for your specific requirements.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              <Phone size={16} /> Contact Our Experts
            </Link>
            <a href="tel:+919765492339" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all duration-300">
              <Phone size={16} /> Call +91 97654 92339
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
