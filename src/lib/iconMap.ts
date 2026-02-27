import {
  PieChart,
  AlertTriangle,
  Building2,
  TrendingUp,
  ShieldCheck,
  Heart,
  ArrowRightLeft,
  Coins,
  BarChart3,
  Wallet,
  Receipt,
  Monitor,
  MessageCircle,
  FileText,
  Rocket,
  DollarSign,
  Clock,
  Target,
  Users,
  Home,
  Briefcase,
  GraduationCap,
  Umbrella,
  Scale,
  Calculator,
  LineChart,
  Lock,
  RefreshCw,
  Shield,
  CheckCircle,
  Info,
  Lightbulb,
  Zap,
  Star,
  TrendingDown,
  Landmark,
  HandCoins,
  BadgeDollarSign,
  Banknote,
  CircleDollarSign,
  type LucideIcon,
} from 'lucide-react';

/**
 * Maps string icon names (used in ProspectConfig) to Lucide icon components.
 * The LLM prompt includes this list so it can pick appropriate icons.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  PieChart,
  AlertTriangle,
  Building2,
  TrendingUp,
  ShieldCheck,
  Heart,
  ArrowRightLeft,
  Coins,
  BarChart3,
  Wallet,
  Receipt,
  Monitor,
  MessageCircle,
  FileText,
  Rocket,
  DollarSign,
  Clock,
  Target,
  Users,
  Home,
  Briefcase,
  GraduationCap,
  Umbrella,
  Scale,
  Calculator,
  LineChart,
  Lock,
  RefreshCw,
  Shield,
  CheckCircle,
  Info,
  Lightbulb,
  Zap,
  Star,
  TrendingDown,
  Landmark,
  HandCoins,
  BadgeDollarSign,
  Banknote,
  CircleDollarSign,
};

/**
 * Resolve a string icon name to a Lucide component.
 * Falls back to Info icon if the name isn't recognized.
 */
export function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Info;
}

/** All available icon names, for use in the LLM prompt */
export const AVAILABLE_ICONS = Object.keys(ICON_MAP);
