import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import GradientText from '../components/GradientText'

export default function NotFound() {
  const navigate = useNavigate()
  const { language } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1
          className="text-8xl md:text-9xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <GradientText as="span">404</GradientText>
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          {language === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-full text-sm font-medium glass transition-colors duration-200"
          style={{ color: 'var(--text)' }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(102,126,234,0.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
        >
          ← {language === 'id' ? 'Kembali' : 'Back to home'}
        </button>
      </motion.div>
    </div>
  )
}
