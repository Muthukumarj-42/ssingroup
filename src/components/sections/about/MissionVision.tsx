import FadeIn from '@/components/ui/FadeIn'
import { Globe } from 'lucide-react'

export default function MissionVision() {
  return (
    <section aria-labelledby="mv-heading" style={{ padding: '120px 0', backgroundColor: '#F5F4F0' }}>
      <div className="container-content">
        <FadeIn><h2 id="mv-heading" className="sr-only">Mission and Vision</h2></FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <FadeIn direction="right">
            <div style={{ backgroundColor: '#F5F4F0', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '3rem', height: '100%' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9922B', margin: '0 auto 1.5rem' }} />
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', textAlign: 'center', marginBottom: '1.5rem' }}>Our Mission</span>
              <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.25rem', color: '#0A1628', lineHeight: 1.7, textAlign: 'center' }}>
                Specificity over vagueness. We deploy capital and talent only where we can achieve absolute operational dominance and sustainable community impact.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div style={{ backgroundColor: '#0A1628', borderRadius: '16px', padding: '3rem', height: '100%' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9922B', margin: '0 auto 1.5rem' }} />
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', textAlign: 'center', marginBottom: '1.5rem' }}>Our Vision</span>
              <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, textAlign: 'center' }}>
                To serve as the definitive bridge between emerging markets and established global standards — where every subsidiary becomes a beacon of quality in its sector.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', padding: '0.5rem 1rem', width: 'fit-content', margin: '2rem auto 0' }}>
                <Globe size={14} color="#C9922B" />
                <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>ISO Complete Certified</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
