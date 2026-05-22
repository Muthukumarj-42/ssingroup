'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginClient() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      router.push('/admin')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#ffffff', border: '1px solid #E2E0D8', borderRadius: '16px', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.1rem', color: '#0A1628', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>SS International Group</div>
          <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1.75rem', color: '#0A1628', letterSpacing: '-0.02em' }}>Admin Access</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', marginBottom: '0.5rem' }} htmlFor="admin-email">Email</label>
            <input id="admin-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" placeholder="admin@ssgroup.com" />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10,22,40,0.5)', marginBottom: '0.5rem' }} htmlFor="admin-password">Password</label>
            <input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" placeholder="••••••••" />
          </div>
          {error && <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#dc2626', marginBottom: '1rem' }}>{error}</p>}
          <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(10,22,40,0.35)', textAlign: 'center', marginTop: '1.5rem' }}>Authorized personnel only</p>
      </div>
    </div>
  )
}
