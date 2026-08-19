import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  function handleMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setHovering(false)
  }

  return (
    <motion.div
      ref={ref}
      data-tilt
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-shadow duration-300"
        style={{
          background: 'var(--surface)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border)',
          boxShadow: hovering
            ? '0 0 30px rgba(102, 126, 234, 0.15), 0 8px 32px rgba(0,0,0,0.3)'
            : '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        <motion.div
          style={{ transformStyle: 'preserve-3d', translateZ: 20 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
        {hovering && (
          <div
            className="gradient-border pointer-events-none absolute inset-0 z-20 rounded-2xl"
            style={{ opacity: 1 }}
          />
        )}
      </div>
    </motion.div>
  )
}
