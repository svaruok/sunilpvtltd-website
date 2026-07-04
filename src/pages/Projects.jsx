import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, MapPin, Calendar, Award, Users, ArrowRight, ExternalLink, Building2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: '33/11 kV Substation – Aurangabad Industrial Area',
    client: 'Maharashtra Industrial Development Corp.',
    location: 'Waluj MIDC, Aurangabad',
    capacity: '2 x 20 MVA',
    year: '2024',
    category: 'Substation',
    status: 'Completed',
    desc: 'Complete EPC project for a 33/11 kV substation serving the Waluj MIDC industrial belt. Included civil work, power transformer installation, HV switchgear, protection, and SCADA integration.',
    highlights: ['2 x 20 MVA Power Transformers', '33 kV GIS Panel', 'Numerical Protection Relays', 'SCADA Integration'],
  },
  {
    id: 2,
    title: 'HV Feeder Line – 33 kV Transmission',
    client: 'MSEDCL',
    location: 'Chhatrapati Sambhajinagar District',
    capacity: '12 km, 33 kV',
    year: '2024',
    category: 'Transmission',
    status: 'Completed',
    desc: 'Construction of 12 km single circuit 33 kV overhead transmission line including tower erection, conductor stringing, and commissioning for rural electrification.',
    highlights: ['12 km Overhead Line', '33 kV ACSR Conductor', '45m Steel Towers', 'Rural Electrification'],
  },
  {
    id: 3,
    title: 'Industrial Power Distribution System',
    client: 'Pharmaceutical Manufacturing Plant',
    location: 'Aurangabad, Maharashtra',
    capacity: '3 MVA',
    year: '2023',
    category: 'Industrial',
    status: 'Completed',
    desc: 'Complete electrical infrastructure for a pharmaceutical manufacturing plant including 3 MVA transformer installation, MCC panels, cable laying, and commissioning.',
    highlights: ['3 MVA Distribution Transformer', 'MCC / VFD Panels', 'Cable Laying 5 km', 'Earthing & Lightning Protection'],
  },
  {
    id: 4,
    title: '11/0.433 kV Substation Package',
    client: 'Commercial Complex Developer',
    location: 'Aurangabad City',
    capacity: '4 x 500 kVA',
    year: '2023',
    category: 'Substation',
    status: 'Completed',
    desc: 'Supply, installation, and commissioning of 4 unit 500 kVA 11/0.433 kV package substations for a large commercial complex development.',
    highlights: ['4 x 500 kVA Transformers', '11 kV RMU Installation', 'LT Panel Boards', 'Automatic Protection'],
  },
  {
    id: 5,
    title: 'Furnace Transformer Replacement',
    client: 'Steel Manufacturing Company',
    location: 'Aurangabad, Maharashtra',
    capacity: '5 MVA',
    year: '2022',
    category: 'Industrial',
    status: 'Completed',
    desc: 'Emergency replacement of failed furnace duty transformer for a steel manufacturing facility. Project completed in record time minimizing production downtime.',
    highlights: ['5 MVA Furnace Transformer', 'Emergency Replacement', '48-hour Turnaround', 'Zero Production Loss'],
  },
  {
    id: 6,
    title: 'AMC & Maintenance – Food Industry',
    client: 'Food Processing Plant',
    location: 'Osmanabad, Maharashtra',
    capacity: 'Ongoing',
    year: '2023 – Present',
    category: 'Maintenance',
    status: 'Ongoing',
    desc: 'Annual Maintenance Contract for a food processing plant covering all electrical systems including transformers, HV/LV panels, motors, and emergency response.',
    highlights: ['Annual Maintenance Contract', 'Quarterly Preventive Maintenance', '24/7 Emergency Support', 'IR Thermography'],
  },
]

const categories = ['All', 'Substation', 'Transmission', 'Industrial', 'Maintenance']

export default function Projects() {
  useScrollReveal()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full"><defs><pattern id="g5" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g5)"/></svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <Building2 size={12} /> Our Projects
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Completed Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A portfolio of successfully executed electrical engineering and power infrastructure projects across Maharashtra.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Projects</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Card Top */}
                  <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] p-5">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-400/20 text-green-300 border border-green-400/30'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">{project.category}</span>
                    </div>
                    <h3 className="text-white font-black text-base leading-tight mb-2" style={{ fontFamily: 'Montserrat' }}>{project.title}</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1 text-gray-400"><Users size={11} /> {project.client}</div>
                      <div className="flex items-center gap-1 text-gray-400"><MapPin size={11} /> {project.location}</div>
                      <div className="flex items-center gap-1 text-gray-400"><Zap size={11} /> {project.capacity}</div>
                      <div className="flex items-center gap-1 text-gray-400"><Calendar size={11} /> {project.year}</div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                    <div className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-gray-600">
                          <Award size={12} className="text-blue-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-blue text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Montserrat' }}>Have a Project in Mind?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let our engineers help you plan, design, and execute your electrical infrastructure project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <ArrowRight size={16} /> Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
