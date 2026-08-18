import AchievementBadge from './AchievementBadge'

export default function QuestCard({ quest }) {
  const isWork = quest.type === 'work'

  return (
    <div className="flex gap-4 md:gap-8 group">
      {/* Timeline marker */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-4 h-4 rotate-45 border-2 transition-all ${
            isWork ? 'border-yellow-400 bg-yellow-400/20 group-hover:bg-yellow-400/40' : 'border-cyan bg-cyan/20 group-hover:bg-cyan/40'
          }`}
        />
        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple to-transparent mt-2" />
      </div>

      {/* Card content */}
      <div className="pixel-border bg-bg-surface/60 backdrop-blur-sm p-4 md:p-6 mb-8 flex-1 hover:border-pink-hot transition-colors">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`font-pixel text-[8px] px-2 py-0.5 ${isWork ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30' : 'text-cyan bg-cyan/10 border border-cyan/30'}`}>
            {isWork ? 'WORK' : 'EDUCATION'}
          </span>
          <span className="font-terminal text-sm text-lavender">{quest.period}</span>
        </div>
        <h3 className="font-pixel text-sm md:text-base text-cyan mb-1">{quest.title}</h3>
        <p className="font-terminal text-lg text-lavender mb-2">{quest.company}</p>
        <p className="font-terminal text-base text-white/70 mb-3">{quest.description}</p>
        <div className="flex flex-wrap gap-2">
          {quest.rewards.map((reward) => (
            <AchievementBadge key={reward} label={reward} color="pink" />
          ))}
        </div>
      </div>
    </div>
  )
}
