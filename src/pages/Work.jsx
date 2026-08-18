import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import Doodle from '../components/Doodle'

const filters = ['all', 'web-app', 'ui-ux', 'open-source']
const tagColors = ['#6BAB7D', '#4A90C4', '#9B7BB8', '#F0A87A', '#E8B84A']

export default function Work() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="scroll-section min-h-screen px-4 py-16 max-w-5xl mx-auto relative">
        <div className="absolute top-20 left-[8%] opacity-70"><Doodle type="star" color="#E8B84A" size={30} rotation={20} /></div>
        <div className="absolute top-36 right-[12%] opacity-70"><Doodle type="heart" color="#E85D4C" size={26} rotation={-15} /></div>

        <motion.h2
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Work
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#9B7BB8" size={140} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`tab-sketch ${filter === f ? 'tab-sketch--active' : ''}`}
              style={{
                borderColor: filter === f ? '#6BAB7D' : undefined,
                color: filter === f ? '#6BAB7D' : undefined,
                backgroundColor: filter === f ? '#6BAB7D12' : undefined,
                transform: filter === f ? 'rotate(-1deg)' : undefined,
              }}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              className="sketch-card p-5 relative"
              style={{ transform: `rotate(${(i % 3 - 1) * 0.75}deg)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              <div className="absolute -top-2 -right-2 opacity-80">
                <Doodle type="star" color={tagColors[i % tagColors.length]} size={16} rotation={i * 15} />
              </div>

              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {project.name}
              </h3>

              <p className="text-white/70 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={t}
                    className="tag-pill"
                    style={{
                      backgroundColor: `${tagColors[j % tagColors.length]}18`,
                      borderColor: tagColors[j % tagColors.length],
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-pink-hot hover:text-pink-neon transition-colors font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View project <Doodle type="arrowRight" color="currentColor" size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
    </section>
  )
}
