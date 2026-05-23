'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { submitApplication } from '@/app/careers/[slug]/apply/actions'
import { Upload, X, Shield, ChevronRight } from 'lucide-react'

export default function ApplyGeneralPage() {
  const [step, setStep] = useState(1)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeError, setResumeError] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const stepInfo = [
    { num: 1, label: 'Personal Info' },
    { num: 2, label: 'Experience' },
    { num: 3, label: 'Documents' },
  ]

  const handleResumeChange = (file: File) => {
    setResumeError('')
    const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) { setResumeError('Only PDF or DOCX files allowed.'); return }
    if (file.size > 5 * 1024 * 1024) { setResumeError('File must be under 5MB.'); return }
    setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitting(true)
    try {
      const fd = new FormData(formRef.current!)
      if (resumeFile) fd.set('resume', resumeFile)
      fd.set('job_id', '') // general application
      fd.set('job_title', 'General Candidacy')
      await submitApplication(fd)
    } catch (err) {
      console.error(err)
      setSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = { width: '100%', height: '48px', border: '1px solid #E2E0D8', borderRadius: '4px', padding: '0 1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', backgroundColor: '#ffffff', outline: 'none', boxSizing: 'border-box' }
  const labelStyle: React.CSSProperties = { display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', marginBottom: '0.5rem' }

  return (
    <div style={{ backgroundColor: '#F5F4F0', paddingTop: '72px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container-content" style={{ paddingTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '25fr 75fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left Sidebar */}
          <aside style={{ position: 'sticky', top: '96px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '2rem' }}>
              {stepInfo.map((s, i) => (
                <div key={s.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: i < stepInfo.length - 1 ? '1.5rem' : 0, position: 'relative' }}>
                  {i < stepInfo.length - 1 && <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '2px', background: 'repeating-linear-gradient(to bottom, #C9922B 0, #C9922B 6px, transparent 6px, transparent 12px)', opacity: 0.3 }} />}
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: step >= s.num ? '#0A1628' : 'transparent', border: `2px solid ${step >= s.num ? '#0A1628' : '#E2E0D8'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.75rem', color: step >= s.num ? '#ffffff' : 'rgba(10,22,40,0.35)' }}>{s.num}</span>
                  </div>
                  <div style={{ paddingTop: '4px' }}>
                    <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.75rem', color: step >= s.num ? '#0A1628' : 'rgba(10,22,40,0.35)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B', display: 'block', marginBottom: '0.5rem' }}>Submission Mode</span>
              <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.875rem', color: '#0A1628', marginBottom: '0.25rem' }}>General Candidacy</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)' }}>Global Database Registry</div>
            </div>

            <div style={{ backgroundColor: '#0A1628', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Submit your details directly into our confidential executive talent pipeline.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Shield size={12} color="#C9922B" />
                <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Confidential Process</span>
              </div>
            </div>
          </aside>

          {/* Main Form */}
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #E2E0D8', padding: '2.5rem', boxShadow: '0 2px 12px rgba(10,22,40,0.04)' }}>
              <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '1.25rem', color: '#0A1628', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>General Candidacy Dossier</h1>
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.5rem', color: '#0A1628', margin: '1.5rem 0 0.5rem', letterSpacing: '-0.01em' }}>Personal Details</h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.5)', marginBottom: '2rem' }}>Tell us about yourself.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {[{id:'full_name',label:'Full Name',placeholder:'e.g. Julian Alexander',type:'text',required:true},{id:'email',label:'Email Address',placeholder:'j.alexander@example.com',type:'email',required:true},{id:'phone',label:'Phone Number',placeholder:'+91 000 000 0000',type:'tel',required:true},{id:'location',label:'Current Location',placeholder:'City, Country',type:'text',required:true}].map((field) => (
                        <div key={field.id}><label style={labelStyle} htmlFor={field.id}>{field.label}</label><input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} style={inputStyle} /></div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                      <button type="button" onClick={() => setStep(2)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Next Step <ChevronRight size={16} /></button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.5rem', color: '#0A1628', margin: '1.5rem 0 0.5rem', letterSpacing: '-0.01em' }}>Experience</h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.5)', marginBottom: '2rem' }}>Your professional background.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div><label style={labelStyle} htmlFor="years_experience">Years of Experience</label><select id="years_experience" name="years_experience" style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}><option value="">Select...</option>{['0-2 years','3-5 years','6-9 years','10-14 years','15+ years'].map((v) => <option key={v} value={v}>{v}</option>)}</select></div>
                      <div><label style={labelStyle} htmlFor="current_role">Current / Last Role</label><input id="current_role" name="current_role" type="text" placeholder="e.g. Senior VP at Capital Trust" style={inputStyle} /></div>
                      <div><label style={labelStyle} htmlFor="linkedin_url">LinkedIn Profile URL <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label><input id="linkedin_url" name="linkedin_url" type="url" placeholder="https://linkedin.com/in/yourname" style={inputStyle} /></div>
                      <div><label style={labelStyle} htmlFor="cover_note">Cover Note</label><textarea id="cover_note" name="cover_note" rows={5} placeholder="Describe your strategic capabilities and how you wish to drive growth." maxLength={500} style={{ ...inputStyle, height: 'auto', padding: '0.75rem 1rem', resize: 'vertical' }} /></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                      <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'rgba(10,22,40,0.5)' }}>← Previous</button>
                      <button type="button" onClick={() => setStep(3)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Next Step <ChevronRight size={16} /></button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.5rem', color: '#0A1628', margin: '1.5rem 0 0.5rem', letterSpacing: '-0.01em' }}>Documents</h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.5)', marginBottom: '2rem' }}>Upload your resume and portfolio.</p>

                    <div
                      onClick={() => document.getElementById('resume-input')?.click()}
                      onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleResumeChange(f) }}
                      onDragOver={(e) => e.preventDefault()}
                      style={{ border: '2px dashed #0A1628', borderRadius: '8px', height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: '#FAFAF8', marginBottom: '0.75rem', transition: 'border-color 0.2s ease' }}>
                      <input id="resume-input" type="file" accept=".pdf,.docx" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleResumeChange(f) }} />
                      {resumeFile ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.875rem', color: '#0A1628' }}>{resumeFile.name}</span>
                          <button type="button" onClick={(e) => { e.stopPropagation(); setResumeFile(null) }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(10,22,40,0.4)', display: 'flex' }}><X size={16} /></button>
                        </div>
                      ) : (
                        <>
                          <Upload size={28} color="#C9922B" style={{ marginBottom: '0.75rem' }} />
                          <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem', color: '#0A1628', marginBottom: '0.375rem' }}>Drag &amp; drop your resume</div>
                          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)' }}>PDF or DOCX, max 5MB</div>
                        </>
                      )}
                    </div>
                    {resumeError && <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: '#dc2626', marginBottom: '1rem' }}>{resumeError}</p>}

                    <div style={{ marginBottom: '1.25rem' }}><label style={labelStyle} htmlFor="portfolio_url">Portfolio URL <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label><input id="portfolio_url" name="portfolio_url" type="url" placeholder="https://yourportfolio.com" style={inputStyle} /></div>

                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', marginBottom: '2rem' }}>
                      <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: '16px', height: '16px', marginTop: '2px', accentColor: '#0A1628', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.65)', lineHeight: 1.5 }}>I agree to the <a href="/under-construction" style={{ color: '#C9922B' }}>Privacy Charter</a> and <a href="/under-construction" style={{ color: '#C9922B' }}>Terms of Engagement</a></span>
                    </label>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button type="button" onClick={() => setStep(2)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.875rem', color: 'rgba(10,22,40,0.5)' }}>← Previous</button>
                      <button type="submit" className="btn-gold" disabled={!agreed || submitting} style={{ opacity: (!agreed || submitting) ? 0.6 : 1, cursor: (!agreed || submitting) ? 'not-allowed' : 'pointer' }}>
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
