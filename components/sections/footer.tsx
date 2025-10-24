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
    <footer className="bg-black border-t border-opptim-green/20 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/opptim2png.png" 
                alt="Opptim.Ai" 
                width={150} 
                height={40}
                className="h-8 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center text-gray-400 hover:text-opptim-green transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center text-gray-400 hover:text-opptim-green transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email}
              </a>
              <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-opptim-green transition-colors">
                <Instagram className="w-4 h-4 mr-2" />
                @{contactInfo.instagram}
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-opptim-green transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-opptim-green/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('footer.readyTitle')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('footer.readySubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-opptim-green hover:bg-opptim-green/90 active:bg-opptim-green/80 text-black font-medium px-8 py-4 text-lg"
                onClick={() => window.open(contactInfo.whatsapp, '_blank')}
              >
                💬 {t('footer.contactWhatsapp')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-opptim-turquoise/30 text-opptim-turquoise hover:bg-opptim-turquoise/10 active:bg-opptim-turquoise/20 px-8 py-4 text-lg bg-transparent"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                📧 {t('footer.sendEmail')}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              {t('footer.features')}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 Opptim.Ai - {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export { Footer }
