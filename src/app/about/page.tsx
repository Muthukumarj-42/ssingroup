import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import AboutHero from '@/components/sections/about/AboutHero'
import ManagingDirector from '@/components/sections/about/ManagingDirector'
import MissionVision from '@/components/sections/about/MissionVision'
import Timeline from '@/components/sections/about/Timeline'
import CommandCenters from '@/components/sections/about/CommandCenters'

export const metadata: Metadata = genMeta({
  title: 'About Us',
  description: "Learn about SS INTERNATIONAL GROUP's 40-year legacy, leadership team, global mission, and journey from a single vision to 62+ active businesses.",
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ManagingDirector />
      <MissionVision />
      <Timeline />
      <CommandCenters />
    </>
  )
}
