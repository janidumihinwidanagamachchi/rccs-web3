import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { MButton } from './MButton'
import { POPUP } from '@/data/site'

export function NextEventsPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('rccswebcomp-popup-dismissed')
    if (dismissed) return
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    if (!value) sessionStorage.setItem('rccswebcomp-popup-dismissed', '1')
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/40 data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-mf-panel p-8 shadow-2xl outline-none data-[state=open]:animate-slide-in-right sm:h-auto sm:max-h-[80vh] sm:p-10"
          aria-describedby="popup-desc"
        >
          <Dialog.Title className="font-display text-3xl font-black uppercase text-white">
            {POPUP.title}
          </Dialog.Title>
          <p id="popup-desc" className="mt-2 text-sm text-mf-muted">
            A quick look at what is coming up this week.
          </p>

          <div className="mt-8 space-y-6">
            {POPUP.rows.map((row) => (
              <div key={row.label}>
                <p className="font-display text-sm font-bold uppercase tracking-[3px] text-mf-accent">
                  {row.label}
                </p>
                <p className="mt-1 text-mf-light">{row.items}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <MButton to="/contact" variant="primary" fullWidth>
              CONTACT US
            </MButton>
          </div>

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center text-white hover:text-mf-accent"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
