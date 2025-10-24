'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const FAQSection = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section id="faq" className="py-16 sm:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
