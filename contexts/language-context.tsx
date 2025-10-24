'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Verificar que estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Cargar idioma guardado al inicializar - solo en cliente
  useEffect(() => {
    if (!isClient) return
    
    const savedLanguage = localStorage.getItem('opptim-language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
    setIsLoaded(true)
  }, [isClient])

  // Actualizar el atributo lang del HTML - solo en cliente
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = language
    }
  }, [language, isLoaded])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('opptim-language', lang)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLang: Language = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
  }, [language, setLanguage])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isLoaded,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
