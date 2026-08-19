import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import { HomeIcon, BriefcaseIcon, MailIcon, UserIcon } from './Icons'

const navItems = [
  { key: 'home', icon: HomeIcon, to: '/' },
  { key: 'projects', icon: BriefcaseIcon, to: '/#projects' },
  { key: 'contact', icon: MailIcon, to: '/#contact' },
  { key: 'about', icon: UserIcon, to: '/#about' },
]

export default function BottomNav() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
      role="navigation"
      aria-label="Mobile navigation"
      style={{
        background: 'color-mix(in srgb, var(--bg-sidebar) 80%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {navItems.map(({ key, icon: Icon, to }) => (
        <NavLink
          key={key}
          to={to}
          end={to === '/'}
          className={() =>
            `flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-200`
          }
          style={({ isActive }) => ({
            color: isActive ? 'var(--primary-start)' : 'var(--text-muted)',
          })}
        >
          <Icon />
          <span className="text-[10px]">{content.nav[key]}</span>
        </NavLink>
      ))}
    </nav>
  )
}
