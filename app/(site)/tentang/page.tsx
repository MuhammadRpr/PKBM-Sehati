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
            <div className="bg-[#F0F9FF] rounded-3xl p-8 md:p-10 border border-blue-50 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute -right-6 -top-6 text-blue-100/50">
                <History className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1A63AB] flex items-center justify-center shadow-sm">
                    <History className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Sejarah Singkat</h2>
                </div>
                
                <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    PKBM SEHATI didirikan pada awal era 2000-an dengan sebuah tujuan mulia yang sederhana namun berdampak besar: <strong>memberikan akses pendidikan yang setara dan bermutu bagi masyarakat</strong>, terutama bagi mereka yang tidak memiliki kesempatan untuk menyelesaikan pendidikan di jalur sekolah formal.
                  </p>
                  <p>
                    Dimulai dari kegiatan kelompok belajar kecil di lingkungan warga, semangat untuk belajar dan berkembang yang ditunjukkan oleh masyarakat menggerakkan kami untuk menjadi institusi yang lebih resmi dan terstruktur. Melalui kerja keras, kolaborasi dengan masyarakat sekitar, dan dedikasi penuh dari para tenaga pendidik, PKBM SEHATI terus bertumbuh secara organik menjadi pusat belajar utama.
                  </p>
                  <p>
                    Hari ini, PKBM SEHATI tidak sekadar menjadi tempat ujian penyetaraan (Paket A, B, dan C), tetapi telah bertransformasi menjadi lembaga pendidikan non-formal yang komprehensif. Kami fokus membekali ratusan lulusan dengan keterampilan hidup (life skills), karakter mandiri, serta rasa percaya diri untuk terus berdaya saing di tengah pesatnya perkembangan zaman.
                  </p>
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
                
                <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Sebagai komitmen nyata dalam menjaga dan terus meningkatkan mutu pendidikan, PKBM SEHATI telah dinilai secara ketat dan resmi memperoleh <strong>Akreditasi dengan predikat B (Baik)</strong> dari Badan Akreditasi Nasional Pendidikan Anak Usia Dini, Pendidikan Dasar dan Pendidikan Menengah serta Pendidikan Nonformal.
                  </p>
                  <p>
                    Pencapaian akreditasi ini merupakan bukti pengakuan pemerintah atas dedikasi lembaga kami. Hal ini menegaskan bahwa PKBM SEHATI telah memenuhi standar nasional pendidikan, mulai dari kurikulum yang relevan, kualitas tenaga pengajar profesional, kelengkapan sarana prasarana penunjang, hingga manajemen institusi yang sehat dan transparan.
                  </p>
                  <p>
                    Bagi kami, akreditasi bukanlah sekadar sertifikat, melainkan sebuah tanggung jawab moral untuk terus berinovasi memberikan pelayanan prima bagi setiap warga belajar.
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
