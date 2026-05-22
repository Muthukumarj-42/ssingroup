import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import CareersHero from '@/components/sections/careers/CareersHero'
import CultureSection from '@/components/sections/careers/CultureSection'
import FeaturedRoles from '@/components/sections/careers/FeaturedRoles'
import BenefitsSection from '@/components/sections/careers/BenefitsSection'
import TalentNetworkCTA from '@/components/sections/careers/TalentNetworkCTA'

export const metadata: Metadata = genMeta({
  title: 'Careers',
  description: 'Join SS International Group. Open roles in finance, real estate, textiles, and operations across Mumbai, Dubai, and New York.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CultureSection />
      <FeaturedRoles />
      <BenefitsSection />
      <TalentNetworkCTA />
    </>
  )
}
