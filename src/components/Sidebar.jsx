import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '../context/NavigationContext'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

function SidebarContent({ onNavigate }) {
  const { activeSection, scrollToSection } = useNavigation()

  const handleClick = (id) => {
    scrollToSection(id)
    onNavigate?.()
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="px-5 pt-8 pb-4">
        <button
          type="button"
          onClick={() => handleClick('home')}
          className="text-left w-full cursor-pointer"
        >
          <h1 className="font-heading text-4xl text-pink-hot mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
            RIKSHA
          </h1>
          <p className="text-xs text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
            sketchbook
          </p>
        </button>
      </div>

      <nav className="px-3 flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-lg transition-all relative cursor-pointer ${
                isActive
                  ? 'text-pink-hot font-bold nav-link-active'
                  : 'text-white hover:text-pink-neon hover:translate-x-0.5'
              }`}
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}
            >
              {item.label}
            </button>
          )
        })}
      </nav>

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
      {/* Desktop sidebar — sticky, takes layout space */}
      <aside className="hidden md:block sticky top-0 h-screen w-[260px] shrink-0 z-30 self-start pt-2 pl-2">
        <div
          className="h-[calc(100vh-1rem)] bg-bg-surface sketch-border overflow-hidden"
          style={{
            transform: 'rotate(-2deg)',
            transformOrigin: 'top center',
            boxShadow: 'var(--shadow-sidebar)',
          }}
        >
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-bg-surface sketch-border"
        style={{ boxShadow: 'var(--shadow-paper)' }}
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
              className="absolute top-0 left-0 h-full w-72 bg-bg-surface overflow-y-auto sketch-border"
              style={{
                boxShadow: 'var(--shadow-sidebar)',
                transform: 'rotate(-1.5deg)',
                transformOrigin: 'top center',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
