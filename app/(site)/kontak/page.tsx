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
      <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <Container className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
            Layanan Informasi
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-gray-900">Hubungi Kami</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Siap membantu Anda. Hubungi kami untuk informasi lebih lanjut mengenai program pendidikan.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 relative -mt-8">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 md:p-10 border border-gray-100">
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900">Kirim Pesan</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-[#F0F9FF] rounded-2xl p-8 md:p-10 border border-blue-50">
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900">Informasi Kontak</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1A63AB]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900 text-lg">
                      Lokasi
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                      <br />
                      {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1A63AB]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900 text-lg">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[#1A63AB] hover:underline text-lg font-medium"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1A63AB]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900 text-lg">
                      Nomor Telepon
                    </h3>
                    <a
                      href={`tel:+62${SITE_CONFIG.phone}`}
                      className="text-[#1A63AB] hover:underline text-lg font-medium"
                    >
                      +62 {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10 overflow-hidden rounded-xl shadow-sm border border-white">
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
