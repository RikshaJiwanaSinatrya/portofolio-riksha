export default function AchievementBadge({ label, color = 'cyan' }) {
  const colors = {
    cyan: 'border-cyan text-cyan',
    pink: 'border-pink-hot text-pink-hot',
    purple: 'border-purple text-purple',
    gold: 'border-yellow-400 text-yellow-400',
  }

  return (
    <span className={`inline-block font-pixel text-[8px] px-2 py-1 border ${colors[color]} bg-bg-surface/50`}>
      {label}
    </span>
  )
}
