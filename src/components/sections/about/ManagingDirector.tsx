import FadeIn from '@/components/ui/FadeIn'

export default function ManagingDirector() {
  return (
    <section aria-labelledby="md-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content" style={{ textAlign: 'center' }}>
        <FadeIn>
          <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9922B', display: 'block', marginBottom: '0.25rem' }}>Managing Director</span>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.4)', display: 'block' }}>Leading 40 Years of Excellence</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', backgroundColor: 'rgba(10,22,40,0.08)', margin: '2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(201,146,43,0.2)', overflow: 'hidden' }}>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', color: 'rgba(10,22,40,0.3)', fontWeight: 700 }}>K</div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 id="md-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.375rem', color: '#0A1628', marginBottom: '0.25rem' }}>Mr. Kumar</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.875rem', color: '#C9922B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>Managing Director</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ position: 'absolute', top: '-1rem', left: '0.5rem', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '5rem', color: '#C9922B', opacity: 0.25, lineHeight: 1 }}>&ldquo;</span>
            <blockquote style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.125rem', color: 'rgba(10,22,40,0.8)', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1 }}>
              At SS International Group, we don&apos;t just build businesses; we build trust. Our journey over the decades is a testament to our commitment to excellence, innovation, and most importantly, our people and partners. We look forward to continuing our expansion and creating value globally.
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
