'use client'

import { useState, useEffect } from 'react'

export function useScroll() {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Verificar si estamos en la parte superior
      setIsAtTop(currentScrollY < 10)
      
      // Determinar dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling hacia abajo y no estamos en el top
        setIsScrollingDown(true)
      } else {
        // Scrolling hacia arriba o estamos en el top
        setIsScrollingDown(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return {
    isScrollingDown,
    isAtTop,
    scrollY: lastScrollY
  }
}
