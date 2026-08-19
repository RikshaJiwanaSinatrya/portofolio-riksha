import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'

const navItems = [
  { key: 'home', icon: HomeIcon, to: '/' },
  { key: 'projects', icon: BriefcaseIcon, to: '/#projects' },
  { key: 'blog', icon: PenIcon, to: '/#blog' },
  { key: 'contact', icon: MailIcon, to: '/#contact' },
  { key: 'about', icon: UserIcon, to: '/#about' },
]

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default function BottomNav() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2"
      style={{
        background: 'rgba(13, 13, 18, 0.8)',
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
