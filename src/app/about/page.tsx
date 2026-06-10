import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About — Indigenous-Owned AI Company',
  description: 'Seven Gen Systems is an Indigenous-majority-owned AI automation and training company. Meet the team and the Seven Generations principle behind how we build.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Seven Gen Systems', description: 'An Indigenous-majority-owned AI automation and training company. Meet the team and the Seven Generations principle behind how we build.', url: '/about' },
  twitter: { title: 'About Seven Gen Systems', description: 'An Indigenous-majority-owned AI automation and training company. Meet the team and the Seven Generations principle behind how we build.' },
}

export default function Page() {
  return <AboutContent />
}
