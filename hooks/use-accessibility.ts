'use client'

import { useEffect, useCallback } from 'react'

// Hook para mejorar la accesibilidad
export const useAccessibility = () => {
  // Manejar navegación por teclado
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip links para navegación rápida
    if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
      const skipLink = document.querySelector('[data-skip-link]') as HTMLElement
      if (skipLink) {
        skipLink.focus()
        event.preventDefault()
      }
    }
  }, [])

  // Mejorar el foco visible
  const enhanceFocus = useCallback(() => {
    const style = document.createElement('style')
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #36D6E6;
        outline-offset: 2px;
        border-radius: 4px;
      }
      
      .focus-visible:focus:not(:focus-visible) {
        outline: none;
      }
      
      /* Mejorar contraste para elementos interactivos */
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 2px solid #36D6E6;
        outline-offset: 2px;
      }
      
      /* Indicador de foco para elementos personalizados */
      [role="button"]:focus-visible,
      [role="tab"]:focus-visible,
      [role="menuitem"]:focus-visible {
        outline: 2px solid #36D6E6;
        outline-offset: 2px;
      }
    `
    document.head.appendChild(style)
  }, [])

  // Añadir skip links
  const addSkipLinks = useCallback(() => {
    const skipLinks = document.createElement('div')
    skipLinks.innerHTML = `
      <a 
        href="#main-content" 
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        data-skip-link
      >
        Saltar al contenido principal
      </a>
      <a 
        href="#navigation" 
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
        data-skip-link
      >
        Saltar a la navegación
      </a>
    `
    document.body.insertBefore(skipLinks, document.body.firstChild)
  }, [])

  // Mejorar anuncios para lectores de pantalla
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    document.body.appendChild(announcement)
    
    // Remover después de un tiempo
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }, [])

  // Detectar preferencias de movimiento reducido
  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Aplicar preferencias de movimiento
  const applyMotionPreferences = useCallback(() => {
    if (prefersReducedMotion()) {
      const style = document.createElement('style')
      style.textContent = `
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `
      document.head.appendChild(style)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    // Aplicar mejoras de accesibilidad
    enhanceFocus()
    addSkipLinks()
    applyMotionPreferences()

    // Event listeners
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, enhanceFocus, addSkipLinks, applyMotionPreferences])

  return {
    announceToScreenReader,
    prefersReducedMotion,
  }
}

// Hook para manejar navegación por teclado en listas
export const useKeyboardNavigation = (itemCount: number) => {
  const handleKeyDown = useCallback((event: KeyboardEvent, currentIndex: number, setCurrentIndex: (index: number) => void) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setCurrentIndex((currentIndex + 1) % itemCount)
        break
      case 'ArrowUp':
        event.preventDefault()
        setCurrentIndex(currentIndex === 0 ? itemCount - 1 : currentIndex - 1)
        break
      case 'Home':
        event.preventDefault()
        setCurrentIndex(0)
        break
      case 'End':
        event.preventDefault()
        setCurrentIndex(itemCount - 1)
        break
    }
  }, [itemCount])

  return { handleKeyDown }
}

// Hook para manejar ARIA live regions
export const useAriaLive = () => {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.textContent = message
    document.body.appendChild(liveRegion)
    
    setTimeout(() => {
      if (document.body.contains(liveRegion)) {
        document.body.removeChild(liveRegion)
      }
    }, 1000)
  }, [])

  return { announce }
}
