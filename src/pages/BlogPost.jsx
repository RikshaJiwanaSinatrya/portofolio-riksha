import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageTransition from '../components/PageTransition'
import Doodle from '../components/Doodle'
import * as post1 from '../data/blog/building-vaporwave-ui.js'
import * as post2 from '../data/blog/react-performance-tips.js'
import * as post3 from '../data/blog/getting-started-with-tailwind-v4.js'

const postMap = {
  'building-vaporwave-ui': { ...post1.meta, content: post1.content },
  'react-performance-tips': { ...post2.meta, content: post2.content },
  'getting-started-with-tailwind-v4': { ...post3.meta, content: post3.content },
}

const tagColors = ['#6BAB7D', '#4A90C4', '#9B7BB8', '#F0A87A']

export default function BlogPost() {
  const { slug } = useParams()
  const post = postMap[slug]

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl text-pink-hot mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Post not found!
            </p>
            <Link
              to="/blog"
              className="text-lg text-pink-hot hover:text-pink-neon"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &larr; Back to blog
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
          className="text-lg text-pink-hot hover:text-pink-neon inline-flex items-center gap-1 mb-8 transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <Doodle type="arrowRight" color="currentColor" size={16} rotation={180} />
          Back to blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sketch-card p-6 mb-8" style={{ transform: 'rotate(-0.5deg)' }}>
            <h1 className="text-3xl md:text-4xl text-pink-neon mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                {post.date}
              </span>
              <span className="text-sm text-gray/70" style={{ fontFamily: 'var(--font-body)' }}>
                ~ {post.readTime}
              </span>
            </div>
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
          </div>

          <div className="blog-content text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <div className="flex justify-center gap-4 mt-12 opacity-70">
            <Doodle type="star" color="#F0A87A" size={20} rotation={10} />
            <Doodle type="heart" color="#E85D4C" size={20} rotation={-5} />
            <Doodle type="star" color="#4A90C4" size={20} rotation={15} />
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
