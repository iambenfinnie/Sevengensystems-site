import type { Metadata } from 'next'
import { GrowContent } from './GrowContent'

export const metadata: Metadata = {
  title: 'Grow — AI Lead Generation & Revenue Systems',
  description: 'AI-powered lead intake and follow-up, high-converting websites, market-intelligence dashboards, and growth systems for Canadian businesses.',
  alternates: { canonical: '/grow' },
  openGraph: { title: 'Grow — AI Lead Generation & Revenue Systems', description: 'AI-powered lead intake, websites that convert, and growth systems for Canadian businesses.', url: '/grow' },
  twitter: { title: 'Grow — AI Lead Generation & Revenue Systems', description: 'AI-powered lead intake, websites that convert, and growth systems for Canadian businesses.' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Growth & Lead Generation',
  serviceType: 'Lead generation and revenue growth',
  provider: { '@type': 'Organization', name: 'Seven Gen Systems', url: 'https://sevengensystems.com' },
  areaServed: { '@type': 'Country', name: 'Canada' },
  description: 'AI-powered lead intake and follow-up, conversion-focused websites, market-intelligence dashboards, content systems, and growth advisory.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <GrowContent />
    </>
  )
}
