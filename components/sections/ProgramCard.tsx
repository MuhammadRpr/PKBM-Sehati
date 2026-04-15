'use client';

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
    <Card className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        {icon && <span className="text-4xl">{icon}</span>}
        <Badge variant={isOpen ? 'success' : 'warning'}>
          {isOpen ? 'Dibuka' : 'Ditutup'}
        </Badge>
      </div>

      <h3 className="mb-1 text-2xl font-bold text-blue-600">{title}</h3>
      <p className="mb-3 text-sm text-gray-600">{subtitle}</p>
      <p className="mb-4 flex-grow text-gray-700">{description}</p>

      <div className="mb-4 border-t pt-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Durasi:</span> {duration}
        </p>
      </div>

      <Link href={`/program/${slug}`}>
        <Button variant="primary" className="w-full">
          Pelajari Lebih Lanjut
        </Button>
      </Link>
    </Card>
  );
}
