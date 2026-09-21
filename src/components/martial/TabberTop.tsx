import * as Tabs from '@radix-ui/react-tabs'
import { MButton } from './MButton'
import { TOP_TABS } from '@/data/site'
import { cn } from '@/lib/utils'

export function TabberTop() {
  return (
    <section className="relative bg-mf-bg py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <Tabs.Root defaultValue={TOP_TABS[0].id} className="w-full">
          <Tabs.List
            className="mb-10 flex flex-wrap gap-6 border-b border-mf-line pb-4 lg:mb-14"
            aria-label="School sections"
          >
            {TOP_TABS.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'group flex items-center gap-3 font-display text-lg font-extrabold uppercase text-mf-muted transition-colors hover:text-white data-[state=active]:text-mf-accent',
                )}
              >
                <img
                  src={tab.icon}
                  alt=""
                  className="h-8 w-8 object-contain opacity-60 grayscale transition-all group-data-[state=active]:opacity-100 group-data-[state=active]:grayscale-0"
                  loading="lazy"
                />
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {TOP_TABS.map((tab) => (
            <Tabs.Content
              key={tab.id}
              value={tab.id}
              className="focus-visible:outline-none"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="order-2 lg:order-1">
                  <h3 className="font-display text-3xl font-black uppercase leading-tight text-white md:text-4xl lg:text-[36px]">
                    {tab.heading}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-mf-muted">{tab.lead}</p>
                  <div className="mt-8">
                    <MButton to={tab.href}>{tab.button}</MButton>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={tab.image}
                    alt=""
                    className="w-full object-cover"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
