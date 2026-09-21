import { SiteHeader } from './SiteHeader'
import { FooterCta } from './FooterCta'
import { FooterBottom } from './FooterBottom'
import { NextEventsPopup } from './NextEventsPopup'

interface MartialShellProps {
  children: React.ReactNode
}

export function MartialShell({ children }: MartialShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-mf-bg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <FooterCta />
      <FooterBottom />
      <NextEventsPopup />
    </div>
  )
}
