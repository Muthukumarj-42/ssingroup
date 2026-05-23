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
      <div className="container-content" style={{ maxWidth: '800px' }}>
        <FadeIn>
          <h2 id="timeline-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#ffffff', textAlign: 'center', marginBottom: '5rem', letterSpacing: '-0.02em' }}>Journey to 62 Businesses</h2>
        </FadeIn>

        {/* Unified Vertical Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', paddingLeft: '3rem' }}>
          {/* Timeline Center-left vertical line */}
          <div style={{ position: 'absolute', left: '15px', top: '10px', bottom: '10px', width: '2px', backgroundColor: '#C9922B', opacity: 0.3 }} />

          {milestones.map((m, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ position: 'relative' }}>
                {/* Milestone dot */}
                <div style={{ position: 'absolute', left: '-3rem', top: '6px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0A1628', border: '3px solid #C9922B', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateX(7px)', zIndex: 1 }} />
                
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2rem', color: '#C9922B', lineHeight: 1 }}>{m.year}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }}>{m.label}</div>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>{m.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
