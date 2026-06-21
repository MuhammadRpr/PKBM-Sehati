'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { NAVIGATION_ITEMS, CTA_BUTTONS } from '@/lib/constants';

/**
 * Header Component
 * Top navigation bar with logo and navigation menu
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
      <Container className="flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="relative h-14 w-14 md:h-16 md:w-16">
          <Image
            src="/images/logofinal.png"
            alt="PKBM Sehati"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 font-medium transition-colors hover:text-[#1A63AB]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Hidden on mobile */}
        <Link
          href="/kontak"
          className="hidden rounded-xl bg-[#1A63AB] px-6 py-2 font-semibold text-white transition-all hover:bg-[#093C7D] hover:shadow-md hover:-translate-y-0.5 md:inline-block"
        >
          {CTA_BUTTONS.contact}
        </Link>

        {/* Mobile menu button */}
        <button
          className="relative md:hidden p-2 -mr-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A63AB]"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-xl md:hidden">
          <nav className="flex flex-col py-2">
            <ul className="flex flex-col">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-[#F0F9FF] hover:text-[#1A63AB]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 p-6 mt-2">
              <Link
                href="/kontak"
                className="block w-full rounded-xl bg-[#1A63AB] py-3.5 text-center text-lg font-bold text-white transition-colors hover:bg-[#093C7D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {CTA_BUTTONS.contact}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
