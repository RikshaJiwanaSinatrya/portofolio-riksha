import { motion } from 'framer-motion'

export default function SkillBar({ name, level, max = 100, delay = 0 }) {
  const percentage = (level / max) * 100

  return (
    <div className="flex items-center gap-3 w-full group">
      <span className="font-pixel text-[10px] text-lavender w-28 text-right shrink-0">{name}</span>
      <div className="flex-1 h-4 bg-bg-surface border border-gray rounded-sm overflow-hidden relative group-hover:border-cyan transition-colors">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-hot to-pink-neon"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            boxShadow: '0 0 10px rgba(255, 110, 199, 0.5), inset 0 0 10px rgba(255, 110, 199, 0.1)'
          }}
        />
      </div>
      <span className="font-pixel text-[10px] text-cyan w-12 shrink-0">LV.{level}</span>
    </div>
  )
}
