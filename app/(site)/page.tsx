import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramCard } from '@/components/sections/ProgramCard';
import { PROGRAMS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

import { VisiMisiSection } from '@/components/sections/VisiMisiSection';

/**
 * Homepage
 * Main landing page with hero, programs, and latest articles
 */
export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Visi & Misi Section */}
      <VisiMisiSection />

      {/* Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Program Unggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan program pendidikan kesetaraan yang disesuaikan dengan kebutuhan masa depan warga belajar
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
              />
            ))}
          </div>
        </Container>
      </section>



      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 text-center text-white md:py-32">
        {/* Background Image */}
        <Image
          src="/images/beranda3.png"
          alt="CTA Background"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#093C7D]/80 backdrop-blur-sm"></div>
        
        {/* Content */}
        <Container className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight">
            Siap Bergabung Dengan Kami?
          </h2>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Mari mulai perjalanan pendidikan Anda bersama PKBM Sehati. Tim kami siap membantu proses pendaftaran Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-block rounded-xl bg-white px-8 py-3 text-lg font-bold text-[#1A63AB] shadow-xl transition-all hover:bg-[#F0F9FF] hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Hubungi Kami Sekarang
          </Link>
        </Container>
      </section>
    </>
  );
}
