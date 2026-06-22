import { Container } from '@/components/ui/Container';
import { VisiMisiSection } from '@/components/sections/VisiMisiSection';
import { Metadata } from 'next';
import { History, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Sejarah singkat, Akreditasi, dan Visi Misi PKBM SEHATI.',
};

/**
 * Tentang Kami Page
 */
export default function TentangKamiPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <Container className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
            Profil Lembaga
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-gray-900">Tentang Kami</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dekat perjalanan sejarah, pencapaian, serta tujuan utama PKBM SEHATI dalam memajukan pendidikan yang inklusif dan merata bagi masyarakat.
          </p>
        </Container>
      </section>

      {/* Sejarah & Akreditasi */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            
            {/* Sejarah Singkat */}
            <div className="bg-[#F0F9FF] rounded-3xl p-8 md:p-10 border border-blue-50 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-6 -top-6 text-blue-100/50">
                <History className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1A63AB] flex items-center justify-center shadow-sm">
                      <History className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Sejarah Singkat</h2>
                  </div>
                  
                  {/* Sejarah Singkat Image */}
                  <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-md border border-blue-100/50 bg-gray-100 flex flex-col">
                    <Image
                      src="/images/sejarah singkat.png"
                      alt="Sejarah Singkat PKBM Sehati"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                      PKBM SEHATI didirikan pada awal era 2000-an untuk memberikan <strong>akses pendidikan setara dan bermutu bagi masyarakat</strong>, khususnya bagi mereka yang tidak berkesempatan menyelesaikan jalur sekolah formal.
                    </p>
                    <p>
                      Berawal dari kelompok belajar kecil, dedikasi para pendidik dan kolaborasi dengan masyarakat mengantarkan PKBM SEHATI tumbuh resmi menjadi pusat belajar non-formal. Kami terus bertransformasi membekali lulusan dengan keterampilan hidup (life skills) agar warga belajar mandiri dan siap berdaya saing.
                    </p>
                  </div>
                </div>

                {/* Owner Profile */}
                <div className="mt-8 pt-6 border-t border-blue-100 flex items-center gap-4 bg-white/60 p-4 rounded-2xl shadow-sm">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200 shrink-0 shadow-sm bg-gray-100">
                    <Image
                      src="/images/own.jpeg"
                      alt="Pemilik PKBM Sehati Cikarang"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Dewi Juwianti</h4>
                    <p className="text-xs text-gray-500 font-semibold">PKBM Sehati Cikarang</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Akreditasi */}
            <div className="bg-amber-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute -right-6 -top-6 text-amber-200/40">
                <Award className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-200 text-amber-700 flex items-center justify-center shadow-sm">
                    <Award className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Akreditasi Sekolah</h2>
                </div>

                <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-amber-100 flex gap-5 items-center">
                  <Image src="/images/ak.png" alt="Akreditasi" width={96} height={96} className="w-24 h-24 object-contain shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Terakreditasi Resmi</h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                  <p>
                    Sebagai komitmen nyata menjaga mutu pendidikan, PKBM SEHATI resmi memperoleh <strong>Akreditasi dengan predikat B (Baik)</strong> dari Badan Akreditasi Nasional (BAN) PAUD, PNF, dan Pendidikan Menengah.
                  </p>
                  <p>
                    Pencapaian ini membuktikan bahwa kami memenuhi standar nasional pendidikan, mulai dari kurikulum yang relevan, pengajar profesional, kelengkapan sarana, hingga manajemen yang sehat. Ini adalah tanggung jawab moral kami untuk terus berinovasi memberikan pelayanan terbaik bagi warga belajar.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Visi Misi Section */}
      <div className="pb-16 md:pb-24 bg-white">
        {/* The VisiMisiSection component includes its own Container */}
        <VisiMisiSection />
      </div>
    </>
  );
}
