'use client'

import { useEffect, useState } from 'react'

/**
 * Hook para evitar problemas de hidratación
 * Retorna true solo después de que el componente se haya montado en el cliente
 */
export function useHydrationSafe() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return isHydrated
}
