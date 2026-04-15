/**
 * Site-wide constants
 */

export const SITE_CONFIG = {
  name: 'PKBM SEHATI',
  description:
    'Pendidikan non-formal berkualitas di Takari, Kupang. Paket A, B, C dengan metode fleksibel.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pkbmsehati.id',
  locale: 'id_ID',
  email: 'pkbm.sehati01@gmail.com',
  phone: '+62851234567',
  address: {
    street: 'JL. TIMOR RAYA KM 66 RT 02 RW 01 OESUSU TAKARI',
    city: 'Kupang',
    state: 'Nusa Tenggara Timur',
    country: 'Indonesia',
    postalCode: '85001',
  },
};

export const NAVIGATION_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Kurikulum', href: '/kurikulum' },
  { label: 'Program', href: '/program' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Kontak', href: '/kontak' },
];

export const PROGRAMS = [
  {
    id: 'paket-a',
    slug: 'paket-a',
    title: 'Paket A',
    subtitle: 'Setara Pendidikan Dasar (SD)',
    description: 'Program pendidikan kesetaraan yang setara dengan Sekolah Dasar (SD) bagi masyarakat yang belum menyelesaikan pendidikan dasar.',
    aims: 'Memberikan kemampuan dasar membaca, menulis, berhitung, serta pengetahuan dasar kehidupan sehari-hari.',
    duration: '2 tahun',
    startAge: 6,
    requirements: ['Minimal 6 tahun', 'Motivasi untuk belajar', 'Kemampuan dasar berbahasa', 'Kehadiran minimal 75%'],
    learningMaterials: [
      'Bahasa Indonesia dasar (membaca dan menulis)',
      'Matematika dasar (operasi hitung dasar)',
      'Ilmu Pengetahuan Alam dan Sosial dasar',
      'Pendidikan Pancasila dan Kewarganegaraan',
      'Keterampilan hidup (life skills)'
    ],
    modules: [
      'Bahasa Indonesia',
      'Matematika',
      'Ilmu Pengetahuan Alam',
      'Ilmu Pengetahuan Sosial',
    ],
    graduateResults: [
      'Ijazah setara SD',
      'Kemampuan literasi dan numerasi dasar',
      'Siap melanjutkan ke Paket B'
    ],
    enrollmentStatus: 'open' as const,
  },
  {
    id: 'paket-b',
    slug: 'paket-b',
    title: 'Paket B',
    subtitle: 'Setara Pendidikan Menengah Pertama (SMP)',
    description: 'Program pendidikan kesetaraan yang setara dengan Sekolah Menengah Pertama (SMP) untuk peserta yang belum menyelesaikan pendidikan menengah pertama.',
    aims: 'Meningkatkan pengetahuan dasar, keterampilan akademik, dan kesiapan untuk pendidikan lanjutan atau dunia kerja.',
    duration: '2 tahun',
    startAge: 12,
    requirements: [
      'Lulus Paket A atau setara SD',
      'Minimal usia 12 tahun',
      'Motivasi belajar yang tinggi',
      'Kehadiran minimal 75%'
    ],
    learningMaterials: [
      'Bahasa Indonesia (pemahaman dan penulisan)',
      'Matematika dasar hingga menengah',
      'Ilmu Pengetahuan Alam (IPA)',
      'Ilmu Pengetahuan Sosial (IPS)',
      'Pendidikan Pancasila dan Kewarganegaraan',
      'Keterampilan hidup dan pengembangan diri'
    ],
    modules: [
      'Bahasa Indonesia',
      'Matematika',
      'Bahasa Inggris',
      'IPA',
      'IPS',
    ],
    graduateResults: [
      'Ijazah setara SMP',
      'Kemampuan akademik dan sosial yang lebih baik',
      'Siap melanjutkan ke Paket C'
    ],
    enrollmentStatus: 'open' as const,
  },
  {
    id: 'paket-c',
    slug: 'paket-c',
    title: 'Paket C',
    subtitle: 'Setara Pendidikan Menengah Atas (SMA)',
    description: 'Program pendidikan kesetaraan yang setara dengan Sekolah Menengah Atas (SMA) untuk masyarakat yang ingin menyelesaikan pendidikan menengah.',
    aims: 'Mempersiapkan peserta untuk melanjutkan ke perguruan tinggi atau memasuki dunia kerja dengan pengetahuan yang komprehensif.',
    duration: '2 tahun',
    startAge: 15,
    requirements: [
      'Lulus Paket B atau setara SMP',
      'Minimal usia 15 tahun',
      'Minat untuk melanjutkan pendidikan/karir',
      'Kehadiran minimal 75%'
    ],
    learningMaterials: [
      'Bahasa Indonesia (analisis dan penulisan)',
      'Matematika dasar hingga lanjutan',
      'Bahasa Inggris dasar',
      'Ekonomi, Sosiologi, dan Ilmu Sosial',
      'Pendidikan Pancasila dan Kewarganegaraan',
      'Kewirausahaan dan keterampilan kerja'
    ],
    modules: [
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'IPA',
      'IPS',
      'Keterampilan Hidup',
    ],
    graduateResults: [
      'Ijazah setara SMA',
      'Siap kerja atau melanjutkan pendidikan ke perguruan tinggi',
      'Keterampilan berpikir kritis dan mandiri'
    ],
    enrollmentStatus: 'open' as const,
  },
];

export const BLOG_CATEGORIES = [
  { label: 'Pendidikan', value: 'pendidikan' },
  { label: 'Tips', value: 'tips' },
  { label: 'Kabar', value: 'kabar' },
  { label: 'Testimoni', value: 'testimoni' },
];

export const CTA_BUTTONS = {
  enroll: 'Daftar Sekarang',
  viewPrograms: 'Lihat Program',
  contact: 'Hubungi Kami',
  learnMore: 'Pelajari Lebih Lanjut',
};

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/PKBMSEHATI',
  facebook: 'https://facebook.com/PkbmSehati',
  tiktok: 'https://tiktok.com/pkbm.sehati1',
  whatsapp: 'https://wa.me/6281385700823',
  instagram: 'https://instagram.com/sehati.pkbm',
  email: 'pkbmsehati25@gmail.com',
};
