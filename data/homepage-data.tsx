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
  },
  {
    question: "¿Qué beneficios obtiene mi negocio al automatizar procesos?",
    answer:
      "Automatizar te permite ahorrar tiempo, reducir errores humanos, mejorar la atención al cliente y aumentar tus ventas. Además, la IA aprende con el tiempo, lo que hace que tus procesos sean cada vez más eficientes. En pocas semanas, notarás que tu equipo trabaja menos en tareas manuales y más en lo que realmente genera valor.",
  },
  {
    question: "¿Se pueden integrar las automatizaciones con mis herramientas actuales (WhatsApp, redes sociales, etc.)?",
    answer:
      "¡Sí! Nuestras automatizaciones se integran fácilmente con plataformas como WhatsApp Business, Google Calendar, HubSpot, Notion, Facebook, Instagram, entre otras. Nos adaptamos a tu flujo de trabajo para que no tengas que cambiar nada, solo mejorar lo que ya haces.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
    answer:
      "No. Nuestro equipo se encarga de todo: configuración, implementación y mantenimiento. Tú solo verás los resultados funcionando. Además, te damos una capacitación breve para que puedas entender y controlar tus sistemas sin complicaciones.",
  },
]

export const footerSections: FooterSection[] = [
  {
    title: "Navegación",
    links: ["Servicios", "Sobre Nosotros", "Testimonios", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Cookies"],
  },
  {
    title: "Síguenos",
    links: ["Instagram", "LinkedIn", "WhatsApp"],
  },
]

export const companyLogos = [
  "Clínicas Dentales",
  "Centros Médicos", 
  "Consultas Privadas",
  "Centros Estéticos",
  "Fisioterapia"
]

export const contactInfo = {
  phone: "+34 633 57 28 77",
  email: "contact@opptimai.es",
  instagram: "opptim.ai",
  whatsapp: "https://wa.me/34633572877"
}
