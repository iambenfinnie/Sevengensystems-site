import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/SiteShell'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const SITE_URL = 'https://sevengensystems.com'
const SITE_NAME = 'Seven Gen Systems'
const SITE_DESCRIPTION =
  'Indigenous-majority-owned AI company helping Canadian organizations grow, automate, and learn. AI strategy, workflow automation, voice agents, and hands-on training that actually sticks.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Seven Gen Systems — AI Strategy, Automation & Training',
    template: '%s · Seven Gen Systems',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'AI automation Canada',
    'AI training workshops',
    'Indigenous-owned AI company',
    'AI voice agents',
    'workflow automation',
    'AI strategy consulting',
    'CCIB certified',
    'Indigenous procurement',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Seven Gen Systems — AI Strategy, Automation & Training',
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Gen Systems — AI Strategy, Automation & Training',
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: 'Seven Gen Systems Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    'Indigenous-majority-owned AI automation and training company based in Canada. IBD Verified and CCIB certified, eligible as a prime contractor on federal Indigenous procurement.',
  email: 'contact@sevengensystems.com',
  foundingDate: '2025',
  founders: [
    { '@type': 'Person', name: 'Robert Maclean', jobTitle: 'CEO' },
    { '@type': 'Person', name: 'Ben Finnie', jobTitle: 'Head of Systems & Automation' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
  },
  areaServed: { '@type': 'Country', name: 'Canada' },
  knowsAbout: [
    'Artificial Intelligence',
    'Workflow Automation',
    'AI Training',
    'AI Voice Agents',
    'Indigenous Procurement',
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
