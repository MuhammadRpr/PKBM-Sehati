import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { PROGRAMS } from '@/lib/constants';
import { Metadata } from 'next';

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

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A63AB] to-[#093C7D] py-12 text-white md:py-16 lg:py-20">
        <Container>
          <div>
            <h1 className="mb-2 text-4xl font-bold">{program.title}</h1>
            <p className="text-xl text-gray-200">{program.subtitle}</p>
            <div className="mt-4">
              <Badge variant="success">Pendaftaran Dibuka</Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                  Tentang Program Ini
                </h2>
                <p className="text-lg text-gray-700">
                  {program.description}
                </p>
              </div>

              {/* Aims */}
              {(program as any).aims && (
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold">Tujuan</h2>
                  <p className="text-lg text-gray-700">
                    {(program as any).aims}
                  </p>
                </div>
              )}

              {/* Learning Materials */}
              {(program as any).learningMaterials && (
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold">Materi Pembelajaran</h2>
                  <ul className="space-y-3">
                    {(program as any).learningMaterials.map((material: string, idx: number) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 text-[#1A63AB]">•</span>
                        <span className="text-gray-700">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modules */}
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">Mata Pelajaran</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {(program as any).modules.map((module: string) => (
                    <div
                      key={module}
                      className="flex items-center gap-3 rounded-lg bg-[#F0F9FF] p-3"
                    >
                      <span className="text-[#1A63AB]">✓</span>
                      <span className="text-gray-900">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                  Persyaratan Pendaftaran
                </h2>
                <ul className="space-y-3">
                  {(program as any).requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 text-[#1A63AB]">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graduate Results */}
              {(program as any).graduateResults && (
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold">Hasil Lulusan</h2>
                  <ul className="space-y-3">
                    {(program as any).graduateResults.map((result: string, idx: number) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 text-[#1A63AB]">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Info Card */}
              <div className="rounded-lg border border-[#E0E7FF] bg-white p-6">
                <h3 className="mb-4 text-2xl font-bold">Informasi Program</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Durasi Program</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {program.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      Usia Minimal Peserta
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {(program as any).startAge} tahun ke atas
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      Jadwal Kelas
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {(program as any).schedule}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      Kapasitas Peserta
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {(program as any).capacity} orang
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <Link href="/kontak">
                      <Button variant="primary" className="w-full">
                        Daftar Sekarang
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              {(program as any).benefits && (
                <div className="mt-6 rounded-lg bg-[#F0F9FF] p-6">
                  <h4 className="mb-4 font-bold text-gray-900">Keuntungan</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {(program as any).benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#1A63AB]">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
        <Container className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Siap Memulai?</h2>
          <p className="mb-6 text-lg text-gray-700">
            Hubungi kami hari ini untuk memulai perjalanan pendidikan Anda
          </p>
          <Link href="/kontak">
            <Button variant="primary" size="lg">
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
