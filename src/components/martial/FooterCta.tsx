import { Calendar, MapPin } from 'lucide-react'
import { IconBox } from './IconBox'
import { MButton } from './MButton'
import { FOOTER_CTA, NEXT_EVENT } from '@/data/site'

export function FooterCta() {
  const parts = FOOTER_CTA.title.split(FOOTER_CTA.goldWord)

  return (
    <section className="bg-mf-bg py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-[60px]">
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="text-mf-gold">{FOOTER_CTA.goldWord}</span>
                {parts[1]}
              </>
            ) : (
              FOOTER_CTA.title
            )}
          </h2>

          <div className="bg-mf-panel p-8 lg:p-10">
            <p className="mb-6 font-display text-lg font-bold uppercase tracking-[3px] text-mf-accent">
              {NEXT_EVENT.label}
            </p>
            <IconBox
              iconNode={<Calendar className="h-8 w-8 text-mf-accent" />}
              title={NEXT_EVENT.date}
              description={NEXT_EVENT.time}
              className="mb-4"
            />
            <IconBox
              iconNode={<MapPin className="h-8 w-8 text-mf-accent" />}
              title={NEXT_EVENT.location}
              description="Main campus"
              className="mb-6"
            />
            <div className="my-6 h-px bg-mf-line" />
            <MButton to="/calendar" variant="primary" fullWidth>
              CHECK THE SCHEDULE
            </MButton>
          </div>
        </div>
      </div>
    </section>
  )
}
