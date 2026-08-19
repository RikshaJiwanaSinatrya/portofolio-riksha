import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from './Icons'
import SocialLinks from './SocialLinks'

const navItems = [
  { key: 'home', icon: HomeIcon, to: '/' },
  { key: 'about', icon: UserIcon, to: '/#about' },
  { key: 'projects', icon: BriefcaseIcon, to: '/#projects' },
  { key: 'contact', icon: MailIcon, to: '/#contact' },
]

export default function Sidebar() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen w-[var(--sidebar-width)] flex-col z-40"
      style={{
        background: 'var(--bg-sidebar)',
        borderRight: '1px solid var(--border)',
      }}
    >
      <div className="flex flex-col items-center pt-8 pb-4 px-4">
        <div
          className="w-[72px] h-[72px] rounded-full mb-3 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--primary-start), var(--primary-end))',
            padding: '2px',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-xl font-bold"
            style={{ background: 'var(--bg-sidebar)' }}
          >
            R
          </div>
        </div>
        <h2 className="text-sm font-semibold" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
          Riksha
        </h2>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Student Developer
        </p>
      </div>

      <nav className="flex-1 px-3 py-4" role="navigation" aria-label="Main navigation">
        <ul className="space-y-1">
          {navItems.map(({ key, icon: Icon, to }) => (
            <li key={key}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 relative ${
                    isActive ? 'font-medium' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary-start)' : 'var(--text-muted)',
                  background: isActive ? 'var(--surface)' : 'transparent',
                })}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r"
                        style={{ background: 'linear-gradient(180deg, var(--primary-start), var(--primary-end))' }}
                      />
                    )}
                    <Icon />
                    <span>{content.nav[key]}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 pb-6 flex items-center justify-center">
        <SocialLinks />
      </div>
    </aside>
  )
}
