import { MartialShell } from '@/components/martial/MartialShell'
import { PageHero } from '@/components/martial/PageHero'
import { Megaphone } from 'lucide-react'

const NOTICES = [
  {
    title: 'SPORTS DAY VOLUNTEER SIGN-UPS CLOSE TOMORROW',
    body: 'We still need helpers for timing and refreshments. Sign up at the sports office before 3pm.',
  },
  {
    title: 'CRICKET TEAM LISTS ARE UP',
    body: 'House captains have posted the team lists outside the sports office. Check your name before Friday.',
  },
  {
    title: 'BUSES LEAVE AT 7:15 ON SPORTS DAY',
    body: 'If you are competing, be at the main gate by 7:10. Buses leave at 7:15 sharp.',
  },
  {
    title: 'TERM EXAM SCHEDULE RELEASED',
    body: 'The end-of-term exam timetable is now available on the student portal.',
  },
]

export function AnnouncementsPage() {
  return (
    <MartialShell>
      <PageHero
        eyebrow="STAY INFORMED"
        title="ANNOUNCEMENTS"
        description="Latest notices and updates from staff and house captains."
        button={{ label: 'VIEW EVENTS', to: '/events' }}
      />
      <section className="bg-mf-bg py-20">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {NOTICES.map((n) => (
              <article key={n.title} className="bg-mf-panel p-8">
                <div className="mb-3 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[3px] text-mf-accent">
                  <Megaphone className="h-4 w-4" />
                  NOTICE
                </div>
                <h3 className="font-display text-2xl font-black uppercase text-white">{n.title}</h3>
                <p className="mt-3 text-mf-muted">{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MartialShell>
  )
}
