import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Images, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Gallery items — using placeholder Unsplash images for electrical/industrial category
const categories = ['All', 'Projects', 'Manufacturing', 'Installation', 'Infrastructure', 'Team']

const galleryItems = [
  { id: 1, category: 'Projects', title: 'Substation Construction', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80', desc: 'Large scale substation construction project' },
  { id: 2, category: 'Installation', title: 'Transformer Installation', url: 'https://images.unsplash.com/photo-1565084888279-aca607bb8057?w=600&q=80', desc: 'Professional transformer installation' },
  { id: 3, category: 'Infrastructure', title: 'Power Lines', url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80', desc: 'High voltage power transmission infrastructure' },
  { id: 4, category: 'Manufacturing', title: 'Panel Assembly', url: 'https://images.unsplash.com/photo-1581092160607-ee67df219abb?w=600&q=80', desc: 'Electrical panel manufacturing facility' },
  { id: 5, category: 'Projects', title: 'EPC Project', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', desc: 'Large EPC project completion' },
  { id: 6, category: 'Team', title: 'Engineering Team', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', desc: 'Our dedicated engineering team' },
  { id: 7, category: 'Installation', title: 'Cable Laying', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80', desc: 'HV cable laying and termination' },
  { id: 8, category: 'Infrastructure', title: 'Substation', url: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80', desc: 'Modern electrical substation' },
  { id: 9, category: 'Manufacturing', title: 'Transformer Testing', url: 'https://images.unsplash.com/photo-1609349093440-b2a78c3e2b3d?w=600&q=80', desc: 'Quality testing of transformers' },
  { id: 10, category: 'Projects', title: 'Rural Electrification', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', desc: 'Rural electrification project' },
  { id: 11, category: 'Team', title: 'Site Inspection', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', desc: 'Team site inspection and planning' },
  { id: 12, category: 'Installation', title: 'Switchgear Setup', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80', desc: 'HV switchgear installation' },
]

export default function Gallery() {
  useScrollReveal()
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(g => g.category === filter)

  const openLightbox = (item, idx) => {
    setLightbox(item)
    setLightboxIdx(idx)
  }

  const closeLightbox = () => setLightbox(null)

  const prevItem = () => {
    const newIdx = (lightboxIdx - 1 + filtered.length) % filtered.length
    setLightboxIdx(newIdx)
    setLightbox(filtered[newIdx])
  }

  const nextItem = () => {
    const newIdx = (lightboxIdx + 1) % filtered.length
    setLightboxIdx(newIdx)
    setLightbox(filtered[newIdx])
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1220] to-[#0f2555] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full"><defs><pattern id="g6" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g6)"/></svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-badge bg-blue-900/60 text-blue-300 border-blue-700/50 mb-4">
              <Images size={12} /> Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Work in Pictures
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A visual showcase of our projects, installations, and team across Maharashtra.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Gallery</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
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

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(item, idx)}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-blue-300 font-medium">{item.category}</div>
                        <div className="text-white font-bold text-sm">{item.title}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.url.replace('w=600', 'w=1200')}
                alt={lightbox.title}
                className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain"
              />
              <div className="flex items-center justify-between mt-4 text-white">
                <button onClick={prevItem} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Previous">
                  <ChevronLeft size={24} />
                </button>
                <div className="text-center">
                  <div className="font-bold">{lightbox.title}</div>
                  <div className="text-sm text-gray-400">{lightbox.desc}</div>
                  <div className="text-xs text-gray-500 mt-1">{lightboxIdx + 1} / {filtered.length}</div>
                </div>
                <button onClick={nextItem} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Next">
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
