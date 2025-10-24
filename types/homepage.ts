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
  key?: string
}

export interface Benefit {
  icon: LucideIcon
  title: string
  key?: string
}

export interface Stat {
  number: string
  label: string
  key?: string
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
  key?: string
}

export interface FooterSection {
  title: string
  links: string[]
  key?: string
}
