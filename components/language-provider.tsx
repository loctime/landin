'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language, isLoaded } = useLanguage()

  useEffect(() => {
    if (isLoaded && typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language, isLoaded])

  return <>{children}</>
}
