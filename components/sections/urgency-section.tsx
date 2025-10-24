'use client'

import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const UrgencySection = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/fondo5.webp)',
        }}
      />
      
      {/* Tech Grid Lines */}
      <div className="absolute inset-0 elegant-grid opacity-30"></div>
      
      {/* Additional decorative lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
      </div>
      
      {/* Tech Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-300/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-400/4 rounded-full blur-2xl animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-400/6 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="scroll-animate opacity-0 translate-y-8">
          <div className="bg-gradient-to-r from-opptim-green/10 to-opptim-turquoise/10 border border-opptim-green/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-opptim-green rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t('urgency.banner.title')}
                </h3>
                <p className="text-opptim-green font-semibold">
                  {t('urgency.banner.subtitle')}
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('urgency.banner.mainTitle')}
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              {t('urgency.banner.description')}
              <span className="text-opptim-green font-bold"> • {t('urgency.banner.free')}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-opptim-green hover:bg-opptim-green/90 active:bg-opptim-green/80 text-black font-bold px-8 py-4 text-lg"
                onClick={() => window.open(contactInfo.whatsapp, '_blank')}
              >
                💬 {t('urgency.banner.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              ✓ {t('urgency.banner.benefits')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

UrgencySection.displayName = 'UrgencySection'

export { UrgencySection }
