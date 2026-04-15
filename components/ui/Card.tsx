import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card Component
 * Basic card wrapper with shadow and rounded corners
 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#E0E7FF] bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
