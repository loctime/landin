'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { benefits } from '@/data/homepage-data'
import { Search, Code, Zap, Users, BarChart3, ArrowRight, Sparkles, Brain, Rocket } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const ProcessSection = React.memo(() => {
  const { t } = useTranslations()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="proceso" className="relative overflow-hidden min-h-screen">
      {/* Fondo personalizado responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/fondo33.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Efectos de líneas estáticas tecnológicas - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas verticales decorativas - Más sutiles en móvil */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="hidden sm:block absolute left-1/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="hidden sm:block absolute left-5/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Líneas horizontales decorativas - Más sutiles en móvil */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="hidden sm:block absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        <div className="hidden sm:block absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Líneas diagonales sutiles - Solo en desktop */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform rotate-12 origin-left"></div>
        <div className="hidden lg:block absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/10 to-transparent transform -rotate-12 origin-right"></div>
        
        {/* Líneas diagonales en las esquinas - Solo en desktop */}
        <div className="hidden lg:block absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transform rotate-45 origin-left"></div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-cyan-300/20 to-transparent transform -rotate-45 origin-right"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transform -rotate-45 origin-left"></div>
        <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-blue-300/20 to-transparent transform rotate-45 origin-right"></div>
      </div>
      
      <div className="elegant-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Proceso de Automatización</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Instala IA en tu negocio
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
            en solo 3 pasos
          </p>
        </motion.div>

        {/* Proceso principal - 3 Fases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-16"
        >
          {/* Línea conectora más visible */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/40 via-blue-500/40 to-purple-500/40 transform -translate-y-1/2 z-0" />
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Paso 1: IDENTIFICAR */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Número del paso - Más grande y visible */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/50 z-20 border-2 border-emerald-300/30">
                  1
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-emerald-500/30 p-4 sm:p-6 h-full backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20">
                  {/* Visualización del paso - Más compacta */}
                  <div className="mb-6 relative">
                    <div className="w-full h-32 bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 rounded-xl border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
                      {/* Efecto de radar */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 border border-emerald-400/30 rounded-full"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          className="absolute w-24 h-24 border border-emerald-400/50 rounded-full"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute w-16 h-16 border border-emerald-400/70 rounded-full"
                        />
                      </div>
                      
                      {/* Icono central - Más pequeño */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <Search className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Puntos de datos */}
                      <div className="absolute top-6 left-6 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                      <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping animation-delay-300" />
                      <div className="absolute bottom-8 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">IDENTIFICAR</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Analizamos tus procesos actuales para detectar ineficiencias, cuellos de botella y oportunidades de automatización.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-medium">
                        Análisis de procesos
                      </span>
                      <span className="px-2 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-medium">
                        Mapeo de flujos
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Paso 2: DISEÑAR */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Número del paso - Más grande y visible */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/50 z-20 border-2 border-blue-300/30">
                  2
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-blue-500/30 p-4 sm:p-6 h-full backdrop-blur-sm hover:border-blue-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20">
                  {/* Visualización del paso - Más compacta */}
                  <div className="mb-6 relative">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-900/40 to-purple-800/30 rounded-xl border border-blue-500/30 p-4 font-mono text-xs relative overflow-hidden">
                      {/* Partículas flotantes */}
                      <div className="absolute inset-0">
                        <motion.div
                          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-4 left-4 w-2 h-2 bg-blue-400/60 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                          className="absolute top-8 right-6 w-1 h-1 bg-purple-400/60 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                          className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-emerald-400/50 rounded-full"
                        />
                      </div>
                      
                      {/* Código animado */}
                      <div className="relative z-10 space-y-2">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-blue-400 font-semibold"
                        >
                          class <span className="text-white">AIAgent</span> {"{"}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-300 ml-4"
                        >
                          constructor() {"{"}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="text-emerald-400 ml-8"
                        >
                          this.status = <span className="text-yellow-300">'active'</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                          className="text-gray-300 ml-4"
                        >
                          {"}"}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="text-blue-400 font-semibold"
                        >
                          {"}"}
                        </motion.div>
                      </div>
                      
                      {/* Cursor parpadeante */}
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="absolute bottom-6 right-6 w-1 h-4 bg-emerald-400"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">DISEÑAR</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Creamos la arquitectura de tu sistema de IA, diseñando flujos inteligentes adaptados a tu infraestructura.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                        Arquitectura IA
                      </span>
                      <span className="px-2 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                        Integración APIs
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Paso 3: AUTOMATIZAR */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Número del paso - Más grande y visible */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50 z-20 border-2 border-purple-300/30">
                  3
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-purple-500/30 p-4 sm:p-6 h-full backdrop-blur-sm hover:border-purple-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Visualización del paso - Más compacta */}
                  <div className="mb-6 relative">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-900/40 to-pink-800/30 rounded-xl border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                      {/* Flujo de automatización */}
                      <div className="w-full h-full flex items-center justify-around px-4">
                        {/* Trigger - Más pequeño */}
                        <motion.div
                          animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex flex-col items-center relative"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30 mb-1">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs text-orange-300 font-medium">Trigger</span>
                          {/* Energía */}
                          <motion.div
                            animate={{ x: [0, 20, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                          >
                            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-transparent" />
                          </motion.div>
                        </motion.div>

                        {/* Process - Más pequeño */}
                        <motion.div
                          animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          className="flex flex-col items-center relative"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-1">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs text-emerald-300 font-medium">Process</span>
                          {/* Energía */}
                          <motion.div
                            animate={{ x: [0, 20, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                          >
                            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent" />
                          </motion.div>
                        </motion.div>

                        {/* Result - Más pequeño */}
                        <motion.div
                          animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 mb-1">
                            <BarChart3 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs text-blue-300 font-medium">Result</span>
                        </motion.div>
                      </div>
                      
                      {/* Partículas de energía */}
                      <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-4 left-1/4 w-1 h-1 bg-orange-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-8 right-1/3 w-1 h-1 bg-emerald-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -25, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-6 left-1/3 w-1 h-1 bg-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">AUTOMATIZAR</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Implementamos y desplegamos tu sistema de automatización, integrándolo perfectamente en tu flujo de trabajo.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                        Despliegue
                      </span>
                      <span className="px-2 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                        Monitoreo
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 p-6 text-center hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <benefit.icon className="w-10 h-10 text-emerald-400 mx-auto" />
                  </motion.div>
                  <h4 className="text-white font-semibold text-sm">
                    {benefit.key ? t(`process.benefits.${benefit.key}`) : benefit.title}
                  </h4>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

ProcessSection.displayName = 'ProcessSection'

export { ProcessSection }
