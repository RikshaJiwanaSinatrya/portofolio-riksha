import Home from './Home'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Work from './Work'
import Blog from './Blog'
import Contact from './Contact'
import { useEffect } from 'react'
import { useNavigation } from '../context/NavigationContext'

const sectionIds = ['home', 'about', 'skills', 'experience', 'work', 'blog', 'contact']

export default function Portfolio() {
  const { setActiveSection } = useNavigation()

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [setActiveSection])

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Blog />
      <Contact />
    </>
  )
}
