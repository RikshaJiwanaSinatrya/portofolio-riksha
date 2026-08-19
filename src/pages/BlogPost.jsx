import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

function getPost(slug) {
  const posts = {
    'project-alpha': () => import('../content/posts/project-alpha.md?raw'),
    'project-beta': () => import('../content/posts/project-beta.md?raw'),
    'project-gamma': () => import('../content/posts/project-gamma.md?raw'),
  }

  return posts[slug] || null
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)

  const postMeta = content.projects.items.find((p) => p.slug === slug)

  useEffect(() => {
    const loader = getPost(slug)
    if (!loader) {
      setLoading(false)
      return
    }
    loader().then((mod) => {
      setMarkdown(mod.default)
      setLoading(false)
    })
  }, [slug])

  if (!postMeta && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            404
          </h1>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Post not found.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-full text-sm font-medium glass"
            style={{ color: 'var(--text)' }}
          >
            ← Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="reading-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate('/')}
        className="mb-8 text-sm flex items-center gap-2 transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        ← {language === 'id' ? 'Kembali' : 'Back'}
      </button>

      {postMeta && (
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            {postMeta.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              {estimateReadingTime(markdown || '')} min read
            </span>
            <span>·</span>
            <div className="flex flex-wrap gap-2">
              {postMeta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary-start)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-4 rounded animate-pulse"
              style={{ background: 'var(--surface)', width: `${90 - i * 15}%` }}
            />
          ))}
        </div>
      ) : (
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </article>
      )}
    </motion.div>
  )
}
