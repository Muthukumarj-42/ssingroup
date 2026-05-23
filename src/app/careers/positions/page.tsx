import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { jobs } from '@/lib/data/jobs'
import { MapPin, Clock, ArrowRight, Shield, Sparkles } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = genMeta({
  title: 'All Open Positions',
  description: 'Explore active career opportunities across finance, real estate, textiles, and operations in India, UAE, and USA with SS INTERNATIONAL GROUP.',
  path: '/careers/positions',
})

export default function AllPositionsPage() {
  return (
    <div style={{ backgroundColor: '#F5F4F0', paddingTop: '72px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container-content" style={{ paddingTop: '4rem' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <span className="section-label" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>Active Mandates</span>
            <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.25rem,5vw,3.5rem)', color: '#0A1628', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Open Positions
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.7 }}>
              Explore career paths with us. Connect with the executive human resources committee at <span className="brand-name">SS INTERNATIONAL GROUP</span>.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '70fr 30fr', gap: '3rem', alignItems: 'start' }}>
          {/* Positions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {jobs.map((job, idx) => (
              <FadeIn key={job.id} delay={idx * 0.1}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'box-shadow 0.2s ease, border-color 0.2s ease' }}
                  className="position-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <Badge variant="gold">{job.department}</Badge>
                        <Badge variant="navy">{job.type}</Badge>
                      </div>
                      <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.375rem', color: '#0A1628', margin: 0, letterSpacing: '-0.01em' }}>{job.title}</h2>
                    </div>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.4)', fontWeight: 600 }}>Ref: {job.refId}</span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.6, margin: 0 }}>
                    {job.description.split('.')[0]}. {job.description.split('.')[1]}.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F5F4F0', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.55)' }}>
                        <MapPin size={14} color="#C9922B" /> {job.location}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.55)' }}>
                        <Clock size={14} color="#C9922B" /> {job.type}
                      </span>
                    </div>
                    <Link href={`/careers/${job.slug}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Column General Application Info */}
          <aside style={{ position: 'sticky', top: '96px' }}>
            <FadeIn delay={0.2}>
              <div style={{ backgroundColor: '#0A1628', borderRadius: '16px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 8px 32px rgba(10,22,40,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={16} color="#C9922B" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>General Applications</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>Don't see your fit?</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  If you possess outstanding executive talent or specialized industry expertise, you can submit a general candidacy dossier to our executive search team.
                </p>

                <Link href="/careers/apply-general" className="btn-gold" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 1.5rem', fontWeight: 700, textDecoration: 'none', borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>
                  General Candidacy Form
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', marginTop: '1.25rem' }}>
                  <Shield size={12} color="rgba(255,255,255,0.4)" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    Confidential Submission
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2rem', marginTop: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem', color: '#0A1628', marginBottom: '0.75rem' }}>Recruitment Process</h4>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Learn about our rigorous three-stage hiring process designed to evaluate strategic competency, operational precision, and cultural alignment.
                </p>
                <Link href="/careers/hiring-process" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.8125rem', color: '#C9922B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  Our Hiring Process →
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
      <style>{`
        .position-card:hover {
          box-shadow: 0 8px 32px rgba(10,22,40,0.06);
          border-color: #C9922B40 !important;
        }
      `}</style>
    </div>
  )
}
