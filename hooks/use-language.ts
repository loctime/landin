'use client'

import { useState, useEffect } from 'react'

type Language = 'es' | 'en'

// Simple hook sin dependencias externas
export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('es')
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar idioma guardado al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('opptim-language') as Language
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage)
      }
      setIsLoaded(true)
    }
  }, [])

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
    isLoaded,
  }
}

