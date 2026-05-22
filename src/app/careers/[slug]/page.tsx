import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Shield, Bookmark, Sparkles } from 'lucide-react'
import { jobs } from '@/lib/data/jobs'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import FadeIn from '@/components/ui/FadeIn'
import Badge from '@/components/ui/Badge'

interface JobDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = jobs.find((j) => j.slug === params.slug)
  if (!job) return {}

  return genMeta({
    title: job.title,
    description: `${job.title} role in our ${job.department} department. Location: ${job.location}. ${job.description.slice(0, 100)}...`,
    path: `/careers/${job.slug}`,
  })
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobs.find((j) => j.slug === params.slug)

  if (!job) {
    notFound()
  }

  return (
    <div style={{ backgroundColor: '#F5F4F0', paddingTop: '72px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container-content" style={{ paddingTop: '3rem' }}>
        {/* Back Link */}
        <FadeIn>
          <Link
            href="/careers"
            className="hover-back-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#C9922B',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'transform 0.2s ease',
            }}
          >
            <ArrowLeft size={16} /> Back to Careers
          </Link>
        </FadeIn>

        {/* Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '70fr 30fr', gap: '3rem', alignItems: 'start' }}>
          {/* Main Info */}
          <div>
            <FadeIn>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <Badge variant="gold">{job.department}</Badge>
                <Badge variant="navy">{job.type}</Badge>
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem,4.5vw,3rem)',
                  color: '#0A1628',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {job.title}
              </h1>

              {/* Meta Tags */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  color: 'rgba(10,22,40,0.6)',
                  borderBottom: '1px solid #E2E0D8',
                  paddingBottom: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} color="#C9922B" />
                  {job.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={16} color="#C9922B" />
                  {job.type}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: 'auto' }}>
                  <span style={{ fontWeight: 600 }}>Ref ID:</span> {job.refId}
                </div>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.05}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Role Overview</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.75, margin: 0 }}>{job.description}</p>
              </div>
            </FadeIn>

            {/* Responsibilities */}
            <FadeIn delay={0.1}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>Key Responsibilities</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '1.25rem', margin: 0 }}>
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.6 }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Qualifications */}
            <FadeIn delay={0.15}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>Qualifications &amp; Experience</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '1.25rem', margin: 0 }}>
                  {job.qualifications.map((qual, index) => (
                    <li key={index} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.6 }}>
                      {qual}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* What We Offer */}
            <FadeIn delay={0.2}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', marginBottom: '1rem', letterSpacing: '-0.01em' }}>What We Offer</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.75, margin: 0 }}>{job.whatWeOffer}</p>
              </div>
            </FadeIn>
          </div>

          {/* Right Sidebar Action */}
          <aside style={{ position: 'sticky', top: '96px' }}>
            <FadeIn delay={0.1}>
              <div
                style={{
                  backgroundColor: '#0A1628',
                  borderRadius: '16px',
                  padding: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 8px 32px rgba(10,22,40,0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={16} color="#C9922B" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Active Search</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>Interested in this role?</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Submit your curriculum vitae and professional details to our corporate human resources committee.
                </p>

                <Link
                  href={`/careers/${job.slug}/apply`}
                  className="btn-gold"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.875rem 1.5rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.875rem',
                    transition: 'transform 0.2s ease, opacity 0.2s ease',
                  }}
                >
                  Apply For Position
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', marginTop: '1.25rem' }}>
                  <Shield size={12} color="rgba(255,255,255,0.4)" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    Secure Recruitment Process
                  </span>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
      <style>{`
        .hover-back-btn:hover {
          transform: translateX(-4px);
        }
      `}</style>
    </div>
  )
}
