import { LucideIcon } from 'lucide-react'

export interface Agent {
  name: string
  specialty: string
  avatar: string
  description: string
  featured?: boolean
}

export interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
  visual: React.ReactNode
}

export interface Benefit {
  icon: LucideIcon
  title: string
}

export interface Stat {
  number: string
  label: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
  avatar: string
  result: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface FooterSection {
  title: string
  links: string[]
}
