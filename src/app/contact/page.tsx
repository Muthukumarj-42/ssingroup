import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import ContactHero from '@/components/sections/contact/ContactHero'
import OfficeCards from '@/components/sections/contact/OfficeCards'
import InquiryForm from '@/components/sections/contact/InquiryForm'
import FAQAccordion from '@/components/sections/contact/FAQAccordion'

export const metadata: Metadata = genMeta({
  title: 'Contact',
  description: 'Get in touch with SS International Group. Offices in Gurgaon India, Dubai UAE, and New York USA. Global inquiry form and direct contacts.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <OfficeCards />
      <InquiryForm />
      <FAQAccordion />
    </>
  )
}
