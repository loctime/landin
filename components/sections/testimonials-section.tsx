'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const TestimonialsSection = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('testimonials.animated.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.animated.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-opptim-green/20 p-6 scroll-animate opacity-0 translate-y-8 hover:border-opptim-green/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-opptim-green fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-opptim-green/20 rounded-full flex items-center justify-center mr-3 text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-opptim-green text-xs">{testimonial.role}</div>
                </div>
              </div>

              <div className="bg-opptim-green/10 border border-opptim-green/30 rounded-lg px-3 py-2 text-center">
                <span className="text-opptim-green font-bold text-sm">{testimonial.result}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

TestimonialsSection.displayName = 'TestimonialsSection'

export { TestimonialsSection }
