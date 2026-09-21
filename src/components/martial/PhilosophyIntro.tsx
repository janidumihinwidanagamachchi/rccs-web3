import { SectionHeading } from './SectionHeading'

interface PhilosophyIntroProps {
  eyebrow: string
  title: string
  bg?: string
}

export function PhilosophyIntro({ eyebrow, title, bg }: PhilosophyIntroProps) {
  return (
    <section className="relative overflow-hidden bg-mf-bg py-20 lg:py-28">
      {bg ? (
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-top bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />
      ) : null}
      <div className="relative mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
      </div>
    </section>
  )
}
