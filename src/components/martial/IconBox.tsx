import { cn } from '@/lib/utils'

interface IconBoxProps {
  icon?: string
  iconNode?: React.ReactNode
  title: string
  description?: string
  className?: string
}

export function IconBox({ icon, iconNode, title, description, className }: IconBoxProps) {
  return (
    <div className={cn('flex items-start gap-4', className)}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        {icon ? (
          <img src={icon} alt="" className="h-full w-full object-contain" loading="lazy" />
        ) : (
          iconNode
        )}
      </div>
      <div>
        <p className="font-display font-bold text-lg uppercase leading-tight">{title}</p>
        {description ? (
          <p className="mt-1 text-sm text-mf-muted">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
