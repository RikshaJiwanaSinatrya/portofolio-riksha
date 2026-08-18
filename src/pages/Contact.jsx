import { useState } from 'react'
import { motion } from 'framer-motion'
import socials from '../data/socials.json'
import Doodle from '../components/Doodle'

const options = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, doodle: 'heart' },
  { label: 'GitHub', value: socials.github.replace('https://', ''), href: socials.github, doodle: 'star' },
  { label: 'LinkedIn', value: socials.linkedin.replace('https://', ''), href: socials.linkedin, doodle: 'circle' },
]

export default function Contact() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="contact" className="scroll-section min-h-screen flex items-center justify-center px-4 py-16 relative">
        <div className="absolute top-20 left-[10%] opacity-70"><Doodle type="spiral" color="#9B7BB8" size={32} rotation={20} /></div>
        <div className="absolute bottom-20 right-[15%] opacity-70"><Doodle type="star" color="#E8B84A" size={28} rotation={-10} /></div>

        <div className="w-full max-w-xl">
          <div className="sketch-card p-8" style={{ transform: 'rotate(-0.75deg)' }}>
            <div className="flex items-center gap-2 mb-2 border-b-2 border-dashed border-line pb-3">
              <Doodle type="heart" color="#E85D4C" size={22} />
              <span className="text-3xl text-pink-neon" style={{ fontFamily: 'var(--font-heading)' }}>
                Let&apos;s Talk!
              </span>
            </div>

            <p className="text-white/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Want to connect? Choose your method:
            </p>

            <div className="space-y-2 mb-8">
              {options.map((opt, i) => (
                <motion.a
                  key={opt.label}
                  href={opt.href}
                  target={opt.label !== 'Email' ? '_blank' : undefined}
                  rel={opt.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 rounded-sm border border-transparent hover:border-pink-hot/25 hover:bg-pink-hot/5 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Doodle
                    type={opt.doodle}
                    color={hovered === i ? '#E85D4C' : '#4A90C4'}
                    size={18}
                    rotation={hovered === i ? 15 : 0}
                  />
                  <span
                    className="text-white group-hover:text-pink-hot transition-colors shrink-0"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}
                  >
                    {opt.label}:
                  </span>
                  <span
                    className="text-gray group-hover:text-pink-hot transition-colors truncate"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
                  >
                    {opt.value}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-line pt-5">
              <p className="section-label mb-3">Or leave a message</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input type="text" placeholder="Your name..." className="input-sketch" />
                <textarea placeholder="Your message..." rows={4} className="input-sketch resize-none" />
                <button
                  type="submit"
                  className="btn-sketch btn-sketch--ghost"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  Send
                  <Doodle type="arrowRight" color="#E85D4C" size={16} />
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6 opacity-70">
            <Doodle type="star" color="#F0A87A" size={18} rotation={10} />
            <Doodle type="circle" color="#6BAB7D" size={18} rotation={0} />
            <Doodle type="heart" color="#E85D4C" size={18} rotation={-10} />
          </div>
        </div>
    </section>
  )
}
