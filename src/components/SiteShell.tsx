'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { ChatWidget } from './ChatWidget'

/**
 * Renders the global site chrome (nav, footer, chat) for marketing pages,
 * but stays out of the way on full-bleed demo routes (/demo/*) so each
 * design direction can own the entire viewport.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname?.startsWith('/demo')

  if (bare) return <>{children}</>

  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
