import { SectionHeading } from './SectionHeading'
import { MButton } from './MButton'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  button?: { label: string; to: string }
}

export function PageHero({ eyebrow, title, description, button }: PageHeroProps) {
  return (
    <section className="relative bg-mf-bg pt-48 pb-24">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mf-muted">{description}</p>
        ) : null}
        {button ? (
          <div className="mt-8">
            <MButton to={button.to}>{button.label}</MButton>
          </div>
        ) : null}
      </div>
    </section>
  )
}
