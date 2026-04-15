import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramCard } from '@/components/sections/ProgramCard';
import { PROGRAMS } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Homepage
 * Main landing page with hero, programs, and latest articles
 */
export default async function Home() {
  const latestPosts = (await getAllBlogPosts()).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Programs Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Program Kami</h2>
            <div className="mt-3 h-1 w-16 bg-[#1A63AB]"></div>
            <p className="mt-4 text-lg text-gray-600">
              Tiga paket pendidikan kesetaraan yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>

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

      {/* Latest Articles Section */}
      <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Artikel Terbaru</h2>
            <div className="mt-3 h-1 w-16 bg-[#1A63AB]"></div>
            <p className="mt-4 text-lg text-gray-600">
              Informasi dan tips seputar pendidikan non-formal
            </p>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/artikel/${post.slug}`}
                  className="group rounded-lg border border-[#E0E7FF] bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex gap-2">
                    <span className="inline-block rounded-full bg-[#E0E7FF] px-3 py-1 text-xs font-semibold text-[#1A63AB]">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#1A63AB]">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-700 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readingTime} min baca</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Belum ada artikel yang dipublikasikan.
            </p>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/artikel"
              className="inline-block rounded-lg bg-[#1A63AB] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#093C7D]"
            >
              Lihat Semua Artikel
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 text-center text-white md:py-16 lg:py-20">
        {/* Background Image */}
        <Image
          src="/images/beranda3.png"
          alt="CTA Background"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <Container className="relative z-10">
          <h2 className="mb-4 text-4xl font-bold">
            Siap Bergabung Dengan Kami?
          </h2>
          <p className="mb-8 text-xl">
            Hubungi kami hari ini untuk informasi lebih lanjut tentang pendaftaran
          </p>
          <Link
            href="/kontak"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-[#1A63AB] transition-colors hover:bg-[#F0F9FF]"
          >
            Hubungi Kami Sekarang
          </Link>
        </Container>
      </section>
    </>
  );
}
