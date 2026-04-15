import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi PKBM SEHATI untuk informasi pendaftaran dan pertanyaan lainnya.',
};

/**
 * Contact Page
 */
export default function KontakPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Hubungi Kami</h1>
          <p className="text-xl text-gray-600">
            Siap membantu Anda. Hubungi kami untuk informasi lebih lanjut.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-0 pb-12 md:pb-16 md:py-0 lg:pb-20 lg:py-0">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Kirim Pesan</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Informasi Kontak</h2>

              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Lokasi
                  </h3>
                  <p className="text-gray-700">
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                    <br />
                    {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#1A63AB] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Jam Operasional
                  </h3>
                  <p className="text-gray-700">
                    Senin - Jumat: 08:00 - 17:00
                    <br />
                    Sabtu: 09:00 - 12:00
                    <br />
                    Minggu & Hari Libur: Tutup
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 h-64 rounded-lg bg-[#F0F9FF]">
                  <div className="flex h-full items-center justify-center text-gray-500">
                    <p>Google Maps Integration (pasang di sini)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
