'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CTA_BUTTONS } from '@/lib/constants';

/**
 * HeroSection Component
 * Main hero banner for homepage
 */
export function HeroSection() {
  return (
    <section className="relative min-h-72 md:min-h-96 overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/images/cover.jpeg"
        alt="PKBM SEHATI - Pendidikan Inklusif untuk Semua"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <Container className="relative z-10 text-center py-20 md:py-32 h-full flex flex-col justify-center">
        <h1 className="mb-8 text-3xl font-bold md:text-5xl">
          PENDIDIKAN INKLUSIF UNTUK SEMUA
        </h1>
        <p className="mb-8 text-lg md:text-xl text-blue-100">
          PKBM SEHATI hadir sebagai solusi Pendidikan dan Keterampilan untuk masa depan yang lebih baik
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/kontak">
            <Button
              variant="primary"
              size="lg"
              className="w-full bg-white text-[#1A63AB] hover:bg-[#F0F9FF] sm:w-auto"
            >
              {CTA_BUTTONS.enroll}
            </Button>
          </Link>
          <Link href="/program">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-[#093C7D] sm:w-auto"
            >
              {CTA_BUTTONS.viewPrograms}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
