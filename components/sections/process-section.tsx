'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { benefits } from '@/data/homepage-data'
import { Search, Code, Zap, Users, BarChart3, ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const ProcessSection = React.memo(() => {
  const { t } = useTranslations()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('process.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {/* IDENTIFICAR */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 p-6 sm:p-8 hover:border-emerald-500/40 transition-colors duration-300 h-full">
                <div className="mb-6 relative">
                  <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 flex items-center justify-center overflow-hidden relative">
                    {/* Círculo pulsante animado */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-24 h-24 border-2 border-emerald-500/30 rounded-full"
                    />
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center relative"
                    >
                      <Search className="w-8 h-8 text-emerald-400" />
                      {/* Puntos orbitales */}
                      <motion.div
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                        style={{ top: -4, left: '50%', marginLeft: -4 }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                        style={{ bottom: -4, left: '50%', marginLeft: -4 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">IDENTIFICAR</h3>
                <p className="text-gray-400 text-pretty">
                  Detectar ineficiencias, puntos de fricción y potencial de automatización
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* DISEÑAR */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 p-6 sm:p-8 hover:border-emerald-500/40 transition-colors duration-300 h-full">
                <div className="mb-6">
                  <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 p-4 font-mono text-xs overflow-hidden relative">
                    {/* Efecto de typing animado */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-emerald-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        class <span className="text-white">AIAgent</span> {"{"}
                      </motion.div>
                      <motion.div
                        className="text-gray-400 ml-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        constructor() {"{"}
                      </motion.div>
                      <motion.div
                        className="text-emerald-400 ml-8"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        this.status = <span className="text-yellow-400">'active'</span>
                      </motion.div>
                      <motion.div
                        className="text-gray-400 ml-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        {"}"}
                      </motion.div>
                      <motion.div
                        className="text-emerald-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                      >
                        {"}"}
                      </motion.div>
                    </motion.div>
                    {/* Cursor parpadeante */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-1 h-3 bg-emerald-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">DISEÑAR</h3>
                <p className="text-gray-400 text-pretty">
                  Arquitectura de procesos impulsados por IA adaptados a tu stack
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* AUTOMATIZAR */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 p-6 sm:p-8 hover:border-emerald-500/40 transition-colors duration-300 h-full">
                <div className="mb-6">
                  <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 flex items-center justify-around p-4">
                    {/* Trigger */}
                    <motion.div
                      className="flex flex-col items-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="bg-emerald-500/20 p-2 rounded-lg mb-1"
                      >
                        <Zap className="w-6 h-6 text-emerald-400" />
                      </motion.div>
                      <span className="text-xs text-gray-400">Trigger</span>
                    </motion.div>

                    {/* Flecha 1 */}
                    <motion.div
                      animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </motion.div>

                    {/* Process */}
                    <motion.div
                      className="flex flex-col items-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        className="bg-emerald-500/20 p-2 rounded-lg mb-1"
                      >
                        <Users className="w-6 h-6 text-emerald-400" />
                      </motion.div>
                      <span className="text-xs text-gray-400">Process</span>
                    </motion.div>

                    {/* Flecha 2 */}
                    <motion.div
                      animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </motion.div>

                    {/* Result */}
                    <motion.div
                      className="flex flex-col items-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="bg-emerald-500/20 p-2 rounded-lg mb-1"
                      >
                        <BarChart3 className="w-6 h-6 text-emerald-400" />
                      </motion.div>
                      <span className="text-xs text-gray-400">Result</span>
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AUTOMATIZAR</h3>
                <p className="text-gray-400 text-pretty">
                  Entregar e integrar la automatización en tu flujo de trabajo
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-gray-900/30 border-emerald-500/10 p-4 sm:p-6 text-center hover:bg-gray-900/50 transition-colors duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  </motion.div>
                  <h4 className="text-white font-medium text-sm">{benefit.title}</h4>
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
