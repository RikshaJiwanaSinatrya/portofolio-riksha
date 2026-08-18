import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/work', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function SidebarContent() {
  return (
    <div className="relative h-full">
      <div className="px-5 pt-8 pb-4">
        <h1 className="font-heading text-4xl text-pink-hot mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
          RIKSHA
        </h1>
        <p className="text-xs text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
          sketchbook
        </p>
      </div>

      <nav className="px-3 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg transition-colors relative ${
                isActive
                  ? 'text-pink-hot font-bold'
                  : 'text-white hover:text-pink-neon'
              }`
            }
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}
          >
            {({ isActive }) => (
              <>
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[3px]"
                    style={{
                      background: 'repeating-linear-gradient(90deg, #FF8A80 0px, #FF8A80 4px, transparent 4px, transparent 8px)',
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Tape strips */}
      <div
        className="tape"
        style={{
          top: '12px',
          right: '-8px',
          width: '60px',
          height: '20px',
          transform: 'rotate(5deg)',
        }}
      />
      <div
        className="tape"
        style={{
          top: '50%',
          right: '-6px',
          width: '50px',
          height: '18px',
          transform: 'rotate(-8deg) translateY(-50%)',
        }}
      />
      <div
        className="tape"
        style={{
          bottom: '40px',
          right: '-10px',
          width: '55px',
          height: '18px',
          transform: 'rotate(3deg)',
        }}
      />
    </div>
  )
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden md:block fixed top-0 left-0 h-screen w-60 bg-bg-surface z-40"
        style={{
          transform: 'rotate(-3deg)',
          transformOrigin: 'top center',
          border: '2px solid var(--color-gray)',
          filter: 'url(#sketchy)',
          marginTop: '-8px',
          marginLeft: '-12px',
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-bg-surface border-2 border-gray rounded-md"
        style={{ filter: 'url(#sketchy)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <motion.aside
              className="absolute top-0 left-0 h-full w-72 bg-bg-surface overflow-y-auto"
              style={{
                border: '2px solid var(--color-gray)',
                filter: 'url(#sketchy)',
                transform: 'rotate(-2deg)',
                transformOrigin: 'top center',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <SidebarContent />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
