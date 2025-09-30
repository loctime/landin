import { Search, Code, Zap, Users, BarChart3, Clock, Star, Globe, ArrowRight } from 'lucide-react'
import type { Agent, ProcessStep, Benefit, Stat, Testimonial, FAQ, FooterSection } from '@/types/homepage'
import React from 'react'

export const agents: Agent[] = [
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

export const processSteps: ProcessStep[] = [
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

export const benefits: Benefit[] = [
  { icon: Users, title: "Integración de Sistemas" },
  { icon: BarChart3, title: "Decisiones Basadas en Datos" },
  { icon: Clock, title: "Productividad Mejorada" },
  { icon: Zap, title: "Disponibilidad 24/7" },
]

export const stats: Stat[] = [
  { number: "300%", label: "Más leads generados" },
  { number: "24/7", label: "Disponibilidad" },
  { number: "48h", label: "Tiempo de setup" },
  { number: "95%", label: "Satisfacción cliente" },
]

export const testimonials: Testimonial[] = [
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

export const faqs: FAQ[] = [
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

export const footerSections: FooterSection[] = [
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

export const companyLogos = [
  "TechCorp",
  "DentalPro", 
  "StartupX",
  "RetailMax",
  "Service+"
]
