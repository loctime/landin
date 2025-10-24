'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const FAQSection = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('faq.title')}
          </h2>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/30 border-emerald-500/20 rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  {faq.key ? t(`faq.questions.${faq.key}.question`) : faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-pretty">
                  {faq.key ? t(`faq.questions.${faq.key}.answer`) : faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
})

FAQSection.displayName = 'FAQSection'

export { FAQSection }
