import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

export default function Home() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Doodle decorations */}
        <div className="absolute top-20 left-[10%]"><Doodle type="star" color="#FFD180" size={32} rotation={15} /></div>
        <div className="absolute top-32 right-[15%]"><Doodle type="heart" color="#FF8A80" size={28} rotation={-10} /></div>
        <div className="absolute bottom-32 left-[20%]"><Doodle type="spiral" color="#82B1FF" size={36} rotation={0} /></div>
        <div className="absolute top-[60%] right-[10%]"><Doodle type="circle" color="#A5D6A7" size={24} rotation={0} /></div>
        <div className="absolute bottom-40 right-[25%]"><Doodle type="star" color="#CE93D8" size={20} rotation={30} /></div>

        {/* Main title */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl text-pink-neon text-center mb-4 relative z-10"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
        >
          RIKSHA
        </motion.h1>

        {/* Squiggly underline */}
        <motion.div
          className="mb-6 relative z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Doodle type="squiggle" color="#FF8A80" size={200} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray mb-10 relative z-10"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Frontend Developer
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="px-8 py-3 text-xl text-white bg-pink-hot cursor-pointer relative z-10 hover:bg-pink-neon transition-colors"
          style={{
            fontFamily: 'var(--font-heading)',
            border: '2px solid var(--color-gray)',
            filter: 'url(#sketchy)',
            transform: 'rotate(-1deg)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          onClick={() => navigate('/about')}
        >
          Let&apos;s explore!
          <span className="ml-2 inline-block"><Doodle type="arrowRight" color="#FFFEF9" size={20} /></span>
        </motion.button>

        {/* Doodle decorations around button */}
        <div className="absolute bottom-[30%] left-[15%]"><Doodle type="arrowDown" color="#FFE57F" size={28} rotation={20} /></div>
        <div className="absolute top-[25%] left-[30%]"><Doodle type="circle" color="#FFD180" size={18} rotation={0} /></div>
      </div>
    </PageTransition>
  )
}
