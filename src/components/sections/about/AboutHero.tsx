import FadeIn from '@/components/ui/FadeIn'

export default function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" style={{ backgroundColor: '#F5F4F0', paddingTop: '160px', paddingBottom: '100px' }}>
      <div className="container-content" style={{ textAlign: 'center' }}>
        <FadeIn><span className="section-label">Established 1984</span></FadeIn>
        <FadeIn delay={0.1}>
          <h1 id="about-hero-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4.5rem)', color: '#0A1628', marginTop: '1rem', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            A Legacy of Visionary Leadership.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.6)', maxWidth: '480px', margin: '0 auto 3rem', lineHeight: 1.75 }}>
            From a single office in South India to commanding a 62-subsidiary global empire across three continents.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: 'inline-block', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(4rem,10vw,5rem)', color: '#C9922B', lineHeight: 1 }}>62</div>
            <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', marginTop: '0.5rem' }}>Active Global Subsidiaries</div>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#C9922B', margin: '1.25rem auto 0' }} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
