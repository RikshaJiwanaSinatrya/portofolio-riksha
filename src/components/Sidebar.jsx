import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import StaggeredMenu from './StaggeredMenu'

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/riksha' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/riksha' },
  { label: 'Email', link: 'mailto:hello@riksha.dev' },
]

export default function Sidebar({ onMenuOpen, onMenuClose }) {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  const menuItems = [
    { label: content.nav.home, ariaLabel: content.nav.home, link: '/' },
    { label: content.nav.about, ariaLabel: content.nav.about, link: '/#about' },
    { label: content.nav.projects, ariaLabel: content.nav.projects, link: '/#projects' },
    { label: content.nav.contact, ariaLabel: content.nav.contact, link: '/#contact' },
  ]

  return (
    <StaggeredMenu
      position="left"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="var(--text)"
      openMenuButtonColor="var(--text)"
      changeMenuColorOnOpen={true}
      colors={['var(--primary-end)', 'var(--primary-start)']}
      accentColor="var(--primary-start)"
      isFixed={true}
      defaultOpen={true}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
    />
  )
}
