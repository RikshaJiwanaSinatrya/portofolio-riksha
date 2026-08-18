import { motion } from 'framer-motion'
import Doodle from '../components/Doodle'
import { useNavigation } from '../context/NavigationContext'

export default function Home() {
  const { scrollToSection } = useNavigation()

  return (
    <section id="home" className="scroll-section min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-20 left-[10%] opacity-80"><Doodle type="star" color="#F0A87A" size={32} rotation={15} /></div>
      <div className="absolute top-32 right-[15%] opacity-80"><Doodle type="heart" color="#E85D4C" size={28} rotation={-10} /></div>
      <div className="absolute bottom-32 left-[20%] opacity-70"><Doodle type="spiral" color="#4A90C4" size={36} rotation={0} /></div>
      <div className="absolute top-[60%] right-[10%] opacity-70"><Doodle type="circle" color="#6BAB7D" size={24} rotation={0} /></div>
      <div className="absolute bottom-40 right-[25%] opacity-60"><Doodle type="star" color="#9B7BB8" size={20} rotation={30} /></div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p
          className="text-sm uppercase tracking-[0.3em] text-gray mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          portfolio / sketchbook
        </p>

        <motion.h1
          className="page-hero-title mb-2"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1, bounce: 0.35 }}
        >
          RIKSHA
        </motion.h1>

        <motion.div
          className="flex justify-center mb-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#E85D4C" size={200} />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray mb-10 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Frontend Developer — building interfaces with care &amp; color
        </motion.p>

        <motion.button
          className="btn-sketch btn-sketch--primary"
          style={{ transform: 'rotate(-1deg)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.5 }}
          whileHover={{ scale: 1.04, rotate: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection('about')}
        >
          Let&apos;s explore!
          <Doodle type="arrowRight" color="#FFFCF5" size={20} />
        </motion.button>
      </motion.div>

      <div className="absolute bottom-[30%] left-[15%] opacity-60"><Doodle type="arrowDown" color="#E8B84A" size={28} rotation={20} /></div>
      <div className="absolute top-[25%] left-[30%] opacity-50"><Doodle type="circle" color="#F0A87A" size={18} rotation={0} /></div>
    </section>
  )
}
