'use client'

import { useLanguage } from './use-language'
import { translations, type Language } from '@/data/translations'

export const useTranslations = () => {
  const { language, isLoaded, toggleLanguage } = useLanguage()
  
  const t = (key: string) => {
    if (!isLoaded) return ''
    
    const keys = key.split('.')
    let value: any = translations[language as Language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return {
    t,
    language,
    isLoaded,
    toggleLanguage,
  }
}
