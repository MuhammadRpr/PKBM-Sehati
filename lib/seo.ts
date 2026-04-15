import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      template: '%s | PKBM SEHATI',
      default: 'PKBM SEHATI - Pendidikan Kesetaraan untuk Semua',
    },
    description: SITE_CONFIG.description,
    keywords: [
      'pendidikan',
      'non-formal',
      'kesetaraan',
      'kupang',
      'paket-a',
      'paket-b',
      'paket-c',
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: SITE_CONFIG.url,
      title: 'PKBM SEHATI - Pendidikan Kesetaraan untuk Semua',
      description: SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PKBM SEHATI',
      description: SITE_CONFIG.description,
    },
  };
}

export function generateBlogMetadata(
  title: string,
  description: string,
  image?: string,
  publishedDate?: string
): Metadata {
  return {
    title,
    description,
    keywords: ['artikel', 'pendidikan', 'tips'],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedDate,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'PKBM SEHATI',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: 'ID',
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
  };
}

/**
 * Generate JSON-LD structured data for BlogPosting
 */
export function generateBlogPostingSchema(
  title: string,
  description: string,
  publishedDate: string,
  author: string = SITE_CONFIG.name,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image ? `${SITE_CONFIG.url}${image}` : undefined,
    datePublished: publishedDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_CONFIG.url,
    },
  };
}
