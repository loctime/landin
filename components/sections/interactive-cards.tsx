'use client'

import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Code2, Database, Cloud, Lock, Cpu } from 'lucide-react'

export const InteractiveCards = () => {
  const technologies = [
    {
      icon: Code2,
      name: 'React & Next.js',
      description: 'Framework moderno para aplicaciones web ultrarrápidas',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      particles: 8,
      tech: ['TypeScript', 'Tailwind', 'API Routes']
    },
    {
      icon: Database,
      name: 'Base de Datos',
      description: 'Almacenamiento escalable y seguro en la nube',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      particles: 6,
      tech: ['PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      icon: Cloud,
      name: 'Cloud Computing',
      description: 'Infraestructura distribuida de alto rendimiento',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      particles: 7,
      tech: ['AWS', 'Vercel', 'Docker']
    },
    {
      icon: Lock,
      name: 'Seguridad',
      description: 'Protección avanzada con encriptación de extremo a extremo',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      particles: 9,
      tech: ['OAuth', 'JWT', 'Firewall']
    },
    {
      icon: Cpu,
      name: 'Machine Learning',
      description: 'Modelos de IA entrenados para tu industria',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      particles: 10,
      tech: ['TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      icon: Sparkles,
      name: 'Automatización',
      description: 'Workflows inteligentes que ahorran tiempo y recursos',
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      particles: 8,
      tech: ['Zapier', 'n8n', 'Custom APIs']
    }
  ]

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Grid de fondo animado */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl"
              />
              <Sparkles className="w-10 h-10 text-emerald-400 relative" />
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Stack{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tecnológico
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Las mejores herramientas para construir soluciones excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <InteractiveTechCard key={index} {...tech} index={index} />
          ))}
        </div>

        {/* CTA animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-white text-base overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10">Explorar Más Tecnologías</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Card interactiva individual
const InteractiveTechCard = ({ 
  icon: Icon, 
  name, 
  description, 
  gradient, 
  particles, 
  tech,
  index 
}: any) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10])
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05, z: 50 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="relative bg-gray-900/80 backdrop-blur-sm border-gray-700/50 p-4 sm:p-5 overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 h-full">
          {/* Partículas flotantes */}
          {Array.from({ length: particles }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '0',
              }}
            />
          ))}

          {/* Fondo con gradiente animado */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}
          />

          {/* Icono con efecto 3D */}
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(30px)',
            }}
            whileHover={{
              rotateY: 360,
              transition: { duration: 0.8 },
            }}
            className="relative mb-4"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-2xl opacity-40`}
            />
            <div className={`relative w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)',
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              {description}
            </p>

            {/* Tags de tecnologías */}
            <div className="flex flex-wrap gap-2">
              {tech.map((t: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-2 py-0.5 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-medium`}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Brillo en hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              y: ['100%', '-100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Borde animado */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
          />
        </Card>
      </motion.div>
    </motion.div>
  )
}

