import Link from 'next/link'

export const metadata = {
  title: 'Page Under Construction | SS INTERNATIONAL GROUP',
}

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-warm py-24">
      <div className="text-center max-w-lg px-6">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center
          justify-center mx-auto mb-6">
          <span className="text-3xl">🚧</span>
        </div>
        <p className="section-label mb-3">Coming Soon</p>
        <h1 className="font-display font-black text-4xl text-navy mb-4">
          Page Under Construction
        </h1>
        <p className="text-navy/60 text-lg mb-8">
          We are building something exceptional here.
          Check back soon or contact us directly.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}
