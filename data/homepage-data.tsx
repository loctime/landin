import { Search, Code, Zap, Users, BarChart3, Clock, Star, Globe, ArrowRight } from 'lucide-react'
import type { Agent, ProcessStep, Benefit, Stat, Testimonial, FAQ, FooterSection } from '@/types/homepage'
import React from 'react'

export const agents: Agent[] = [
  {
    name: "Mini Recordatorio",
    specialty: "Recordatorios de Citas",
    avatar: "/tiniroborelo.png",
    description: "Envía recordatorios automáticos de citas a tus clientes vía WhatsApp",
  },
  {
    name: "Chatbot Básico",
    specialty: "Atención al Cliente",
    avatar: "/tinyrobotecla.png",
    description: "Responde consultas frecuentes y atiende a tus clientes 24/7",
  },
  {
    name: "Chatbot Plus",
    specialty: "Atención Avanzada",
    avatar: "/tinyrobot11.png",
    description: "IA conversacional avanzada con integración a múltiples plataformas",
    featured: true,
  },
  {
    name: "Agente Telefónico",
    specialty: "Llamadas Automatizadas",
    avatar: "/tinirobottele.png",
    description: "Gestiona llamadas entrantes y salientes de forma inteligente",
  },
  {
    name: "Gestor de Pagos",
    specialty: "Automatización de Cobros",
    avatar: "/tinyrobodine.png",
    description: "Automatiza recordatorios de pago y gestión de cobros",
  },
]

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "IDENTIFICAR",
    description: "Detectar ineficiencias, puntos de fricción y potencial de automatización",
    key: "identify",
    visual: (
      <div className="w-full h-40 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative overflow-hidden">
        {/* Efecto de ondas concéntricas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border border-emerald-400/30 rounded-full animate-ping" />
          <div className="absolute w-24 h-24 border border-emerald-400/50 rounded-full animate-ping animation-delay-200" />
          <div className="absolute w-16 h-16 border border-emerald-400/70 rounded-full animate-ping animation-delay-400" />
        </div>
        {/* Icono central con efecto de escaneo */}
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Search className="w-10 h-10 text-white" />
          </div>
          {/* Líneas de escaneo */}
          <div className="absolute -top-2 -left-2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
          <div className="absolute -bottom-2 -right-2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse animation-delay-1000" />
        </div>
      </div>
    ),
  },
  {
    icon: Code,
    title: "DISEÑAR",
    description: "Arquitectura de procesos impulsados por IA adaptados a tu stack",
    key: "design",
    visual: (
      <div className="w-full h-40 bg-gradient-to-br from-blue-900/20 to-purple-800/10 rounded-2xl border border-blue-500/20 p-6 font-mono text-sm relative overflow-hidden">
        {/* Fondo de partículas flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce animation-delay-300" />
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-emerald-400/50 rounded-full animate-bounce animation-delay-600" />
        </div>
        
        {/* Código con efecto de typing */}
        <div className="relative z-10">
          <div className="text-blue-400 font-semibold">
            class <span className="text-white">AIAgent</span> {"{"}
          </div>
          <div className="text-gray-300 ml-4 mt-1">
            constructor() {"{"}
          </div>
          <div className="text-emerald-400 ml-8 mt-1">
            this.status = <span className="text-yellow-300">'active'</span>
          </div>
          <div className="text-gray-300 ml-4 mt-1">
            {"}"}
          </div>
          <div className="text-blue-400 font-semibold">
            {"}"}
          </div>
        </div>
        
        {/* Cursor parpadeante */}
        <div className="absolute bottom-6 right-6 w-1 h-4 bg-emerald-400 animate-pulse" />
      </div>
    ),
  },
  {
    icon: Zap,
    title: "AUTOMATIZAR",
    description: "Entregar e integrar la automatización en tu flujo de trabajo",
    key: "automate",
    visual: (
      <div className="w-full h-40 bg-gradient-to-br from-orange-900/20 to-red-800/10 rounded-2xl border border-orange-500/20 flex items-center justify-center relative overflow-hidden">
        {/* Flujo de energía */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-around px-4">
            {/* Trigger */}
            <div className="flex flex-col items-center relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-2">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-orange-300 font-medium">Trigger</span>
              {/* Energía saliente */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Process */}
            <div className="flex flex-col items-center relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-emerald-300 font-medium">Process</span>
              {/* Energía saliente */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-transparent animate-pulse animation-delay-500" />
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-2">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-blue-300 font-medium">Result</span>
            </div>
          </div>
        </div>
        
        {/* Partículas de energía */}
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping" />
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-300" />
        <div className="absolute bottom-6 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-600" />
      </div>
    ),
  },
]

export const benefits: Benefit[] = [
  { icon: Users, title: "Integración de Sistemas", key: "integration" },
  { icon: BarChart3, title: "Decisiones Basadas en Datos", key: "data" },
  { icon: Clock, title: "Productividad Mejorada", key: "productivity" },
  { icon: Zap, title: "Disponibilidad 24/7", key: "availability" },
]

export const stats: Stat[] = [
  { number: "100%", label: "Atención personalizada", key: "personalized" },
  { number: "24/7", label: "Disponibilidad total", key: "availability" },
  { number: "39€", label: "Desde sólo", key: "price" },
  { number: "100%", label: "Resultados garantizados", key: "guaranteed" },
]

export const testimonials: Testimonial[] = [
  {
    text: "Desde que empezamos a trabajar con Opptim.Ai, nuestra atención al paciente cambió por completo. Implementaron automatizaciones con IA que gestionan las citas, recordatorios y seguimiento post-tratamiento de forma impecable. Antes perdíamos mucho tiempo en tareas repetitivas, ahora nuestro equipo puede enfocarse en lo importante: atender bien a nuestros pacientes. ¡Un antes y un después para nuestra clínica!",
    author: "Dr. García",
    role: "Director, Clínica Dental",
    avatar: "👨‍⚕️",
    result: "Ahorro de 15h/semana",
  },
  {
    text: "Ha sido un éxito total. Ahora nuestros pacientes reciben respuestas automáticas en WhatsApp y recordatorios personalizados sin que nadie del equipo tenga que intervenir. Además, las estadísticas que nos muestran ayudan a entender mejor el comportamiento de nuestros pacientes. Eficiencia, modernidad y resultados. ¡Los recomendamos al 100%!",
    author: "Ana Martínez",
    role: "Gerente, Centro Médico",
    avatar: "👩‍⚕️",
    result: "95% satisfacción",
  },
  {
    text: "Trabajar con Opptim.Ai fue una de las mejores decisiones del año. Nos ayudaron a automatizar el flujo de nuevos pacientes y a conectar el sistema de reservas con nuestra agenda digital. Lo que antes era un caos de mensajes ahora está completamente organizado. Además, su soporte es excelente: siempre disponibles y con soluciones rápidas. La IA realmente nos ha hecho la vida más fácil.",
    author: "Carlos Ruiz",
    role: "Propietario, Consulta Privada",
    avatar: "👨‍💼",
    result: "+40% eficiencia",
  },
]

export const faqs: FAQ[] = [
  {
    question: "¿Qué es una automatización con inteligencia artificial?",
    answer:
      "Las automatizaciones con IA son sistemas que permiten ejecutar tareas repetitivas o de atención al cliente de forma automática, utilizando algoritmos inteligentes. Por ejemplo, respuestas automáticas en WhatsApp, gestión de citas, recordatorios o segmentación de pacientes. Todo funciona en piloto automático, ahorrando tiempo y recursos a tu equipo.",
    key: "q1",
  },
  {
    question: "¿Qué beneficios obtiene mi negocio al automatizar procesos?",
    answer:
      "Automatizar te permite ahorrar tiempo, reducir errores humanos, mejorar la atención al cliente y aumentar tus ventas. Además, la IA aprende con el tiempo, lo que hace que tus procesos sean cada vez más eficientes. En pocas semanas, notarás que tu equipo trabaja menos en tareas manuales y más en lo que realmente genera valor.",
    key: "q2",
  },
  {
    question: "¿Se pueden integrar las automatizaciones con mis herramientas actuales (WhatsApp, redes sociales, etc.)?",
    answer:
      "¡Sí! Nuestras automatizaciones se integran fácilmente con plataformas como WhatsApp Business, Google Calendar, HubSpot, Notion, Facebook, Instagram, entre otras. Nos adaptamos a tu flujo de trabajo para que no tengas que cambiar nada, solo mejorar lo que ya haces.",
    key: "q3",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
    answer:
      "No. Nuestro equipo se encarga de todo: configuración, implementación y mantenimiento. Tú solo verás los resultados funcionando. Además, te damos una capacitación breve para que puedas entender y controlar tus sistemas sin complicaciones.",
    key: "q4",
  },
]

export const footerSections: FooterSection[] = [
  {
    title: "Navegación",
    links: ["Servicios", "Sobre Nosotros", "Testimonios", "FAQ"],
    key: "navigation",
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Cookies"],
    key: "legal",
  },
  {
    title: "Síguenos",
    links: ["Instagram", "LinkedIn", "WhatsApp"],
    key: "follow",
  },
]

export const companyLogos = [
  { key: "dental", label: "Clínicas Dentales" },
  { key: "medical", label: "Centros Médicos" },
  { key: "private", label: "Consultas Privadas" },
  { key: "aesthetic", label: "Centros Estéticos" },
  { key: "physio", label: "Fisioterapia" }
]

export const contactInfo = {
  phone: "+34 633 57 28 77",
  email: "contact@opptimai.es",
  instagram: "opptim.ai",
  linkedin: "https://linkedin.com/company/opptim-ai",
  whatsapp: "https://wa.me/34633572877"
}
