import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield, Globe } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = genMeta({
  title: 'Application Submitted Successfully',
  description: 'Your job application has been submitted successfully to the SS INTERNATIONAL GROUP recruitment office.',
  path: '/careers/success',
  noIndex: true,
})

export default function SuccessPage() {
  return (
    <div style={{ backgroundColor: '#F5F4F0', paddingTop: '72px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '72px' }}>
      <div className="container-content" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <FadeIn className="w-full" style={{ maxWidth: '600px', width: '100%' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E2E0D8',
              borderRadius: '24px',
              padding: '4rem 3rem',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(10,22,40,0.03)',
            }}
          >
            {/* Animated Icon Container */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(201,146,43,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={44} color="#C9922B" />
              </div>
            </div>

            {/* Content */}
            <h1
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontWeight: 900,
                fontSize: '2rem',
                color: '#0A1628',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Application Received
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: 'rgba(10,22,40,0.6)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '440px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Thank you for expressing interest in joining <span className="brand-name">SS INTERNATIONAL GROUP</span>. Your curriculum vitae and professional qualifications have been successfully logged in our secure database.
            </p>

            {/* Info Box */}
            <div
              style={{
                backgroundColor: '#F9FAF8',
                border: '1px solid #E2E0D8',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'left',
              }}
            >
              <Shield size={20} color="#C9922B" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#0A1628', marginBottom: '0.25rem' }}>Next Steps</h4>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.6)', lineHeight: 1.5, margin: 0 }}>
                  Our corporate search committee reviews submissions against active pipelines. Qualified prospects are contacted within 72 business hours.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link
                href="/careers"
                className="btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Back to Careers <ArrowRight size={16} />
              </Link>

              <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <Link
                  href="/about"
                  className="success-btn"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #E2E0D8',
                    borderRadius: '4px',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    color: '#0A1628',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Globe size={14} color="#C9922B" /> Our Story
                </Link>

                <Link
                  href="/portfolio"
                  className="success-btn"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #E2E0D8',
                    borderRadius: '4px',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    color: '#0A1628',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ArrowRight size={14} color="#C9922B" /> Portfolio
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`
        .success-btn:hover {
          background-color: #F5F4F0 !important;
          border-color: #0A1628 !important;
        }
      `}</style>
    </div>
  )
}
