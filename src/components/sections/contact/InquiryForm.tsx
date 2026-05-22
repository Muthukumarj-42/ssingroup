'use client'
import { useState } from 'react'
import FadeIn from '@/components/ui/FadeIn'

export default function InquiryForm() {
  const [sent, setSent] = useState(false)
  return (
    <section aria-labelledby="inquiry-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content">
        <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <FadeIn><h2 id="inquiry-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#0A1628', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Direct Inquiry</h2></FadeIn>
            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div><label className="form-label" htmlFor="inq-name">Full Name</label><input id="inq-name" className="form-input" type="text" placeholder="Julian Alexander" required /></div>
                  <div><label className="form-label" htmlFor="inq-company">Company</label><input id="inq-company" className="form-input" type="text" placeholder="Acme Corporation" /></div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label" htmlFor="inq-sector">Sector of Interest</label>
                  <select id="inq-sector" className="form-input" style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select a sector...</option>
                    {['Construction', 'Real Estate', 'Finance', 'Jewellery', 'Garments', 'Organic Products', 'Partnership'].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label" htmlFor="inq-message">Message</label>
                  <textarea id="inq-message" className="form-input" rows={5} placeholder="Describe your inquiry or opportunity..." required style={{ height: 'auto', padding: '0.75rem 1rem', resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary">Send Message →</button>
              </form>
            ) : (
              <div style={{ padding: '2rem', backgroundColor: 'rgba(201,146,43,0.06)', border: '1px solid rgba(201,146,43,0.2)', borderRadius: '12px' }}>
                <p style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.125rem', color: '#0A1628', marginBottom: '0.5rem' }}>Message Received</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)' }}>Thank you for your inquiry. Our executive team will respond within 48 hours.</p>
              </div>
            )}
          </div>
          <div>
            <FadeIn direction="left">
              <div style={{ backgroundColor: '#F5F4F0', borderRadius: '16px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid #E2E0D8', position: 'relative', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🗺️</div>
                  <p style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)' }}>Currently Viewing:<br />Global Strategy Hub, Manhattan</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[{ label: 'Investor Relations Portal ↗', href: '#' }, { label: 'Supply Chain Verification ↗', href: '#' }].map((link) => (
                  <a key={link.label} href={link.href} style={{ display: 'block', padding: '1rem 1.25rem', border: '1px solid #E2E0D8', borderRadius: '8px', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#0A1628', textDecoration: 'none', transition: 'border-color 0.2s ease, color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color='#C9922B'; (e.currentTarget as HTMLElement).style.borderColor='#C9922B' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color='#0A1628'; (e.currentTarget as HTMLElement).style.borderColor='#E2E0D8' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
