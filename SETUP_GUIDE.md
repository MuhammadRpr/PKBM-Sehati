# 🚀 PKBM SEHATI - Setup Guide

Panduan langkah demi langkah untuk menjalankan proyek PKBM SEHATI di komputer lokal Anda.

## Prerequisites

Pastikan Anda telah menginstall:

- **Node.js** (versi 18 atau lebih baru) - [Download](https://nodejs.org/)
- **npm** (biasanya datang dengan Node.js)
- **Git** (untuk version control) - [Download](https://git-scm.com/)
- **Code Editor** (VSCode recommended) - [Download](https://code.visualstudio.com/)

### Cek Instalasi

```bash
# Check Node.js version (pastikan ≥ v18)
node --version

# Check npm version
npm --version
```

## 1️⃣ Clone Repository

```bash
# Ganti dengan URL repository Anda
git clone https://github.com/your-username/pkbm-sehati.git

# Masuk ke folder proyek
cd pkbm-sehati
```

## 2️⃣ Install Dependencies

```bash
# Install semua package yang diperlukan
npm install

# Tunggu sampai selesai (biasanya 2-5 menit tergantung internet)
```

## 3️⃣ Setup Environment Variables

```bash
# Copy template environment file
cp .env.example .env.local

# Edit .env.local dengan text editor
# Untuk sekarang, biarkan sebagaimana adanya (optional fields)
```

**Optional:** Jika ingin email contact form berfungsi:
- Daftar ke [Resend](https://resend.com) (gratis)
- Copy API key ke `RESEND_API_KEY` di `.env.local`
- Update `CONTACT_EMAIL` dengan email Anda

## 4️⃣ Run Development Server

```bash
npm run dev
```

Output akan terlihat seperti:

```
> pkbm-sehati@1.0.0 dev
> next dev

> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

## 5️⃣ Buka di Browser

Buka link di browser Anda:

```
http://localhost:3000
```

**Selamat! 🎉 Website sudah berjalan di local!**

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

---

## 📝 Membuat Artikel Blog

### Langkah 1: Buat File MDX

```bash
# Buat file baru di folder content/blog/
# Nama file harus dengan format: slug-format.mdx

touch content/blog/artikel-saya.mdx
```

### Langkah 2: Tambahkan Konten

Edit file `content/blog/artikel-saya.mdx`:

```mdx
---
title: "Judul Artikel Saya"
slug: "artikel-saya"
date: "2024-04-15"
author: "Nama Anda"
description: "Deskripsi singkat artikel untuk SEO dan preview"
image: "/images/blog/default.webp"
category: "pendidikan"  # atau: tips, kabar, testimoni
tags: ["tag1", "tag2"]
status: "published"  # atau: draft, archived
---

# Bagian Pertama

Ini adalah paragraf pertama artikel Anda. Anda bisa menulis dengan markdown biasa.

## Bagian Kedua

Markdown features yang didukung:
- **Bold** - gunakan **teks**
- *Italic* - gunakan *teks*
- [Link](https://example.com)
- `code inline`
- Bullet lists
- Numbered lists

```

### Langkah 3: Refresh Browser

Artikel akan otomatis muncul di halaman `/artikel`!

---

## 🛠️ Development Workflow

### Struktur Folder

```
pkbm-sehati/
├── app/                    # Pages & routes
├── components/             # Reusable components
├── content/               # Data & blog posts
│   ├── blog/             # ➕ Tambah artikel di sini
│   ├── programs.json     # Edit info program
│   └── curriculum.json   # Edit info kurikulum
├── lib/                  # Utilities & helpers
│   └── constants.ts      # Edit info situs (nama, email, dll)
├── public/               # Static files (images, fonts)
└── styles/               # CSS & tailwind
```

### Edit Info Situs

File: `lib/constants.ts`

Ubah:
- Nama organisasi: `SITE_CONFIG.name`
- Email: `SITE_CONFIG.email`
- Alamat: `SITE_CONFIG.address`
- Social media: `SOCIAL_LINKS`

### Edit Warna & Styling

File: `tailwind.config.ts`

Ubah color palette di section `theme.extend.colors.primary`

---

## 🔄 Hot Reload

Development server mendukung hot reload - setiap kali Anda menyimpan file, halaman akan otomatis refresh.

**Tips:**
- Edit file → Simpan (Ctrl+S)
- Browser otomatis refresh (buka DevTools F12 untuk melihat)

---

## 🏗️ Build untuk Production

```bash
# Build aplikasi untuk production
npm run build

# Test production build secara lokal
npm start
```

Build akan membuat folder `.next/` dengan kode yang sudah dioptimasi.

---

## 🐛 Troubleshooting

### Error: Port 3000 sudah digunakan

```bash
# Gunakan port lain
npm run dev -- -p 3001
# Buka http://localhost:3001
```

### Error: Module not found

```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Bundle size warning

Proyek ini sudah dioptimasi untuk low-bandwidth. Jika ada warning, cek:
- Ukuran gambar (gunakan WebP format)
- Dependency yang tidak perlu

### Browser tidak refresh otomatis

```bash
# Restart development server
# Tekan Ctrl+C untuk stop
# Jalankan npm run dev lagi
```

---

## 📚 Resources

- **Next.js** - https://nextjs.org/docs
- **React** - https://react.dev
- **Tailwind CSS** - https://tailwindcss.com/docs
- **TypeScript** - https://www.typescriptlang.org/docs
- **MDX** - https://mdxjs.com/docs

---

## 🚀 Deploy ke Production

### Opsi 1: Vercel (Recommended)

1. Push kode ke GitHub
2. Daftar di [Vercel](https://vercel.com)
3. Connect GitHub repo
4. Set environment variables
5. Deploy (otomatis saat push ke main branch)

### Opsi 2: Self-Hosted

```bash
npm run build
npm start
# Berjalan di http://localhost:3000
```

---

## 💡 Tips & Tricks

### 1. Format Kode Otomatis
```bash
npm run format
```

### 2. Lint (Check Errors)
```bash
npm run lint
```

### 3. Type Check
```bash
npm run type-check
```

### 4. Clean Cache
```bash
rm -rf .next
npm run dev
```

---

## 📞 Butuh Bantuan?

Jika ada masalah:

1. **Cek terminal** - Baca error message dengan seksama
2. **Restart server** - Tekan Ctrl+C, jalankan ulang `npm run dev`
3. **Clear cache** - Hapus folder `.next` dan jalankan ulang
4. **Cek documentation** - Link di bagian Resources
5. **GitHub Issues** - Cari solusi online atau buat issue

---

## ✅ Next Steps

Setelah setup selesai:

- [ ] Buat artikel blog pertama
- [ ] Ubah info situs (nama, email, alamat)
- [ ] Ubah warna tema sesuai branding
- [ ] Setup email (Resend atau SendGrid)
- [ ] Deploy ke Vercel atau server

---

**Selamat belajar! Have fun coding! 🎉**
