import type { Metadata } from 'next'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Book a Free Discovery Call',
  description: 'Book a free 30-minute discovery call with Seven Gen Systems. No pitch — just an honest conversation about what AI can do for your organization.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Seven Gen Systems', description: 'Book a free 30-minute discovery call. No pitch — just an honest conversation about what AI can do for your organization.', url: '/contact' },
  twitter: { title: 'Contact Seven Gen Systems', description: 'Book a free 30-minute discovery call. No pitch — just an honest conversation about what AI can do for your organization.' },
}

export default function Page() {
  return <ContactContent />
}
