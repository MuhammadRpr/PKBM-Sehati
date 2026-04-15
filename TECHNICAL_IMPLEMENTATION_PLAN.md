# PKBM SEHATI - Technical Implementation Plan

## 1. Overall System Architecture

### Architecture Pattern: Static Site Generation (SSG) + API Routes

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js App Router                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  Static Pages    │  │  MDX Blog    │  │  API Routes  │   │
│  │  (SSG)           │  │  (Content)   │  │  (Contact)   │   │
│  └──────────────────┘  └──────────────┘  └──────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │            Tailwind CSS + UI Components               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
         │                    │                    │
         ↓                    ↓                    ↓
    Build Time           Build Time            Runtime
   (Pre-rendered)      (Pre-rendered)        (On-demand)
```

### Key Characteristics:
- **99% SSG**: All pages pre-rendered at build time → instant load times
- **5% Dynamic**: Only contact form API route (form submission)
- **Zero Database**: Static content + file-based blog system
- **Client-side Heavy**: Smooth interactions with minimal server load
- **Build-time Optimization**: Images optimized, CSS purged, code split

### Content Flow:
```
MDX Files (Blog) ──┐
                   ├──> Build Process (next build)
Static Content ────┤    └─> Pre-rendered HTML + CSS
                   ├──> Deployment
Config & Routes ───┘
                   └──> Production Server (CDN-friendly)
```

---

## 2. Scalable Folder Structure (Production-Ready)

```
pkbm-sehati/
│
├── app/                                 # Next.js App Router
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Homepage (index)
│   ├── sitemap.ts                      # SEO sitemap generator
│   ├── robots.ts                       # SEO robots file
│   │
│   ├── (site)/                         # Site pages group layout
│   │   ├── layout.tsx                  # Layout with header/footer
│   │   ├── page.tsx                    # Homepage with hero
│   │   ├── tentang/
│   │   │   └── page.tsx                # About page
│   │   ├── kurikulum/
│   │   │   └── page.tsx                # Curriculum page
│   │   ├── program/
│   │   │   ├── page.tsx                # Programs overview
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            # Individual program details
│   │   │   └── layout.tsx
│   │   ├── artikel/
│   │   │   ├── page.tsx                # Articles list/blog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Individual article (MDX)
│   │   ├── kontak/
│   │   │   └── page.tsx                # Contact page
│   │   └── pendaftaran/
│   │       └── page.tsx                # Enrollment info page
│   │
│   └── api/
│       └── contact/
│           └── route.ts                # Contact form submission
│
├── content/                            # Content layer
│   ├── blog/                           # Blog articles (MDX)
│   │   ├── intro-pendidikan-nonformal.mdx
│   │   ├── paket-a-untuk-pemula.mdx
│   │   ├── tips-belajar-efektif.mdx
│   │   └── kabar-pkbm-sehati.mdx
│   ├── programs.json                   # Program metadata
│   ├── curriculum.json                 # Curriculum data
│   └── siteConfig.ts                   # Site-wide configuration
│
├── components/                         # UI components
│   ├── ui/                             # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Hero.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   │
│   ├── sections/                       # Page sections (composed)
│   │   ├── HeroSection.tsx
│   │   ├── KurikulumSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── ArtikelSection.tsx
│   │   ├── ArtikelCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Navigation.tsx
│   │
│   ├── mdx/                            # MDX-specific components
│   │   ├── MDXComponents.tsx           # Custom MDX rendering
│   │   └── CodeBlock.tsx
│   │
│   └── providers/
│       └── Providers.tsx               # Root providers (if needed)
│
├── lib/                                # Utility functions & helpers
│   ├── utils.ts                        # General utilities
│   ├── mdx.ts                          # MDX processing functions
│   ├── seo.ts                          # SEO helpers
│   ├── validation.ts                   # Form validation
│   ├── email.ts                        # Email service wrapper
│   └── constants.ts                    # App constants
│
├── public/                             # Static assets
│   ├── images/
│   │   ├── hero.webp
│   │   ├── programs/
│   │   ├── logo.svg
│   │   └── icons/
│   ├── fonts/
│   │   └── (custom fonts if needed)
│   └── documents/
│       └── (downloadable curriculum PDF, etc.)
│
├── styles/                             # Global styles
│   └── globals.css                     # Tailwind directives + globals
│
├── middleware.ts                       # Next.js middleware (i18n, redirects)
│
├── config/
│   ├── mdx.config.ts                   # MDX configuration
│   └── tailwind.config.ts
│
├── .env.example                        # Environment variables template
├── .env.local                          # Local environment (git-ignored)
│
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── prettier.config.js
│
├── TECHNICAL_IMPLEMENTATION_PLAN.md   # This document
└── README.md                           # Setup instructions
```

---

## 3. Separation of Concerns

### A. **UI Components Layer** (`/components`)
Reusable, presentational components with no business logic.

```typescript
// components/ui/Button.tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) {
  return <button className={buttonStyles({ variant, size })} {...props} />;
}
```

**Characteristics:**
- Pure presentational logic
- No data fetching
- Fully testable
- Tailwind-based styling
- TypeScript for type safety

### B. **Content Layer** (`/content`)
Static data and MDX files without coupling to presentation.

**Programs Metadata:**
```typescript
// content/programs.json
[
  {
    id: "paket-a",
    slug: "paket-a",
    title: "Paket A",
    subtitle: "Setara Pendidikan Dasar (SD)",
    description: "Program pendidikan kesetaraan setara jenjang SD",
    duration: "2 tahun",
    requirements: ["Minimal 6 tahun", "Kemampuan dasar membaca"],
    modules: ["Bahasa Indonesia", "Matematika", "IPA", "IPS"],
    enrollmentStatus: "open",
    image: "/images/programs/paket-a.webp"
  },
  // ... Paket B, C
]
```

**Curriculum Data:**
```typescript
// content/curriculum.json
{
  "overview": "...",
  "principles": ["Fleksibel", "Praktis", "Komunitas-fokus"],
  "packages": {
    "paket-a": { /* details */ },
    "paket-b": { /* details */ },
    "paket-c": { /* details */ }
  }
}
```

### C. **API Layer** (`/app/api`)
Minimal backend - only contact form handling.

```typescript
// app/api/contact/route.ts
import { validateContactForm } from '@/lib/validation';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate
    const validated = validateContactForm(body);
    if (!validated.success) {
      return Response.json(
        { error: validated.errors }, 
        { status: 400 }
      );
    }
    
    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: `Kontak baru: ${validated.data.name}`,
      html: renderContactEmail(validated.data),
    });
    
    return Response.json(
      { success: true, message: 'Pesan terkirim' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 4. MDX Content Structure & Schema

### A. **MDX File Location**
```
content/blog/
├── intro-pendidikan-nonformal.mdx
├── paket-a-untuk-pemula.mdx
├── tips-belajar-efektif.mdx
└── kabar-pkbm-sehati.mdx
```

### B. **Frontmatter Schema**

```yaml
---
# SEO & Metadata
title: "Pengenalan Pendidikan Non-Formal"
slug: "intro-pendidikan-nonformal"
description: "Panduan lengkap tentang apa itu pendidikan non-formal dan manfaatnya"
keywords: ["pendidikan", "non-formal", "kesetaraan"]

# Publishing
author: "PKBM SEHATI"
date: "2024-04-15"
updated: "2024-04-15"
status: "published"  # published | draft | archived

# Organization
category: "pendidikan"  # pendidikan | tips | kabar | testimoni
tags: ["paket-a", "pemula", "motivasi"]

# SEO & Social
image: "/images/blog/intro-pendidikan-nonformal.webp"
imageAlt: "Gambar ilustrasi pendidikan non-formal"

# Social & SEO metadata
excerpt: "Pelajari tentang pendidikan non-formal, peluangnya, dan bagaimana bergabung dengan PKBM SEHATI"

# Optional: Reading time (auto-calculated)
readingTime: 5
---

# Content starts here...
```

### C. **MDX Processing Functions**

```typescript
// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  category: string;
  readingTime: number;
}

export async function getAllBlogPosts(): Promise<BlogMeta[]> {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));
  
  const posts = files.map(file => {
    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(content);
    
    return {
      ...data,
      readingTime: calculateReadingTime(content),
    } as BlogMeta;
  });
  
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(
    process.cwd(), 
    'content/blog', 
    `${slug}.mdx`
  );
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const { data, content: body } = matter(content);
  
  return { meta: data as BlogMeta, content: body };
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
```

### D. **Custom MDX Components**

```typescript
// components/mdx/MDXComponents.tsx
import Link from 'next/link';

export const MDXComponents = {
  h2: (props: any) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed text-gray-700" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 list-disc list-inside space-y-2 text-gray-700" {...props} />
  ),
  a: ({ href, ...props }: any) => (
    <Link 
      href={href} 
      className="text-blue-600 hover:underline"
      {...props}
    />
  ),
  img: (props: any) => (
    <img 
      className="my-6 rounded-lg w-full h-auto" 
      {...props}
      alt={props.alt || 'Article image'}
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="my-6 pl-6 border-l-4 border-blue-600 italic text-gray-700" 
      {...props}
    />
  ),
};
```

---

## 5. API Design (Minimal)

### Contact Form API Only

**Endpoint:** `POST /api/contact`

**Request Body:**
```typescript
interface ContactFormData {
  name: string;          // Required, 2-100 chars
  email: string;         // Required, valid email
  phone: string;         // Optional, +62 format
  subject: string;       // Required, 5-200 chars
  message: string;       // Required, 10-5000 chars
  programOfInterest?: string; // Optional
}
```

**Validation Schema:**
```typescript
// lib/validation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+62/).optional(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(5000),
  programOfInterest: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Pesan Anda telah terkirim. Terima kasih telah menghubungi kami."
}
```

**Error Response (400):**
```json
{
  "error": "Validation failed",
  "details": {
    "email": ["Format email tidak valid"]
  }
}
```

**Rate Limiting:**
- Max 5 requests per IP per hour (using `Ratelimit` from Upstash or similar)
- CAPTCHA on frontend (hCaptcha for privacy)

---

## 6. Environment Configuration

### `.env.example`
```bash
# Email Service (e.g., Resend, SendGrid)
EMAIL_SERVICE=resend
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=admin@pkbmsehati.id

# Optional: Analytics
NEXT_PUBLIC_GA_ID=google-analytics-id

# Optional: Captcha
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key
HCAPTCHA_SECRET_KEY=your_secret_key

# Optional: Rate Limiting
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

---

## 7. Build & Performance Optimization

### A. **Next.js Configuration**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Strict image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Performance
  swcMinify: true,
  compress: true,
  
  // Internationalization (for future multi-language)
  i18n: {
    locales: ['id'],
    defaultLocale: 'id',
  },
  
  // Headers for performance & security
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  redirects: async () => [
    {
      source: '/blog',
      destination: '/artikel',
      permanent: true,
    },
  ],
});
```

### B. **Performance Metrics**

Target metrics (from PRD):
- ✅ **Load time < 3s** → Achieved via SSG + image optimization
- ✅ **Mobile-first** → Tailwind responsive utilities
- ✅ **SEO-friendly** → Structured data, sitemap, robots.txt

**Bundle Size Targets:**
- JavaScript: < 150KB (gzipped)
- CSS: < 50KB (gzipped)
- Critical CSS: < 10KB

---

## 8. Package Dependencies

### Core
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.3.0"
}
```

### Content & SEO
```json
{
  "@next/mdx": "^14.0.0",
  "gray-matter": "^4.0.3",
  "remark-gfm": "^4.0.0",
  "rehype-highlight": "^7.0.0"
}
```

### Styling
```json
{
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### Validation & Forms
```json
{
  "zod": "^3.22.0",
  "react-hook-form": "^7.48.0"
}
```

### Email & Services (Optional)
```json
{
  "resend": "^2.0.0"        // or SendGrid
}
```

### Development
```json
{
  "prettier": "^3.1.0",
  "eslint": "^8.54.0",
  "eslint-config-next": "^14.0.0"
}
```

---

## 9. SEO & Meta Optimization

### A. **Root Metadata**

```typescript
// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | PKBM SEHATI',
    default: 'PKBM SEHATI - Pendidikan Kesetaraan untuk Semua',
  },
  description: 'Pendidikan non-formal berkualitas di Takari, Kupang. Paket A, B, C dengan metode fleksibel.',
  keywords: ['pendidikan', 'kesetaraan', 'kupang', 'pendidikan non-formal'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://pkbmsehati.id',
    title: 'PKBM SEHATI - Pendidikan Kesetaraan untuk Semua',
    description: 'Pendidikan non-formal berkualitas di Takari, Kupang',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};
```

### B. **Dynamic Metadata for Articles**

```typescript
// app/(site)/artikel/[slug]/page.tsx
import { generateMetadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: [post.meta.image],
    },
  };
}
```

### C. **Structured Data (JSON-LD)**

```typescript
// app/(site)/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  // ...
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'PKBM SEHATI',
      url: 'https://pkbmsehati.id',
      logo: 'https://pkbmsehati.id/logo.svg',
      description: 'Pendidikan non-formal berkualitas',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Takari',
        addressRegion: 'Kupang',
        addressCountry: 'ID',
      },
      areaServed: 'ID',
    }),
  },
};
```

---

## 10. Scalability & Maintenance Strategy

### A. **Content Scalability**

**Adding Blog Articles:**
1. Create `.mdx` file in `content/blog/`
2. Add frontmatter metadata
3. Run `next build`
4. Deploy
→ **No code changes needed**

**Adding Programs:**
1. Update `content/programs.json`
2. Run `next build`
3. Deploy
→ **No component changes**

### B. **Infrastructure Scalability**

| Stage | Solution | Notes |
|-------|----------|-------|
| **0-10k/month** | Vercel Free | Sufficient for startup |
| **10k-100k/month** | Vercel Pro | $20/month, auto-scaling |
| **100k+/month** | Vercel Enterprise | Custom support |

**Alternative:** Deploy to AWS S3 + CloudFront for cost optimization at scale.

### C. **Maintenance**

**Monthly:**
- Update blog posts
- Monitor analytics
- Review contact form submissions

**Quarterly:**
- Update dependencies (`npm audit fix`)
- Performance audit
- SEO review

**Semi-annual:**
- Design refresh if needed
- Add new sections
- Visitor feedback integration

### D. **Future Enhancements (Non-blocking)**

- Multi-language support (i18n)
- Admin dashboard (CMS GUI for blog posts)
- Student testimonials carousel
- Event calendar section
- Enrollment form integration with tracking
- WhatsApp Business API integration
- Analytics dashboard

---

## 11. Development Workflow

### Local Setup
```bash
# Clone & install
git clone <repo>
cd pkbm-sehati
npm install

# Environment
cp .env.example .env.local
# Fill in API keys if needed

# Development
npm run dev
# Open http://localhost:3000

# Build & test
npm run build
npm run lint
```

### Deployment
```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys from main branch
# (configure in Vercel dashboard)
```

### Adding New Content
```bash
# New blog post
touch content/blog/new-article.mdx
# Edit with frontmatter + content

# Rebuild
npm run build
npm run dev
```

---

## 12. Security Considerations

1. **HTTPS Only** ✅ (Vercel default)
2. **CORS** ✅ (API endpoint POST-only)
3. **Rate Limiting** ✅ (Implemented on contact API)
4. **Input Validation** ✅ (Zod schema)
5. **Environment Variables** ✅ (Not exposed to client)
6. **No User Data Storage** ✅ (Stateless, email-only)

---

## 13. Performance Checklist

- [ ] Images optimized (WebP/AVIF format)
- [ ] CSS tree-shaken (Tailwind purge)
- [ ] Code splitting enabled
- [ ] Lazy loading on images
- [ ] Minified JavaScript/CSS
- [ ] Font loading optimized
- [ ] No render-blocking resources
- [ ] Mobile-first responsive design
- [ ] Lighthouse score: 90+

---

## 14. Summary

| Aspect | Implementation |
|--------|-----------------|
| **Architecture** | SSG + minimal API |
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Content** | MDX (static files) |
| **Performance** | <3s load time, <150KB JS |
| **Scaling** | File-based, no database |
| **SEO** | Sitemap, structured data, metadata |
| **Maintenance** | Low - simple content updates |
| **Cost** | $0-20/month (Vercel) |

This architecture prioritizes **performance**, **maintainability**, and **simplicity** while meeting all PRD requirements for a low-bandwidth, content-centric website.
