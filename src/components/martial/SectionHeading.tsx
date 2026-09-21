import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-4xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[5px] text-mf-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl lg:text-[60px]">
        {title}
      </h2>
    </div>
  )
}
