import { motion } from 'framer-motion'
import experience from '../data/experience.json'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

const tagColors = ['#A5D6A7', '#82B1FF', '#CE93D8', '#FFD180', '#FFE57F', '#FF8A80']

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-4xl mx-auto">
        {/* Doodle decorations */}
        <div className="absolute top-20 right-[10%]"><Doodle type="arrowDown" color="#FF8A80" size={28} rotation={15} /></div>
        <div className="absolute top-40 left-[5%]"><Doodle type="star" color="#FFE57F" size={24} rotation={-10} /></div>

        <motion.h2
          className="text-5xl md:text-6xl text-pink-neon text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#FFD180" size={160} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'repeating-linear-gradient(180deg, var(--color-gray) 0px, var(--color-gray) 6px, transparent 6px, transparent 12px)' }}
          />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 w-5 h-5 rounded-full bg-bg-surface"
                  style={{
                    border: `3px solid ${item.type === 'work' ? '#A5D6A7' : '#82B1FF'}`,
                    filter: 'url(#sketchy)',
                    top: '8px',
                  }}
                />

                {/* Card */}
                <div
                  className="bg-bg-surface p-5"
                  style={{
                    border: '2px solid var(--color-gray)',
                    filter: 'url(#sketchy)',
                    transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)`,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: item.type === 'work' ? '#A5D6A720' : '#82B1FF20',
                        color: item.type === 'work' ? '#4a7c59' : '#4a6fa5',
                        border: `1px solid ${item.type === 'work' ? '#A5D6A7' : '#82B1FF'}`,
                      }}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.period}
                    </span>
                  </div>

                  <h3
                    className="text-2xl text-white mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-pink-hot mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.company}
                  </p>
                  <p className="text-white/80 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, j) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: `${tagColors[j % tagColors.length]}20`,
                          color: 'var(--color-white)',
                          border: `1px solid ${tagColors[j % tagColors.length]}`,
                          borderRadius: '4px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow doodle between entries */}
                {i < experience.length - 1 && (
                  <div className="flex justify-start ml-4 mt-2">
                    <Doodle type="arrowDown" color="#9E9E9E" size={20} rotation={i % 2 === 0 ? 5 : -5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
