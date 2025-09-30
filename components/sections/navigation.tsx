'use client'

import React from 'react'
import { Zap, Globe, ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useMobileMenu } from '@/hooks/use-mobile-menu'

const Navigation = React.memo(() => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              Service.<span className="text-emerald-400">ai</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#agentes" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Agentes
            </a>
            <a href="#proceso" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Proceso
            </a>
            <a href="#soluciones" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Soluciones
            </a>
            <a href="#faq" className="text-gray-300 hover:text-emerald-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
              <Globe className="w-3 h-3 mr-1" />
              ES
            </Badge>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium">
              Contáctanos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">
              <Globe className="w-3 h-3 mr-1" />
              ES
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-white hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-emerald-500/20">
            <div className="flex flex-col space-y-4">
              <a 
                href="#agentes" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Agentes
              </a>
              <a 
                href="#proceso" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Proceso
              </a>
              <a 
                href="#soluciones" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Soluciones
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium w-full mt-4">
                Contáctanos
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
