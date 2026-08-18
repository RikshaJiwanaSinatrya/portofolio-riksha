import { motion } from 'framer-motion'

export default function SkillBar({ name, level, max = 100, delay = 0 }) {
  const percentage = (level / max) * 100

  return (
    <div className="flex items-center gap-3 w-full group">
      <span
        className="w-28 text-right shrink-0 text-sm font-semibold text-white"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {name}
      </span>
      <div
        className="flex-1 h-5 bg-bg-surface overflow-hidden relative"
        style={{ border: '2px solid var(--color-gray)', filter: 'url(#sketchy)' }}
      >
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(90deg, #A5D6A7, #82B1FF, #CE93D8)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
      <span
        className="w-12 shrink-0 text-sm text-gray"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {level}%
      </span>
    </div>
  )
}
