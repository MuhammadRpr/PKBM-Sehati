import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import Link from 'next/link';
import { PROGRAMS } from '@/lib/constants';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Award, 
  Users, 
  HeartHandshake, 
  MessageCircle,
  GraduationCap,
  Target
} from 'lucide-react';

interface ProgramDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const program = PROGRAMS.find((p) => p.slug === params.slug);

  if (!program) {
    return { title: 'Program tidak ditemukan' };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({
    slug: program.slug,
  }));
}

/**
 * Program Detail Page
 */
export default function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const program = PROGRAMS.find((p) => p.slug === params.slug);

  if (!program) {
    return (
      <div className="py-20 text-center">
        <Container>
          <h1 className="mb-4 text-2xl font-bold">Program tidak ditemukan</h1>
          <Link href="/program" className="text-[#1A63AB] hover:underline">
            Kembali ke daftar program
          </Link>
        </Container>
      </div>
    );
  }

  const isInklusif = program.slug === 'program-inklusif';

  // Styling based on program type
  const heroGradient = isInklusif 
    ? 'bg-gradient-to-r from-amber-600 to-orange-500' 
    : 'bg-gradient-to-r from-[#1A63AB] to-[#093C7D]';
  
  const sectionBgSoft = isInklusif ? 'bg-orange-50' : 'bg-[#F0F9FF]';
  const primaryText = isInklusif ? 'text-amber-600' : 'text-[#1A63AB]';

  // Info chips based on program data
  const infoChips = [];
  if ((program as any).ijazah) infoChips.push({ icon: Award, label: `Sertifikat ${(program as any).ijazah}` });
  if ((program as any).schedule) infoChips.push({ icon: Clock, label: (program as any).schedule === 'Fleksibel sesuai program pembelajaran' ? 'Waktu Fleksibel' : 'Jadwal Teratur' });
  if ((program as any).systemPembelajaran) infoChips.push({ icon: BookOpen, label: (program as any).systemPembelajaran });
  if (isInklusif) infoChips.push({ icon: HeartHandshake, label: 'Pendekatan Inklusif' });
  if ((program as any).startAge !== undefined) {
    infoChips.push({ icon: Users, label: `Usia ${(program as any).startAge}+ Tahun` });
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={`${heroGradient} py-16 md:py-24 text-white relative overflow-hidden`}>
        <Container>
          <div className="relative z-10 max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3 items-center">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/30">
                {isInklusif ? 'Layanan Khusus' : 'Program Pendidikan'}
              </span>
              <Badge variant="success" className="bg-emerald-500 text-white border-none shadow-sm">Pendaftaran Dibuka</Badge>
            </div>
            
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium max-w-2xl leading-relaxed">
              {program.subtitle}
            </p>
            
            {/* Info Chips */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
              {infoChips.map((chip, idx) => (
                <div key={idx} className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20">
                  <chip.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90 shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white">{chip.label}</span>
                </div>
              ))}
            </div>

            <Link href="/kontak" className="inline-flex mt-2">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 shadow-lg">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. MAIN CONTENT SECTIONS */}
      {/* Tentang Program */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 relative inline-block">
              Tentang Program
              <span className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${isInklusif ? 'bg-amber-500' : 'bg-[#1A63AB]'}`}></span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Tujuan Program Cards */}
          {(program as any).aims && (
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="mb-8 text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Target className={`w-6 h-6 ${primaryText}`} />
                Tujuan Kami
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.isArray((program as any).aims) ? (
                  (program as any).aims.map((aim: string, idx: number) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex gap-4 items-start">
                      <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${sectionBgSoft} ${primaryText}`}>
                        <span className="font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{aim}</p>
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl sm:col-span-2 text-center">
                    <p className="text-lg text-gray-700 font-medium">{(program as any).aims}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Metode Pembelajaran (Alternating Background) */}
      {(program as any).learningMaterials && (
        <section className={`py-16 md:py-20 ${sectionBgSoft}`}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm ${primaryText}`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">Metode & Pendekatan</h2>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {(program as any).learningMaterials.map((material: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100/50">
                    <CheckCircle2 className={`w-6 h-6 shrink-0 ${primaryText}`} />
                    <span className="text-gray-800 font-medium text-lg">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Mata Pelajaran & Info Layanan */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            
            {/* Left Column (Span 2): Mata Pelajaran & Accordions */}
            <div className="md:col-span-2">
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                <BookOpen className={`w-6 h-6 ${primaryText}`} />
                Materi Belajar
              </h2>
              <div className="space-y-3 mb-12">
                {(program as any).modules.map((module: string, idx: number) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition-colors hover:${sectionBgSoft.replace('bg-', '')}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${isInklusif ? 'bg-amber-500' : 'bg-[#1A63AB]'}`}></div>
                    <span className="text-gray-800 font-medium">{module}</span>
                  </div>
                ))}
              </div>

              <h2 className="mb-8 text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                <Users className={`w-6 h-6 ${primaryText}`} />
                Info Pendaftaran
              </h2>
              
              {((program as any).requirements && (program as any).requirements.length > 0) && (
                <Accordion title="Persyaratan Pendaftaran" defaultOpen={true}>
                  <ul className="space-y-3">
                    {(program as any).requirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <span className={`shrink-0 ${primaryText}`}>•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              )}
            </div>

            {/* Right Column (Span 1): Sidebar / Kotak Informasi Program */}
            <div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-lg p-6 sticky top-24">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">Informasi Program</h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Jenjang Program</p>
                    <p className="text-lg font-bold text-gray-900">
                      {program.title}
                    </p>
                    <p className="text-sm text-gray-700">
                      {program.subtitle}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Usia Minimal Peserta
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {(program as any).startAge} Tahun ke Atas
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Jadwal Belajar
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {(program as any).schedule || program.duration}
                    </p>
                  </div>

                  {(program as any).systemPembelajaran && (
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm font-semibold text-gray-500 mb-1">
                        Sistem Pembelajaran
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {(program as any).systemPembelajaran}
                      </p>
                    </div>
                  )}

                  {(program as any).ijazah && (
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm font-semibold text-gray-500 mb-1">
                        Sertifikasi / Ijazah
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {(program as any).ijazah}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-gray-100 pt-6">
                    <Link href="/kontak">
                      <Button className={`w-full ${isInklusif ? 'bg-amber-600 hover:bg-amber-700' : 'bg-[#1A63AB] hover:bg-[#093C7D]'} text-white border-none`}>
                        Daftar Sekarang
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* Hasil Lulusan (Alternating Background) */}
      {(program as any).graduateResults && (
        <section className={`py-16 md:py-20 ${sectionBgSoft}`}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
                Lulusan Akan Memiliki
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(program as any).graduateResults.map((result: string, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${sectionBgSoft} ${primaryText}`}>
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <p className="text-gray-800 font-medium leading-snug">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24 mb-16 md:mb-0">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-gray-900 relative z-10">Siap Memulai Perjalanan?</h2>
            <p className="mb-8 text-lg text-gray-600 relative z-10">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin mendaftar ke program {program.title}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/kontak">
                <Button size="lg" className="w-full sm:w-auto px-8 text-lg">
                  Daftar Sekarang
                </Button>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=6281385700823" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 text-lg flex items-center justify-center gap-2 bg-white">
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi WA
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>


    </>
  );
}
