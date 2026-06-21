/**
 * Site-wide constants
 */

export const SITE_CONFIG = {
  name: 'PKBM SEHATI',
  description:
    'Pendidikan Inklusif Berkualitas di Kabupaten Bekasi. Program Kesetaraan, Pendidikan Inklusif, dan Keterampilan untuk Masa Depan Lebih Baik.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pkbmsehaticikarang.sch.id',
  locale: 'id_ID',
  email: 'pkbmsehati25@gmail.com',
  phone: '+6281385700823',
  address: {
    street: 'Perum CINITY Blok E1A No.12D',
    city: 'Cikarang Utara',
    state: 'Kabupaten Bekasi, Jawa Barat',
    country: 'Indonesia',
    postalCode: '17530',
  },
};

export const NAVIGATION_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Program', href: '/program' },
  { label: 'Kontak', href: '/kontak' },
];

export const PROGRAMS = [
  {
    id: 'paket-a',
    slug: 'paket-a',
    title: 'Paket A',
    subtitle: 'Setara Pendidikan Dasar (SD)',
    description: 'Program Paket A PKBM Sehati merupakan layanan pendidikan kesetaraan setara Sekolah Dasar (SD) bagi peserta didik yang belum menyelesaikan pendidikan dasar. Pembelajaran dilaksanakan dengan pendekatan yang ramah, fleksibel, dan disesuaikan dengan kebutuhan peserta didik.',
    aims: 'Membantu peserta didik memperoleh ijazah setara SD dan mengembangkan kemampuan dasar membaca, menulis, serta berhitung.',
    duration: 'Menyesuaikan hasil asesmen dan riwayat pendidikan',
    startAge: 7,
    schedule: 'Jumat & Sabtu',
    capacity: 30,
    requirements: ['Minimal 7 tahun ke atas', 'Motivasi untuk belajar', 'Asesmen awal sebelum penempatan program', 'Kehadiran minimal 75%'],
    learningMaterials: [
      'Pendidikan Agama dan Budi Pekerti',
      'Bahasa Indonesia',
      'Matematika',
      'IPA',
      'IPS',
      'Pendidikan Pancasila',
      'Seni dan Budaya',
      'Pendidikan Jasmani dan Kesehatan',
      'Keterampilan Hidup'
    ],
    modules: [
      'Pendidikan Agama dan Budi Pekerti',
      'Bahasa Indonesia',
      'Matematika',
      'IPA',
      'IPS',
      'Pendidikan Pancasila',
      'Seni dan Budaya',
    ],
    graduateResults: [
      'Ijazah setara SD',
      'Kemampuan literasi dan numerasi dasar',
      'Siap melanjutkan ke Paket B'
    ],
    enrollmentStatus: 'open' as const,
    systemPembelajaran: 'Fleksibel dan Berdiferensiasi',
    ijazah: 'Setara SD',
  },
  {
    id: 'paket-b',
    slug: 'paket-b',
    title: 'Paket B',
    subtitle: 'Setara Pendidikan Menengah Pertama (SMP)',
    description: 'Program Paket B PKBM Sehati merupakan layanan pendidikan kesetaraan setara Sekolah Menengah Pertama (SMP) bagi peserta didik yang belum menyelesaikan pendidikan formal SMP. Pembelajaran dilaksanakan secara fleksibel untuk membantu peserta didik melanjutkan pendidikan dan mengembangkan potensi dirinya.',
    aims: 'Memperoleh ijazah setara SMP dan mempersiapkan peserta didik untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.',
    duration: '2 tahun',
    startAge: 12,
    schedule: 'Senin - Jumat',
    capacity: 25,
    requirements: [
      'Lulus Paket A atau setara SD',
      'Minimal usia 12 tahun',
      'Motivasi belajar yang tinggi',
      'Kehadiran minimal 75%'
    ],
    learningMaterials: [
      'Bahasa Indonesia (pemahaman dan penulisan)',
      'Bahasa Inggris',
      'Matematika',
      'Ilmu Pengetahuan Alam (IPA)',
      'Ilmu Pengetahuan Sosial (IPS)',
      'Pendidikan Pancasila dan Kewarganegaraan',
      'Pendidikan Jasmani dan Kesehatan',
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
    systemPembelajaran: 'Tatap Muka dan Pendampingan',
    ijazah: 'Setara SMP',
  },
  {
    id: 'paket-c',
    slug: 'paket-c',
    title: 'Paket C',
    subtitle: 'Setara Sekolah Menengah Atas (SMA)',
    description: 'Program Paket C PKBM Sehati merupakan layanan pendidikan kesetaraan setara Sekolah Menengah Atas (SMA) bagi peserta didik yang belum menyelesaikan pendidikan menengah atas atau memilih jalur pendidikan nonformal. Program ini memberikan kesempatan untuk memperoleh ijazah setara SMA sebagai bekal melanjutkan pendidikan maupun memasuki dunia kerja.',
    aims: [
      'Membantu peserta didik memperoleh ijazah setara SMA',
      'Mempersiapkan peserta didik melanjutkan ke perguruan tinggi',
      'Mengembangkan kemampuan berpikir kritis, kreatif, dan mandiri',
      'Membekali peserta didik dengan keterampilan yang bermanfaat dalam kehidupan dan dunia kerja'
    ] as any,
    duration: 'Fleksibel sesuai program pembelajaran',
    startAge: 15,
    schedule: 'Fleksibel sesuai program pembelajaran',
    capacity: 20,
    requirements: [
      'Lulus Paket B atau setara SMP',
      'Minimal usia 15 tahun',
      'Memiliki motivasi untuk belajar dan berkembang',
      'Bersedia mengikuti tata tertib lembaga'
    ],
    learningMaterials: [
      'Pembelajaran tatap muka',
      'Pendampingan belajar',
      'Diskusi dan presentasi',
      'Projek dan praktik keterampilan',
      'Pemanfaatan teknologi dalam pembelajaran'
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
      'Memperoleh ijazah Paket C setara SMA',
      'Siap melanjutkan ke perguruan tinggi',
      'Memiliki kemampuan akademik, sosial, dan keterampilan hidup yang lebih baik',
      'Siap memasuki dunia kerja atau mengembangkan usaha mandiri',
      'Memiliki karakter mandiri, disiplin, dan bertanggung jawab'
    ],
    enrollmentStatus: 'open' as const,
    systemPembelajaran: 'Tatap Muka dan Pendampingan',
    ijazah: 'Setara SMA',
  },
  {
    id: 'program-inklusif',
    slug: 'program-inklusif',
    title: 'Program Inklusif',
    subtitle: 'Setiap Anak Berhak Belajar',
    description: 'Program Inklusif PKBM Sehati merupakan layanan pendidikan bagi peserta didik berkebutuhan khusus yang dirancang sesuai kemampuan, kebutuhan, dan potensi masing-masing peserta didik.',
    aims: 'Memberikan akses pendidikan yang setara dan mengembangkan potensi maksimal setiap peserta didik dalam lingkungan yang aman dan menghargai keberagaman.',
    duration: 'Menyesuaikan hasil asesmen',
    startAge: 0,
    requirements: [
      'Menyesuaikan hasil asesmen',
      'Asesmen awal sebelum penempatan program',
      'Motivasi untuk belajar'
    ],
    learningMaterials: [
      'Pembelajaran berdiferensiasi sesuai kebutuhan',
      'Keterampilan hidup',
      'Komunikasi dan interaksi sosial',
      'Pengembangan bakat dan minat',
      'Penguatan karakter positif'
    ],
    modules: [
      'Pembelajaran Berdiferensiasi',
      'Keterampilan Hidup',
      'Komunikasi Sosial',
      'Pengembangan Bakat'
    ],
    graduateResults: [
      'Pengembangan potensi maksimal sesuai kemampuan',
      'Peningkatan kemandirian dan interaksi sosial',
      'Sertifikat keikutsertaan program'
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
  youtube: 'https://www.youtube.com/@pkbmsehati',
  facebook: 'https://www.facebook.com/people/Pkbm-Sehati/pfbid0bDoehZznEc1M1B4wgpGaKwfQ17s7yEA3Yd64RCyF9FkVCqQBCwVwqEzsfJXXngL1l/',
  tiktok: 'https://www.tiktok.com/@pkbm.sehati1?_r=1&_t=ZS-93MCjJk0O84',
  whatsapp: 'https://api.whatsapp.com/send/?phone=6281385700823&text&type=phone_number&app_absent=0',
  instagram: 'https://instagram.com/sehati.pkbm',
  email: 'pkbmsehati25@gmail.com',
};
