import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export default function FloatingToggles() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full px-3 py-1.5"
      style={{
        background: 'rgba(13, 13, 18, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>

      <div className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />

      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center h-8 px-2 rounded-full text-xs font-medium transition-colors duration-200"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        aria-label="Toggle language"
      >
        {language === 'en' ? 'EN' : 'ID'}
      </button>
    </div>
  )
}
