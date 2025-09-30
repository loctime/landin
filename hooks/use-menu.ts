'use client'

import { useState, useCallback, useMemo } from 'react'

export interface MenuState {
  isOpen: boolean
  selectedItems: Set<string>
  activeItem: string | null
}

export interface UseMenuProps {
  initialOpen?: boolean
  multiple?: boolean
  onSelectionChange?: (items: string[]) => void
}

export function useMenu({
  initialOpen = false,
  multiple = false,
  onSelectionChange,
}: UseMenuProps = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setActiveItem(null)
  }, [])

  const selectItem = useCallback((item: string) => {
    if (multiple) {
      setSelectedItems(prev => {
        const newSet = new Set(prev)
        if (newSet.has(item)) {
          newSet.delete(item)
        } else {
          newSet.add(item)
        }
        onSelectionChange?.(Array.from(newSet))
        return newSet
      })
    } else {
      setSelectedItems(new Set([item]))
      onSelectionChange?.([item])
      close()
    }
  }, [multiple, onSelectionChange, close])

  const clearSelection = useCallback(() => {
    setSelectedItems(new Set())
    onSelectionChange?.([])
  }, [onSelectionChange])

  const isSelected = useCallback((item: string) => {
    return selectedItems.has(item)
  }, [selectedItems])

  const menuState = useMemo<MenuState>(() => ({
    isOpen,
    selectedItems,
    activeItem,
  }), [isOpen, selectedItems, activeItem])

  return {
    ...menuState,
    toggle,
    open,
    close,
    selectItem,
    clearSelection,
    isSelected,
    setActiveItem,
  }
}

export function useKeyboardNavigation(items: string[]) {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setActiveIndex(prev => (prev + 1) % items.length)
        break
      case 'ArrowUp':
        event.preventDefault()
        setActiveIndex(prev => (prev - 1 + items.length) % items.length)
        break
      case 'Home':
        event.preventDefault()
        setActiveIndex(0)
        break
      case 'End':
        event.preventDefault()
        setActiveIndex(items.length - 1)
        break
      case 'Escape':
        event.preventDefault()
        setActiveIndex(-1)
        break
    }
  }, [items.length])

  const reset = useCallback(() => {
    setActiveIndex(-1)
  }, [])

  return {
    activeIndex,
    handleKeyDown,
    reset,
    setActiveIndex,
  }
}
