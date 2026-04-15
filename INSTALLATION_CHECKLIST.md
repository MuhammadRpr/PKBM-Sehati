# ✅ Installation Checklist - PKBM SEHATI

Panduan langkah demi langkah untuk memulai development.

## 🎯 Before Getting Started

Pastikan Anda memiliki:
- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm/yarn installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Code editor (VSCode recommended)
- [ ] Terminal/Command prompt access

## 🚀 Phase 1: Setup Awal (15 menit)

- [ ] Clone/extract project ke folder
- [ ] Buka terminal di folder project
- [ ] Run `npm install` (tunggu selesai)
- [ ] Copy `.env.example` → `.env.local`
- [ ] Run `npm run dev`
- [ ] Buka browser → http://localhost:3000
- [ ] Lihat homepage berjalan ✓

## 📝 Phase 2: Kustomisasi (30 menit)

### Update Informasi Situs
- [ ] Edit `lib/constants.ts`:
  - [ ] Ubah `SITE_CONFIG.name` → Nama organisasi Anda
  - [ ] Ubah `SITE_CONFIG.email` → Email kontak
  - [ ] Ubah `SITE_CONFIG.phone` → Nomor telepon
  - [ ] Ubah `SITE_CONFIG.address` → Alamat
  - [ ] Ubah `NAVIGATION_ITEMS` → Menu navigasi (jika ada yang baru)
  - [ ] Ubah `SOCIAL_LINKS` → Link social media

### Update Warna & Branding
- [ ] Edit `tailwind.config.ts`:
  - [ ] Ubah `colors.primary` sesuai branding
  - [ ] Test perubahan di browser (auto-refresh)

### Update Program & Kurikulum
- [ ] Edit `content/programs.json` (info 3 program)
- [ ] Edit `content/curriculum.json` (detail kurikulum)
- [ ] Refresh halaman untuk lihat perubahan

## 📰 Phase 3: Buat Konten (30 menit)

### Tambah Artikel Blog
- [ ] Buat file di `content/blog/artikel-1.mdx`:
  ```bash
  touch content/blog/artikel-pertama.mdx
  ```
- [ ] Copy template frontmatter:
  ```mdx
  ---
  title: "Judul Artikel"
  slug: "artikel-pertama"
  date: "2024-04-15"
  author: "PKBM SEHATI"
  description: "Deskripsi... "
  image: "/images/blog/default.webp"
  category: "pendidikan"
  tags: ["tag1"]
  status: "published"
  ---
  
  # Konten artikel...
  ```
- [ ] Refresh browser → artikel akan muncul di `/artikel`
- [ ] Buat 2-3 artikel lagi untuk content yang bagus

## 🖼️ Phase 4: Tambah Media (15 menit)

### Tambah Gambar
- [ ] Siapkan gambar untuk artikel (format: WebP atau JPG)
- [ ] Simpan di `public/images/` (buat folder jika belum)
- [ ] Update `image:` di frontmatter MDX
- [ ] Format nama file: kebab-case (e.g., `artikel-1.webp`)

### Logo
- [ ] Ganti `public/logo.svg` dengan logo Anda
- [ ] Atau update path di `components/sections/Header.tsx`

## 📧 Phase 5: Setup Email (Optional, 15 menit)

### Jika ingin contact form mengirim email:

1. **Daftar Resend:**
   - [ ] Buka https://resend.com
   - [ ] Sign up (gratis)
   - [ ] Create API key
   - [ ] Copy ke clipboard

2. **Update `.env.local`:**
   - [ ] Edit `.env.local`
   - [ ] Set `RESEND_API_KEY=your_key_here`
   - [ ] Set `CONTACT_EMAIL=admin@pkbmsehati.id`

3. **Test Email:**
   - [ ] Refresh dev server
   - [ ] Buka halaman `/kontak`
   - [ ] Submit form test
   - [ ] Cek inbox email

## 🌍 Phase 6: Production Ready (30 menit)

### Code Quality
- [ ] Run `npm run lint` - pastikan no errors
- [ ] Run `npm run type-check` - pastikan no type issues
- [ ] Run `npm run build` - pastikan build success

### Performance Check
- [ ] Load homepage - pastikan < 3s
- [ ] Check mobile version - pastikan responsive
- [ ] Test artikel detail page
- [ ] Test program detail page

### SEO Check
- [ ] Homepage title & description OK
- [ ] Articles punya meta tags
- [ ] Images punya alt text
- [ ] Navigation links working

## 🚀 Phase 7: Deploy ke Vercel (30 menit)

### Setup Git & GitHub
- [ ] Buat repository di GitHub
- [ ] Add files:
  ```bash
  git add .
  git commit -m "Initial: PKBM SEHATI website"
  git push origin main
  ```

### Deploy ke Vercel
- [ ] Buka https://vercel.com
- [ ] Sign up dengan GitHub
- [ ] Import repository
- [ ] Set environment variables
- [ ] Deploy
- [ ] Get URL: https://xxx.vercel.app

### Custom Domain (Optional)
- [ ] Register domain (GoDaddy, Namecheap, etc)
- [ ] Di Vercel → Settings → Domains
- [ ] Add domain Anda
- [ ] Update DNS settings di registrar
- [ ] Wait 24-48 jam untuk DNS propagate

## 📊 Phase 8: Monitor & Maintain (Ongoing)

- [ ] Check Vercel deployment status weekly
- [ ] Monitor emails (jika ada)
- [ ] Check Lighthouse score monthly
- [ ] Update articles regularly
- [ ] Update dependencies (quarterly)

## 🎓 Learning Resources

Jika Anda ingin belajar lebih lanjut:

- [ ] Read `README.md` - overview project
- [ ] Read `SETUP_GUIDE.md` - setup detail
- [ ] Read `DEPLOYMENT.md` - deployment options
- [ ] Read `TECHNICAL_IMPLEMENTATION_PLAN.md` - architecture

## 🆘 Troubleshooting

### npm install failed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Build error
```bash
rm -rf .next
npm run build
```

### TypeScript error
```bash
npm run type-check
# Cek file yang error dan fix
```

## ✨ Final Touches

- [ ] Update header/logo sesuai branding
- [ ] Update footer dengan alamat benar
- [ ] Setup tracking analytics (opsional)
- [ ] Test contact form end-to-end
- [ ] Cek responsive di mobile
- [ ] Cek di berbagai browser

## 🎉 You're Done!

Selamat! Website PKBM SEHATI siap untuk:
- ✅ Development
- ✅ Staging
- ✅ Production

### Berikutnya:
1. Share link ke stakeholders
2. Collect feedback
3. Iterate & improve
4. Drive traffic
5. Monitor metrics

---

## 📱 Quick Links

- **Local Dev**: http://localhost:3000
- **Documentation**: See `*.md` files in root
- **Code**: See folder structure
- **Content**: `content/` folder
- **Components**: `components/` folder

## 🚀 Pro Tips

1. Use VSCode with:
   - Prettier extension (auto-format)
   - ESLint extension (lint errors)
   - Tailwind CSS IntelliSense (auto-complete)

2. Commit frequently:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```

3. Test before pushing:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

---

**Ready to go? Start with Phase 1! 🚀**

Untuk bantuan, lihat documentation files atau cek console errors.
