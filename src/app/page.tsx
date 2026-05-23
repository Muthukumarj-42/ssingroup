import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import HeroSection from '@/components/sections/home/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection'
import SectorsSection from '@/components/sections/home/SectorsSection'
import TrustSection from '@/components/sections/home/TrustSection'
import GlobalPresenceSection from '@/components/sections/home/GlobalPresenceSection'
import Script from 'next/script'

export const metadata = genMeta({
  title: 'Home',
  description:
    'SS INTERNATIONAL GROUP — a global powerhouse managing 62+ businesses across India, UAE, and USA. Construction, real estate, jewellery, finance, and more.',
  path: '/',
})

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SS INTERNATIONAL GROUP',
  url: 'https://www.ssingroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ssingroup.com/careers?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <SectorsSection />
      <TrustSection />
      <GlobalPresenceSection />
    </>
  )
}
