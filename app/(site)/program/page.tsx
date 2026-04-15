import { Container } from '@/components/ui/Container';
import { ProgramCard } from '@/components/sections/ProgramCard';
import { PROGRAMS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pendidikan',
  description:
    'Jelajahi program-program pendidikan kesetaraan kami: Paket A (SD), Paket B (SMP), dan Paket C (SMA).',
};

/**
 * Program List Page
 */
export default function ProgramPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Program Pendidikan</h1>
          <p className="text-xl text-gray-600">
            Pilih program yang sesuai dengan kebutuhan pendidikan Anda
          </p>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-0 md:py-0 lg:py-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">
              Pertanyaan yang Sering Diajukan
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Berapa biaya pendaftaran?
                </h3>
                <p className="text-gray-700">
                  Biaya pendaftaran dirancang sesuai dengan kemampuan masyarakat.
                  Hubungi kami untuk detail lebih lanjut tentang biaya pendaftaran
                  dan cicilan bulanan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Apakah ada syarat usia tertentu?
                </h3>
                <p className="text-gray-700">
                  Tidak ada batasan usia maksimal untuk mendaftar. Paket A
                  dimulai dari usia 6 tahun, Paket B dari 12 tahun, dan Paket C
                  dari 15 tahun. Namun, bagi yang lebih tua tetap bisa mendaftar!
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Berapa lama program ini?
                </h3>
                <p className="text-gray-700">
                  Setiap paket dirancang untuk diselesaikan dalam 2 tahun dengan
                  jadwal fleksibel (malam atau sore) sesuai kebutuhan Anda.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Apakah sertifikat diakui?
                </h3>
                <p className="text-gray-700">
                  Ya! Sertifikat PKBM SEHATI adalah sertifikat resmi yang diakui
                  oleh pemerintah dan dapat digunakan untuk melanjutkan ke
                  jenjang pendidikan berikutnya atau melamar pekerjaan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Bagaimana proses pendaftaran?
                </h3>
                <p className="text-gray-700">
                  Proses pendaftaran mudah! Kunjungi kantor kami, isi formulir
                  pendaftaran, dan Anda siap memulai. Tidak ada tes masuk yang
                  rumit – kami menerima semua orang dengan motivasi belajar.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
