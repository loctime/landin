'use client'

import React, { useState } from 'react'
import { Zap, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const HeroSection = React.memo(() => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* GIF de fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full scale-[1.00]">
          <Image 
            src="/ultimo.gif" 
            alt="Background" 
            fill
            className="object-contain opacity-50"
            priority
            unoptimized
            style={{ filter: 'blur(1px) brightness(1.3) contrast(1.15) saturate(1.2) drop-shadow(0 0 40px rgba(0, 200, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 180, 255, 0.4))' }}
          />
        </div>
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Efectos de fondo adicionales */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opptim-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-opptim-turquoise/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-20">
        <div className="scroll-animate opacity-0 translate-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Ahorra tiempo y dinero con{" "}
            <span className="bg-gradient-to-r from-opptim-green via-opptim-turquoise to-opptim-blue bg-clip-text text-transparent">
              agentes de IA
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-4">
            Automatiza las tareas más repetitivas y tediosas de tu negocio. 
            <span className="text-opptim-green font-semibold"> Ahorra tiempo y recursos</span> con IA inteligente.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 text-sm sm:text-base">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-green rounded-full mr-2"></div>
              Atención 100% personalizada
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-turquoise rounded-full mr-2"></div>
              Disponibilidad 24/7
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-opptim-blue rounded-full mr-2"></div>
              Resultados 100% garantizados
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-opptim-green hover:bg-opptim-green/90 active:bg-opptim-green/80 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-target"
              onClick={() => window.open('https://wa.me/34633572877', '_blank')}
            >
              💬 Contactar por WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-opptim-turquoise/30 text-opptim-turquoise hover:bg-opptim-turquoise/10 active:bg-opptim-turquoise/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto touch-target"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ver Demo del Chatbot
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
