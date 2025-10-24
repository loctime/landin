'use client'

import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const TestimonialsSection = React.memo(() => {
  const { t } = useTranslations()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set([0]))

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1
    setCurrentIndex(newIndex)
    setExpandedCards(new Set([newIndex]))
  }

  const goToNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setExpandedCards(new Set([newIndex]))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    // Auto-expand the selected card and close others
    setExpandedCards(new Set([index]))
  }


  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  return (
    <section id="testimonios" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/fondo44.webp)',
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
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('testimonials.animated.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('testimonials.animated.subtitle')}
          </p>
        </div>

        {/* All testimonials cards container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-full border border-cyan-400/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-full border border-cyan-400/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* All testimonials cards - horizontal layout */}
          <div className="flex gap-3 justify-center items-start px-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedCards.has(index)
              const isSelected = index === currentIndex
              const maxLength = isSelected ? 120 : 60
              
              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'transform scale-105 z-20' 
                      : 'transform scale-80 hover:scale-85'
                  }`}
                >
                  <Card className={`backdrop-blur-sm border transition-all duration-300 ${
                    isSelected
                      ? `bg-blue-900/90 border-cyan-400/50 p-4 min-w-[280px] max-w-[280px] ${isExpanded ? 'h-auto' : 'h-[200px]'}`
                      : 'bg-blue-800/40 border-cyan-400/20 p-3 min-w-[200px] max-w-[200px] h-[140px] opacity-80 hover:opacity-100'
                  }`}>
                    <div className="flex flex-col">
                      {/* Stars */}
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`text-cyan-400 fill-current ${
                            isSelected ? 'w-4 h-4' : 'w-3 h-3'
                          }`} />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <div className="mb-3">
                        <blockquote className={`text-white leading-tight text-center ${
                          isSelected ? 'text-sm' : 'text-xs'
                        }`}>
                          "{isExpanded ? testimonial.text : truncateText(testimonial.text, maxLength)}"
                        </blockquote>
                      </div>

                      {/* Author info and result */}
                      <div className="space-y-1">
                        <div className="text-center">
                          <div className={`text-white font-bold mb-1 ${
                            isSelected ? 'text-sm' : 'text-xs'
                          }`}>
                            {testimonial.author}
                          </div>
                          <div className={`text-cyan-400 ${
                            isSelected ? 'text-xs' : 'text-xs'
                          }`}>
                            {testimonial.role}
                          </div>
                        </div>

                        {/* Result badge */}
                        <div className={`border border-cyan-400/30 rounded px-2 py-1 text-center ${
                          isSelected 
                            ? 'bg-cyan-400/10' 
                            : 'bg-cyan-400/5'
                        }`}>
                          <span className={`text-cyan-400 font-bold text-xs`}>
                            {testimonial.result}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
})

TestimonialsSection.displayName = 'TestimonialsSection'

export { TestimonialsSection }
