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
      <section className="py-12 md:py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Gallery</h1>
          <div className="mx-auto h-1 w-16 bg-[#1A63AB]"></div>
          <p className="mt-4 text-lg text-gray-600">
            Dokumentasi foto kegiatan dan pembelajaran di PKBM SEHATI
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-md"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
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
