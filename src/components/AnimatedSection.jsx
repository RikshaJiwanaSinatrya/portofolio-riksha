import { motion } from 'framer-motion'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function AnimatedSection({ children, className = '', delay = 0, stagger = false }) {
  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {stagger
        ? Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: delay + i * 0.1 }}
              >
                {child}
              </motion.div>
            ))
          : children
        : children}
    </motion.div>
  )
}
