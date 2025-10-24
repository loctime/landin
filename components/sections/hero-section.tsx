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
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <video 
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-auto h-[85%] object-contain opacity-65"
          style={{ 
            filter: 'brightness(1.4) contrast(1.2) saturate(1.4)',
            objectPosition: 'center bottom'
          }}
        >
          <source src="/robotaso.mp4" type="video/mp4" />
          {/* Fallback para navegadores que no soporten video */}
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Efectos de fondo adicionales */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opptim-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-opptim-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-20 mt-32 sm:mt-40">
        <div className="scroll-animate opacity-0 translate-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance">
            {t('hero.title')}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-4">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 text-sm sm:text-base">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-green rounded-full mr-2"></div>
              {t('hero.features.personalized')}
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-turquoise rounded-full mr-2"></div>
              {t('hero.features.availability')}
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-blue rounded-full mr-2"></div>
              {t('hero.features.guaranteed')}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-opptim-green hover:bg-opptim-green/90 active:bg-opptim-green/80 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-target"
              onClick={() => window.open('https://wa.me/34633572877', '_blank')}
            >
              💬 {t('hero.cta')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-opptim-turquoise/30 text-opptim-turquoise hover:bg-opptim-turquoise/10 active:bg-opptim-turquoise/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto touch-target"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.secondaryCta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-gray-900 border-opptim-green/30">
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
