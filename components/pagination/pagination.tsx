'use client'

import React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

const Pagination = React.memo<React.ComponentProps<'nav'>>(({ className, ...props }) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
})

Pagination.displayName = 'Pagination'

const PaginationContent = React.memo<React.ComponentProps<'ul'>>(({ className, ...props }) => {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
})

PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.memo<React.ComponentProps<'li'>>(({ ...props }) => {
  return <li data-slot="pagination-item" {...props} />
})

PaginationItem.displayName = 'PaginationItem'

interface PaginationLinkProps extends React.ComponentProps<'a'> {
  isActive?: boolean
  size?: React.ComponentProps<typeof Button>['size']
}

const PaginationLink = React.memo<PaginationLinkProps>(({
  className,
  isActive,
  size = 'icon',
  ...props
}) => {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  )
})

PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = React.memo<React.ComponentProps<typeof PaginationLink>>(({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
})

PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = React.memo<React.ComponentProps<typeof PaginationLink>>(({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
})

PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = React.memo<React.ComponentProps<'span'>>(({
  className,
  ...props
}) => {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
})

PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
