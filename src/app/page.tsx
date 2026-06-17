import type { Metadata } from 'next'
import { HomeContent } from './HomeContent'

export const metadata: Metadata = {
  title: { absolute: 'Seven Gen Systems — AI That Actually Works for Your Organization' },
  description: 'Indigenous-majority-owned AI company helping Canadian organizations grow, automate, and learn with practical AI — strategy, workflow automation, voice agents, and hands-on training.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Seven Gen Systems — AI That Actually Works', description: 'Indigenous-majority-owned AI company helping Canadian organizations grow, automate, and learn.', url: '/' },
  twitter: { title: 'Seven Gen Systems — AI That Actually Works', description: 'Indigenous-majority-owned AI company helping Canadian organizations grow, automate, and learn.' },
}

export default function Page() {
  return <HomeContent />
}
