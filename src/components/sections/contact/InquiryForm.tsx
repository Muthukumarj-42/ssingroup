'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
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
                    {['SS Construction', 'SS Real Estate', 'SS Finance', 'SS Jewellery', 'SS Garments', 'SS Organic Products', 'Partnership'].map((s) => <option key={s} value={s}>{s}</option>)}
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
              <div style={{ backgroundColor: '#0A1628', borderRadius: '16px', border: '1px solid #E2E0D8', padding: '2.5rem', color: '#ffffff', boxShadow: '0 8px 32px rgba(10,22,40,0.12)' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ position: 'relative', width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #C9922B', flexShrink: 0 }}>
                    <Image
                      src="/images/mr-kumar.jpg"
                      alt="MR. KUMAR, Managing Director of SS INTERNATIONAL GROUP"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <span className="brand-name" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', display: 'block', marginBottom: '0.25rem' }}>DIRECT CONTACT OFFICE</span>
                    <h3 className="brand-name" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 850, fontSize: '1.5rem', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>MR. KUMAR</h3>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', margin: '0.25rem 0 0' }}>Managing Director</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(201,146,43,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={16} color="#C9922B" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Phone Support</div>
                      <a href="tel:+919442225656" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.0625rem', color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color='#C9922B'}
                        onMouseLeave={(e) => e.currentTarget.style.color='#ffffff'}>
                        +91 944 222 56 56
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(201,146,43,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={16} color="#C9922B" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Direct Email</div>
                      <a href="mailto:contact@ssingroup.com" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.0625rem', color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color='#C9922B'}
                        onMouseLeave={(e) => e.currentTarget.style.color='#ffffff'}>
                        contact@ssingroup.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(201,146,43,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={16} color="#C9922B" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Command Centre</div>
                      <a href="https://maps.google.com/?q=69C8+MGJ,Perumanallur,Tamil+Nadu+641666,India" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: 1.5, color: '#ffffff', textDecoration: 'none', display: 'block', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color='#C9922B'}
                        onMouseLeave={(e) => e.currentTarget.style.color='#ffffff'}>
                        69C8+MGJ Perumanallur<br />Tamil Nadu 641666, India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
