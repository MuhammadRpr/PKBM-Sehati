# 🚀 Deployment Guide - PKBM SEHATI

Panduan lengkap untuk men-deploy website PKBM SEHATI ke production.

## Opsi Deployment

### 1️⃣ Vercel (Recommended) ⭐

**Keuntungan:**
- ✅ Gratis untuk starter
- ✅ Auto deploymentdari GitHub
- ✅ CDN global untuk performa optimal
- ✅ Environment variables management
- ✅ Analytics & monitoring built-in

### 2️⃣ Self-Hosted (VPS/Dedicated Server)

**Keuntungan:**
- ✅ Full control
- ✅ Custom domain langsung
- ✅ Bisa install aplikasi lain

**Kekurangan:**
- ⚠️ Perlu maintenance sendiri
- ⚠️ Lebih kompleks setup

---

## Deployment ke Vercel

### Step 1: Siapkan GitHub Repository

```bash
# Initialize git (jika belum)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: PKBM SEHATI website"

# Create repository di GitHub
# Lalu push:
git remote add origin https://github.com/your-username/pkbm-sehati.git
git branch -M main
git push -u origin main
```

### Step 2: Daftar Vercel

1. Buka https://vercel.com
2. Klik "Sign Up"
3. Pilih "Continue with GitHub"
4. Authorize Vercel untuk akses GitHub

### Step 3: Import Project

1. Setelah login, klik "New Project"
2. Pilih repository `pkbm-sehati`
3. Klik "Import"

### Step 4: Configure Environment Variables

Vercel akan menampilkan form untuk environment variables:

```
EMAIL_SERVICE=resend
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=admin@pkbmsehati.id
NEXT_PUBLIC_GA_ID=your_ga_id (opsional)
```

**Cara mendapat API keys:**

**Resend (untuk email):**
1. Buka https://resend.com
2. Daftar (gratis)
3. Create API key
4. Copy ke `RESEND_API_KEY`

### Step 5: Deploy

1. Klik "Deploy"
2. Tunggu build selesai (biasanya 2-5 menit)
3. Dapat URL deployment: `https://pkbm-sehati.vercel.app`

### Step 6: Custom Domain (Optional)

Untuk menggunakan domain sendiri (e.g., www.pkbmsehati.id):

1. Di Vercel dashboard → Settings → Domains
2. Tambahkan domain Anda
3. Update DNS settings di registrar domain Anda
   - Tambahkan CNAME record ke Vercel

---

## Self-Hosted Deployment

### Requirement

- VPS/Dedicated Server dengan:
  - Node.js 18+
  - 512MB RAM minimum
  - 2GB storage
  - Ubuntu 20.04+ recommended
  - SSH access

### Step 1: Setup Server

```bash
# SSH ke server
ssh user@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx (reverse proxy)
sudo apt install -y nginx
```

### Step 2: Setup Application

```bash
# Clone repository
cd /home/user
git clone https://github.com/your-username/pkbm-sehati.git

# Masuk folder
cd pkbm-sehati

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
nano .env.local  # Edit dengan API keys Anda
```

### Step 3: Build Application

```bash
# Build Next.js
npm run build

# Start dengan PM2
pm2 start npm --name "pkbm-sehati" -- start

# Set PM2 to restart on reboot
pm2 startup
pm2 save
```

### Step 4: Setup Nginx

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/pkbmsehati

# Paste konfigurasi ini:
```

```nginx
server {
    listen 80;
    server_name pkbmsehati.id www.pkbmsehati.id;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable config
sudo ln -s /etc/nginx/sites-available/pkbmsehati /etc/nginx/sites-enabled/

# Test Nginx
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 5: Setup SSL (HTTPS)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d pkbmsehati.id -d www.pkbmsehati.id

# Auto-renew
sudo systemctl enable certbot.timer
```

---

## Post-Deployment Checklist

- [ ] Domain pointing correctly
- [ ] HTTPS working
- [ ] Homepage loads under 3 seconds
- [ ] Contact form sends emails
- [ ] Mobile version responsive
- [ ] Images optimized & loading
- [ ] Navigation working
- [ ] Articles display correctly

### Test Performance

```bash
# Google PageSpeed Insights
# https://pagespeed.web.dev/

# Lighthouse (Chrome DevTools)
# F12 → Lighthouse → Analyze

# Goal: Score 90+
```

---

## Continuous Deployment

### Auto-Deploy dengan Vercel

Setiap push ke main branch otomatis di-deploy:

```bash
# Edit file lokal
nano content/blog/artikel-baru.mdx

# Commit & push
git add .
git commit -m "Add new article"
git push origin main

# Otomatis deploy di Vercel dalam 1-2 menit!
```

### Update Article di Production

```bash
# Edit atau tambah artikel
# ...

# Push ke GitHub
git add content/blog/
git commit -m "Update articles"
git push

# Vercel otomatis rebuild & deploy
```

---

## Maintenance

### Regular Updates

```bash
# Update dependencies (monthly)
npm outdated
npm update

# Cek security
npm audit
npm audit fix
```

### Monitor Site

- **Vercel Analytics** - https://vercel.com/dashboard
- **Google Analytics** - Setup di `NEXT_PUBLIC_GA_ID`
- **Email Logs** - Check Resend dashboard

### Backup

- Git repository adalah backup terbaik
- Keep commits organized
- Use meaningful commit messages

---

## Troubleshooting

### Build Error

```bash
# Bersihkan cache
rm -rf .next node_modules
npm install
npm run build
```

### Email tidak terkirim

- Cek `RESEND_API_KEY` di .env
- Cek `CONTACT_EMAIL` valid
- Lihat logs di Resend dashboard

### Site lambat

- Optimize images (WebP format)
- Check Lighthouse report
- Monitor server resources

### Deployment gagal

- Cek console logs di Vercel/server
- Pastikan environment variables benar
- Verify database connection (jika ada)

---

## Cost Estimation

### Vercel
- **Free**: Untuk traffic rendah
- **Pro**: $20/month (jika dibutuhkan)

### Self-Hosted (contoh)
- **VPS**: $5-10/month (DigitalOcean, Linode)
- **Domain**: $10-15/tahun
- Support: DIY

### Email Service
- **Resend**: Free up to 100 emails/day
- **SendGrid**: Free up to 100 emails/day

---

## Conclusion

**Recommended Setup:**
```
GitHub → Vercel → Custom Domain (GoDaddy/Namecheap)
```

Ini adalah setup terbaik untuk:
- ✅ Mudah maintenance
- ✅ Performance tinggi
- ✅ Cost-effective
- ✅ No server management

**Deploy sekarang dan mulai collecting visitors! 🎉**
