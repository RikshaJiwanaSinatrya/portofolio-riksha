import { motion } from 'framer-motion'

export default function HPBar({ label, value, max = 100, color = 'from-cyan to-purple', delay = 0 }) {
  const percentage = (value / max) * 100

  return (
    <div className="flex items-center gap-3 w-full">
      <span className="font-pixel text-[10px] text-lavender w-16 text-right shrink-0">{label}</span>
      <div className="flex-1 h-5 bg-bg-surface border border-purple rounded-sm overflow-hidden relative">
        <motion.div
          className={`h-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-pixel text-[8px] text-white mix-blend-difference">
          {value}/{max}
        </span>
      </div>
    </div>
  )
}
