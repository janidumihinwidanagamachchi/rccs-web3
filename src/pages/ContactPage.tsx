import { MartialShell } from '@/components/martial/MartialShell'
import { PageHero } from '@/components/martial/PageHero'
import { MButton } from '@/components/martial/MButton'
import { CONTACT } from '@/data/site'
import { MapPin, Phone, Mail } from 'lucide-react'

export function ContactPage() {
  return (
    <MartialShell>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="CONTACT US"
        description="Questions about events, tickets or activities? Reach out to the school office."
        button={{ label: 'VIEW CALENDAR', to: '/calendar' }}
      />
      <section className="bg-mf-bg py-20">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-mf-accent" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">ADDRESS</p>
                  <p className="mt-1 text-mf-muted">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-mf-accent" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">PHONE</p>
                  <p className="mt-1 text-mf-muted">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-mf-accent" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">EMAIL</p>
                  {CONTACT.emails.map((email) => (
                    <p key={email} className="mt-1 text-mf-muted">
                      <a href={`mailto:${email}`} className="hover:text-white">
                        {email}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <form
              className="bg-mf-panel p-8"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Message sent (demo).')
              }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block font-display text-sm font-bold uppercase text-mf-light">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full border border-mf-line bg-mf-bg px-4 py-3 text-white placeholder:text-mf-muted focus:border-mf-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-display text-sm font-bold uppercase text-mf-light">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full border border-mf-line bg-mf-bg px-4 py-3 text-white placeholder:text-mf-muted focus:border-mf-accent focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block font-display text-sm font-bold uppercase text-mf-light">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full border border-mf-line bg-mf-bg px-4 py-3 text-white placeholder:text-mf-muted focus:border-mf-accent focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <MButton variant="primary" fullWidth>
                SEND MESSAGE
              </MButton>
            </form>
          </div>
        </div>
      </section>
    </MartialShell>
  )
}
