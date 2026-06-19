import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Galeri foto dokumentasi kegiatan PKBM SEHATI.',
};

/**
 * Gallery Page
 * Photo documentation of PKBM SEHATI activities
 */
export default function GalleryPage() {
  // Gallery items with actual photos
  const galleryItems = [
    {
      id: 1,
      title: 'Seni & Budaya PKBM Sehati',
      category: 'Budaya',
      image: '/images/g1.jpeg',
    },
    {
      id: 2,
      title: 'Kebersamaan Tim PKBM',
      category: 'Komunitas',
      image: '/images/g2.jpeg',
    },
    {
      id: 3,
      title: 'Outing Pembelajaran Bersama',
      category: 'Pembelajaran',
      image: '/images/g3.jpeg',
    },
    {
      id: 4,
      title: 'Perayaan Seni dan Budaya',
      category: 'Event',
      image: '/images/g4.jpeg',
    },
    {
      id: 5,
      title: 'Pameran Karya Siswa',
      category: 'Keterampilan',
      image: '/images/g5.jpeg',
    },
    {
      id: 6,
      title: 'Dokumentasi Kegiatan Santai',
      category: 'Dokumentasi',
      image: '/images/g6.jpeg',
    },
    {
      id: 7,
      title: 'Acara Pelatihan dan Workshop',
      category: 'Pelatihan',
      image: '/images/g7.jpeg',
    },
    {
      id: 8,
      title: 'Dokumentasi Kelas',
      category: 'Pembelajaran',
      image: '/images/g8.jpeg',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <Container className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
            Dokumentasi
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-gray-900">Gallery Kegiatan</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Dokumentasi foto kegiatan dan pembelajaran di PKBM SEHATI
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 relative -mt-8">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-gray-100 bg-white"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#F0F9FF] px-3 py-1 text-xs font-bold tracking-wide text-[#1A63AB] mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note about adding more photos */}
          <div className="mt-12 rounded-lg bg-[#F0F9FF] p-6 text-center">
            <p className="text-gray-700">
              Galeri kami terus berkembang. Untuk menambahkan foto dokumentasi lainnya, 
              silakan hubungi kami melalui halaman{' '}
              <a href="/kontak" className="font-semibold text-[#1A63AB] hover:underline">
                Kontak
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
