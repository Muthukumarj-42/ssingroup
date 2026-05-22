import FadeIn from '@/components/ui/FadeIn'
import { MapPin, Phone, Mail } from 'lucide-react'

const offices = [
  { country: 'India', flag: '🇮🇳', address: 'Executive Suites, Level 12, Corporate Greens, Gurgaon, Haryana 122818', phone: '+91 124 555 0192', email: 'india.office@ssgroup.com', tel: '+911245550192' },
  { country: 'UAE', flag: '🇦🇪', address: 'Office 402, Al Habtoor Business Tower, Dubai Marina, Dubai, UAE', phone: '+971 4 888 9000', email: 'uae.hq@ssgroup.com', tel: '+97148889000' },
  { country: 'USA', flag: '🇺🇸', address: 'Madison Avenue Financial Center, 24th Floor, New York, NY 10017', phone: '+1 212 555 0808', email: 'us.invest@ssgroup.com', tel: '+12125550808' },
]

export default function OfficeCards() {
  return (
    <section aria-labelledby="offices-heading" style={{ backgroundColor: '#FAFAF8', padding: '80px 0' }}>
      <div className="container-content">
        <h2 id="offices-heading" className="sr-only">Global Offices</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {offices.map((office, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} color="#C9922B" />
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>{office.flag}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.75rem', color: '#0A1628', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{office.country}</h3>
                <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{office.address}</address>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href={`tel:${office.tel}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', textDecoration: 'none' }}>
                    <Phone size={14} color="#C9922B" />{office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', textDecoration: 'none' }}>
                    <Mail size={14} color="#C9922B" />{office.email}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
