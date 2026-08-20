import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'

export default function Footer() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
            >
              Riksha
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {content.footer.tagline}
            </p>
          </div>

          <div className="footer-nav">
            <h4
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              Navigation
            </h4>
            <ul className="footer-nav-list">
              {[
                { label: content.nav.home, id: 'home' },
                { label: content.nav.about, id: 'about' },
                { label: content.nav.projects, id: 'projects' },
                { label: content.nav.contact, id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="footer-nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              Connect
            </h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="https://github.com/riksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  {content.contact.github}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/riksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  {content.contact.linkedin}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.contact.email}`} className="footer-nav-link">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
