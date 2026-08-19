import { createContext, useContext, useReducer, useEffect } from 'react'

const LanguageContext = createContext()

function languageReducer(state) {
  return state === 'en' ? 'id' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, dispatch] = useReducer(
    languageReducer,
    'en',
    () => localStorage.getItem('language') || 'en'
  )

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage: dispatch }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
