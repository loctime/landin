'use client'

import React from 'react'
import { Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { footerSections } from '@/data/homepage-data'

const Footer = React.memo(() => {
  return (
    <footer className="bg-black border-t border-emerald-500/20 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                Service.<span className="text-emerald-400">ai</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Automatización inteligente.
              <br />
              Transforma tu crecimiento.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-emerald-500/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para <span className="text-emerald-400">multiplicar</span> tus resultados?
            </h3>
            <p className="text-gray-400 mb-6">
              Únete a más de 500+ empresas que ya automatizaron su negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-black font-medium px-8 py-4 text-lg">
                🚀 Empezar Gratis Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 active:bg-emerald-500/20 px-8 py-4 text-lg bg-transparent"
              >
                📞 Hablar con un Experto
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Sin compromiso • Setup en 48h • Soporte 24/7
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 Service.ai LLC - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export { Footer }
