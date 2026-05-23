'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, Briefcase, Settings, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const navItems = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Applications', href: '/admin/applications', icon: FileText },
  { label: 'Job Listings', href: '/admin/jobs', icon: Briefcase },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <aside style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '240px', backgroundColor: '#0A1628', display: 'flex', flexDirection: 'column', zIndex: 40 }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="brand-name" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '0.9rem', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>SS INTERNATIONAL GROUP</div>
        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Admin Portal</div>
      </div>

      <nav style={{ flex: 1, padding: '1rem 0' }} aria-label="Admin navigation">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/admin' && pathname.startsWith(href))
          return (
            <Link key={href} href={href}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', textDecoration: 'none', color: isActive ? '#C9922B' : 'rgba(255,255,255,0.55)', backgroundColor: isActive ? 'rgba(201,146,43,0.08)' : 'transparent', borderRight: isActive ? '3px solid #C9922B' : '3px solid transparent', transition: 'all 0.15s ease' }}>
              <Icon size={18} />
              <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem' }}>{label}</span>
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button onClick={handleSignOut}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', width: '100%', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', transition: 'color 0.15s ease', borderRadius: '6px' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color='#ffffff'}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.4)'}>
          <LogOut size={18} />Sign out
        </button>
      </div>
    </aside>
  )
}
