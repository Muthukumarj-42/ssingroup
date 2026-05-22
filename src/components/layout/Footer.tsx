import Link from 'next/link'
import { Globe, Shield, Sparkles, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer role="contentinfo" style={{ backgroundColor: '#0A1628', color: '#ffffff', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="container-content"
        style={{ paddingTop: '5rem', paddingBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3rem' }}>
        
        <div>
          <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>SS International Group</div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '240px' }}>A global conglomerate of 62+ businesses spanning construction, real estate, finance, textiles, and beyond.</p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[Globe, Shield, Sparkles].map((Icon, i) => (
              <div key={i} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Icon size={15} color="rgba(255,255,255,0.55)" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', marginBottom: '1.25rem' }}>Quick Links</h3>
          <nav aria-label="Footer navigation">
            {[{label:'Our Story',href:'/about'},{label:'Strategic Pillars',href:'/portfolio'},{label:'Leadership',href:'/about'},{label:'Global Hubs',href:'/contact'},{label:'Careers',href:'/careers'}].map((link) => (
              <Link key={link.href+link.label} href={link.href}
                style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '0.625rem', transition: 'color 0.2s ease' }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', marginBottom: '1.25rem' }}>Global Headquarters</h3>
          <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>UAE (Primary)</strong><br />
            Office 402, Al Habtoor Business Tower<br />
            Dubai Marina, Dubai, UAE<br />
            <a href="tel:+97148889000" style={{ color: '#C9922B', textDecoration: 'none' }}>+971 4 888 9000</a><br />
            <a href="mailto:uae.hq@ssgroup.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>uae.hq@ssgroup.com</a>
          </address>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', marginBottom: '1.25rem' }}>Newsletter</h3>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1rem' }}>Stay updated on our global acquisitions and strategic moves.</p>
          <div style={{ display: 'flex' }}>
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter"
              style={{ flex: 1, height: '44px', padding: '0 0.875rem', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRight: 'none', borderRadius: '4px 0 0 4px', color: '#ffffff', fontSize: '0.875rem', fontFamily: 'var(--font-inter)', outline: 'none' }} />
            <button type="button" aria-label="Subscribe to newsletter"
              style={{ width: '44px', height: '44px', backgroundColor: '#C9922B', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ArrowRight size={18} color="#0A1628" />
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-content" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>&copy; {currentYear} SS International Group. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link key={item} href="#" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
