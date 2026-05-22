import FadeIn from '@/components/ui/FadeIn'

export default function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-heading" style={{ backgroundColor: '#F5F4F0', paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
      <div className="container-content">
        <FadeIn>
          <h1 id="contact-hero-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,4.5rem)', color: '#0A1628', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.25rem' }}>Global Headquarters &amp; Inquiries</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>Reach our teams across India, the UAE, and the United States. Every inquiry receives a response within 48 hours from our executive office.</p>
        </FadeIn>
      </div>
    </section>
  )
}
