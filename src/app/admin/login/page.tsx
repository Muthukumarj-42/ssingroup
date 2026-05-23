import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import AdminLoginClient from './AdminLoginClient'

export const metadata: Metadata = genMeta({
  title: 'Admin Login',
  description: 'SS INTERNATIONAL GROUP admin portal.',
  path: '/admin/login',
  noIndex: true,
})

export default function AdminLoginPage() {
  return <AdminLoginClient />
}
