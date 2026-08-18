import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TypeWriter from '../components/TypeWriter'
import PixelAvatar from '../components/PixelAvatar'
import PageTransition from '../components/PageTransition'

export default function Home() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Grid floor */}
        <div className="grid-floor" />

        {/* Logo */}
        <motion.h1
          className="font-pixel text-3xl md:text-5xl lg:text-7xl chrome-text text-center mb-4 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
        >
          RIKSHA
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="font-pixel text-[10px] md:text-sm text-pink-hot tracking-[0.3em] mb-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TypeWriter text="FRONTEND DEVELOPER" speed={80} />
        </motion.div>

        {/* Pixel Avatar */}
        <motion.div
          className="pixel-border p-4 mb-10 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
        >
          <PixelAvatar size="lg" />
        </motion.div>

        {/* Press Start */}
        <motion.button
          className="font-pixel text-xs md:text-sm text-white glow-pink hover:text-pink-hot cursor-pointer bg-transparent border-none relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={() => navigate('/about')}
          style={{ animation: 'blink 1.5s step-end infinite' }}
        >
          ▶ PRESS START ◀
        </motion.button>

        {/* Credits */}
        <motion.p
          className="absolute bottom-6 font-pixel text-[8px] text-gray relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.5 }}
        >
          © 2026 Riksha
        </motion.p>
      </div>
    </PageTransition>
  )
}
