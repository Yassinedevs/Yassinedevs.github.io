import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = () => setLang(l => (l === 'fr' ? 'en' : 'fr'))
  const tr = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggle, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
