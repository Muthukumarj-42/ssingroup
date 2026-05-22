'use client'
import Image from 'next/image'

export default function CareersHero() {
  return (
    <section
      aria-labelledby="careers-hero-heading"
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office interior representing SS International Group's work culture"
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,22,40,0.65)' }} />
      </div>

      <div className="container-content" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
        <h1
          id="careers-hero-heading"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem,5vw,4rem)',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em',
          }}
        >
          Build a Legacy with Us
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '520px',
          }}
        >
          Join a world-class institution where your career becomes a legacy. We recruit the exceptional across every discipline, every continent.
        </p>
        <div style={{ display: 'flex', maxWidth: '520px', overflow: 'hidden', borderRadius: '4px' }}>
          <input
            type="text"
            placeholder="Search roles by keyword or department..."
            aria-label="Search jobs"
            style={{
              flex: 1,
              height: '52px',
              padding: '0 1.25rem',
              backgroundColor: '#ffffff',
              border: 'none',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              color: '#0A1628',
              outline: 'none',
            }}
          />
          <button
            type="button"
            style={{
              padding: '0 1.5rem',
              backgroundColor: '#0A1628',
              border: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
