'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
}

export const ScrollReveal = React.memo<ScrollRevealProps>(({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  once = true,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, once])

  const getTransform = () => {
    if (!isVisible && !hasAnimated) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`
        case 'down':
          return `translateY(-${distance}px)`
        case 'left':
          return `translateX(${distance}px)`
        case 'right':
          return `translateX(-${distance}px)`
        default:
          return `translateY(${distance}px)`
      }
    }
    return 'translateY(0) translateX(0)'
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all ease-out',
        className
      )}
      style={{
        transform: getTransform(),
        opacity: isVisible || hasAnimated ? 1 : 0,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  )
})

ScrollReveal.displayName = 'ScrollReveal'
