'use client';

import { Clock } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProgramCardProps {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
  duration: string;
  enrollmentStatus: 'open' | 'closed';
}

/**
 * ProgramCard Component
 * Display individual program information
 */
export function ProgramCard({
  slug,
  title,
  subtitle,
  description,
  icon,
  duration,
  enrollmentStatus,
}: ProgramCardProps) {
  const isOpen = enrollmentStatus === 'open';

  return (
    <Card className="flex flex-col h-full w-full relative overflow-hidden group">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1A63AB]"></div>
      
      <div className="mb-6 mt-2 flex items-center justify-between">
        {icon && <div className="w-14 h-14 rounded-full bg-[#F0F9FF] text-[#1A63AB] flex items-center justify-center text-3xl shadow-sm">{icon}</div>}
        <Badge variant={isOpen ? 'success' : 'warning'} className="rounded-full px-4 py-1 font-semibold tracking-wide">
          {isOpen ? 'Pendaftaran Dibuka' : 'Ditutup'}
        </Badge>
      </div>

      <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{title}</h3>
      <p className="mb-4 text-base font-medium text-[#1A63AB]">{subtitle}</p>
      <p className="mb-6 flex-grow text-gray-600 leading-relaxed text-base">{description}</p>

      <div className="mb-6 flex items-center gap-2 rounded-lg bg-gray-50 p-3">
        <Clock className="w-5 h-5 text-gray-500" />
        <p className="text-sm font-medium text-gray-700">
          Durasi Program: {duration}
        </p>
      </div>

      <Link href={`/program/${slug}`} className="mt-auto block">
        <Button variant="primary" className="w-full text-base font-bold bg-[#1A63AB] hover:bg-[#093C7D] transition-colors group-hover:shadow-md">
          Pelajari Detail Program
        </Button>
      </Link>
    </Card>
  );
}
