import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

const hubs = [
  {
    name: 'India Command Centre',
    city: 'Tamil Nadu',
    description: 'South Asia manufacturing, logistics, and real estate operations spanning 22 subsidiaries.',
    tags: ['HQ Command', 'ESG Focused'],
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    alt: 'Tamil Nadu India command centre',
    mapUrl: 'https://maps.google.com/?q=69C8+MGJ,Perumanallur,Tamil+Nadu+641666,India'
  },
  {
    name: 'UAE Strategic Headquarters',
    city: 'Dubai',
    description: 'Middle East strategic headquarters overseeing finance, jewellery, and construction verticals.',
    tags: ['DIFC Registered', 'Tax Efficient'],
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    alt: 'Dubai UAE strategic headquarters',
    mapUrl: 'https://maps.google.com/?q=Dubai,UAE'
  },
  {
    name: 'USA Capital Markets Hub',
    city: 'New York',
    description: 'Western markets, capital markets access, and sustainability leadership programs.',
    tags: ['SEC Compliant', 'ESG Reporting'],
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    alt: 'New York USA financial center',
    mapUrl: 'https://maps.google.com/?q=Manhattan,New+York,USA'
  },
]

export default function CommandCenters() {
  return (
    <section aria-labelledby="hubs-heading" style={{ backgroundColor: '#F5F4F0', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <FadeIn><span className="section-label">Global Footprint</span></FadeIn>
          <FadeIn delay={0.1}>
            <h2 id="hubs-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#0A1628', marginTop: '0.75rem', letterSpacing: '-0.03em' }}>Command Centers</h2>
          </FadeIn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {hubs.map((hub, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <a
                href={hub.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none', borderRadius: '16px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                className="hub-card"
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={hub.img} alt={hub.alt} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} sizes="(max-width:768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.3) 55%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      {hub.tags.map((tag) => (
                        <span key={tag} style={{ backgroundColor: 'rgba(201,146,43,0.2)', border: '1px solid rgba(201,146,43,0.4)', borderRadius: '100px', padding: '0.2rem 0.6rem', fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#E8B84B' }}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="brand-name" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{hub.name}</h3>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.75rem', color: '#C9922B', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{hub.city}</p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{hub.description}</p>
                    <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8125rem', color: '#C9922B', display: 'inline-block', marginTop: '0.75rem' }}>View Hub Location ↗</span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .hub-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
