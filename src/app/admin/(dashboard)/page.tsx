import { createClient } from '@/lib/supabase/server'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({ title: 'Admin Dashboard', description: 'SS INTERNATIONAL GROUP admin dashboard', path: '/admin', noIndex: true })

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { count: totalApps } = await supabase.from('applications').select('*', { count: 'exact', head: true })
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const { count: newApps } = await supabase.from('applications').select('*', { count: 'exact', head: true }).gte('created_at', oneWeekAgo)
  const { count: shortlisted } = await supabase.from('applications').select('*', { count: 'exact', head: true }).eq('status', 'shortlisted')
  const { count: openJobs } = await supabase.from('jobs').select('*', { count: 'exact', head: true }).eq('status', 'active')
  const { data: recent } = await supabase.from('applications').select('*').order('created_at', { ascending: false }).limit(10)

  const metrics = [
    { label: 'Total Applications', value: totalApps ?? 0 },
    { label: 'New This Week', value: newApps ?? 0 },
    { label: 'Shortlisted', value: shortlisted ?? 0 },
    { label: 'Open Positions', value: openJobs ?? 0 },
  ]

  const statusColors: Record<string, string> = { new: '#2563eb', reviewing: '#d97706', shortlisted: '#16a34a', rejected: '#dc2626' }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.75rem', color: '#0A1628', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Dashboard Overview</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {metrics.map((m) => (
          <div key={m.label} style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '12px', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', marginBottom: '0.75rem' }}>{m.label}</div>
            <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2.5rem', color: '#0A1628', lineHeight: 1 }}>{m.value}</div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E0D8' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem', color: '#0A1628', margin: 0 }}>Recent Applications</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F4F0' }}>
                {['Name', 'Role', 'Location', 'Date', 'Status'].map((h) => (
                  <th key={h} style={{ padding: '0.875rem 1rem', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(recent || []).map((app: Record<string, unknown>, i: number) => (
                <tr key={app.id as string} style={{ borderBottom: '1px solid #E2E0D8', backgroundColor: i % 2 === 0 ? '#ffffff' : '#FAFAF8' }}>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#0A1628', fontWeight: 500 }}>{app.full_name as string}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.65)' }}>{app.job_title as string}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(10,22,40,0.65)' }}>{app.location as string}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'rgba(10,22,40,0.5)', whiteSpace: 'nowrap' }}>{new Date(app.created_at as string).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  <td style={{ padding: '1rem' }}><span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '100px', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.07em', textTransform: 'uppercase', backgroundColor: `${statusColors[app.status as string]}18`, color: statusColors[app.status as string], border: `1px solid ${statusColors[app.status as string]}40` }}>{app.status as string}</span></td>
                </tr>
              ))}
              {(!recent || recent.length === 0) && (
                <tr><td colSpan={5} style={{ padding: '3rem', textAlign: 'center', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(10,22,40,0.4)' }}>No applications yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
