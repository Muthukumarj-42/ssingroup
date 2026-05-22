'use client'
import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Search, Download, ChevronDown, ChevronUp } from 'lucide-react'
import type { Application } from '@/lib/types'

const statusColors: Record<string, string> = { new: '#2563eb', reviewing: '#d97706', shortlisted: '#16a34a', rejected: '#dc2626' }

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [statusUpdates, setStatusUpdates] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  const fetchApps = useCallback(async () => {
    const supabase = createClient()
    let q = supabase.from('applications').select('*').order('created_at', { ascending: false })
    if (statusFilter) q = q.eq('status', statusFilter)
    const { data } = await q
    setApps((data as Application[]) || [])
    setLoading(false)
  }, [statusFilter])

  useEffect(() => { fetchApps() }, [fetchApps])

  const filtered = apps.filter((a) => !search || `${a.full_name} ${a.job_title} ${a.email}`.toLowerCase().includes(search.toLowerCase()))

  const saveApp = async (id: string) => {
    const supabase = createClient()
    await supabase.from('applications').update({ status: statusUpdates[id] || apps.find((a) => a.id === id)?.status, admin_notes: notes[id] || '' }).eq('id', id)
    fetchApps()
  }

  const downloadResume = async (path: string) => {
    const supabase = createClient()
    const { data } = await supabase.storage.from('resumes').createSignedUrl(path, 60)
    if (data?.signedUrl) window.open(data.signedUrl, '_blank')
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.75rem', color: '#0A1628', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>All Applications</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(10,22,40,0.35)' }} />
          <input className="form-input" placeholder="Search by name, role, email..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ paddingLeft: '2.25rem' }} />
        </div>
        <select className="form-input" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ width: '200px', appearance: 'none', cursor: 'pointer' }}>
          <option value="">All Statuses</option>
          {['new', 'reviewing', 'shortlisted', 'rejected'].map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '12px', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontFamily: 'var(--font-inter)', color: 'rgba(10,22,40,0.4)' }}>Loading...</div>
        ) : (
          <>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F5F4F0' }}>
                    {['', 'Name', 'Role', 'Location', 'Date', 'Status', 'Resume'].map((h) => (
                      <th key={h} style={{ padding: '0.875rem 1rem', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((app, i) => (
                    <>
                      <tr key={app.id} style={{ borderBottom: expanded === app.id ? 'none' : '1px solid #E2E0D8', backgroundColor: i % 2 === 0 ? '#ffffff' : '#FAFAF8', cursor: 'pointer' }} onClick={() => setExpanded(expanded === app.id ? null : app.id)}>
                        <td style={{ padding: '1rem 0.5rem 1rem 1rem', color: 'rgba(10,22,40,0.4)' }}>{expanded === app.id ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</td>
                        <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', fontWeight: 500 }}>{app.full_name}</td>
                        <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.65)' }}>{app.job_title}</td>
                        <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.65)' }}>{app.location}</td>
                        <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.5)', whiteSpace: 'nowrap' }}>{new Date(app.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                        <td style={{ padding: '1rem' }}><span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '100px', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.07em', textTransform: 'uppercase', backgroundColor: `${statusColors[app.status]}18`, color: statusColors[app.status], border: `1px solid ${statusColors[app.status]}40` }}>{app.status}</span></td>
                        <td style={{ padding: '1rem' }}>{app.resume_path && <button type="button" onClick={(e) => { e.stopPropagation(); downloadResume(app.resume_path!) }} style={{ background: 'none', border: '1px solid #E2E0D8', borderRadius: '6px', padding: '0.375rem 0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#0A1628' }}><Download size={13} />CV</button>}</td>
                      </tr>
                      {expanded === app.id && (
                        <tr key={`${app.id}-expanded`} style={{ borderBottom: '1px solid #E2E0D8' }}>
                          <td colSpan={7} style={{ padding: '1.5rem 2rem', backgroundColor: '#F5F4F0' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                              <div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Contact</p>
                                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', marginBottom: '0.3rem' }}>{app.email}</p>
                                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', marginBottom: '1rem' }}>{app.phone}</p>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Cover Note</p>
                                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.7)', lineHeight: 1.6 }}>{app.cover_note || 'Not provided'}</p>
                              </div>
                              <div>
                                <div style={{ marginBottom: '1rem' }}>
                                  <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Update Status</label>
                                  <select className="form-input" value={statusUpdates[app.id] || app.status} onChange={(e) => setStatusUpdates((p) => ({ ...p, [app.id]: e.target.value }))} style={{ appearance: 'none', cursor: 'pointer' }}>
                                    {['new', 'reviewing', 'shortlisted', 'rejected'].map((s) => <option key={s} value={s}>{s}</option>)}
                                  </select>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                  <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(10,22,40,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Admin Notes</label>
                                  <textarea className="form-input" rows={3} value={notes[app.id] ?? app.admin_notes ?? ''} onChange={(e) => setNotes((p) => ({ ...p, [app.id]: e.target.value }))} style={{ height: 'auto', padding: '0.625rem 0.875rem', resize: 'vertical' }} />
                                </div>
                                <button type="button" className="btn-primary" onClick={() => saveApp(app.id)} style={{ padding: '0.625rem 1.5rem', fontSize: '0.8125rem' }}>Save Changes</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                  {filtered.length === 0 && <tr><td colSpan={7} style={{ padding: '3rem', textAlign: 'center', fontFamily: 'var(--font-inter)', color: 'rgba(10,22,40,0.4)' }}>No applications found.</td></tr>}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
