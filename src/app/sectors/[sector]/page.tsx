import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const sectors: Record<string, {
  name: string
  tagline: string
  description: string
  details: string[]
  image: string
  stats: { label: string; value: string }[]
}> = {
  'ss-builders': {
    name: 'SS Builders',
    tagline: 'Engineering the Future with Sustainable Infrastructure',
    description: 'SS Builders is the construction and infrastructure arm of SS INTERNATIONAL GROUP. We deliver large-scale urban development projects across emerging global hubs, combining engineering precision with sustainable design principles.',
    details: [
      'Large-scale residential and commercial construction across Tamil Nadu and beyond',
      'Infrastructure development including roads, bridges, and industrial facilities',
      'Sustainable green building practices with LEED-aligned standards',
      'End-to-end project management from design to delivery',
      'Partnerships with top-tier architects and structural engineers',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    stats: [
      { label: 'Projects Completed', value: '120+' },
      { label: 'States Active', value: '8' },
      { label: 'Years in Construction', value: '25+' },
    ],
  },
  'ss-real-estate': {
    name: 'SS Real Estate',
    tagline: 'Premium Properties Across Prime Locations',
    description: 'SS Real Estate develops luxury residential and commercial properties in prime metropolitan locations across India, UAE, and USA. Our portfolio spans residential towers, commercial complexes, and mixed-use developments.',
    details: [
      'Luxury residential apartments and villa communities',
      'Grade-A commercial office spaces',
      'Mixed-use developments in high-growth corridors',
      'Property management and asset optimization',
      'International real estate investment advisory',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    stats: [
      { label: 'Properties Developed', value: '85+' },
      { label: 'Countries Active', value: '3' },
      { label: 'Total Value', value: '₹1,200Cr+' },
    ],
  },
  'ss-jewellery': {
    name: 'SS Jewellery',
    tagline: 'Exquisite Craftsmanship for the Global Elite',
    description: 'SS Jewellery crafts and exports high-end jewellery pieces sourced ethically and designed for the global luxury market. Our artisans blend traditional Indian craftsmanship with contemporary design.',
    details: [
      'Fine gold and diamond jewellery design and manufacturing',
      'Ethical sourcing of gemstones and precious metals',
      'Export to UAE, USA, Singapore, and Europe',
      'Custom bridal and corporate gifting collections',
      'BIS-hallmarked and internationally certified products',
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    stats: [
      { label: 'Export Markets', value: '12' },
      { label: 'Artisans Employed', value: '200+' },
      { label: 'Collections', value: '40+' },
    ],
  },
  'ss-organics': {
    name: 'SS Organics',
    tagline: 'Promoting Sustainable Agriculture and Premium Organic Exports',
    description: 'SS Organics champions sustainable farming through ethically sourced organic products. We work with farmers across Tamil Nadu to produce and export premium organic goods to international markets.',
    details: [
      'Organic spices, grains, and agricultural produce',
      'Direct farmer partnerships across Tamil Nadu',
      'USDA and EU organic certification compliance',
      'Cold-chain logistics for international export',
      'Sustainable packaging and zero-waste practices',
    ],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
    stats: [
      { label: 'Farmer Partners', value: '500+' },
      { label: 'Export Countries', value: '18' },
      { label: 'Organic Products', value: '60+' },
    ],
  },
  'ss-garments': {
    name: 'SS Garments',
    tagline: 'Supplying World-Leading Fashion Houses with Precision-Manufactured Apparel',
    description: 'SS Garments is a premier textile and garment manufacturing and export company. We supply fashion houses across Europe, USA, and the Middle East with high-quality, ethically manufactured apparel.',
    details: [
      'Precision garment manufacturing for global fashion brands',
      'Textile production across cotton, linen, and synthetic fabrics',
      'Compliance with international labor and environmental standards',
      'End-to-end supply chain from raw material to finished product',
      'Export to 20+ countries including UK, Germany, USA, and UAE',
    ],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
    stats: [
      { label: 'Units / Month', value: '2M+' },
      { label: 'Export Countries', value: '20+' },
      { label: 'Global Clients', value: '50+' },
    ],
  },
  'ss-finance': {
    name: 'SS Finance',
    tagline: 'Strategic Capital Management and Global Investment Advisory',
    description: 'SS Finance provides strategic capital management, investment advisory, and financial services to institutional and high-net-worth clients across India, UAE, and USA. We manage diversified multi-asset portfolios with a focus on long-term value creation.',
    details: [
      'Portfolio management across equity, fixed income, and alternatives',
      'Investment advisory for institutional and HNWI clients',
      'Cross-border M&A and transaction advisory',
      'Real estate investment trusts and fund management',
      'Regulatory compliance across Indian, UAE, and US markets',
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    stats: [
      { label: 'AUM', value: '$800M+' },
      { label: 'Global Markets', value: '14' },
      { label: 'Institutional Clients', value: '80+' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(sectors).map(sector => ({ sector }))
}

export default function SectorPage({ params }: { params: { sector: string } }) {
  const data = sectors[params.sector]
  if (!data) notFound()

  return (
    <main className="pt-[72px] pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image src={data.image} alt={data.name}
          fill className="object-cover" priority />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-content pb-12">
            <p className="section-label mb-3">SS INTERNATIONAL GROUP</p>
            <h1 className="font-display font-black text-5xl text-white uppercase mb-2 brand-name">
              {data.name}
            </h1>
            <p className="text-white/70 text-lg max-w-xl">{data.tagline}</p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy py-8">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-12">
            {data.stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display font-black text-4xl text-gold">{s.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-caps mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream-warm">
        <div className="container-content max-w-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-3">About</p>
              <h2 className="font-display font-black text-3xl text-navy uppercase mb-6 brand-name">
                {data.name}
              </h2>
              <p className="text-navy/70 text-base leading-relaxed mb-8">
                {data.description}
              </p>
              <Link href="/contact" className="btn-primary">
                Enquire About {data.name}
              </Link>
            </div>

            <div className="card">
              <h3 className="font-display font-bold text-lg text-navy uppercase mb-4 brand-name">
                What We Do
              </h3>
              <ul className="space-y-3">
                {data.details.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2
                      flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container-content py-8">
        <Link href="/portfolio"
          className="text-navy/50 text-sm hover:text-gold transition-colors
            flex items-center gap-2">
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  )
}
