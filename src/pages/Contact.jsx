import { useState } from 'react'
import { motion } from 'framer-motion'
import socials from '../data/socials.json'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'

const options = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, doodle: 'heart' },
  { label: 'GitHub', value: socials.github.replace('https://', ''), href: socials.github, doodle: 'star' },
  { label: 'LinkedIn', value: socials.linkedin.replace('https://', ''), href: socials.linkedin, doodle: 'circle' },
]

export default function Contact() {
  const [hovered, setHovered] = useState(null)

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        {/* Doodle decorations */}
        <div className="absolute top-20 left-[10%]"><Doodle type="spiral" color="#CE93D8" size={32} rotation={20} /></div>
        <div className="absolute bottom-20 right-[15%]"><Doodle type="star" color="#FFE57F" size={28} rotation={-10} /></div>

        <div className="w-full max-w-xl">
          {/* Card */}
          <div
            className="bg-bg-surface p-8"
            style={{
              border: '2px solid var(--color-gray)',
              filter: 'url(#sketchy)',
              transform: 'rotate(-1deg)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 border-b-2 border-dashed border-gray pb-3">
              <Doodle type="heart" color="#FF8A80" size={22} />
              <span
                className="text-3xl text-pink-neon"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Let&apos;s Talk!
              </span>
            </div>

            <p className="text-white/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Want to connect? Choose your method:
            </p>

            {/* Contact Options */}
            <div className="space-y-3 mb-8">
              {options.map((opt, i) => (
                <motion.a
                  key={opt.label}
                  href={opt.href}
                  target={opt.label !== 'Email' ? '_blank' : undefined}
                  rel={opt.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 border border-transparent hover:border-pink-hot/30 hover:bg-pink-hot/5 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Doodle
                    type={opt.doodle}
                    color={hovered === i ? '#FF8A80' : '#82B1FF'}
                    size={18}
                    rotation={hovered === i ? 15 : 0}
                  />
                  <span
                    className="text-white group-hover:text-pink-hot transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}
                  >
                    {opt.label}:
                  </span>
                  <span
                    className="text-gray group-hover:text-pink-hot transition-colors"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
                  >
                    {opt.value}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Form */}
            <div className="border-t-2 border-dashed border-gray pt-4">
              <p className="text-lg text-pink-hot mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Or leave a message
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name..."
                  className="w-full bg-bg-deep px-3 py-2 text-white placeholder:text-gray focus:outline-none focus:border-pink-hot transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    border: '2px solid var(--color-gray)',
                  }}
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-bg-deep px-3 py-2 text-white placeholder:text-gray focus:outline-none focus:border-pink-hot transition-colors resize-none"
                  style={{
                    fontFamily: 'var(--font-body)',
                    border: '2px solid var(--color-gray)',
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-pink-hot bg-transparent hover:bg-pink-hot/10 cursor-pointer transition-all text-lg"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    border: '2px solid var(--color-pink-hot)',
                    filter: 'url(#sketchy)',
                    transform: 'rotate(-1deg)',
                  }}
                >
                  Send
                  <span className="ml-2 inline-block"><Doodle type="arrowRight" color="#FF8A80" size={16} /></span>
                </button>
              </form>
            </div>
          </div>

          {/* Doodle decorations */}
          <div className="flex justify-center gap-4 mt-6">
            <Doodle type="star" color="#FFD180" size={18} rotation={10} />
            <Doodle type="circle" color="#A5D6A7" size={18} rotation={0} />
            <Doodle type="heart" color="#FF8A80" size={18} rotation={-10} />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
