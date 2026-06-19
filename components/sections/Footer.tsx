'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  SITE_CONFIG,
  NAVIGATION_ITEMS,
  SOCIAL_LINKS,
} from '@/lib/constants';

/**
 * Footer Component
 * Site footer with navigation and contact info
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8 md:pt-20 md:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Brand & Description */}
          <div>
            <div className="mb-6 h-20 w-20 relative">
              <Image
                src="/images/logofinal.png"
                alt="PKBM Sehati"
                fill
                className="rounded-full object-cover shadow-sm border border-gray-50"
              />
            </div>
            <p className="mb-8 text-base text-gray-600 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="YouTube"
              >
                <Image src="/images/youtube.png" alt="YouTube" width={24} height={24} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="Email"
              >
                <Image src="/images/email.png" alt="Email" width={24} height={24} />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="TikTok"
              >
                <Image src="/images/tiktok.png" alt="TikTok" width={24} height={24} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="Facebook"
              >
                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="WhatsApp"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full transition-all hover:bg-[#F0F9FF] hover:-translate-y-1 hover:shadow-md"
                aria-label="Instagram"
              >
                <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
              </a>
            </div>
          </div>

          {/* Right Section - Menu & Contact */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Quick Links */}
            <div className='pb-10'>
              <h4 className="mb-4 font-semibold text-gray-900">
                Menu Cepat
              </h4>
              <ul className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-[#1A63AB]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">
                Hubungi Kami
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#1A63AB] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium">Telepon:</span>{' '}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[#1A63AB] hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium">Lokasi:</span>
                  <p>
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-sm text-gray-500 font-medium">
          <p>
            &copy; {year} {SITE_CONFIG.name}. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </Container>
    </footer>
  );
}
