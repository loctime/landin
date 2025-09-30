// Provider y hooks
export { SidebarProvider, useSidebar } from './sidebar-provider'

// Componentes principales
export { Sidebar } from './sidebar'
export { SidebarContent } from './sidebar-content'
export { SidebarFooter } from './sidebar-footer'
export { SidebarHeader } from './sidebar-header'
export { SidebarInset } from './sidebar-inset'
export { SidebarInput } from './sidebar-input'
export { SidebarRail } from './sidebar-rail'
export { SidebarSeparator } from './sidebar-separator'
export { SidebarTrigger } from './sidebar-trigger'

// Grupos
export { 
  SidebarGroup, 
  SidebarGroupAction, 
  SidebarGroupContent, 
  SidebarGroupLabel 
} from './sidebar-group'

// Menús
export {
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './sidebar-menu'

// Tipos
export type { SidebarContextProps } from '@/hooks/use-sidebar'
