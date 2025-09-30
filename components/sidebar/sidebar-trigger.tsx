'use client'

import React from 'react'
import { PanelLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useSidebar } from './sidebar-provider'

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {}

export const SidebarTrigger = React.memo<SidebarTriggerProps>(({
  className,
  onClick,
  ...props
}) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})

SidebarTrigger.displayName = 'SidebarTrigger'
