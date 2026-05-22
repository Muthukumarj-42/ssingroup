'use client'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import { Building2, TrendingUp, Home, Gem, Leaf, Shirt } from 'lucide-react'

const sectors = [
  { icon: Building2, name: 'Construction & Infrastructure', description: 'Delivering landmark civil and structural projects across South Asia and the GCC.', link: '/portfolio' },
  { icon: TrendingUp, name: 'Financial Services', description: 'Institutional capital, wealth management, and structured finance across three markets.', link: '/portfolio' },
  { icon: Home, name: 'Real Estate Development', description: 'Premium commercial and residential developments from Gurgaon to Dubai Marina.', link: '/portfolio' },
  { icon: Gem, name: 'Fine Jewellery & Gold', description: 'Heritage jewellery craftsmanship with modern global distribution networks.', link: '/portfolio' },
  { icon: Leaf, name: 'Organic Products', description: 'Certified organic sourcing and distribution serving premium retail markets worldwide.', link: '/portfolio' },
  { icon: Shirt, name: 'Garment Export', description: 'High-volume textile manufacturing serving 14+ global fashion brands annually.', link: '/portfolio' },
]

export default function SectorsSection() {
  return (
    <section aria-labelledby="sectors-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <FadeIn><span className="section-label">Our Sectors</span></FadeIn>
            <FadeIn delay={0.1}>
              <h2 id="sectors-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#0A1628', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Core Strategic Sectors</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.6)', marginTop: '0.75rem', maxWidth: '500px', lineHeight: 1.7 }}>Six verticals engineered to create compounding value across geographies and economic cycles.</p>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <Link href="/portfolio" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#C9922B', textDecoration: 'none' }}>View All Sectors →</Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'auto auto', gap: '1.25rem' }}>
          {/* Featured Construction Card */}
          <FadeIn delay={0.05} className="" style={{ gridColumn: '1 / 3', gridRow: '1 / 2', position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '320px', cursor: 'pointer' }} direction="up">
            <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="Construction and infrastructure projects by SS International Group" fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 100vw, 66vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem' }}>
                <Building2 size={28} color="#C9922B" style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>Construction &amp; Infrastructure</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '380px' }}>Delivering landmark civil and structural projects across South Asia and the GCC region.</p>
              </div>
            </div>
          </FadeIn>

          {/* Standard Cards */}
          {sectors.slice(1).map((sector, i) => {
            const Icon = sector.icon
            return (
              <FadeIn key={i} delay={0.1 + i * 0.08}>
                <Link href={sector.link} style={{ display: 'block', backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '1.75rem', textDecoration: 'none', height: '100%', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(10,22,40,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: '#0A1628', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={20} color="#C9922B" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.1rem', color: '#0A1628', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{sector.name}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.6, marginBottom: '1rem' }}>{sector.description}</p>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8125rem', color: '#C9922B' }}>Learn more →</span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.sectors-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
