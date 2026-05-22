import FadeIn from '@/components/ui/FadeIn'
import { Shield, Globe } from 'lucide-react'

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" style={{ backgroundColor: '#F5F4F0', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <FadeIn><span className="section-label">Our Foundation</span></FadeIn>
          <FadeIn delay={0.1}>
            <h2 id="trust-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', color: '#0A1628', marginTop: '0.75rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Built on Trust,
              <span style={{ display: 'block', fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 700 }}> Driven by Innovation</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.7)', maxWidth: '560px', margin: '1.25rem auto 0', lineHeight: 1.75 }}>
              Four decades of principled business across three continents have forged a culture where integrity is not aspirational — it is operational.
            </p>
          </FadeIn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '3rem', alignItems: 'start' }}>
          <FadeIn direction="right">
            <div style={{ padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #E2E0D8' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Shield size={24} color="#C9922B" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '0.75rem' }}>Integrity First</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.75 }}>Every venture we build is underpinned by rigorous ethical standards, transparent governance, and a relentless commitment to long-term stakeholder value — not short-term gains.</p>
            </div>
          </FadeIn>

          <div style={{ width: '1px', backgroundColor: '#C9922B', opacity: 0.3, alignSelf: 'stretch', margin: '0 auto' }} />

          <FadeIn direction="left">
            <div style={{ padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #E2E0D8' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Globe size={24} color="#C9922B" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '0.75rem' }}>Global Synergy</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.75 }}>Our 62+ subsidiaries operate as a unified ecosystem — sharing capital, intelligence, and talent to create compounding advantages that no single-vertical firm can replicate.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
