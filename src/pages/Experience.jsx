import { motion } from 'framer-motion'
import experience from '../data/experience.json'
import Doodle from '../components/Doodle'

const tagColors = ['#6BAB7D', '#4A90C4', '#9B7BB8', '#F0A87A', '#E8B84A', '#E85D4C']

export default function Experience() {
  return (
    <section id="experience" className="scroll-section min-h-screen px-4 py-16 max-w-4xl mx-auto relative">
        <div className="absolute top-20 right-[10%] opacity-70"><Doodle type="arrowDown" color="#E85D4C" size={28} rotation={15} /></div>
        <div className="absolute top-40 left-[5%] opacity-70"><Doodle type="star" color="#E8B84A" size={24} rotation={-10} /></div>

        <motion.h2
          className="page-title"
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
          <Doodle type="squiggle" color="#F0A87A" size={160} />
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'repeating-linear-gradient(180deg, var(--color-line) 0px, var(--color-line) 6px, transparent 6px, transparent 12px)' }}
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
                <div
                  className="absolute left-4 md:left-6 w-5 h-5 rounded-full bg-bg-surface sketch-border"
                  style={{
                    borderColor: item.type === 'work' ? '#6BAB7D' : '#4A90C4',
                    borderWidth: '3px',
                    top: '8px',
                  }}
                />

                <div
                  className="sketch-card p-5"
                  style={{ transform: `rotate(${i % 2 === 0 ? '-0.75' : '0.75'}deg)` }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="tag-pill"
                      style={{
                        backgroundColor: item.type === 'work' ? '#6BAB7D18' : '#4A90C418',
                        color: item.type === 'work' ? '#4a7c59' : '#3d6a8a',
                        borderColor: item.type === 'work' ? '#6BAB7D' : '#4A90C4',
                      }}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-pink-hot mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.company}
                  </p>
                  <p className="text-white/80 mb-3 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, j) => (
                      <span
                        key={tag}
                        className="tag-pill"
                        style={{
                          backgroundColor: `${tagColors[j % tagColors.length]}18`,
                          borderColor: tagColors[j % tagColors.length],
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {i < experience.length - 1 && (
                  <div className="flex justify-start ml-4 mt-2 opacity-50">
                    <Doodle type="arrowDown" color="#8A7F72" size={20} rotation={i % 2 === 0 ? 5 : -5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  )
}
