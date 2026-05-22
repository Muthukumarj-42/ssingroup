import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

export default function PartnershipCTA() {
  return (
    <section aria-label="Partnership call to action" style={{ backgroundColor: '#F5F4F0', padding: '0 0 120px' }}>
      <div className="container-content">
        <FadeIn>
          <div style={{ backgroundColor: '#0A1628', borderRadius: '16px', padding: '5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, fontSize: '20rem', pointerEvents: 'none' }}>🤝</div>
            <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em', position: 'relative', zIndex: 1 }}>Expand Your Global Horizon</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>Partner with a conglomerate that brings capital, networks, and operational excellence to every venture.</p>
            <Link href="/contact" className="btn-gold" style={{ position: 'relative', zIndex: 1 }}>Explore Partnership Opportunities</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
