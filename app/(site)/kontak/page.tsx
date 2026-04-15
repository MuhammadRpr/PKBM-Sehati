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

                {/* Map */}
                <div className="mt-8 overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7497844968237!2d107.13842!3d-6.2755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697c9c9c9c9c9d%3A0x1234567890abcdef!2sPesum%20Grand%20Cikarang%20City!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
