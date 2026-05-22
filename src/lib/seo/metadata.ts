import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ssingroup.com'
const SITE_NAME = 'SS International Group'
const DEFAULT_DESCRIPTION =
  'SS International Group is a global business conglomerate operating 62+ businesses across India, UAE, and USA in construction, real estate, jewellery, garments, finance, and organic products.'
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`

export function generateMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  noIndex = false,
}: {
  title: string
  description?: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}): Metadata {
  const fullTitle =
    path === '/'
      ? `${SITE_NAME} | Global Business Conglomerate`
      : `${title} | ${SITE_NAME}`
  const metaDesc = description || DEFAULT_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return {
    title: fullTitle,
    description: metaDesc,
    keywords: generateKeywords(title),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDesc,
      images: [ogImage],
      site: '@ssingroup',
      creator: '@ssingroup',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    verification: {
      google: 'add-your-google-search-console-verification-code-here',
    },
  }
}

function generateKeywords(pageTitle: string): string {
  const base = [
    'SS International Group',
    'SSIN Group',
    'global business conglomerate',
    'India UAE USA business',
    'international investment group',
  ]
  const pageMap: Record<string, string[]> = {
    Home: ['construction company India', 'real estate UAE', 'jewellery export India'],
    About: ['SS International leadership', 'Mr Kumar managing director', 'business legacy India'],
    Portfolio: ['global portfolio companies', 'investment portfolio India UAE', 'subsidiary businesses'],
    Careers: ['jobs in SS International', 'careers India UAE USA', 'finance jobs Mumbai', 'real estate jobs Dubai'],
    Contact: ['SS International contact', 'business inquiry India', 'Dubai office', 'New York office'],
  }
  return [...base, ...(pageMap[pageTitle] || [])].join(', ')
}

export { SITE_URL, SITE_NAME }
