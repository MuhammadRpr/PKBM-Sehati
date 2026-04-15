# PKBM SEHATI - Community Learning Center Website

Situs web untuk PKBM SEHATI, pusat pembelajaran komunitas yang menyediakan pendidikan kesetaraan berkualitas di Takari, Kupang.

## 🚀 Mulai Cepat

### Persyaratan
- Node.js 18+ 
- npm atau yarn

### Instalasi

```bash
# Clone repository
git clone <repository-url>
cd pkbm-sehati

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# (Opsional) Siapkan API keys di .env.local
# EMAIL_SERVICE, RESEND_API_KEY, dll

# Run development server
npm run dev

# Buka browser
# http://localhost:3000
```

### Build & Production

```bash
# Build untuk production
npm run build

# Test production build locally
npm start
```

## 📁 Struktur Proyek

```
pkbm-sehati/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── (site)/            # Main site pages
│   │   ├── page.tsx       # Homepage
│   │   ├── program/       # Program pages
│   │   ├── artikel/       # Article pages
│   │   ├── kontak/        # Contact page
│   │   └── kurikulum/     # Curriculum page
│   └── api/
│       └── contact/       # Contact form API
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   └── mdx/               # MDX rendering components
├── content/
│   ├── blog/              # MDX blog articles
│   ├── programs.json      # Programs data
│   └── curriculum.json    # Curriculum data
├── lib/
│   ├── mdx.ts             # MDX utilities
│   ├── validation.ts      # Form validation
│   ├── utils.ts           # Helper functions
│   └── constants.ts       # Site constants
└── styles/
    └── globals.css        # Global styles
```

## 📝 Menambah Konten

### Menambah Artikel Blog

1. Buat file `.mdx` baru di `content/blog/`:

```bash
touch content/blog/artikel-baru.mdx
```

2. Tambahkan frontmatter dan konten:

```mdx
---
title: "Judul Artikel"
slug: "artikel-baru"
date: "2024-04-15"
author: "PKBM SEHATI"
description: "Deskripsi singkat artikel"
image: "/images/blog/artikel.webp"
category: "pendidikan"
tags: ["tag1", "tag2"]
status: "published"
---

# Konten artikel Anda di sini...

## Subbagian
Paragraf teks...
```

3. Artikel akan otomatis muncul di halaman artikel!

### Mengubah Data Program

Edit `content/programs.json` untuk mengubah informasi program.

### Mengubah Data Kurikulum

Edit `content/curriculum.json` untuk mengubah informasi kurikulum.

## 🎨 Customization

### Warna & Styling
- Edit `tailwind.config.ts` untuk mengubah warna dan tema
- Gunakan Tailwind CSS classes di components

### Informasi Situs
- Edit `lib/constants.ts` untuk mengubah:
  - Nama organisasi
  - Email & telepon
  - Alamat
  - Link navigasi
  - Social media links

### Meta & SEO
- Root titles/descriptions ada di `lib/seo.ts`
- Per-page metadata di file `page.tsx` masing-masing

## 🔧 Integrasi API

### Contact Form Email

Saat ini contact form hanya log ke console. Untuk production, integrasikan dengan email service:

#### Opsi 1: Resend (Recommended)

```bash
npm install resend
```

Update `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Di dalam POST handler:
await resend.emails.send({
  from: 'noreply@pkbmsehati.id',
  to: process.env.CONTACT_EMAIL,
  subject: `Kontak baru dari ${body.name}`,
  html: `<p>${body.message}</p>`,
});
```

#### Opsi 2: SendGrid

```bash
npm install @sendgrid/mail
```

### Rate Limiting & Security (Optional)

```bash
npm install @upstash/ratelimit redis
```

## 📊 SEO & Performance

### Optimasi SEO
- ✅ Sitemap dynamic (auto-generated)
- ✅ Structured data (JSON-LD)
- ✅ Meta tags per halaman
- ✅ Optimasi gambar (WebP/AVIF)

### Performance Checklist
- [ ] Images dioptimasi (max 100KB per image)
- [ ] Lighthouse score 90+
- [ ] Load time < 3s
- [ ] Mobile friendly
- [ ] Bundle size < 150KB JS

### Testing Performance

```bash
# Lighthouse audit
npm run build && npm start
# Buka http://localhost:3000 di browser
# Chrome DevTools > Lighthouse
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Connect repo ke Vercel
3. Set environment variables di dashboard
4. Deploy (auto-deploy on push to main)

### Manual Deployment

```bash
npm run build
# Copy .next folder ke server
npm start
```

## 📚 Dokumentasi Lebih Lanjut

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [React Hook Form](https://react-hook-form.com)

## 🤝 Contributing

1. Create feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

Proyek ini adalah milik PKBM SEHATI.

## 📞 Support

Untuk pertanyaan atau support, hubungi:
- Email: admin@pkbmsehati.id
- Telepon: +62851234567

---

**Happy Building! 🎉**
