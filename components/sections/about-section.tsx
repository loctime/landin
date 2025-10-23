'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Target, Lightbulb, Users } from 'lucide-react'

const AboutSection = React.memo(() => {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Sobre <span className="text-opptim-green">Nosotros</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Somos expertos en automatización inteligente con IA
          </p>
        </div>

        {/* Historia */}
        <div className="mb-16 scroll-animate opacity-0 translate-y-8">
          <Card className="bg-gray-900/50 border-opptim-green/20 p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-opptim-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-opptim-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h3>
                <p className="text-gray-300 leading-relaxed">
                  El proyecto nació con la idea de ayudar a pequeñas y medianas empresas a aprovechar la inteligencia artificial sin necesidad de grandes inversiones. Comenzamos ofreciendo chatbots básicos para atención al cliente y, con el tiempo, fuimos ampliando nuestros servicios a automatizaciones completas de procesos internos, integraciones con CRM y estrategias de IA conversacional. Hoy, trabajamos con empresas de distintos sectores, ayudándolas a digitalizarse y mantenerse competitivas.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Misión y Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-gray-900/50 border-opptim-turquoise/20 p-6 sm:p-8 scroll-animate opacity-0 translate-y-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-opptim-turquoise/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-opptim-turquoise" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar el acceso a la inteligencia artificial, ayudando a empresas de todos los tamaños a automatizar sus procesos y mejorar la experiencia de sus clientes.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900/50 border-opptim-blue/20 p-6 sm:p-8 scroll-animate opacity-0 translate-y-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-opptim-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-opptim-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Nuestro Equipo</h3>
                <p className="text-gray-300 leading-relaxed">
                  Contamos con un equipo de expertos técnicos en IA, comprometidos con ofrecer soluciones innovadoras y personalizadas para cada cliente. Nuestra pasión es transformar negocios mediante la automatización inteligente.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export { AboutSection }

