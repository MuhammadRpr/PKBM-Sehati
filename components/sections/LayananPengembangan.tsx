'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { 
  HeartHandshake, 
  Music, 
  Palette, 
  CheckCircle2, 
  Activity, 
  BrainCircuit, 
  Accessibility,
  ChefHat,
  Scissors,
  Laptop,
  Store,
  Compass,
  Lightbulb
} from 'lucide-react';

export function LayananPengembangan() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wider uppercase mb-4">
            Layanan Khusus
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Program Layanan dan Pengembangan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Program pendukung yang dirancang untuk membantu peserta didik mengembangkan potensi, minat, bakat, serta kemandirian mereka.
          </p>
        </div>

        <div className="space-y-20">
          {/* A. Unit Layanan Disabilitas (ULD) */}
          <div className="relative scroll-mt-24" id="uld">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Unit Layanan Disabilitas (ULD)</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Layanan pendukung untuk membantu peserta didik berkebutuhan khusus mengembangkan kemampuan komunikasi, motorik, kemandirian, serta partisipasi dalam kegiatan belajar dan kehidupan sehari-hari.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">Mengapa Memilih ULD Kami?</h4>
                  <ul className="space-y-3">
                    {[
                      'Pendekatan individual sesuai kebutuhan',
                      'Didukung tenaga profesional & berpengalaman',
                      'Terintegrasi dengan program pendidikan',
                      'Melibatkan orang tua dalam pendampingan',
                      'Berorientasi pada kemandirian anak'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Jenis-Jenis Layanan ULD</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Terapi Wicara</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Membantu peserta didik mengembangkan kemampuan komunikasi, bahasa, bicara, serta kemampuan memahami dan menyampaikan informasi dengan lebih baik.
                    </p>
                  </Card>
                  <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Okupasi Terapi / Sensori Integrasi</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Meningkatkan kemampuan motorik halus, konsentrasi, kemandirian, dan keterampilan aktivitas sehari-hari melalui kegiatan terstruktur dan menyenangkan.
                    </p>
                  </Card>
                  <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <Accessibility className="w-6 h-6" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Fisioterapi</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Mengembangkan kemampuan gerak, keseimbangan, koordinasi, dan kekuatan tubuh sesuai kondisi masing-masing untuk mendukung mobilitas dan kualitas hidup yang mandiri.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* B. Angklung Inklusif Sehati */}
          <div className="relative scroll-mt-24" id="angklung">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Angklung Inklusif Sehati</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Program pengembangan bakat dan keterampilan untuk memberikan kesempatan kepada seluruh peserta didik, termasuk yang berkebutuhan khusus, untuk belajar, berlatih, dan tampil dalam seni musik tradisional Indonesia.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Melalui kegiatan bermain angklung, peserta didik belajar mengenal budaya bangsa, mengembangkan konsentrasi, koordinasi, kerja sama, disiplin, serta rasa percaya diri.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-[#1A63AB] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-white/10">
                    <Music className="w-64 h-64" />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 relative z-10">Tujuan Program</h4>
                  <ul className="space-y-4 relative z-10">
                    {[
                      'Melestarikan seni dan budaya Indonesia',
                      'Mengembangkan motorik, konsentrasi, dan koordinasi',
                      'Melatih kerja sama, disiplin, dan tanggung jawab',
                      'Meningkatkan komunikasi dan interaksi sosial',
                      'Membangun rasa percaya diri untuk tampil di publik'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0 mt-0.5" />
                        <span className="text-blue-50 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* C. Sehati Creative */}
          <div className="relative scroll-mt-24" id="creative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">SEHATI CREATIVE</h3>
              <h4 className="text-xl font-semibold text-[#1A63AB] mb-6">Pusat Keterampilan dan Vokasi</h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Program yang dirancang untuk membantu peserta didik mengembangkan potensi, bakat, minat, serta keterampilan vokasi yang bermanfaat dalam kehidupan sehari-hari maupun masa depan melalui pendekatan praktik (learning by doing).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Tujuan Utama</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#1A63AB] shrink-0" /><span className="text-gray-700">Mengembangkan life skill</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#1A63AB] shrink-0" /><span className="text-gray-700">Menumbuhkan kreativitas & kemandirian</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#1A63AB] shrink-0" /><span className="text-gray-700">Mengembangkan bakat & minat</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#1A63AB] shrink-0" /><span className="text-gray-700">Membekali keterampilan vokasi</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#1A63AB] shrink-0" /><span className="text-gray-700">Persiapan berkarya di masyarakat</span></li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Kegiatan Program</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div><span className="text-gray-700">Praktik membuat makanan & minuman</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div><span className="text-gray-700">Pelatihan sesuai minat & kemampuan</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div><span className="text-gray-700">Pembuatan karya kreatif</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div><span className="text-gray-700">Market Day & pameran karya</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div><span className="text-gray-700">Projek kewirausahaan sederhana</span></li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Manfaat Program</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-gray-700">Kemampuan berpikir kreatif</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-gray-700">Melatih tanggung jawab</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-gray-700">Pengalaman belajar nyata</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-gray-700">Keterampilan aplikatif</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-gray-700">Rasa bangga terhadap karya</span></li>
                </ul>
              </div>
            </div>

            {/* Bidang Pengembangan Grid */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">Bidang Pengembangan</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { icon: ChefHat, title: 'Tata Boga & Makanan', color: 'bg-orange-100 text-orange-600' },
                  { icon: Scissors, title: 'Kerajinan & Kreativitas', color: 'bg-pink-100 text-pink-600' },
                  { icon: Laptop, title: 'Literasi Digital Dasar', color: 'bg-blue-100 text-blue-600' },
                  { icon: Store, title: 'Kewirausahaan Sederhana', color: 'bg-green-100 text-green-600' },
                  { icon: Compass, title: 'Life Skill', color: 'bg-teal-100 text-teal-600' },
                  { icon: Lightbulb, title: 'Proyek Kreatif', color: 'bg-yellow-100 text-yellow-600' }
                ].map((bidang, i) => (
                  <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors text-center border border-gray-100">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${bidang.color}`}>
                      <bidang.icon className="w-7 h-7" />
                    </div>
                    <span className="font-bold text-gray-800">{bidang.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-[#1A63AB] rounded-3xl p-8 md:p-12 text-center shadow-xl text-white">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic mb-4">
                "Setiap anak memiliki potensi untuk berkarya. Dengan kesempatan dan pendampingan yang tepat, karya sederhana hari ini dapat menjadi bekal berharga untuk masa depan."
              </blockquote>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
