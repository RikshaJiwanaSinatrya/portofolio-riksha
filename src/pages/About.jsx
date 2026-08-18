import { motion } from 'framer-motion'
import profile from '../data/profile.json'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-4xl mx-auto">
        {/* Doodle decorations */}
        <div className="absolute top-24 right-[12%]"><Doodle type="star" color="#FFD180" size={28} rotation={-15} /></div>
        <div className="absolute top-40 left-[8%]"><Doodle type="heart" color="#FF8A80" size={24} rotation={10} /></div>

        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl text-pink-neon text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#82B1FF" size={160} />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Name card */}
          <motion.div
            className="w-full lg:w-auto flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-bg-surface p-8 text-center"
              style={{
                border: '2px solid var(--color-gray)',
                filter: 'url(#sketchy)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div
                className="text-5xl text-pink-hot mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {profile.name}
              </div>
              <div
                className="text-sm text-pink-neon border border-pink-neon/40 px-3 py-1 bg-pink-neon/10 inline-block"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {profile.title}
              </div>
            </div>

            {/* Doodle accent */}
            <div className="mt-4"><Doodle type="spiral" color="#CE93D8" size={32} /></div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            className="flex-1 w-full space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="bg-bg-surface p-6"
              style={{
                border: '2px solid var(--color-gray)',
                filter: 'url(#sketchy)',
                transform: 'rotate(1deg)',
              }}
            >
              <p
                className="text-lg text-pink-hot mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}
              >
                A little about me...
              </p>
              <p className="text-white leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {profile.bio}
              </p>
            </div>

            {/* Quick stats as simple colored bars */}
            <div
              className="bg-bg-surface p-6"
              style={{
                border: '2px solid var(--color-gray)',
                filter: 'url(#sketchy)',
                transform: 'rotate(-1deg)',
              }}
            >
              <p
                className="text-lg text-pink-neon mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}
              >
                What I do
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Frontend Development', color: '#A5D6A7' },
                  { label: 'UI/UX Design', color: '#82B1FF' },
                  { label: 'React & Modern JS', color: '#CE93D8' },
                  { label: 'CSS Animations', color: '#FFD180' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-white" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doodle decorations */}
            <div className="flex gap-4 justify-center">
              <Doodle type="star" color="#FFE57F" size={24} rotation={10} />
              <Doodle type="heart" color="#FF8A80" size={24} rotation={-5} />
              <Doodle type="circle" color="#A5D6A7" size={24} rotation={0} />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
