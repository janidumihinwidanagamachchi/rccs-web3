import { MartialShell } from '@/components/martial/MartialShell'
import { PageHero } from '@/components/martial/PageHero'
import { InfoCard } from '@/components/martial/InfoCard'

const EVENTS = [
  {
    title: 'ANNUAL SPORTS DAY',
    description: 'A full day of athletics, team games and house events. 23 OCT 2026.',
  },
  {
    title: 'INTER-HOUSE SWIMMING GALA',
    description: 'Fifty metres, four strokes, eight houses. Lane finals from 9am.',
  },
  {
    title: 'FOOTBALL TOURNAMENT',
    description: 'Knockout rounds all day, house against house.',
  },
  {
    title: 'NETBALL TOURNAMENT',
    description: 'Round-robin first, then the finals on centre court.',
  },
  {
    title: 'CHESS CHAMPIONSHIP',
    description: 'Swiss rounds, then a final table in the library.',
  },
  {
    title: 'CRICKET MATCH',
    description: 'Eight houses, one trophy — the summer trail ends here.',
  },
]

export function EventsPage() {
  return (
    <MartialShell>
      <PageHero
        eyebrow="EXPLORE"
        title="UPCOMING EVENTS"
        description="From assemblies to competitions — everything happening on campus this term."
        button={{ label: 'VIEW CALENDAR', to: '/calendar' }}
      />
      <section className="bg-mf-bg py-20">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e) => (
              <InfoCard key={e.title} title={e.title} description={e.description} />
            ))}
          </div>
        </div>
      </section>
    </MartialShell>
  )
}
