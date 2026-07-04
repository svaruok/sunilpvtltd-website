import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Package, ArrowRight, Phone, CheckCircle, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    title: 'Distribution Transformers',
    category: 'Transformers',
    range: '16 kVA – 2500 kVA',
    voltage: '11 kV / 0.433 kV',
    desc: 'Oil-cooled distribution transformers for rural electrification, industrial facilities, and commercial complexes. Available in various configurations including hermetically sealed and conventional designs.',
    specs: ['ONAN/ONAF Cooling', 'CRGO Core', 'Copper / Aluminum Winding', 'IS 2026 / IEC 60076 Standard'],
    badge: 'Most Popular',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Power Transformers',
    category: 'Transformers',
    range: '1 MVA – 100 MVA',
    voltage: 'Up to 132 kV',
    desc: 'High-capacity power transformers for grid substations, large industrial applications, and utility projects. Designed for high efficiency and long service life.',
    specs: ['ONAN/ONAF/OFAF Cooling', 'OLTC / NLTC Available', 'Insulation Class H', 'Type Tested Design'],
    badge: 'Premium',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    title: 'Dry Type Transformers',
    category: 'Transformers',
    range: '25 kVA – 3150 kVA',
    voltage: 'Up to 33 kV',
    desc: 'Cast resin and VPI dry type transformers for indoor applications in hospitals, data centers, commercial buildings, and hazardous environments where oil is not permitted.',
    specs: ['VPI / Cast Resin Type', 'IP54 Enclosure Available', 'Class F/H Insulation', 'Low Partial Discharge'],
    badge: 'Eco-Friendly',
    color: 'from-violet-500 to-violet-700',
  },
  {
    title: 'Furnace Duty Transformers',
    category: 'Special Transformers',
    range: '500 kVA – 30 MVA',
    voltage: 'Up to 33 kV',
    desc: 'Specialized transformers designed for induction furnaces, arc furnaces, and resistance heating applications. Built to handle frequent load variations and harsh industrial conditions.',
    specs: ['Special Flux Density Design', 'Thermal Overload Capacity', 'Continuous/Intermittent Duty', 'High Short Circuit Strength'],
    badge: 'Heavy Duty',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'HV Control Panels',
    category: 'Panels & Switchgear',
    range: 'Up to 33 kV',
    voltage: 'As per requirement',
    desc: 'Indoor and outdoor HV control panels for substations and industrial power distribution. Includes protection relays, metering, and control wiring as per client specification.',
    specs: ['SF6 / Vacuum Circuit Breakers', 'Numerical Protection Relays', 'SCADA-Ready', 'Factory Tested'],
    badge: 'Smart',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    title: 'MCC & APFC Panels',
    category: 'Panels & Switchgear',
    range: 'As per requirement',
    voltage: '415V / 3 Phase',
    desc: 'Motor Control Centers and Automatic Power Factor Control panels for industrial plants. Designed for reliable motor protection, control, and power factor improvement.',
    specs: ['Fixed / Draw-out Type', 'PLC / Relay Logic Control', 'Auto Power Factor Correction', 'IP42 / IP54 Protection'],
    badge: 'Energy Efficient',
    color: 'from-teal-500 to-emerald-600',
  },
]

export default function Products() {
  useScrollReveal()

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full"><defs><pattern id="g4" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g4)"/></svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <Package size={12} /> Our Products
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Electrical Products & Equipment
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Premium range of electrical products — transformers, panels, and power equipment.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Products</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-badge"><Package size={12} /> Product Range</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our <span className="gradient-text-blue">Product Range</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              High-quality electrical equipment manufactured to IS/IEC standards with comprehensive warranty and after-sales support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${product.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                    {product.badge}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div className="text-xs text-white/70 font-medium uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="text-white font-black text-lg leading-tight" style={{ fontFamily: 'Montserrat' }}>{product.title}</h3>
                  <div className="flex gap-4 mt-3">
                    <div className="text-xs">
                      <div className="text-white/60">Range</div>
                      <div className="text-white font-semibold">{product.range}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-white/60">Voltage</div>
                      <div className="text-white font-semibold">{product.voltage}</div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div className="space-y-2 mb-5">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle size={13} className="text-green-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full border-2 border-blue-600 text-blue-600 rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Phone size={14} /> Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <div className="section-badge"><ShieldCheck size={12} /> Quality & Compliance</div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              Certifications & <span className="gradient-text-blue">Standards</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['ISO 9001:2015', 'IS 2026', 'IEC 60076', 'BIS Certified'].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <div className="font-black text-gray-900 text-sm" style={{ fontFamily: 'Montserrat' }}>{cert}</div>
                <div className="text-xs text-gray-500 mt-1">Certified</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
