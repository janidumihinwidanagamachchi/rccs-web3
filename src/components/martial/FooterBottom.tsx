import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { BRAND, CONTACT, FOOTER_NAV } from '@/data/site'

export function FooterBottom() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-mf-bg py-16 lg:py-20">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[3px] text-mf-accent">
              CONTACT
            </p>
            <ul className="space-y-4 text-sm text-mf-light">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mf-accent" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-mf-accent" />
                <span>{CONTACT.phone}</span>
              </li>
              {CONTACT.emails.map((email) => (
                <li key={email} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-mf-accent" />
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[3px] text-mf-accent">
              NAV
            </p>
            <ul className="space-y-2 text-sm text-mf-light">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start lg:justify-center">
            <span className="font-display text-3xl font-black uppercase tracking-wider text-white">
              {BRAND}
            </span>
          </div>

          <div className="flex flex-col items-start sm:items-end lg:items-end">
            <button
              type="button"
              onClick={scrollTop}
              className="group flex flex-col items-center gap-2 text-mf-light hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-mf-line transition-colors group-hover:border-mf-accent group-hover:bg-mf-accent">
                <ArrowUp className="h-5 w-5" />
              </span>
              <span className="font-display text-xs font-bold uppercase tracking-[2px]">GO TO TOP</span>
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-mf-line pt-8 text-center text-sm text-mf-muted">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
