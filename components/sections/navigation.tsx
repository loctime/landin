'use client'

import React from 'react'
import { Globe, ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useMobileMenu } from '@/hooks/use-mobile-menu'
import { useTranslations } from '@/hooks/use-translations'
import { useScroll } from '@/hooks/use-scroll'
import Image from 'next/image'

const Navigation = React.memo(() => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const { t, language, toggleLanguage } = useTranslations()
  const { isScrollingDown, isAtTop } = useScroll()

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-opptim-green/30 transition-all duration-300 ease-in-out ${
      isScrollingDown && !isAtTop ? 'transform -translate-y-full' : 'transform translate-y-0'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ease-in-out ${
        isScrollingDown && !isAtTop ? 'py-2' : 'py-4'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image 
              src="/opptim2png.png" 
              alt="Opptim.Ai Logo" 
              width={200} 
              height={50}
              className={`w-auto brightness-110 hover:brightness-125 transition-all duration-300 drop-shadow-lg ${
                isScrollingDown && !isAtTop ? 'h-8' : 'h-12'
              }`}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-opptim-green transition-colors">
              {t('nav.services')}
            </a>
            <a href="#sobre-nosotros" className="text-gray-300 hover:text-opptim-green transition-colors">
              {t('nav.about')}
            </a>
            <a href="#testimonios" className="text-gray-300 hover:text-opptim-green transition-colors">
              {t('nav.testimonials')}
            </a>
            <a href="#faq" className="text-gray-300 hover:text-opptim-green transition-colors">
              {t('nav.faq')}
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge 
              variant="outline" 
              className="border-opptim-green/30 text-opptim-green cursor-pointer hover:bg-opptim-green/10 transition-colors"
              onClick={toggleLanguage}
            >
              <Globe className="w-3 h-3 mr-1" />
              {language.toUpperCase()}
            </Badge>
            <Button 
              className="bg-opptim-green hover:bg-opptim-green/90 text-black font-medium"
              onClick={() => window.open('https://wa.me/34633572877', '_blank')}
            >
              {t('nav.contact')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Badge 
              variant="outline" 
              className="border-opptim-green/30 text-opptim-green text-xs cursor-pointer hover:bg-opptim-green/10 transition-colors"
              onClick={toggleLanguage}
            >
              <Globe className="w-3 h-3 mr-1" />
              {language.toUpperCase()}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-white hover:text-opptim-green hover:bg-opptim-green/10"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-opptim-green/20">
            <div className="flex flex-col space-y-4">
              <a 
                href="#servicios" 
                className="text-gray-300 hover:text-opptim-green transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.services')}
              </a>
              <a 
                href="#sobre-nosotros" 
                className="text-gray-300 hover:text-opptim-green transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#testimonios" 
                className="text-gray-300 hover:text-opptim-green transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.testimonials')}
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-opptim-green transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.faq')}
              </a>
              <Button 
                className="bg-opptim-green hover:bg-opptim-green/90 text-black font-medium w-full mt-4"
                onClick={() => window.open('https://wa.me/34633572877', '_blank')}
              >
                {t('nav.contact')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export { Navigation }
