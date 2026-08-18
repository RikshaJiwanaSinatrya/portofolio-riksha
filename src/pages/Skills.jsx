import { useState } from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills.json'
import SkillBar from '../components/SkillBar'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

const categories = Object.keys(skills)

const categoryColors = {
  frontend: '#A5D6A7',
  backend: '#82B1FF',
  tools: '#CE93D8',
}

export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-4xl mx-auto">
        {/* Doodle decorations */}
        <div className="absolute top-20 left-[10%]"><Doodle type="star" color="#FFE57F" size={28} rotation={-20} /></div>
        <div className="absolute top-32 right-[8%]"><Doodle type="spiral" color="#82B1FF" size={30} rotation={15} /></div>

        <motion.h2
          className="text-5xl md:text-6xl text-pink-neon text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#A5D6A7" size={140} />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 cursor-pointer transition-all text-lg"
              style={{
                fontFamily: 'var(--font-heading)',
                border: `2px solid ${active === cat ? categoryColors[cat] : 'var(--color-gray)'}`,
                filter: 'url(#sketchy)',
                color: active === cat ? categoryColors[cat] : 'var(--color-gray)',
                backgroundColor: active === cat ? `${categoryColors[cat]}15` : 'transparent',
                transform: `rotate(${cat === active ? '-1' : '0'}deg)`,
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <motion.div
          key={active}
          className="space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skills[active].map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} max={skill.max} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-12 bg-bg-surface p-6 max-w-2xl mx-auto text-center"
          style={{
            border: '2px solid var(--color-gray)',
            filter: 'url(#sketchy)',
            transform: 'rotate(1deg)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-pink-hot mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
            Total Skill Points
          </p>
          <p className="text-4xl text-pink-neon" style={{ fontFamily: 'var(--font-heading)' }}>
            {Object.values(skills).flat().reduce((sum, s) => sum + s.level, 0)}
          </p>
          <p className="text-sm text-gray mt-1" style={{ fontFamily: 'var(--font-body)' }}>
            combined across all categories
          </p>
        </motion.div>

        {/* Doodle decorations */}
        <div className="flex justify-center gap-6 mt-8">
          <Doodle type="star" color="#FFD180" size={20} rotation={15} />
          <Doodle type="circle" color="#A5D6A7" size={20} rotation={0} />
          <Doodle type="heart" color="#FF8A80" size={20} rotation={-10} />
        </div>
      </div>
    </PageTransition>
  )
}
