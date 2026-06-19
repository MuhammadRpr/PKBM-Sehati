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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cover.jpeg"
        alt="PKBM SEHATI - Pendidikan Inklusif untuk Semua"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Overlay for better text readability - gradient overlay for a premium look */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/50"></div>
      
      {/* Content */}
      <Container className="relative z-10 py-16 md:py-32 h-full flex flex-col justify-center text-left md:w-2/3">
        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold tracking-wider mb-6 w-fit">
          Selamat Datang di PKBM Sehati
        </span>
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
          Pendidikan Inklusif<br />Untuk Semua
        </h1>
        <p className="mb-10 text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
          Solusi pendidikan dan keterampilan terbaik untuk membangun masa depan yang lebih cerah, mandiri, dan bermartabat.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/kontak" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full rounded-full bg-[#1A63AB] text-white hover:bg-[#093C7D] border-none shadow-lg py-6 text-lg"
            >
              {CTA_BUTTONS.enroll}
            </Button>
          </Link>
          <Link href="/program" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1A63AB] py-6 text-lg"
            >
              {CTA_BUTTONS.viewPrograms}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
