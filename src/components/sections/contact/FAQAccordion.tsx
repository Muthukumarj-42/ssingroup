'use client'
import { useState } from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'How do I register as a global vendor?', a: 'To register as a global vendor, please complete our vendor registration form via the Supply Chain Verification portal. Our procurement team reviews all applications and responds within 5-7 business days.' },
  { q: 'Are there direct investment opportunities for private individuals?', a: 'SS International Group offers select co-investment opportunities to accredited private investors on a case-by-case basis. Please submit your profile through our Investor Relations Portal for initial review.' },
  { q: 'What is the typical response time for global inquiries?', a: 'All business inquiries submitted through this form receive an acknowledgment within 24 hours and a substantive response from the relevant executive within 48-72 hours, Monday to Friday.' },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section aria-labelledby="faq-heading" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
      <div className="container-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <FadeIn>
          <h2 id="faq-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#0A1628', textAlign: 'center', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#C9922B', margin: '0 auto 3rem' }} />
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ border: '1px solid #E2E0D8', borderRadius: '12px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', backgroundColor: open === i ? '#0A1628' : '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background-color 0.2s ease' }}
                >
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '1rem', color: open === i ? '#ffffff' : '#0A1628', lineHeight: 1.4 }}>{faq.q}</span>
                  {open === i ? <Minus size={18} color="#C9922B" style={{ flexShrink: 0 }} /> : <Plus size={18} color="#C9922B" style={{ flexShrink: 0 }} />}
                </button>
                {open === i && (
                  <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#FAFAF8', borderTop: '1px solid #E2E0D8' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
