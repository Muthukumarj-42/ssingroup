import FadeIn from '@/components/ui/FadeIn'

export default function TalentNetworkCTA() {
  return (
    <section aria-label="Talent network call to action" style={{ backgroundColor: '#0A1628', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ display: 'grid', gridTemplateColumns: '65fr 35fr', gap: '5rem', alignItems: 'center' }}>
          <FadeIn direction="right">
            <div>
              <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Don&apos;t see a fit?<br />Join our global talent network.
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '480px' }}>We maintain a curated talent pool of exceptional professionals. When a matching opportunity arises, you'll be the first to know.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn-gold">Submit CV</a>
                <a href="/about" className="btn-secondary-white">Learn about our Hiring Process</a>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(4rem,8vw,6rem)', color: '#C9922B', lineHeight: 1 }}>500+</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem' }}>Global Partners</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
