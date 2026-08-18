import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/skills', label: 'SKILLS' },
  { to: '/experience', label: 'QUESTS' },
  { to: '/work', label: 'INVENTORY' },
  { to: '/blog', label: 'SAVE FILES' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-md border-b border-purple/30">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-pixel text-sm text-cyan glow-cyan hover:text-white transition-colors">
          RIKSHA
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-pixel text-[10px] tracking-wider transition-all ${
                  isActive ? 'text-pink-hot glow-pink' : 'text-lavender hover:text-cyan'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-pixel text-xl text-cyan"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-bg-deep/95 backdrop-blur-md border-b border-purple/30 px-4 pb-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-pixel text-[10px] tracking-wider transition-all ${
                  isActive ? 'text-pink-hot glow-pink' : 'text-lavender hover:text-cyan'
                }`
              }
            >
              ▶ {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
