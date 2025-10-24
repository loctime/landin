// Optimized imports para reducir bundle size
// Importaciones específicas en lugar de importar todo el paquete

// Lucide React - importaciones específicas
export {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Rocket,
  AlertTriangle,
  RefreshCw,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  DollarSign,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  ExternalLink,
  Download,
  Upload,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Copy,
  Share,
  Heart,
  ThumbsUp,
  MessageCircle,
  Bell,
  Settings,
  User,
  LogOut,
  Lock,
  Unlock,
  Key,
  Database,
  Server,
  Cloud,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Tv,
  Headphones,
  Speaker,
  Mic,
  MicOff,
  Camera,
  Video,
  VideoOff,
  Image,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Send,
  Reply,
  Forward,
  Flag,
  Bookmark,
  Tag,
  Calendar,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  History,
  RotateCcw,
  RotateCw,
  Move,
  Move3d,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Focus,
  Crop,
  Scissors,
  Palette,
  Brush,
  Pen,
  Pencil,
  Eraser,
  Highlighter,
  Paintbrush,
  Spray,
  Droplet,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Gauge,
  Activity,
  BarChart,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  Percent,
  Calculator,
  Hash,
  Plus,
  Minus,
  X as XIcon,
  Divide,
  Equal,
  NotEqual,
  LessThan,
  GreaterThan,
  LessThanOrEqual,
  GreaterThanOrEqual,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
} from 'lucide-react'

// Framer Motion - importaciones específicas
export { motion, AnimatePresence } from 'framer-motion'

// Radix UI - importaciones específicas (solo los que se usan)
export { Root as AccordionRoot } from '@radix-ui/react-accordion'
export { Root as AlertDialogRoot } from '@radix-ui/react-alert-dialog'
export { Root as AvatarRoot } from '@radix-ui/react-avatar'
export { Root as CheckboxRoot } from '@radix-ui/react-checkbox'
export { Root as DialogRoot } from '@radix-ui/react-dialog'
export { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
export { Root as HoverCardRoot } from '@radix-ui/react-hover-card'
export { Root as LabelRoot } from '@radix-ui/react-label'
export { Root as NavigationMenuRoot } from '@radix-ui/react-navigation-menu'
export { Root as PopoverRoot } from '@radix-ui/react-popover'
export { Root as ProgressRoot } from '@radix-ui/react-progress'
export { Root as RadioGroupRoot } from '@radix-ui/react-radio-group'
export { Root as ScrollAreaRoot } from '@radix-ui/react-scroll-area'
export { Root as SelectRoot } from '@radix-ui/react-select'
export { Root as SeparatorRoot } from '@radix-ui/react-separator'
export { Root as SliderRoot } from '@radix-ui/react-slider'
export { Root as SwitchRoot } from '@radix-ui/react-switch'
export { Root as TabsRoot } from '@radix-ui/react-tabs'
export { Root as ToastRoot } from '@radix-ui/react-toast'
export { Root as ToggleRoot } from '@radix-ui/react-toggle'
export { Root as ToggleGroupRoot } from '@radix-ui/react-toggle-group'
export { Root as TooltipRoot } from '@radix-ui/react-tooltip'

// Next.js - importaciones específicas
export { default as NextImage } from 'next/image'
export { default as NextLink } from 'next/link'
export { default as NextScript } from 'next/script'

// React - importaciones específicas
export { 
  useState, 
  useEffect, 
  useCallback, 
  useMemo, 
  useRef, 
  useContext, 
  createContext,
  memo,
  lazy,
  Suspense,
  Component,
  ErrorInfo,
  ReactNode
} from 'react'

// React DOM - importaciones específicas
export { createRoot, hydrateRoot } from 'react-dom/client'

// Hooks personalizados - importaciones específicas
export { useTranslations } from '@/hooks/use-translations'
export { useLanguage } from '@/hooks/use-language'
export { useScrollAnimation } from '@/hooks/use-scroll-animation'
export { useScroll } from '@/hooks/use-scroll'
export { useMobile } from '@/hooks/use-mobile'
export { useToast } from '@/hooks/use-toast'
export { useSidebar } from '@/hooks/use-sidebar'
export { useMenu } from '@/hooks/use-menu'
export { useMobileMenu } from '@/hooks/use-mobile-menu'
export { useChart } from '@/hooks/use-chart'

// Utilidades
export { cn } from '@/lib/utils'
export { clsx } from 'clsx'
export { twMerge } from 'tailwind-merge'
