import { motion } from 'framer-motion'

const rarityColors = {
  common: { border: 'border-gray', text: 'text-gray', bg: 'bg-gray/10', label: 'COMMON' },
  rare: { border: 'border-cyan', text: 'text-cyan', bg: 'bg-cyan/10', label: 'RARE' },
  epic: { border: 'border-purple', text: 'text-purple', bg: 'bg-purple/10', label: 'EPIC' },
  legendary: { border: 'border-yellow-400', text: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'LEGENDARY', shimmer: true },
}

export default function InventorySlot({ project, index }) {
  const rarity = rarityColors[project.rarity] || rarityColors.common

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`block pixel-border bg-bg-surface/60 p-4 cursor-pointer hover:border-pink-hot transition-colors ${rarity.border}`}
    >
      {/* Rarity badge */}
      <div className="flex justify-between items-start mb-3">
        <span className={`font-pixel text-[8px] px-2 py-0.5 ${rarity.text} ${rarity.bg} border ${rarity.border} ${rarity.shimmer ? 'shimmer' : ''}`}>
          {rarity.label}
        </span>
      </div>

      {/* Project icon placeholder */}
      <div className="w-full h-20 bg-bg-deep/50 border border-gray/30 rounded-sm mb-3 flex items-center justify-center">
        <span className="font-pixel text-2xl text-purple/50">◇</span>
      </div>

      {/* Project info */}
      <h3 className="font-pixel text-[10px] text-white mb-2 leading-relaxed">{project.name}</h3>
      <p className="font-terminal text-sm text-white/60 mb-3 line-clamp-2">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <span key={t} className="font-terminal text-xs text-lavender bg-purple/20 px-1.5 py-0.5 rounded-sm">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
