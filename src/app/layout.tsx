import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ssingroup.com'),
  title: {
    default: 'SS INTERNATIONAL GROUP | Global Business Conglomerate',
    template: '%s | SS INTERNATIONAL GROUP',
  },
  description:
    'SS INTERNATIONAL GROUP operates 62+ businesses across India, UAE, and USA in construction, real estate, jewellery, garments, finance, and organic products.',
  keywords: [
    'SS INTERNATIONAL GROUP',
    'global business India',
    'real estate UAE',
    'construction company India',
    'international conglomerate',
    'business group India UAE USA',
  ],
  authors: [{ name: 'SS INTERNATIONAL GROUP', url: 'https://www.ssingroup.com' }],
  creator: 'SS INTERNATIONAL GROUP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ssingroup.com',
    siteName: 'SS INTERNATIONAL GROUP',
    title: 'SS INTERNATIONAL GROUP | Global Business Conglomerate',
    description:
      'A global powerhouse managing over 62 specialized businesses across India, UAE, and USA.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ssingroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SS INTERNATIONAL GROUP',
  url: 'https://www.ssingroup.com',
  logo: 'https://www.ssingroup.com/images/logo.png',
  description:
    'A global business conglomerate operating 62+ businesses across India, UAE, and USA in construction, real estate, jewellery, garments, finance, and organic products.',
  foundingDate: '1984',
  address: [
    {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      streetAddress: 'Executive Suites, Level 12, Corporate Greens',
      postalCode: '122818',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressLocality: 'Dubai',
      streetAddress: 'Office 402, Al Habtoor Business Tower, Dubai Marina',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'New York',
      addressRegion: 'NY',
      streetAddress: 'Madison Avenue Financial Center, 24th Floor',
      postalCode: '10017',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-124-555-0192',
      contactType: 'customer service',
      areaServed: 'IN',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-888-9000',
      contactType: 'customer service',
      areaServed: 'AE',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-212-555-0808',
      contactType: 'customer service',
      areaServed: 'US',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/ssingroup',
    'https://twitter.com/ssingroup',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-cream-warm font-sans text-navy antialiased">
        <Navbar />
        <main className="pt-[72px] lg:pt-[72px] pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
