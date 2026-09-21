import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { TEAM, img } from '@/data/site'
import { cn } from '@/lib/utils'

export function TeamSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => cards.indexOf(e.target as HTMLElement))
          .sort((a, b) => a - b)
        if (visible.length) setActive(visible[0])
      },
      { root: track, threshold: 0.5 },
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (index: number) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <section className="relative overflow-hidden bg-mf-bg py-20 lg:py-28">
      <img
        src={img('martialarts-pricing-section-ovrl1.svg')}
        alt=""
        className="pointer-events-none absolute -top-10 right-0 w-64 opacity-40 lg:w-96"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR TEAM"
          title="EXPERIENCE, PASSION, AND COMMITMENT — OUR EXPERT TEAM READY TO EMPOWER YOUR JOURNEY"
          centered
          className="mx-auto mb-14 text-center"
        />

        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 scrollbar-hide sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)]"
            >
              <img
                src={member.image}
                alt=""
                className="h-80 w-full object-cover"
                width={600}
                height={320}
                loading="lazy"
              />
              <div className="pt-6">
                <p className="font-display text-sm font-bold uppercase tracking-[3px] text-mf-accent">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-black uppercase text-white">
                  {member.name}
                </h3>
                <p className="mt-3 text-mf-muted">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TEAM.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                active === i ? 'bg-mf-accent' : 'bg-mf-dot',
              )}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
