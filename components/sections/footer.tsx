'use client'

import React from 'react'
import { ArrowRight, Mail, Phone, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { footerSections, contactInfo } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'
import Image from 'next/image'

const Footer = React.memo(() => {
  const { t } = useTranslations()
  return (
    <footer className="elegant-footer py-12 sm:py-16">
      <div className="elegant-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <div className="mb-6">
              <div className="elegant-title text-3xl mb-4">
                <span className="text-white">Opptim</span>
                <span className="elegant-text-gradient">.Ai</span>
              </div>
            </div>
            <p className="elegant-subtitle text-gray-300 text-base mb-6">
              {t('footer.description')}
            </p>
            <div className="space-y-3 text-base">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center text-gray-300 hover:text-36D6E6 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center text-gray-300 hover:text-36D6E6 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                {contactInfo.email}
              </a>
              <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-36D6E6 transition-colors">
                <Instagram className="w-5 h-5 mr-3" />
                @{contactInfo.instagram}
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="elegant-title text-xl text-white mb-6">
                {section.key ? t(`footer.sections.${section.key}.title`) : section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  // Mapeo específico para cada sección
                  let linkKey = ''
                  if (section.key === 'navigation') {
                    const navKeys = ['services', 'about', 'testimonials', 'faq']
                    linkKey = navKeys[linkIndex] || ''
                  } else if (section.key === 'legal') {
                    const legalKeys = ['privacy', 'terms', 'cookies']
                    linkKey = legalKeys[linkIndex] || ''
                  } else if (section.key === 'follow') {
                    const followKeys = ['instagram', 'linkedin', 'whatsapp']
                    linkKey = followKeys[linkIndex] || ''
                  }
                  
                  // Definir URLs para cada enlace
                  let href = '#'
                  if (section.key === 'legal') {
                    if (linkKey === 'privacy') href = '/privacidad'
                    else if (linkKey === 'terms') href = '/terminos'
                    else if (linkKey === 'cookies') href = '/cookies'
                  } else if (section.key === 'navigation') {
                    if (linkKey === 'services') href = '#servicios'
                    else if (linkKey === 'about') href = '#sobre-nosotros'
                    else if (linkKey === 'testimonials') href = '#testimonios'
                    else if (linkKey === 'faq') href = '#faq'
                  } else if (section.key === 'follow') {
                    if (linkKey === 'instagram') href = `https://instagram.com/${contactInfo.instagram}`
                    else if (linkKey === 'linkedin') href = contactInfo.linkedin || '#'
                    else if (linkKey === 'whatsapp') href = contactInfo.whatsapp
                  }
                  
                  return (
                    <li key={linkIndex}>
                      <a 
                        href={href} 
                        className="text-gray-300 hover:text-36D6E6 transition-colors text-base"
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {section.key && linkKey ? t(`footer.sections.${section.key}.links.${linkKey}`) : link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-36D6E6/20 mt-16 pt-12">
          <div className="text-center mb-12">
            <h3 className="elegant-title text-3xl text-white mb-6">
              {t('footer.readyTitle')}
            </h3>
            <p className="elegant-subtitle text-gray-300 text-xl mb-8">
              {t('footer.readySubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="elegant-button text-xl px-10 py-6"
                onClick={() => window.open(contactInfo.whatsapp, '_blank')}
              >
                💬 {t('footer.contactWhatsapp')}
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <button
                className="elegant-button-outline text-xl px-10 py-6"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                📧 {t('footer.sendEmail')}
              </button>
            </div>
            <p className="text-gray-500 text-base mt-6">
              {t('footer.features')}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-base">© 2025 Opptim.Ai - {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export { Footer }
