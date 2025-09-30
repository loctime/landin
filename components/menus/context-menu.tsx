'use client'

import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MenuBase, MenuItemBase } from './menu-base'
import { useMenu, useKeyboardNavigation } from '@/hooks/use-menu'

const ContextMenu = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Root>>((props) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
})

ContextMenu.displayName = 'ContextMenu'

const ContextMenuTrigger = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Trigger>>((props) => {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
})

ContextMenuTrigger.displayName = 'ContextMenuTrigger'

const ContextMenuGroup = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Group>>((props) => {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
})

ContextMenuGroup.displayName = 'ContextMenuGroup'

const ContextMenuPortal = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Portal>>((props) => {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
})

ContextMenuPortal.displayName = 'ContextMenuPortal'

const ContextMenuSub = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Sub>>((props) => {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
})

ContextMenuSub.displayName = 'ContextMenuSub'

const ContextMenuRadioGroup = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>>((props) => {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
})

ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup'

interface ContextMenuSubTriggerProps extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean
  children: React.ReactNode
}

const ContextMenuSubTrigger = React.memo<ContextMenuSubTriggerProps>(({
  className,
  inset,
  children,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
})

ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'

const ContextMenuSubContent = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.SubContent>>(({
  className,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className
      )}
      {...props}
    />
  )
})

ContextMenuSubContent.displayName = 'ContextMenuSubContent'

const ContextMenuContent = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Content>>(({
  className,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
})

ContextMenuContent.displayName = 'ContextMenuContent'

interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
  inset?: boolean
  variant?: 'default' | 'destructive'
}

const ContextMenuItem = React.memo<ContextMenuItemProps>(({
  className,
  inset,
  variant = 'default',
  ...props
}) => {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
})

ContextMenuItem.displayName = 'ContextMenuItem'

interface ContextMenuCheckboxItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> {
  children: React.ReactNode
  checked?: boolean
}

const ContextMenuCheckboxItem = React.memo<ContextMenuCheckboxItemProps>(({
  className,
  children,
  checked,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'

interface ContextMenuRadioItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> {
  children: React.ReactNode
}

const ContextMenuRadioItem = React.memo<ContextMenuRadioItemProps>(({
  className,
  children,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
})

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'

interface ContextMenuLabelProps extends React.ComponentProps<typeof ContextMenuPrimitive.Label> {
  inset?: boolean
}

const ContextMenuLabel = React.memo<ContextMenuLabelProps>(({
  className,
  inset,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className
      )}
      {...props}
    />
  )
})

ContextMenuLabel.displayName = 'ContextMenuLabel'

const ContextMenuSeparator = React.memo<React.ComponentProps<typeof ContextMenuPrimitive.Separator>>(({
  className,
  ...props
}) => {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
})

ContextMenuSeparator.displayName = 'ContextMenuSeparator'

const ContextMenuShortcut = React.memo<React.ComponentProps<'span'>>(({
  className,
  ...props
}) => {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className
      )}
      {...props}
    />
  )
})

ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
