'use client'
import Image from 'next/image'
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
          <div style={{ width: '180px', height: '180px', borderRadius: '50%', backgroundColor: 'rgba(10,22,40,0.08)', margin: '2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(201,146,43,0.3)', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/images/mr-kumar.jpg"
              alt="MR. KUMAR, Managing Director of SS INTERNATIONAL GROUP"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="180px"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 id="md-heading" className="brand-name" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.75rem', color: '#0A1628', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>MR. KUMAR</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#C9922B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>Managing Director</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', padding: '0 2.5rem' }}>
            <span style={{ position: 'absolute', top: '-1.5rem', left: '0.5rem', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '6rem', color: '#C9922B', opacity: 0.15, lineHeight: 1 }}>&ldquo;</span>
            <blockquote style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.25rem', color: 'rgba(10,22,40,0.85)', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1 }}>
              At <span className="brand-name">SS INTERNATIONAL GROUP</span>, we don&apos;t just build businesses; we build lasting trust. Our journey across decades represents a robust commitment to excellence, deep operational integrity, and long-term value creation. By integrating dynamic regional operations with international investment frameworks, we continue to secure sustainable growth for our partners and global communities.
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
