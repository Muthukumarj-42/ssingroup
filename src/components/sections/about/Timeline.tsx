import FadeIn from '@/components/ui/FadeIn'

const milestones = [
  { year: '1984', label: 'Foundation', description: 'SS International commences as a specialised logistics firm in the port of Cochin, India.' },
  { year: '1998', label: 'Energy Pivot', description: 'Expands into oil and gas services, securing 12 regional government contracts across the GCC.' },
  { year: '2012', label: 'Global Presence', description: 'Formal entry into the USA and India, diversifying into real estate and structured finance.' },
  { year: '2024', label: 'The 62nd Pillar', description: 'Acquisition of a major green-transport facility, marking our 62nd active global subsidiary.' },
]

export default function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" style={{ backgroundColor: '#0A1628', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container-content">
        <FadeIn>
          <h2 id="timeline-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#ffffff', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-0.02em' }}>Journey to 62 Businesses</h2>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', top: '28px', left: '12.5%', right: '12.5%', height: '2px', backgroundColor: '#C9922B', opacity: 0.4 }} />
            
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ textAlign: 'center', padding: '0 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#C9922B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '0.75rem', color: '#0A1628' }}>{m.year}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: '0.75rem' }}>{m.label}</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{m.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', paddingLeft: '2.5rem', borderLeft: '2px solid rgba(201,146,43,0.3)' }}>
          {milestones.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-3rem', top: '4px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#C9922B', border: '3px solid #0A1628' }} />
                <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '1.5rem', color: '#C9922B', marginBottom: '0.25rem' }}>{m.year}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>{m.label}</div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{m.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
