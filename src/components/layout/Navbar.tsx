'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Briefcase, Info, Users, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home',      href: '/',          icon: Home },
  { label: 'Portfolio', href: '/portfolio',  icon: Briefcase },
  { label: 'About',     href: '/about',      icon: Info },
  { label: 'Careers',   href: '/careers',    icon: Users },
  { label: 'Contact',   href: '/contact',    icon: Phone },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                  = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide Navbar entirely on admin pages — admin has its own sidebar
  if (pathname.startsWith('/admin')) return null

  return (
    <>
      {/* ── DESKTOP TOP NAV (hidden on mobile) ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 h-[72px]
        hidden lg:flex items-center transition-all duration-300
        backdrop-blur-xl
        ${scrolled ? 'bg-white/90 border-b border-cream-border shadow-sm' : 'bg-white/80'}`}>
        <div className="container-content w-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="SS INTERNATIONAL GROUP Logo"
              width={40} height={40} className="object-contain" />
            <span className="font-display font-black text-base text-navy tracking-tight uppercase brand-name">
              SS INTERNATIONAL GROUP
            </span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Main navigation" className="flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`font-sans font-medium text-sm transition-colors
                  ${pathname === link.href
                    ? 'text-gold border-b-2 border-gold pb-0.5'
                    : 'text-navy hover:text-gold'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
            Global Inquiry
          </Link>
        </div>
      </header>

      {/* ── MOBILE BOTTOM TAB BAR (hidden on desktop) ── */}
      <nav aria-label="Mobile navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50
          bg-white border-t border-cream-border h-16
          flex items-stretch"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {navLinks.map(link => {
          const Icon   = link.icon
          const active = pathname === link.href
          return (
            <Link key={link.href} href={link.href}
              className={`flex-1 flex flex-col items-center justify-center gap-1
                transition-colors relative
                ${active ? 'text-gold' : 'text-navy/40 hover:text-navy/70'}`}>
              {active && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2
                  w-8 h-0.5 bg-gold rounded-b-full" />
              )}
              <Icon size={20} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* ── MOBILE FULL-SCREEN HAMBURGER MENU ── */}
      {/* Only shown when menuOpen — triggered from a floating button if needed */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-navy
          flex flex-col p-8">
          <button onClick={() => setMenuOpen(false)}
            className="self-end text-white mb-12" aria-label="Close menu">
            <X size={28} />
          </button>
          <nav className="flex flex-col gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-black text-4xl text-white
                  hover:text-gold transition-colors uppercase">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            className="mt-auto btn-gold text-center">
            Global Inquiry
          </Link>
        </div>
      )}
    </>
  )
}
