import { MetadataRoute } from 'next'
import { jobs } from '@/lib/data/jobs'

const SITE_URL = 'https://www.ssingroup.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ]
  const jobPages = jobs
    .filter((job) => job.status !== 'inactive')
    .map((job) => ({ url: `${SITE_URL}/careers/${job.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 }))
  return [...staticPages, ...jobPages]
}
