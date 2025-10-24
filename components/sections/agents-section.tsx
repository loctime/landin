'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { agents, companyLogos } from '@/data/homepage-data'
import { Sparkles, Zap } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const AgentsSection = React.memo(() => {
  const { t } = useTranslations()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const itemTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  }

  return (
    <section id="servicios" className="elegant-section elegant-gradient relative overflow-hidden">
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-36D6E6/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-45C789/5 rounded-full blur-3xl" />

      <div className="elegant-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 elegant-card px-6 py-3 mb-8"
          >
            <Zap className="w-5 h-5 text-36D6E6" />
            <span className="text-36D6E6 text-base font-medium">{t('agents.poweredBy')}</span>
          </motion.div>

          <h2 className="elegant-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            Nuestros <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">agentes</span>
          </h2>
        </motion.div>

        {/* Grid 2x2 profesional y tecnológico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Línea horizontal separadora con efecto glow */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-60"></div>
          
          {/* Efectos de líneas estáticas tecnológicas */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Líneas verticales decorativas - Centro */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"></div>
            <div className="absolute left-1/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute left-5/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
            
            {/* Líneas verticales en los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute left-1/12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300/25 to-transparent"></div>
            <div className="absolute right-1/12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300/25 to-transparent"></div>
            
            {/* Líneas horizontales decorativas - Centro */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>
            <div className="absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            
            {/* Líneas horizontales en los bordes */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute top-1/12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"></div>
            <div className="absolute bottom-1/12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"></div>
            
            {/* Líneas diagonales sutiles */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform rotate-12 origin-left"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/10 to-transparent transform -rotate-12 origin-right"></div>
            
            {/* Líneas diagonales en las esquinas */}
            <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transform rotate-45 origin-left"></div>
            <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-cyan-300/20 to-transparent transform -rotate-45 origin-right"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transform -rotate-45 origin-left"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-blue-300/20 to-transparent transform rotate-45 origin-right"></div>
            
            {/* Líneas verticales cortas en los costados */}
            <div className="absolute left-2 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute right-2 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute left-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-blue-300/25 to-transparent"></div>
            <div className="absolute right-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-blue-300/25 to-transparent"></div>
            
            {/* Líneas horizontales cortas arriba y abajo */}
            <div className="absolute top-2 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute bottom-2 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute top-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"></div>
            <div className="absolute bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"></div>
          </div>
          
          {/* Grid 2x2 con diseño profesional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 relative">
            {/* Línea vertical central con efecto glow - Solo en desktop */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -translate-x-1/2 opacity-60"></div>
            {/* Línea horizontal central con efecto glow - Solo en desktop */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-y-1/2 opacity-60"></div>
            
            {/* Cuadrante 1: Chatbot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 sm:p-6 lg:p-8 relative group border-r-0 sm:border-r border-b border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Fondo con gradiente y patrón */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 relative z-10 tracking-wide drop-shadow-lg">Chatbot</h3>
              <p className="text-cyan-100 text-base sm:text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                Atiende consultas, manda control semanal de las métricas, agenda citas y responde preguntas en cualquier momento.
              </p>
            </motion.div>

            {/* Cuadrante 2: Asistente financiero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 sm:p-6 lg:p-8 relative group border-b border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Fondo con gradiente y patrón */}
              <div className="absolute inset-0 bg-gradient-to-bl from-slate-800/40 via-slate-900/60 to-slate-800/40 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 relative z-10 tracking-wide drop-shadow-lg">Asistente financiero</h3>
              <p className="text-cyan-100 text-base sm:text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                Gestiona y recuerda pagos para los clientes. De forma automática. Crea un panel de control para dejar registro de todo.
              </p>
            </motion.div>

            {/* Cuadrante 3: Asistente llamada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 sm:p-6 lg:p-8 relative group border-r-0 sm:border-r border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Fondo con gradiente y patrón */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/40 via-slate-900/60 to-slate-800/40 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 relative z-10 tracking-wide drop-shadow-lg">Asistente llamada</h3>
              <p className="text-cyan-100 text-base sm:text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                Asistente telefónico que confirma citas, responde dudas simples y deriva llamadas según la necesidad. Activo 24/7.
              </p>
            </motion.div>

            {/* Cuadrante 4: Asistente recordatorio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 sm:p-6 lg:p-8 relative group hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Fondo con gradiente y patrón */}
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-800/40 via-slate-900/60 to-slate-800/40 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)]"></div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 relative z-10 tracking-wide drop-shadow-lg">Asistente recordatorio</h3>
              <p className="text-cyan-100 text-base sm:text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                Recordatorios automáticos por WhatsApp, SMS o email para reducir ausencias y mantener la agenda organizada.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

AgentsSection.displayName = 'AgentsSection'

export { AgentsSection }
