import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { getAllBlogPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artikel & Berita',
  description:
    'Baca artikel, tips, dan berita terbaru seputar pendidikan non-formal dan PKBM SEHATI.',
};

/**
 * Article List Page
 */
export default async function ArtikelPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Artikel & Berita</h1>
            <p className="mt-4 text-lg text-gray-600">
              Informasi, tips, dan berita seputar pendidikan non-formal
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-6 md:py-8 lg:py-10">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/artikel/${post.slug}`}
                  className="group flex flex-col rounded-lg border border-[#E0E7FF] bg-white transition-shadow hover:shadow-lg"
                >
                  {/* Image placeholder */}
                  <div className="h-48 w-full overflow-hidden rounded-t-lg bg-[#F0F9FF]">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-grow flex-col p-4 md:p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <Badge variant="primary">{post.category}</Badge>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#1A63AB] line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 flex-grow text-sm text-gray-700 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex justify-between border-t border-gray-200 pt-4 text-xs md:text-sm text-gray-500">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readingTime} min baca</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-[#F0F9FF] p-8 text-center">
              <p className="text-gray-600">
                Belum ada artikel yang dipublikasikan. Silakan kunjungi
                kembali nanti.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
