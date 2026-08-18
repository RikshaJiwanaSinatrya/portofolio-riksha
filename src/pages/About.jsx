import { motion } from 'framer-motion'
import profile from '../data/profile.json'
import Doodle from '../components/Doodle'

const highlights = [
  { label: 'Frontend Development', color: '#6BAB7D' },
  { label: 'UI/UX Design', color: '#4A90C4' },
  { label: 'React & Modern JS', color: '#9B7BB8' },
  { label: 'CSS Animations', color: '#F0A87A' },
]

export default function About() {
  return (
    <section id="about" className="scroll-section min-h-screen px-4 py-16 max-w-4xl mx-auto relative">
        <div className="absolute top-24 right-[12%] opacity-70"><Doodle type="star" color="#F0A87A" size={28} rotation={-15} /></div>
        <div className="absolute top-40 left-[8%] opacity-70"><Doodle type="heart" color="#E85D4C" size={24} rotation={10} /></div>

        <motion.h2
          className="page-title"
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
          <Doodle type="squiggle" color="#4A90C4" size={160} />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <motion.div
            className="w-full lg:w-auto flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="sketch-card p-8 text-center"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <div className="text-5xl text-pink-hot mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {profile.name}
              </div>
              <div
                className="text-sm text-pink-neon border border-pink-neon/30 px-3 py-1 bg-pink-neon/8 inline-block"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {profile.title}
              </div>
            </div>
            <div className="mt-4 opacity-80"><Doodle type="spiral" color="#9B7BB8" size={32} /></div>
          </motion.div>

          <motion.div
            className="flex-1 w-full space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sketch-card p-6" style={{ transform: 'rotate(1deg)' }}>
              <p className="section-label mb-3">A little about me...</p>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {profile.bio}
              </p>
            </div>

            <div className="sketch-card p-6" style={{ transform: 'rotate(-1deg)' }}>
              <p className="section-label text-pink-neon mb-4">What I do</p>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 0 2px ${item.color}30` }}
                    />
                    <span className="text-white" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center opacity-80">
              <Doodle type="star" color="#E8B84A" size={24} rotation={10} />
              <Doodle type="heart" color="#E85D4C" size={24} rotation={-5} />
              <Doodle type="circle" color="#6BAB7D" size={24} rotation={0} />
            </div>
          </motion.div>
        </div>
    </section>
  )
}
