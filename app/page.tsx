"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Code, Zap, Users, BarChart3, Clock, Star, Globe, ArrowRight, Menu, X } from "lucide-react"

// Hook para animaciones de scroll
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Componente de navegación
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                onClick={() => setIsMenuOpen(false)}
              >
                Agentes
              </a>
              <a 
                href="#proceso" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proceso
              </a>
              <a 
                href="#soluciones" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluciones
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
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
}

// Componente Hero
function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Robot placeholder - en una implementación real usarías un modelo 3D */}
        <div className="scroll-animate opacity-0 translate-y-8 mb-8 sm:mb-12">
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400" />
            </div>
          </div>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Automatiza tu negocio y{" "}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              multiplica
            </span>{" "}
            tus
            <br />
            resultados 24/7
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-4">
            Agentes de IA que manejan clientes, reservas y ventas mientras tú duermes. 
            <span className="text-emerald-400 font-semibold"> +300% más leads</span> en 30 días.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 text-sm sm:text-base">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Sin setup técnico
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Resultados en 48h
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Soporte 24/7
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-target">
              🚀 Empezar Gratis - 14 días
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 active:bg-emerald-500/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto touch-target"
            >
              📹 Ver Demo en Vivo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de proceso
function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "IDENTIFICAR",
      description: "Detectar ineficiencias, puntos de fricción y potencial de automatización",
      visual: (
        <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <Search className="w-8 h-8 text-emerald-400" />
          </div>
        </div>
      ),
    },
    {
      icon: Code,
      title: "DISEÑAR",
      description: "Arquitectura de procesos impulsados por IA adaptados a tu stack",
      visual: (
        <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 p-4 font-mono text-xs">
          <div className="text-emerald-400">
            class <span className="text-white">AIAgent</span> {"{"}
          </div>
          <div className="text-gray-400 ml-4">constructor() {"{"}</div>
          <div className="text-emerald-400 ml-8">
            this.status = <span className="text-yellow-400">'active'</span>
          </div>
          <div className="text-gray-400 ml-4">{"}"}</div>
          <div className="text-emerald-400">{"}"}</div>
        </div>
      ),
    },
    {
      icon: Zap,
      title: "AUTOMATIZAR",
      description: "Entregar e integrar la automatización en tu flujo de trabajo",
      visual: (
        <div className="w-full h-32 bg-gray-900 rounded-lg border border-emerald-500/30 flex items-center justify-around p-4">
          <div className="flex flex-col items-center">
            <Zap className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-xs text-gray-400">Trigger</span>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
          <div className="flex flex-col items-center">
            <Users className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-xs text-gray-400">Process</span>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
          <div className="flex flex-col items-center">
            <BarChart3 className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-xs text-gray-400">Result</span>
          </div>
        </div>
      ),
    },
  ]

  const benefits = [
    { icon: Users, title: "Integración de Sistemas" },
    { icon: BarChart3, title: "Decisiones Basadas en Datos" },
    { icon: Clock, title: "Productividad Mejorada" },
    { icon: Zap, title: "Disponibilidad 24/7" },
  ]

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Automatiza con IA en solo <span className="text-emerald-400">3 pasos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-emerald-500/20 p-6 sm:p-8 scroll-animate opacity-0 translate-y-8 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="mb-6">{step.visual}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-pretty">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-emerald-500/10 p-4 sm:p-6 text-center scroll-animate opacity-0 translate-y-8 hover:bg-gray-900/50 transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-white font-medium text-sm">{benefit.title}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de agentes
function AgentsSection() {
  const agents = [
    {
      name: "Orion",
      specialty: "Atención al Cliente",
      avatar: "🤖",
      description: "Especialista en resolver consultas y brindar soporte 24/7",
    },
    {
      name: "Nova",
      specialty: "Llamadas Entrantes",
      avatar: "👩‍💼",
      description: "Gestiona y optimiza todas las comunicaciones entrantes",
    },
    {
      name: "Echo",
      specialty: "Gestor de Reservas",
      avatar: "👨‍💻",
      description: "Automatiza reservas y gestión de citas de manera inteligente",
      featured: true,
    },
    {
      name: "Astra",
      specialty: "Automatizar Recordatorios",
      avatar: "🚀",
      description: "Mantiene a tus clientes informados con recordatorios personalizados",
    },
    {
      name: "Iris",
      specialty: "Análisis Avanzado",
      avatar: "👁️",
      description: "Proporciona insights profundos sobre el comportamiento del cliente",
    },
  ]

  return (
    <section id="agentes" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Conoce a nuestros <span className="text-emerald-400">agentes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de 500+ empresas confían en nuestros agentes de IA para automatizar sus procesos
          </p>
        </div>

        {/* Logos de empresas */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 scroll-animate opacity-0 translate-y-8">
          <div className="text-gray-500 text-sm font-medium">Empresas que confían en nosotros:</div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
            <div className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium">TechCorp</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium">DentalPro</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium">StartupX</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium">RetailMax</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium">Service+</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={`
                bg-gray-900/50 border-emerald-500/20 p-4 sm:p-6 text-center scroll-animate opacity-0 translate-y-8 
                hover:border-emerald-500/60 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer
                ${agent.featured ? "border-emerald-500/60 bg-gray-900/70 scale-105" : ""}
              `}
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {agent.avatar}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-emerald-400 text-sm font-medium mb-3">{agent.specialty}</p>
              <p className="text-gray-400 text-xs text-pretty">{agent.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de estadísticas
function StatsSection() {
  const stats = [
    { number: "300%", label: "Más leads generados" },
    { number: "24/7", label: "Disponibilidad" },
    { number: "48h", label: "Tiempo de setup" },
    { number: "95%", label: "Satisfacción cliente" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-black border-y border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center scroll-animate opacity-0 translate-y-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de testimonios mejorado
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Desde que usamos Echo y Nova nuestras reservas de citas subieron un 27% y estamos 100% menos libres. Esto me libera para centrarme en mis pacientes.",
      author: "Santiago López",
      role: "Propietario, Dental Services",
      avatar: "👨‍⚕️",
      result: "+27% reservas",
    },
    {
      text: "La automatización con Astra ha revolucionado nuestro seguimiento de clientes. Ahora no perdemos ninguna oportunidad de venta.",
      author: "María González",
      role: "Directora, Tech Solutions",
      avatar: "👩‍💼",
      result: "+45% conversiones",
    },
    {
      text: "Iris nos proporciona insights que nunca habríamos descubierto por nosotros mismos. Es como tener un analista senior 24/7.",
      author: "Carlos Ruiz",
      role: "CEO, StartupX",
      avatar: "👨‍💻",
      result: "+300% leads",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Resultados <span className="text-emerald-400">reales</span> de nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-emerald-500/20 p-6 scroll-animate opacity-0 translate-y-8 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3 text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-emerald-400 text-xs">{testimonial.role}</div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2 text-center">
                <span className="text-emerald-400 font-bold text-sm">{testimonial.result}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente FAQ
function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es un agente de IA?",
      answer:
        "Un agente de IA es un sistema inteligente que puede realizar tareas específicas de manera autónoma, aprendiendo y adaptándose a las necesidades de tu negocio para optimizar procesos y mejorar la eficiencia.",
    },
    {
      question: "¿En qué se diferencia un agente de IA de un chatbot?",
      answer:
        "Mientras que un chatbot responde a preguntas predefinidas, nuestros agentes de IA pueden tomar decisiones complejas, integrarse con múltiples sistemas y ejecutar acciones específicas basadas en el contexto y los datos en tiempo real.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar un agente de IA?",
      answer:
        "No, nuestros agentes están diseñados para ser intuitivos y fáciles de usar. Nos encargamos de toda la configuración técnica y te proporcionamos una interfaz simple para gestionar y monitorear tus agentes.",
    },
    {
      question: "¿Qué tipo de tareas puede realizar un agente de IA?",
      answer:
        "Nuestros agentes pueden gestionar reservas, atender consultas de clientes, enviar recordatorios, analizar datos, generar reportes, y mucho más. Cada agente se especializa en áreas específicas para maximizar su efectividad.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-emerald-400">Preguntas</span> Frecuentes
          </h2>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/30 border-emerald-500/20 rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-pretty">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Componente de urgencia
function UrgencySection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900/20 to-black border-y border-emerald-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="scroll-animate opacity-0 translate-y-8">
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Oferta de Lanzamiento
                </h3>
                <p className="text-emerald-400 font-semibold">
                  Solo quedan 47 cupos disponibles
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Setup <span className="text-emerald-400">GRATIS</span> + 30 días de soporte
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              Valor normal: $2,500 • <span className="line-through">Tu precio: $0</span> 
              <span className="text-emerald-400 font-bold"> • Ahorro: 100%</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-black font-bold px-8 py-4 text-lg">
                🔥 Aprovechar Oferta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              ⏰ Oferta válida solo hasta el 31 de enero, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
function Footer() {
  const footerSections = [
    {
      title: "Navegación",
      links: ["Agentes", "Proceso", "Soluciones", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Privacidad", "Términos", "Cookies"],
    },
    {
      title: "Síguenos",
      links: ["LinkedIn", "Twitter", "YouTube"],
    },
  ]

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
}

// Componente principal
export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <AgentsSection />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection />
      <Footer />
    </div>
  )
}
