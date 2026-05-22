import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/admin/login', '/admin/applications', '/careers/success', '/api/'] },
      { userAgent: 'Googlebot', allow: '/', disallow: ['/admin/', '/api/'] },
    ],
    sitemap: 'https://www.ssingroup.com/sitemap.xml',
    host: 'https://www.ssingroup.com',
  }
}
