import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Preloader.css'

const DURATION = 2200

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const R = 64
const CIRC = 2 * Math.PI * R

const BOLT_PATH =
  'M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z'

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
            <linearGradient id="preloader-bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <svg className="preloader-bolt" viewBox="0 0 48 46" aria-hidden="true">
            <path fill="url(#preloader-bolt-grad)" d={BOLT_PATH} />
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