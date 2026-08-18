import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Doodle from '../components/Doodle'
import * as post1 from '../data/blog/building-vaporwave-ui.js'
import * as post2 from '../data/blog/react-performance-tips.js'
import * as post3 from '../data/blog/getting-started-with-tailwind-v4.js'

const posts = [
  { slug: 'getting-started-with-tailwind-v4', ...post3.meta, content: post3.content },
  { slug: 'react-performance-tips', ...post2.meta, content: post2.content },
  { slug: 'building-vaporwave-ui', ...post1.meta, content: post1.content },
].sort((a, b) => new Date(b.date) - new Date(a.date))

const doodleTypes = ['star', 'heart', 'circle']
const tagColors = ['#6BAB7D', '#4A90C4', '#9B7BB8', '#F0A87A']

export default function Blog() {
  const [openSlug, setOpenSlug] = useState(null)

  const togglePost = (slug) => {
    setOpenSlug((prev) => (prev === slug ? null : slug))
  }

  return (
    <section id="blog" className="scroll-section min-h-screen px-4 py-16 max-w-3xl mx-auto relative">
      <div className="absolute top-20 right-[10%] opacity-70"><Doodle type="spiral" color="#4A90C4" size={28} rotation={10} /></div>

      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Blog
      </motion.h2>
      <motion.div
        className="flex justify-center mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Doodle type="squiggle" color="#E85D4C" size={120} />
      </motion.div>

      <div className="space-y-5">
        {posts.map((post, i) => {
          const isOpen = openSlug === post.slug
          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <button
                type="button"
                onClick={() => togglePost(post.slug)}
                className="block w-full text-left sketch-card sketch-card--flat p-5 hover:bg-purple/8 transition-colors group cursor-pointer"
                style={{ transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-2xl text-pink-hot" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Doodle type={doodleTypes[i % doodleTypes.length]} color="#F0A87A" size={16} rotation={i * 10} />
                  <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                    {post.date}
                  </span>
                  <span className="text-sm text-gray/70" style={{ fontFamily: 'var(--font-body)' }}>
                    ~ {post.readTime}
                  </span>
                  <span className="ml-auto text-sm text-pink-hot" style={{ fontFamily: 'var(--font-heading)' }}>
                    {isOpen ? '− close' : '+ read'}
                  </span>
                </div>

                <h3
                  className="text-xl text-white group-hover:text-pink-hot transition-colors mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, j) => (
                    <span
                      key={tag}
                      className="tag-pill"
                      style={{
                        backgroundColor: `${tagColors[j % tagColors.length]}18`,
                        borderColor: tagColors[j % tagColors.length],
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="sketch-card p-6 mt-3 blog-content text-lg"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
