import FadeIn from '@/components/ui/FadeIn'
import { MapPin } from 'lucide-react'
import WorldMap from '@/components/sections/home/WorldMap'

const locations = [
  { city: 'Tamil Nadu', country: 'India', flag: '🇮🇳', description: 'South Asia Operations & Manufacturing Hub' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', description: 'Middle East & Africa Strategic Headquarters' },
  { city: 'New York', country: 'USA', flag: '🇺🇸', description: 'Western Markets & Financial Services Center' },
]

export default function GlobalPresenceSection() {
  return (
    <section aria-labelledby="presence-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <FadeIn><span className="section-label">Global Footprint</span></FadeIn>
            <FadeIn delay={0.1}>
              <h2 id="presence-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#0A1628', marginTop: '0.75rem', marginBottom: '2.5rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>A Tri-Continental Strategic Presence</h2>
            </FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {locations.map((loc, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.1}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <MapPin size={18} color="#C9922B" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.25rem' }}>{loc.flag}</span>
                        <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem', color: '#0A1628' }}>{loc.city}, {loc.country}</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', margin: 0 }}>{loc.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" className="w-full">
            <WorldMap />
          </FadeIn>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.presence-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
