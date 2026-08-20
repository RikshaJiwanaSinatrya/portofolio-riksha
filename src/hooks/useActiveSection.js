import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          return
        }
      }
      setActiveSection('/')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}