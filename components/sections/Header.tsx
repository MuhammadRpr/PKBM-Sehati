'use client';

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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-12">
          <Image
            src="/images/logo.jpg"
            alt="PKBM Sehati"
            fill
            className="rounded-full object-cover"
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
                  className="text-gray-700 transition-colors hover:text-[#093C7D]"
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
          className="hidden rounded-lg bg-[#1A63AB] px-6 py-2 text-white transition-colors hover:bg-[#093C7D] md:inline-block"
        >
          {CTA_BUTTONS.contact}
        </Link>

        {/* Mobile menu button */}
        <button
          className="relative md:hidden"
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 text-gray-900 transition-colors hover:text-[#1A63AB]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute right-0 top-full w-56 border-t border-gray-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col">
            <ul className="flex flex-col">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 transition-colors hover:bg-[#F0F9FF] hover:text-[#1A63AB]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 px-6 py-3">
              <Link
                href="/kontak"
                className="block w-full rounded-lg bg-[#1A63AB] py-2 text-center text-white transition-colors hover:bg-[#093C7D]"
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
