import { createContext, useContext, useState, useCallback } from 'react'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }, [])

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const ctx = useContext(NavigationContext)
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider')
  return ctx
}
