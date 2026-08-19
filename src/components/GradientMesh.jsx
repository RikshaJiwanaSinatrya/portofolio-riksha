import { motion } from 'framer-motion'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function GradientMesh() {
  if (prefersReduced) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 md:opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--primary-start), transparent 70%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '20%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 md:opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--accent-start), transparent 70%)',
          filter: 'blur(80px)',
          top: '50%',
          right: '10%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 md:opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--primary-end), transparent 70%)',
          filter: 'blur(80px)',
          bottom: '10%',
          left: '40%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
