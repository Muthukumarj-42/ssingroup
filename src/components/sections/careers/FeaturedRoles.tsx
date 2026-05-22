'use client'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { jobs } from '@/lib/data/jobs'
import { MapPin, Clock, Bookmark } from 'lucide-react'

export default function FeaturedRoles() {
  return (
    <section aria-labelledby="roles-heading" style={{ backgroundColor: '#ffffff', paddingBottom: '120px' }}>
      <div className="container-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-label">Opportunities</span>
            <h2 id="roles-heading" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#0A1628', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Featured Roles</h2>
          </div>
          <Link href="/careers" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: '#C9922B', textDecoration: 'none' }}>View All Positions →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
          {jobs.map((job, i) => (
            <FadeIn key={job.id} delay={i * 0.1}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'box-shadow 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow='0 8px 32px rgba(10,22,40,0.08)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow='none'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <span style={{ backgroundColor: 'rgba(201,146,43,0.12)', border: '1px solid rgba(201,146,43,0.3)', borderRadius: '100px', padding: '0.25rem 0.75rem', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#C9922B' }}>{job.department}</span>
                  <Bookmark size={16} color="rgba(10,22,40,0.3)" style={{ cursor: 'pointer' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.125rem', color: '#0A1628', marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-0.01em', flex: 1 }}>{job.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.55)' }}>
                    <MapPin size={13} color="#C9922B" />{job.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.55)' }}>
                    <Clock size={13} color="#C9922B" />{job.type}
                  </div>
                </div>
                <Link href={`/careers/${job.slug}`} className="btn-primary" style={{ textAlign: 'center', padding: '0.75rem 1.5rem', fontSize: '0.8125rem' }}>Apply Now</Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
