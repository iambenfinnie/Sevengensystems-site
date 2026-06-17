import type { Metadata } from 'next'
import { LearnContent } from './LearnContent'

export const metadata: Metadata = {
  title: 'Learn — AI Training & Workshops',
  description: 'Hands-on AI training and workshops for teams — AI Foundations, applied AI for your industry, white-label workshops, and grant-funded program design.',
  alternates: { canonical: '/learn' },
  openGraph: { title: 'Learn — AI Training & Workshops', description: 'Hands-on AI training and workshops — AI Foundations, applied AI for your industry, and grant-funded programs.', url: '/learn' },
  twitter: { title: 'Learn — AI Training & Workshops', description: 'Hands-on AI training and workshops — AI Foundations, applied AI for your industry, and grant-funded programs.' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Training & Workshops',
  serviceType: 'AI education and training',
  provider: { '@type': 'Organization', name: 'Seven Gen Systems', url: 'https://sevengensystems.com' },
  areaServed: { '@type': 'Country', name: 'Canada' },
  description: 'AI Foundations workshop, applied AI for your industry, ongoing team enablement, white-label workshops, and grant-funded program design.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <LearnContent />
    </>
  )
}
