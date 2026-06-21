"use client";

import { Container } from '@/components/ui/Container';
import {
  Heart,
  ShieldCheck,
  Users,
  Lightbulb,
  BookOpen,
  Globe2,
  Building2,
  BrainCircuit
} from 'lucide-react';

const MISI_ITEMS = [
  {
    id: 1,
    title: 'Keimanan & Ketakwaan',
    description: 'Meningkatkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600'
  },
  {
    id: 2,
    title: 'Akhlak Mulia',
    description: 'Pengenalan dini akhlak mulia pada warga belajar',
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 3,
    title: 'Kemandirian',
    description: 'Mengadakan program-program kemandirian untuk warga belajar',
    icon: Users,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 4,
    title: 'Pembelajaran Kreatif',
    description: 'Menciptakan pembelajaran yang menyenangkan dan kreatif dengan memperhatikan perkembangan dan potensi',
    icon: Lightbulb,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 5,
    title: 'Pengetahuan & Keterampilan',
    description: 'Menerapkan metode belajar yang meningkatkan pengetahuan dan keterampilan',
    icon: BookOpen,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 6,
    title: 'Sosial Budaya',
    description: 'Memberikan pengetahuan dan implementasi nilai-nilai sosial budaya yang bermartabat',
    icon: Globe2,
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    id: 7,
    title: 'Sarana & Prasarana',
    description: 'Meningkatkan sarana dan prasarana kelembagaan',
    icon: Building2,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 8,
    title: 'Konsultasi Psikologi',
    description: 'Mengadakan pelayanan konsultasi psikologi',
    icon: BrainCircuit,
    color: 'bg-teal-100 text-teal-600'
  }
];

export function VisiMisiSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0F9FF]">
      <Container>
        {/* Visi Section */}
        <div className="mx-auto max-w-4xl text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4 border border-blue-100 shadow-sm">
            Visi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Terwujudnya warga belajar yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A63AB] to-[#093C7D]">berakhlak mulia, mandiri, kreatif, terampil dan bermartabat.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1A63AB] to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Misi Section */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4 border border-blue-100 shadow-sm">
              Misi Kami
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Langkah Menuju Visi
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISI_ITEMS.map((misi) => {
              const Icon = misi.icon;
              return (
                <div
                  key={misi.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Decorative background element */}
                  <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-500 ${misi.color.split(' ')[0]}`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${misi.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-black text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors">
                        0{misi.id}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1A63AB] transition-colors">
                      {misi.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {misi.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
