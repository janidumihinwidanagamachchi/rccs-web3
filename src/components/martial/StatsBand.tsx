import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { STATS, img } from '@/data/site'

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0)
  const started = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            if (prefersReduced) {
              setValue(target)
              return
            }
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              setValue(Math.floor(progress * target))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: animated, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl font-black text-white md:text-6xl lg:text-7xl">
        {animated}
        {suffix}
      </p>
      <p className="mt-2 font-display text-sm font-bold uppercase tracking-[3px] text-mf-light">
        {label}
      </p>
    </div>
  )
}

export function StatsBand() {
  return (
    <section
      className="relative bg-mf-band py-20 lg:py-28"
      style={{ backgroundImage: `url(${img('martialarts-home-section-bg5.svg')})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BY THE NUMBERS"
          title="OUR SCHOOL IS A PLACE WHERE EVERY STUDENT CAN DISCOVER THEIR INTERESTS AND TALENTS."
          centered
          className="mx-auto mb-14 text-center"
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
