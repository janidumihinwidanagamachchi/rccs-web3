import { MartialShell } from '@/components/martial/MartialShell'
import { PageHero } from '@/components/martial/PageHero'
import { ACTIVITIES } from '@/data/site'

export function SportsPage() {
  return (
    <MartialShell>
      <PageHero
        eyebrow="GET ACTIVE"
        title="SPORTS & ACTIVITIES"
        description="Inter-house tournaments, club meets and gala days for every student."
        button={{ label: 'VIEW CALENDAR', to: '/calendar' }}
      />
      <section className="bg-mf-bg py-20">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {ACTIVITIES.map((a) => (
              <article key={a.id} className="bg-mf-panel">
                <img
                  src={a.image}
                  alt=""
                  className="h-64 w-full object-cover"
                  width={600}
                  height={256}
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="font-display text-2xl font-black uppercase text-white">{a.heading}</h3>
                  <p className="mt-3 text-mf-muted">{a.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MartialShell>
  )
}
