import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'

export default function Footer() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  return (
    <footer
      className="py-8 px-6 md:ml-[220px]"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
        {content.footer.copyright}
      </p>
    </footer>
  )
}
