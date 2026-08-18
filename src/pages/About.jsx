import { motion } from 'framer-motion'
import character from '../data/character.json'
import HPBar from '../components/HPBar'
import PixelAvatar from '../components/PixelAvatar'
import PageTransition from '../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="font-pixel text-lg md:text-xl text-cyan glow-cyan text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          CHARACTER STATS
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Avatar */}
          <motion.div
            className="w-full lg:w-auto flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pixel-border p-6 mb-4">
              <PixelAvatar size="lg" />
            </div>
            <div className="font-pixel text-sm text-white mb-1">{character.name}</div>
            <div className="font-pixel text-[8px] text-pink-hot border border-pink-hot/30 px-2 py-0.5 bg-pink-hot/10">
              {character.class}
            </div>
          </motion.div>

          {/* Right: Stats Panel */}
          <motion.div
            className="flex-1 w-full space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Level */}
            <div className="flex items-center gap-3">
              <span className="font-pixel text-xs text-lavender">LEVEL</span>
              <span className="font-pixel text-xl text-yellow-400">LV. {character.level}</span>
            </div>

            {/* HP & EXP Bars */}
            <div className="space-y-3">
              <HPBar label="HP" value={character.hp} max={character.maxHp} color="from-cyan to-green-400" delay={0.3} />
              <HPBar label="EXP" value={character.exp} max={character.maxExp} color="from-pink-hot to-purple" delay={0.5} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {character.stats.map((stat, i) => (
                <motion.div
                  key={stat.name}
                  className="pixel-border bg-bg-surface/60 p-3 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-pixel text-[10px] text-cyan mb-1">{stat.name}</div>
                  <div className="font-terminal text-sm text-lavender mb-2">{stat.label}</div>
                  <div className="w-full h-2 bg-bg-deep rounded-sm overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan to-pink-hot"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <div className="font-pixel text-[8px] text-white mt-1">{stat.value}/100</div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.div
              className="pixel-border bg-bg-surface/60 p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="font-pixel text-[8px] text-pink-hot mb-2">BIO</p>
              <p className="font-terminal text-lg text-white/80 leading-relaxed">{character.bio}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
