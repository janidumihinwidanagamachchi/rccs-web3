import { MartialShell } from '@/components/martial/MartialShell'
import { PageHero } from '@/components/martial/PageHero'
import { Calendar } from 'lucide-react'

const SCHEDULE = [
  { day: 'MONDAY', events: 'Morning assembly, Junior sport training' },
  { day: 'TUESDAY', events: 'Club meetings, Music rehearsal' },
  { day: 'WEDNESDAY', events: 'Inter-house practice, Debate club' },
  { day: 'THURSDAY', events: 'Senior sport, Drama rehearsal' },
  { day: 'FRIDAY', events: 'House competitions, Assembly' },
  { day: 'SATURDAY', events: 'Gala days, Matches, Performances' },
  { day: 'SUNDAY', events: 'Rest day' },
]

export function CalendarPage() {
  return (
    <MartialShell>
      <PageHero
        eyebrow="PLAN AHEAD"
        title="SCHOOL CALENDAR"
        description="A week-by-week look at what is happening around campus."
        button={{ label: 'BACK TO HOME', to: '/' }}
      />
      <section className="bg-mf-bg py-20">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {SCHEDULE.map((row) => (
              <div
                key={row.day}
                className="flex flex-col gap-2 border-b border-mf-line py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex w-40 shrink-0 items-center gap-3 font-display text-lg font-bold uppercase text-mf-accent">
                  <Calendar className="h-5 w-5" />
                  {row.day}
                </div>
                <p className="text-mf-light">{row.events}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MartialShell>
  )
}
