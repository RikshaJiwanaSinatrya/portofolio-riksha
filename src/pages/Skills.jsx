import { useState } from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills.json'
import SkillBar from '../components/SkillBar'
import Doodle from '../components/Doodle'

const categories = Object.keys(skills)

const categoryColors = {
  frontend: '#6BAB7D',
  backend: '#4A90C4',
  tools: '#9B7BB8',
}

export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="scroll-section min-h-screen px-4 py-16 max-w-4xl mx-auto relative">
        <div className="absolute top-20 left-[10%] opacity-70"><Doodle type="star" color="#E8B84A" size={28} rotation={-20} /></div>
        <div className="absolute top-32 right-[8%] opacity-70"><Doodle type="spiral" color="#4A90C4" size={30} rotation={15} /></div>

        <motion.h2
          className="page-title"
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
          <Doodle type="squiggle" color="#6BAB7D" size={140} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`tab-sketch ${active === cat ? 'tab-sketch--active' : ''}`}
              style={{
                borderColor: active === cat ? categoryColors[cat] : undefined,
                color: active === cat ? categoryColors[cat] : undefined,
                backgroundColor: active === cat ? `${categoryColors[cat]}12` : undefined,
                transform: active === cat ? 'rotate(-1deg)' : undefined,
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          className="space-y-5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skills[active].map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} max={skill.max} delay={i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sketch-card p-6 max-w-2xl mx-auto text-center"
          style={{ transform: 'rotate(1deg)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="section-label mb-1">Total Skill Points</p>
          <p className="text-4xl text-pink-neon" style={{ fontFamily: 'var(--font-heading)' }}>
            {Object.values(skills).flat().reduce((sum, s) => sum + s.level, 0)}
          </p>
          <p className="text-sm text-gray mt-1" style={{ fontFamily: 'var(--font-body)' }}>
            combined across all categories
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-8 opacity-70">
          <Doodle type="star" color="#F0A87A" size={20} rotation={15} />
          <Doodle type="circle" color="#6BAB7D" size={20} rotation={0} />
          <Doodle type="heart" color="#E85D4C" size={20} rotation={-10} />
        </div>
    </section>
  )
}
