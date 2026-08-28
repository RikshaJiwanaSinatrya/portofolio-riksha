import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Preloader.css'

const DURATION = 2200

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const R = 64
const CIRC = 2 * Math.PI * R

const STAR_PATH =
  'M50 4 L61.6 37.2 L96.8 37.6 L69 60.1 L80.6 94.5 L50 74.7 L19.4 94.5 L31 60.1 L3.2 37.6 L38.4 37.2 Z'

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

  const offset = CIRC * (1 - progress / 100)

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="preloader-mark">
        <svg className="preloader-ring" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <linearGradient id="preloader-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--primary-start)' }} />
              <stop offset="60%" style={{ stopColor: 'var(--primary-end)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--accent-start)' }} />
            </linearGradient>
            <linearGradient id="preloader-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--primary-start)' }} />
              <stop offset="50%" style={{ stopColor: 'var(--primary-end)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--accent-start)' }} />
            </linearGradient>
          </defs>

          <circle
            className="preloader-halo"
            cx="100"
            cy="100"
            r={R}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="2 9"
          />

          <circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            stroke="url(#preloader-ring-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            transform="rotate(-90 100 100)"
          />
        </svg>

        <div className="preloader-core">
          <svg className="preloader-star" viewBox="0 0 100 100" aria-hidden="true">
            <path fill="url(#preloader-star-grad)" d={STAR_PATH} />
          </svg>
        </div>

        <div className="preloader-dots" aria-hidden="true">
          <span
            className="preloader-dot"
            style={{
              top: '26%',
              left: '16%',
              animationDelay: '0s',
            }}
          />
          <span
            className="preloader-dot"
            style={{
              top: '70%',
              left: '88%',
              animationDelay: '1.1s',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}