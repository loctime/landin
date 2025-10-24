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
    <section id="proceso" className="py-20 sm:py-32 bg-black overflow-hidden relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-blue-900/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transformamos tu
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}negocio{" "}
            </span>
            con IA
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un proceso probado que convierte tus procesos manuales en sistemas inteligentes que trabajan 24/7
          </p>
        </motion.div>

        {/* Proceso principal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-20"
        >
          {/* Línea conectora */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Paso 1: IDENTIFICAR */}
            <motion.div variants={stepVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Número del paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 z-20">
                  1
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-emerald-500/20 p-8 h-full backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-500">
                  {/* Visualización del paso */}
                  <div className="mb-8 relative">
                    <div className="w-full h-48 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative overflow-hidden">
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
                      
                      {/* Icono central */}
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <Search className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Puntos de datos */}
                      <div className="absolute top-6 left-6 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                      <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping animation-delay-300" />
                      <div className="absolute bottom-8 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-2xl font-bold text-white">IDENTIFICAR</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Analizamos tus procesos actuales para detectar ineficiencias, cuellos de botella y oportunidades de automatización.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
                        Análisis de procesos
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
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
                {/* Número del paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 z-20">
                  2
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-blue-500/20 p-8 h-full backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500">
                  {/* Visualización del paso */}
                  <div className="mb-8 relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-900/30 to-purple-800/20 rounded-2xl border border-blue-500/20 p-6 font-mono text-sm relative overflow-hidden">
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
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6 text-blue-400" />
                      <h3 className="text-2xl font-bold text-white">DISEÑAR</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Creamos la arquitectura de tu sistema de IA, diseñando flujos inteligentes adaptados a tu infraestructura.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                        Arquitectura IA
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
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
                {/* Número del paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 z-20">
                  3
                </div>
                
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-purple-500/20 p-8 h-full backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
                  {/* Visualización del paso */}
                  <div className="mb-8 relative">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-900/30 to-pink-800/20 rounded-2xl border border-purple-500/20 flex items-center justify-center relative overflow-hidden">
                      {/* Flujo de automatización */}
                      <div className="w-full h-full flex items-center justify-around px-4">
                        {/* Trigger */}
                        <motion.div
                          animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex flex-col items-center relative"
                        >
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-2">
                            <Zap className="w-7 h-7 text-white" />
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

                        {/* Process */}
                        <motion.div
                          animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          className="flex flex-col items-center relative"
                        >
                          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-2">
                            <Users className="w-7 h-7 text-white" />
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

                        {/* Result */}
                        <motion.div
                          animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-2">
                            <BarChart3 className="w-7 h-7 text-white" />
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
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Rocket className="w-6 h-6 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">AUTOMATIZAR</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Implementamos y desplegamos tu sistema de automatización, integrándolo perfectamente en tu flujo de trabajo.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
                        Despliegue
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
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
