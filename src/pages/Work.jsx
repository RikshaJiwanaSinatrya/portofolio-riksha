import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

const filters = ['all', 'web-app', 'ui-ux', 'open-source']

const tagColors = ['#A5D6A7', '#82B1FF', '#CE93D8', '#FFD180', '#FFE57F']

export default function Work() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
        {/* Doodle decorations */}
        <div className="absolute top-20 left-[8%]"><Doodle type="star" color="#FFE57F" size={30} rotation={20} /></div>
        <div className="absolute top-36 right-[12%]"><Doodle type="heart" color="#FF8A80" size={26} rotation={-15} /></div>

        <motion.h2
          className="text-5xl md:text-6xl text-pink-neon text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
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
          <Doodle type="squiggle" color="#CE93D8" size={140} />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 cursor-pointer transition-all text-lg"
              style={{
                fontFamily: 'var(--font-heading)',
                border: `2px solid ${filter === f ? '#A5D6A7' : 'var(--color-gray)'}`,
                filter: 'url(#sketchy)',
                color: filter === f ? '#A5D6A7' : 'var(--color-gray)',
                backgroundColor: filter === f ? '#A5D6A715' : 'transparent',
                transform: `rotate(${filter === f ? '-1' : '0'}deg)`,
              }}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              className="bg-bg-surface p-5 relative"
              style={{
                border: '2px solid var(--color-gray)',
                filter: 'url(#sketchy)',
                transform: `rotate(${(i % 3 - 1) * 1}deg)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              {/* Corner doodle */}
              <div className="absolute -top-2 -right-2">
                <Doodle type="star" color={tagColors[i % tagColors.length]} size={16} rotation={i * 15} />
              </div>

              <h3
                className="text-2xl text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.name}
              </h3>

              <p className="text-white/70 mb-4 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: `${tagColors[j % tagColors.length]}20`,
                      color: 'var(--color-white)',
                      border: `1px solid ${tagColors[j % tagColors.length]}`,
                      borderRadius: '4px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-pink-hot hover:text-pink-neon transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View project <Doodle type="arrowRight" color="currentColor" size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
