'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface MenuBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'compact' | 'spacious'
  size?: 'sm' | 'md' | 'lg'
}

export const MenuBase = React.memo<MenuBaseProps>(({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-popover text-popover-foreground border shadow-md',
    compact: 'bg-popover text-popover-foreground border shadow-sm',
    spacious: 'bg-popover text-popover-foreground border shadow-lg',
  }

  const sizeClasses = {
    sm: 'text-xs p-1',
    md: 'text-sm p-1',
    lg: 'text-base p-2',
  }

  return (
    <div
      className={cn(
        'rounded-md overflow-hidden',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

MenuBase.displayName = 'MenuBase'

interface MenuItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'disabled'
  inset?: boolean
  selected?: boolean
  active?: boolean
}

export const MenuItemBase = React.memo<MenuItemBaseProps>(({
  children,
  className,
  variant = 'default',
  inset = false,
  selected = false,
  active = false,
  ...props
}) => {
  const variantClasses = {
    default: 'focus:bg-accent focus:text-accent-foreground',
    destructive: 'text-destructive focus:bg-destructive/10 focus:text-destructive',
    disabled: 'opacity-50 pointer-events-none',
  }

  return (
    <div
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'data-[inset]:pl-8',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        variantClasses[variant],
        selected && 'bg-accent text-accent-foreground',
        active && 'bg-accent/50',
        inset && 'pl-8',
        className
      )}
      data-variant={variant}
      data-inset={inset}
      data-selected={selected}
      data-active={active}
      {...props}
    >
      {children}
    </div>
  )
})

MenuItemBase.displayName = 'MenuItemBase'
