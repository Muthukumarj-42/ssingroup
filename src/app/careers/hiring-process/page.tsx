import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { Shield, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = genMeta({
  title: 'Our Hiring Process',
  description: 'Understand the rigorous three-stage hiring process at SS INTERNATIONAL GROUP.',
  path: '/careers/hiring-process',
})

export default function HiringProcessPage() {
  const stages = [
    {
      num: '01',
      title: 'Dossier Review & Screening',
      duration: 'Timeline: 3–5 Business Days',
      desc: 'Our human resources committee evaluates your curriculum vitae, experience credentials, and cover statement against active mandates. Every candidate receives a formal status notification.',
      points: [
        'Detailed analysis of professional qualifications',
        'Verification of regional experience matching',
        'Assessment of written strategic alignment statement'
      ]
    },
    {
      num: '02',
      title: 'Technical & Case Assessment',
      duration: 'Timeline: 7–10 Business Days',
      desc: 'Shortlisted candidates participate in an in-depth dialogue focusing on technical competency, industry analysis, or regional regulatory framework structures.',
      points: [
        'Live scenario strategy evaluation sessions',
        'Rigorous technical competency challenge discussion',
        'Direct interface with departmental heads'
      ]
    },
    {
      num: '03',
      title: 'Executive Panel Dialogue',
      duration: 'Timeline: 3–5 Business Days',
      desc: 'A final strategic discussion with our executive panel focusing on leadership capabilities, long-term alignment, and commercial integration frameworks.',
      points: [
        'Direct discussion with board representatives or senior leadership',
        'Exploration of commercial terms and strategic vision integration',
        'Formal security screening and credential verification checks'
      ]
    }
  ]

  return (
    <div style={{ backgroundColor: '#F5F4F0', paddingTop: '72px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container-content" style={{ paddingTop: '4rem' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-label" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>Recruitment Standard</span>
            <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.25rem,5vw,3.5rem)', color: '#0A1628', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Our Hiring Process
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.7 }}>
              A rigorous, transparent, three-stage evaluation framework designed to bring exceptional professionals into <span className="brand-name">SS INTERNATIONAL GROUP</span>.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '65fr 35fr', gap: '4rem', alignItems: 'start' }}>
          {/* Stages list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {stages.map((stage, idx) => (
              <FadeIn key={stage.num} delay={idx * 0.1}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '2.5rem', display: 'flex', gap: '2rem', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2.5rem', color: 'rgba(201, 146, 43, 0.2)', lineHeight: 1, flexShrink: 0 }}>
                    {stage.num}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.25rem', color: '#0A1628', margin: 0 }}>{stage.title}</h2>
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#C9922B', fontWeight: 600 }}>{stage.duration}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.6, margin: 0 }}>
                      {stage.desc}
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0, margin: '0.5rem 0 0', listStyle: 'none' }}>
                      {stage.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.6)' }}>
                          <CheckCircle2 size={14} color="#C9922B" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Sidebar CTA */}
          <aside style={{ position: 'sticky', top: '96px' }}>
            <FadeIn delay={0.25}>
              <div style={{ backgroundColor: '#0A1628', borderRadius: '16px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 8px 32px rgba(10,22,40,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={16} color="#C9922B" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Ready to begin?</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>Join our global network</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Explore active job lists across different domains or submit a general dossier for consideration in future openings.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link href="/careers/positions" className="btn-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', fontWeight: 700, textDecoration: 'none', borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>
                    View Open Positions <ChevronRight size={16} />
                  </Link>
                  <Link href="/careers/apply-general" className="submit-dossier-btn" style={{ display: 'block', textAlign: 'center', padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none', color: '#ffffff', borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', transition: 'border-color 0.2s ease' }}>
                    Submit General Dossier
                  </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <Shield size={12} color="rgba(255,255,255,0.4)" />
                  <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    Recruitment Privacy Guard
                  </span>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
      <style>{`
        .submit-dossier-btn:hover {
          border-color: rgba(255,255,255,0.4) !important;
        }
      `}</style>
    </div>
  )
}
