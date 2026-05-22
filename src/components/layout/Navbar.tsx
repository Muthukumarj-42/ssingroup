'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Briefcase, Info, Users, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Careers', href: '/careers', icon: Users },
  { label: 'Contact', href: '/contact', icon: Phone },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: '72px',
          display: 'flex', alignItems: 'center',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
          borderBottom: scrolled ? '1px solid #E2E0D8' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container-content w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.1rem', color: '#0A1628', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            SS International Group
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex" style={{ alignItems: 'center', gap: '2rem', display: 'flex' }}>
            {navLinks.slice(0, 4).map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href} aria-current={isActive ? 'page' : undefined}
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.875rem', color: isActive ? '#C9922B' : '#0A1628', textDecoration: 'none', borderBottom: isActive ? '2px solid #C9922B' : '2px solid transparent', paddingBottom: '2px', transition: 'color 0.2s ease' }}>
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.8125rem', display: 'none' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.display='inline-flex'}>
              Global Inquiry
            </Link>
            <Link href="/contact" className="btn-primary hidden lg:inline-flex" style={{ padding: '0.625rem 1.5rem', fontSize: '0.8125rem' }}>
              Global Inquiry
            </Link>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="lg:hidden"
              style={{ background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer', color: '#0A1628', display: 'flex', alignItems: 'center' }}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <nav aria-label="Mobile navigation" className="lg:hidden"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, height: '64px', backgroundColor: '#ffffff', borderTop: '1px solid #E2E0D8', display: 'flex', alignItems: 'stretch', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {navLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link key={link.href} href={link.href} aria-current={isActive ? 'page' : undefined}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', textDecoration: 'none', color: isActive ? '#C9922B' : 'rgba(10,22,40,0.45)', position: 'relative', minHeight: '48px', transition: 'color 0.2s ease' }}>
              <Icon size={20} />
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>{link.label}</span>
              {isActive && <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '32px', height: '2px', backgroundColor: '#C9922B', borderRadius: '0 0 2px 2px' }} />}
            </Link>
          )
        })}
      </nav>

      {menuOpen && (
        <div className="lg:hidden" style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: '#0A1628', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu"
            style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', marginBottom: '3rem' }}>
            <X size={28} />
          </button>
          <nav aria-label="Mobile overlay navigation" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '2.25rem', color: pathname === link.href ? '#C9922B' : '#ffffff', textDecoration: 'none', transition: 'color 0.2s ease', lineHeight: 1.2 }}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-gold" style={{ textAlign: 'center', marginTop: 'auto' }}>
            Global Inquiry
          </Link>
        </div>
      )}
    </>
  )
}
