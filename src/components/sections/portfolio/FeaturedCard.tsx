import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

export default function FeaturedCard() {
  return (
    <section aria-label="Featured portfolio project" style={{ backgroundColor: '#ffffff', padding: '80px 0 0' }}>
      <div className="container-content">
        <FadeIn>
          <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '400px' }}>
            <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80" alt="The Meridian Financial District — SS International Group's flagship real estate development" fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.5) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(201,146,43,0.2)', border: '1px solid rgba(201,146,43,0.5)', borderRadius: '100px', padding: '0.3rem 0.875rem', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8B84B' }}>★ Featured Success Story</span>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.5rem)', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.2 }}>The Meridian Financial District</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', maxWidth: '500px', lineHeight: 1.6 }}>Our flagship mixed-use development in Dubai Marina — redefining premium commercial real estate in the GCC.</p>
                <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                  {[{ label: 'Valuation', value: '$2.4B' }, { label: 'Global Awards', value: '12' }].map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(1.75rem,3vw,2.25rem)', color: '#C9922B', lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
