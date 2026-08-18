import { useState } from 'react'
import { motion } from 'framer-motion'
import socials from '../data/socials.json'
import DialogueBox from '../components/DialogueBox'
import TypeWriter from '../components/TypeWriter'
import PageTransition from '../components/PageTransition'

const options = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
  { label: 'GitHub', value: socials.github.replace('https://', ''), href: socials.github },
  { label: 'LinkedIn', value: socials.linkedin.replace('https://', ''), href: socials.linkedin },
]

export default function Contact() {
  const [hovered, setHovered] = useState(null)

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl">
          <DialogueBox>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-purple/30 pb-3">
              <span className="font-pixel text-lg">💬</span>
              <span className="font-pixel text-[10px] text-cyan">SEND MESSAGE</span>
            </div>

            {/* NPC Greeting */}
            <div className="mb-6">
              <TypeWriter
                text="Greetings, traveler! Want to connect? Choose your method:"
                speed={30}
                className="font-terminal text-xl text-lavender"
              />
            </div>

            {/* Contact Options */}
            <div className="space-y-3 mb-8">
              {options.map((opt, i) => (
                <motion.a
                  key={opt.label}
                  href={opt.href}
                  target={opt.label !== 'Email' ? '_blank' : undefined}
                  rel={opt.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 border border-transparent hover:border-cyan/30 hover:bg-cyan/5 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.4 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={`font-pixel text-xs transition-colors ${hovered === i ? 'text-pink-hot' : 'text-cyan'}`}>
                    {hovered === i ? '▶' : '▷'}
                  </span>
                  <span className="font-pixel text-[10px] text-white group-hover:text-cyan transition-colors">
                    {opt.label}:
                  </span>
                  <span className="font-terminal text-lg text-lavender group-hover:text-pink-hot transition-colors">
                    {opt.value}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Simple Form */}
            <div className="border-t border-purple/30 pt-4">
              <p className="font-pixel text-[8px] text-pink-hot mb-3">OR LEAVE A MESSAGE</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name..."
                  className="w-full bg-bg-deep border border-purple/50 px-3 py-2 font-terminal text-base text-white placeholder:text-gray focus:border-cyan focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-bg-deep border border-purple/50 px-3 py-2 font-terminal text-base text-white placeholder:text-gray focus:border-cyan focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="font-pixel text-[10px] px-6 py-2 border border-cyan text-cyan bg-transparent hover:bg-cyan/10 box-glow-cyan cursor-pointer transition-all"
                >
                  SEND
                </button>
              </form>
            </div>
          </DialogueBox>
        </div>
      </div>
    </PageTransition>
  )
}
