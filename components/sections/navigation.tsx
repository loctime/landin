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
    <nav className="elegant-nav fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className={`elegant-container transition-all duration-300 ease-in-out ${
        isScrollingDown && !isAtTop ? 'py-2' : 'py-4'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a 
              href="#inicio" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="cursor-pointer transition-all duration-300"
            >
              <div className="elegant-title text-2xl">
                <span className="text-white">Opptim</span>
                <span className="elegant-text-gradient">.Ai</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-36D6E6 transition-colors duration-300 relative group">
              {t('nav.services')}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-36D6E6 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#sobre-nosotros" className="text-gray-300 hover:text-36D6E6 transition-colors duration-300 relative group">
              {t('nav.about')}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-36D6E6 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#testimonios" className="text-gray-300 hover:text-36D6E6 transition-colors duration-300 relative group">
              {t('nav.testimonials')}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-36D6E6 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#faq" className="text-gray-300 hover:text-36D6E6 transition-colors duration-300 relative group">
              {t('nav.faq')}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-36D6E6 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="elegant-button-outline flex items-center gap-2"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            <button 
              className="elegant-button flex items-center gap-2"
              onClick={() => window.open('https://wa.me/34633572877', '_blank')}
            >
              {t('nav.contact')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              className="elegant-button-outline text-xs px-3 py-1.5 flex items-center gap-1"
              onClick={toggleLanguage}
            >
              <Globe className="w-3 h-3" />
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-36D6E6 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-36D6E6/20">
            <div className="flex flex-col space-y-4">
              <a 
                href="#servicios" 
                className="text-gray-300 hover:text-36D6E6 transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.services')}
              </a>
              <a 
                href="#sobre-nosotros" 
                className="text-gray-300 hover:text-36D6E6 transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#testimonios" 
                className="text-gray-300 hover:text-36D6E6 transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.testimonials')}
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-36D6E6 transition-colors py-2"
                onClick={closeMenu}
              >
                {t('nav.faq')}
              </a>
              <button 
                className="elegant-button w-full mt-4 flex items-center justify-center gap-2"
                onClick={() => window.open('https://wa.me/34633572877', '_blank')}
              >
                {t('nav.contact')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export { Navigation }
