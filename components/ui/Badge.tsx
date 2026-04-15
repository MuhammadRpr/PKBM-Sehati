import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

/**
 * Badge Component
 * Small label for categories, tags, status
 */
export function Badge({
  children,
  variant = 'primary',
  className,
}: BadgeProps) {
  const variants = {
    primary: 'bg-[#E0E7FF] text-[#1A63AB]',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
