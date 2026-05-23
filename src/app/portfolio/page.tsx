import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import PortfolioHero from '@/components/sections/portfolio/PortfolioHero'
import FeaturedCard from '@/components/sections/portfolio/FeaturedCard'
import PortfolioGrid from '@/components/sections/portfolio/PortfolioGrid'
import PartnershipCTA from '@/components/sections/portfolio/PartnershipCTA'

export const metadata: Metadata = genMeta({
  title: 'Portfolio',
  description: "Explore SS INTERNATIONAL GROUP's diverse global portfolio — real estate, finance, textiles, logistics, energy, and biotech across 3 continents.",
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <FeaturedCard />
      <PortfolioGrid />
      <PartnershipCTA />
    </>
  )
}
