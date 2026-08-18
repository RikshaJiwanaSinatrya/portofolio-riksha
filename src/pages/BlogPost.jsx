import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageTransition from '../components/PageTransition'
import * as post1 from '../data/blog/building-vaporwave-ui.js'
import * as post2 from '../data/blog/react-performance-tips.js'
import * as post3 from '../data/blog/getting-started-with-tailwind-v4.js'

const postMap = {
  'building-vaporwave-ui': { ...post1.meta, content: post1.content },
  'react-performance-tips': { ...post2.meta, content: post2.content },
  'getting-started-with-tailwind-v4': { ...post3.meta, content: post3.content },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = postMap[slug]

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="font-pixel text-lg text-pink-hot mb-4">FILE NOT FOUND</p>
            <Link to="/blog" className="font-pixel text-xs text-cyan hover:text-pink-hot">
              ← BACK TO SAVE FILES
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="font-pixel text-[10px] text-cyan hover:text-pink-hot inline-block mb-8"
        >
          ← BACK TO SAVE FILES
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="pixel-border bg-bg-surface/60 p-6 mb-8">
            <h1 className="font-pixel text-sm md:text-base text-cyan glow-cyan mb-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-terminal text-sm text-lavender">{post.date}</span>
              <span className="font-terminal text-sm text-gray">~ {post.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="font-terminal text-xs text-lavender bg-purple/20 px-2 py-0.5 rounded-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="blog-content font-terminal text-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
