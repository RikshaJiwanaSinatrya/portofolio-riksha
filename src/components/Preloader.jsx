import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Preloader.css'

const DURATION = 2200

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const BRAND = 'RIKSHA'

const brandVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const doneRef = useRef(false)

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      onComplete()
    }

    if (prefersReduced) {
      setProgress(100)
      const t = setTimeout(finish, 350)
      return () => clearTimeout(t)
    }

    const start = performance.now()
    let raf = 0

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(finish, 300)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative flex flex-col items-center gap-7">
        <div className="flex overflow-hidden font-display text-4xl font-bold tracking-tight md:text-5xl">
          {BRAND.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={brandVariants}
              initial="hidden"
              animate="show"
              className="gradient-text"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.45em] text-[var(--text-muted)]"
        >
          Student Developer
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-2 flex w-60 flex-col gap-3"
        >
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-[var(--border)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--primary-start)] via-[var(--primary-end)] to-[var(--accent-start)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}