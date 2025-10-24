'use client'

import React, { useState } from 'react'
import { Zap, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useTranslations } from '@/hooks/use-translations'

const HeroSection = React.memo(() => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { t } = useTranslations()

  return (
    <section className="min-h-screen elegant-gradient flex items-center justify-center relative overflow-hidden">
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-36D6E6/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-45C789/5 rounded-full blur-3xl" />
      </div>

      <div className="elegant-container text-center relative z-20">
        <div className="elegant-fade-in">
          <h1 className="elegant-title text-4xl sm:text-6xl md:text-8xl text-white mb-6 sm:mb-8">
            {t('hero.title')}
          </h1>

          <p className="elegant-subtitle text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 sm:mb-16 text-base sm:text-lg">
            <div className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-36D6E6 rounded-full mr-3"></div>
              {t('hero.features.personalized')}
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-45C789 rounded-full mr-3"></div>
              {t('hero.features.availability')}
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-367DE6 rounded-full mr-3"></div>
              {t('hero.features.guaranteed')}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button 
              className="elegant-button text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/34633572877', '_blank')}
            >
              💬 {t('hero.cta')}
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
            <button
              className="elegant-button-outline text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="w-5 h-5 mr-3" />
              {t('hero.secondaryCta')}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl elegant-card">
          <video 
            controls 
            autoPlay
            className="w-full rounded-lg"
          >
            <source src="/demo chatbot.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export { HeroSection }
