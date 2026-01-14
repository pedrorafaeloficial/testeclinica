import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon?: LucideIcon;
  variant?: 'default' | 'dark' | 'lime';
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}
