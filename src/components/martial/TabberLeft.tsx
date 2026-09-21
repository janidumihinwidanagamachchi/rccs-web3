import * as Tabs from '@radix-ui/react-tabs'
import { SectionHeading } from './SectionHeading'
import { ProgressBar } from './ProgressBar'
import { ACTIVITIES } from '@/data/site'
import { cn } from '@/lib/utils'

export function TabberLeft() {
  return (
    <section className="relative bg-mf-bg py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="ACTIVITIES FOR EVERY STUDENT"
          centered
          className="mx-auto mb-14 text-center"
        />

        <Tabs.Root defaultValue={ACTIVITIES[0].id} orientation="vertical" className="flex flex-col gap-8 lg:flex-row">
          <Tabs.List
            className="flex shrink-0 flex-row gap-4 overflow-x-auto border-b border-mf-line pb-4 lg:w-64 lg:flex-col lg:border-b-0 lg:border-l lg:border-mf-line lg:pb-0 lg:pl-0"
            aria-label="Activities"
          >
            {ACTIVITIES.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'whitespace-nowrap px-4 py-3 text-left font-display text-base font-extrabold uppercase text-mf-muted transition-colors hover:text-white data-[state=active]:border-l-4 data-[state=active]:border-mf-accent data-[state=active]:pl-3 data-[state=active]:text-white lg:data-[state=active]:pl-3',
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {ACTIVITIES.map((tab) => (
            <Tabs.Content
              key={tab.id}
              value={tab.id}
              className="flex-1 focus-visible:outline-none"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-display text-3xl font-black uppercase leading-tight text-white md:text-4xl lg:text-[36px]">
                    {tab.heading}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-mf-muted">{tab.description}</p>
                  <div className="mt-8 space-y-5">
                    {tab.bars.map((bar) => (
                      <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
                    ))}
                  </div>
                </div>
                <img
                  src={tab.image}
                  alt=""
                  className="w-full object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
