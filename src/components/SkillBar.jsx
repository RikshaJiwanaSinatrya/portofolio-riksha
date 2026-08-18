import { motion } from 'framer-motion'

export default function SkillBar({ name, level, max = 100, delay = 0 }) {
  const percentage = (level / max) * 100

  return (
    <div className="flex items-center gap-3 w-full group">
      <span
        className="w-28 text-right shrink-0 text-sm font-semibold text-white group-hover:text-pink-hot transition-colors"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {name}
      </span>
      <div
        className="flex-1 h-6 bg-bg-deep overflow-hidden relative sketch-border"
        style={{ boxShadow: 'inset 0 1px 3px hsl(30 20% 70% / 0.2)' }}
      >
        <motion.div
          className="h-full rounded-sm"
          style={{ background: 'linear-gradient(90deg, #6BAB7D, #4A90C4, #9B7BB8)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
      <span
        className="w-12 shrink-0 text-sm text-gray tabular-nums"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {level}%
      </span>
    </div>
  )
}
