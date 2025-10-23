'use client'

import { useState } from 'react'

type Language = 'es' | 'en'

// Simple hook sin dependencias externas
export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('es')

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('opptim-language', lang)
    }
  }

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
  }

  return {
    language,
    setLanguage,
    toggleLanguage,
  }
}

