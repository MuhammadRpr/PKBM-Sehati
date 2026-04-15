import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  imageAlt?: string;
  category: 'pendidikan' | 'tips' | 'kabar' | 'testimoni';
  tags: string[];
  author?: string;
  status?: 'published' | 'draft' | 'archived';
  readingTime?: number;
}

export interface BlogPost {
  meta: BlogMeta;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

/**
 * Get all published blog posts sorted by date (newest first)
 */
export async function getAllBlogPosts(): Promise<BlogMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'));

  const posts = files
    .map((file) => {
      const fullPath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(content);

      return {
        ...data,
        readingTime: calculateReadingTime(content),
      } as BlogMeta;
    })
    .filter((post) => post.status !== 'draft' && post.status !== 'archived')
    .sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  return {
    meta: {
      ...data,
      readingTime: calculateReadingTime(content),
    } as BlogMeta,
    content: body,
  };
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(
  category: string
): Promise<BlogMeta[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.category === category);
}

/**
 * Calculate estimated reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get related posts based on tags
 */
export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<BlogMeta[]> {
  const allPosts = await getAllBlogPosts();
  const currentPost = allPosts.find((p) => p.slug === currentSlug);

  if (!currentPost) {
    return [];
  }

  const related = allPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  return related.length > 0 ? related : allPosts.slice(0, limit);
}
