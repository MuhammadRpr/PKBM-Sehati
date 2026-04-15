import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from '@/lib/mdx';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { formatDate, formatDateISO } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Metadata } from 'next';

interface ArticleDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: 'Artikel tidak ditemukan' };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: formatDateISO(post.meta.date),
      images: post.meta.image
        ? [{ url: post.meta.image, width: 1200, height: 630 }]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Article Detail Page
 * Renders MDX content with custom components
 */
export default async function ArtikelDetailPage({
  params,
}: ArticleDetailPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  const relatedPosts = await getRelatedPosts(params.slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <Container>
          <h1 className="mb-4 text-2xl font-bold">Artikel tidak ditemukan</h1>
          <Link href="/artikel" className="text-[#1A63AB] hover:underline">
            Kembali ke daftar artikel
          </Link>
        </Container>
      </div>
    );
  }

  const { meta, content } = post;

  return (
    <>
      {/* Article Header */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mb-4">
            <Badge variant="primary">{meta.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            {meta.title}
          </h1>
          <div className="mt-3 h-1 w-16 bg-[#1A63AB]"></div>
          <p className="mt-4 text-lg text-gray-600">{meta.description}</p>
          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <span>{formatDate(meta.date)}</span>
            <span>•</span>
            <span>{meta.readingTime} menit baca</span>
            {meta.author && (
              <>
                <span>•</span>
                <span>Oleh {meta.author}</span>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none lg:col-span-2">
              <MDXRemote source={content} components={MDXComponents} />
            </article>

            {/* Sidebar */}
            <aside>
              {/* Article Info Card */}
              <div className="sticky top-24 rounded-lg border border-[#E0E7FF] bg-white p-6">
                <h3 className="mb-4 font-bold text-gray-900">
                  Informasi Artikel
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-600">Dipublikasikan</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(meta.date)}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600">Kategori</p>
                    <p className="font-semibold text-gray-900">
                      {meta.category}
                    </p>
                  </div>

                  {meta.author && (
                    <div>
                      <p className="text-gray-600">Penulis</p>
                      <p className="font-semibold text-gray-900">
                        {meta.author}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-gray-600">Waktu Baca</p>
                    <p className="font-semibold text-gray-900">
                      {meta.readingTime} menit
                    </p>
                  </div>

                  {meta.tags && meta.tags.length > 0 && (
                    <div>
                      <p className="mb-2 text-gray-600">Tag</p>
                      <div className="flex flex-wrap gap-2">
                        {meta.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t pt-6">
                  <Link href="/kontak">
                    <Button variant="primary" className="w-full">
                      Hubungi Kami
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
          <Container>
            <h2 className="mb-8 text-3xl font-bold">Artikel Terkait</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/artikel/${relatedPost.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3">
                    <Badge variant="secondary">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    {relatedPost.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-700 line-clamp-2">
                    {relatedPost.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatDate(relatedPost.date)}</span>
                    <span>{relatedPost.readingTime} min baca</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
