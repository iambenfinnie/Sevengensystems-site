import type { Metadata } from 'next'
import { AutomateContent } from './AutomateContent'

export const metadata: Metadata = {
  title: 'Automate — AI Voice Agents & Workflow Automation',
  description: 'AI voice agents and receptionists, workflow automation for quoting, scheduling and invoicing, CRM integration, and custom AI tools built for your operation.',
  alternates: { canonical: '/automate' },
  openGraph: { title: 'Automate — AI Voice Agents & Workflow Automation', description: 'AI voice agents, workflow automation, CRM integration, and custom AI tools for your operation.', url: '/automate' },
  twitter: { title: 'Automate — AI Voice Agents & Workflow Automation', description: 'AI voice agents, workflow automation, CRM integration, and custom AI tools for your operation.' },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation & Operations',
  serviceType: 'Workflow automation and AI voice agents',
  provider: { '@type': 'Organization', name: 'Seven Gen Systems', url: 'https://sevengensystems.com' },
  areaServed: { '@type': 'Country', name: 'Canada' },
  description: 'AI voice agents and receptionists, workflow automation for quoting/scheduling/invoicing, CRM setup, document processing, and custom AI tooling.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <AutomateContent />
    </>
  )
}
