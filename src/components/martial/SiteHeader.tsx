import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BRAND, NAV, CTA_LABEL, CTA_HREF } from '@/data/site'
import { MButton } from './MButton'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1260px] items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-2xl font-black uppercase tracking-wider text-white">
          {BRAND}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'group relative font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-mf-accent',
                location.pathname === item.href && 'text-mf-accent',
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-mf-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MButton to={CTA_HREF} variant="primary">
            {CTA_LABEL}
          </MButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-80 max-w-full bg-mf-bg p-6 shadow-2xl lg:hidden">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-xl font-black uppercase text-white">{BRAND}</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'font-display text-lg font-semibold uppercase text-mf-light transition-colors hover:text-mf-accent',
                    location.pathname === item.href && 'text-mf-accent',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4">
                <MButton to={CTA_HREF} variant="primary" fullWidth>
                  {CTA_LABEL}
                </MButton>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
