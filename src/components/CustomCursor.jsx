import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const mouse = useRef({ x: -100, y: -100 })

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorX = useSpring(mouse.current.x, springConfig)
  const cursorY = useSpring(mouse.current.y, springConfig)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)')
    if (mql.matches || window.innerWidth < 768) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnterInteractive = () => setHovering(true)
    const onLeaveInteractive = () => setHovering(false)

    window.addEventListener('mousemove', onMove)

    const interactiveEls = document.querySelectorAll('a, button, [data-tilt]')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll('a, button, [data-tilt]')
      newEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [cursorX, cursorY, visible])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full mix-blend-difference"
        style={{
          background: '#fff',
          x: mouse.current.x - 4,
          y: mouse.current.y - 4,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          border: '1px solid rgba(255,255,255,0.5)',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}
