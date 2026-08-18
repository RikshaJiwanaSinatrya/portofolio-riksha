import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import * as post1 from '../data/blog/building-vaporwave-ui.js'
import * as post2 from '../data/blog/react-performance-tips.js'
import * as post3 from '../data/blog/getting-started-with-tailwind-v4.js'

const posts = [
  { slug: 'getting-started-with-tailwind-v4', ...post3.meta, content: post3.content },
  { slug: 'react-performance-tips', ...post2.meta, content: post2.content },
  { slug: 'building-vaporwave-ui', ...post1.meta, content: post1.content },
].sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Blog() {
  const [allPosts] = useState(posts)

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
        <motion.h2
          className="font-pixel text-lg md:text-xl text-cyan glow-cyan text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          SAVE FILES
        </motion.h2>

        <div className="space-y-4">
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
                className="block pixel-border bg-bg-surface/60 p-4 md:p-5 hover:border-pink-hot transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-pixel text-[10px] text-cyan">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-terminal text-sm text-lavender">{post.date}</span>
                  <span className="font-terminal text-sm text-gray">~ {post.readTime}</span>
                  {i === 0 && (
                    <span className="font-pixel text-[8px] text-pink-hot bg-pink-hot/10 border border-pink-hot/30 px-2 py-0.5 blink">
                      NEW!
                    </span>
                  )}
                </div>
                <h3 className="font-pixel text-[11px] md:text-xs text-white group-hover:text-cyan transition-colors mb-2">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="font-terminal text-xs text-lavender bg-purple/20 px-2 py-0.5 rounded-sm">
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
