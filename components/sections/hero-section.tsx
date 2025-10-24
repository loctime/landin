'use client'

import React from 'react'
import { useTranslations } from '@/hooks/use-translations'

const HeroSection = React.memo(() => {
  const { t } = useTranslations()

  return (
    <section 
      className="min-h-screen elegant-gradient flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Sección principal"
    >
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-30" aria-hidden="true"></div>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-36D6E6/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-45C789/5 rounded-full blur-3xl" />
      </div>

      <div className="elegant-container text-center relative z-20">
        <div className="elegant-fade-in">
          <h1 className="elegant-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Ahorra tiempo y dinero
            </span>
            <span className="text-white block">
              con agentes de IA
            </span>
          </h1>

          <div 
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-lg sm:text-xl"
            role="list"
            aria-label="Características principales"
          >
            <div 
              className="flex items-center justify-center text-gray-300"
              role="listitem"
            >
              <div 
                className="w-3 h-3 bg-36D6E6 rounded-full mr-3"
                aria-hidden="true"
              ></div>
              <span>{t('hero.features.personalized')}</span>
            </div>
            <div 
              className="flex items-center justify-center text-gray-300"
              role="listitem"
            >
              <div 
                className="w-3 h-3 bg-45C789 rounded-full mr-3"
                aria-hidden="true"
              ></div>
              <span>{t('hero.features.availability')}</span>
            </div>
            <div 
              className="flex items-center justify-center text-gray-300"
              role="listitem"
            >
              <div 
                className="w-3 h-3 bg-367DE6 rounded-full mr-3"
                aria-hidden="true"
              ></div>
              <span>{t('hero.features.guaranteed')}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export { HeroSection }
