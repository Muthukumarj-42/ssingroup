'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '72px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85"
          alt="Modern architectural skyscrapers representing SS International Group's global presence"
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,22,40,0.75)' }} />
      </div>

      {/* Content */}
      <div className="container-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(201,146,43,0.15)', border: '1px solid rgba(201,146,43,0.4)', borderRadius: '100px', padding: '0.35rem 1rem', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8B84B', marginBottom: '2rem' }}>
            ★ Established 1984
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.03em', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Defining Excellence
          <span style={{ display: 'block', fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', color: '#E8B84B', marginTop: '0.1em' }}>Across Borders</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          A global conglomerate with 62+ diversified businesses spanning construction, real estate, jewellery, garments, finance, and organic products — operating across India, UAE, and USA.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/portfolio" className="btn-gold">Explore Our Portfolio</Link>
          <Link href="/about" className="btn-secondary-white">Our Global Impact</Link>
        </motion.div>
      </div>

      {/* Credential strip */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, backgroundColor: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {['ISO 9001 Certified', 'LEED Accredited', 'Forbes Recognized', 'Fortune Listed', '3 Continents'].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: i > 0 ? '2rem' : '0' }}>
              {i > 0 && <span style={{ width: '1px', height: '14px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-block', marginRight: '2rem' }} />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile padding for bottom tab bar */}
      <style>{`@media (max-width: 1024px) { .hero-section { padding-bottom: 148px !important; } }`}</style>
    </section>
  )
}
