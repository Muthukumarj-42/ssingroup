import FadeIn from '@/components/ui/FadeIn'
import { Shield, Globe } from 'lucide-react'

export default function CultureSection() {
  return (
    <section aria-labelledby="culture-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ display: 'grid', gridTemplateColumns: '60fr 40fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <FadeIn><span className="section-label">Our Culture</span></FadeIn>
            <FadeIn delay={0.1}><h2 id="culture-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,2.5rem)', color: '#0A1628', marginTop: '0.75rem', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Excellence, Integrity, and Global Impact</h2></FadeIn>
            <FadeIn delay={0.15}><p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.75, marginBottom: '1.25rem' }}>We are not a typical employer. We are a legacy institution that invests in individuals who demonstrate rare potential and the discipline to realise it. Our team members are given authority, exposure, and the resources to lead — not just contribute.</p></FadeIn>
            <FadeIn delay={0.2}><p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.125rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.6 }}>&ldquo;The Digital Headquarters of Modern Enterprise&rdquo;</p></FadeIn>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[{ icon: Shield, title: 'Unwavering Integrity', desc: 'Every decision is grounded in ethics, transparency, and long-term thinking — never short-term expediency.' }, { icon: Globe, title: 'Global Connectivity', desc: 'Work alongside colleagues and partners across India, UAE, USA, and 11 other countries simultaneously.' }].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1} direction="left">
                <div style={{ backgroundColor: '#F5F4F0', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '1.75rem' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={22} color="#C9922B" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem', color: '#0A1628', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
