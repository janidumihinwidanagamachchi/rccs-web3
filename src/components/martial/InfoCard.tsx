import { cn } from '@/lib/utils'
import { MButton } from './MButton'

interface InfoCardProps {
  title: string
  description: string
  button?: { label: string; to: string }
  className?: string
}

export function InfoCard({ title, description, button, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        'bg-mf-panel p-8 transition-transform duration-300 hover:-translate-y-1',
        className,
      )}
    >
      <h3 className="font-display text-2xl font-black uppercase text-white">{title}</h3>
      <p className="mt-3 text-mf-muted">{description}</p>
      {button ? (
        <div className="mt-6">
          <MButton to={button.to} variant="outline">
            {button.label}
          </MButton>
        </div>
      ) : null}
    </div>
  )
}
