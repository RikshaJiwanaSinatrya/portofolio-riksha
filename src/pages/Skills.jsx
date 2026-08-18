import { useState } from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills.json'
import SkillBar from '../components/SkillBar'
import PageTransition from '../components/PageTransition'

const categories = Object.keys(skills)

export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-4xl mx-auto">
        <motion.h2
          className="font-pixel text-lg md:text-xl text-cyan glow-cyan text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          STAT SCREEN
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-pixel text-[10px] px-4 py-2 border cursor-pointer transition-all ${
                active === cat
                  ? 'border-cyan text-cyan bg-cyan/10 box-glow-cyan'
                  : 'border-gray text-gray hover:border-lavender hover:text-lavender bg-transparent'
              }`}
            >
              {cat.toUpperCase()}
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
          className="mt-12 pixel-border bg-bg-surface/60 p-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-pixel text-[8px] text-pink-hot mb-2">TOTAL SKILLS</p>
          <p className="font-pixel text-2xl text-cyan">
            {Object.values(skills).flat().reduce((sum, s) => sum + s.level, 0)}
          </p>
          <p className="font-terminal text-sm text-lavender mt-1">combined skill points</p>
        </motion.div>
      </div>
    </PageTransition>
  )
}
