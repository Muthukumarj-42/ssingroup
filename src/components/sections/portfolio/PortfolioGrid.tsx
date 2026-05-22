'use client'
import { useState } from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Building2, TrendingUp, Shirt, Truck, Zap, FlaskConical, ExternalLink } from 'lucide-react'

const allCompanies = [
  { icon: Building2, name: 'Heritage Realty', sector: 'Real Estate', desc: 'Premium residential and commercial developments across London and the GCC.', metric: 'Growth', value: '+18% YoY', hq: 'London, UK' },
  { icon: TrendingUp, name: 'Vanguard Capital', sector: 'Finance', desc: 'Multi-asset wealth management and institutional fund advisory.', metric: 'AUM', value: '$850M', hq: 'Singapore' },
  { icon: Shirt, name: 'SilkRoad Textiles', sector: 'Textiles', desc: 'High-volume garment manufacturing serving global fashion brands.', metric: 'Capacity', value: '2M Units/mo', hq: 'Istanbul, TR' },
  { icon: Truck, name: 'Nexus Logi-Systems', sector: 'Logistics', desc: 'End-to-end supply chain and freight forwarding across MENA and Americas.', metric: 'KPI Growth', value: '+24%', hq: 'Miami, USA' },
  { icon: Zap, name: 'Aether Energy', sector: 'Technology', desc: 'Renewable energy infrastructure powering sustainable industrial zones.', metric: 'Capacity', value: '500MW', hq: 'Sydney, AU' },
  { icon: FlaskConical, name: 'Apex BioScience', sector: 'Technology', desc: 'Biotech R&D focused on sustainable materials and pharmaceutical applications.', metric: 'Patents', value: '42', hq: 'Berlin, DE' },
]

const filters = ['All Ventures', 'Real Estate', 'Finance', 'Textiles', 'Logistics', 'Technology']

export default function PortfolioGrid() {
  const [active, setActive] = useState('All Ventures')
  const filtered = active === 'All Ventures' ? allCompanies : allCompanies.filter((c) => c.sector === active)

  return (
    <section aria-labelledby="grid-heading" style={{ backgroundColor: '#ffffff', padding: '80px 0 120px' }}>
      <div className="container-content">
        {/* Filter Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E0D8' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', whiteSpace: 'nowrap' }}>Filter by Sector:</span>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              style={{ padding: '0.4rem 1rem', borderRadius: '100px', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.8125rem', cursor: 'pointer', transition: 'all 0.15s ease', backgroundColor: active === f ? '#0A1628' : '#ffffff', color: active === f ? '#ffffff' : '#0A1628', border: active === f ? '1px solid #0A1628' : '1px solid #E2E0D8' }}>
              {f}
            </button>
          ))}
        </div>

        <h2 id="grid-heading" className="sr-only">Portfolio Companies</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
          {filtered.map((company, i) => {
            const Icon = company.icon
            return (
              <FadeIn key={company.name} delay={i * 0.07}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow='0 8px 32px rgba(10,22,40,0.1)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow='none'; (e.currentTarget as HTMLElement).style.transform='none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', backgroundColor: '#0A1628', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color="#C9922B" />
                    </div>
                    <ExternalLink size={14} color="rgba(10,22,40,0.3)" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.125rem', color: '#0A1628', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{company.name}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>{company.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E2E0D8' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', marginBottom: '0.2rem' }}>{company.metric}</div>
                      <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.9375rem', color: '#C9922B' }}>{company.value}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(10,22,40,0.45)' }}>{company.hq}</div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.portfolio-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
