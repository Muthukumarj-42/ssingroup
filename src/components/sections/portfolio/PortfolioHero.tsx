import FadeIn from '@/components/ui/FadeIn'

export default function PortfolioHero() {
  return (
    <section aria-labelledby="portfolio-hero-heading" style={{ backgroundColor: '#F5F4F0', paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
      <div className="container-content">
        <FadeIn>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(201,146,43,0.12)', border: '1px solid rgba(201,146,43,0.3)', borderRadius: '100px', padding: '0.35rem 1rem', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', marginBottom: '1.5rem' }}>Our Portfolio</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 id="portfolio-hero-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.5rem,5.5vw,4rem)', color: '#0A1628', letterSpacing: '-0.03em', lineHeight: 1.05 }}>A Diverse Global Ecosystem</h1>
        </FadeIn>
      </div>
    </section>
  )
}
