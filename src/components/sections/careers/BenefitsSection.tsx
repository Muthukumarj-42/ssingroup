import FadeIn from '@/components/ui/FadeIn'
import { Plane, BarChart2, Briefcase } from 'lucide-react'

const benefits = [
  { icon: Plane, title: 'Global Mobility', desc: 'Work across our offices in India, UAE, and the USA. International assignments available to all senior staff.' },
  { icon: BarChart2, title: 'Leadership Development', desc: 'Structured executive mentorship, global MBA sponsorship, and board exposure for high performers.' },
  { icon: Briefcase, title: 'Impactful Work', desc: 'Every role at SS International Group shapes decisions that influence communities across three continents.' },
]

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" style={{ backgroundColor: '#F5F4F0', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <FadeIn>
            <h2 id="benefits-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#0A1628', letterSpacing: '-0.02em' }}>Empowering the Individual</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.6)', maxWidth: '500px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>We invest in our people the same way we invest in our businesses — with conviction, patience, and a long-term horizon.</p>
          </FadeIn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201,146,43,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <Icon size={24} color="#C9922B" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.125rem', color: '#0A1628', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
