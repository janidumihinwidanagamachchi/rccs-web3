import { Calendar, MapPin } from 'lucide-react'
import { IconBox } from './IconBox'
import { MButton } from './MButton'
import { NEXT_EVENT, img } from '@/data/site'

export function Hero() {
  return (
    <section className="relative min-h-[900px] bg-mf-bg lg:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img('martialarts-home-section-bg1.webp')})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[rgba(24,24,28,0.2)]"
        aria-hidden="true"
      />
      <img
        src={img('martialarts-home-section-ovrl1.svg')}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full max-w-2xl"
        loading="eager"
      />

      <div className="relative z-20 mx-auto flex h-full min-h-[900px] max-w-[1260px] flex-col justify-center px-4 py-40 sm:px-6 lg:min-h-screen lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl lg:text-[92px]">
              DISCOVER WHAT'S ON <span className="text-mf-gold">&</span> GET INVOLVED
            </h1>
            <img
              src={img('martialarts-home-arrow.svg')}
              alt=""
              className="mt-8 hidden h-20 w-auto md:block"
              loading="eager"
            />
          </div>

          <div className="bg-mf-panel/90 p-8 backdrop-blur-sm lg:p-10">
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
              {NEXT_EVENT.button}
            </MButton>
          </div>
        </div>
      </div>
    </section>
  )
}
