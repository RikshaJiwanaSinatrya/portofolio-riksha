import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
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

export default function Blog() {
  const [allPosts] = useState(posts)

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
        {/* Doodle decorations */}
        <div className="absolute top-20 right-[10%]"><Doodle type="spiral" color="#82B1FF" size={28} rotation={10} /></div>

        <motion.h2
          className="text-5xl md:text-6xl text-pink-neon text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Blog
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Doodle type="squiggle" color="#FF8A80" size={120} />
        </motion.div>

        <div className="space-y-5">
          {allPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-bg-surface p-5 hover:bg-purple/10 transition-colors group relative"
                style={{
                  border: '2px solid var(--color-gray)',
                  filter: 'url(#sketchy)',
                  transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)`,
                }}
              >
                {/* Hand-circled number */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-2xl text-pink-hot"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Doodle type={doodleTypes[i % doodleTypes.length]} color="#FFD180" size={16} rotation={i * 10} />
                  <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                    {post.date}
                  </span>
                  <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-body)' }}>
                    ~ {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-xl text-white group-hover:text-pink-hot transition-colors mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: '#CE93D820',
                        color: 'var(--color-white)',
                        border: '1px solid #CE93D8',
                        borderRadius: '4px',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
