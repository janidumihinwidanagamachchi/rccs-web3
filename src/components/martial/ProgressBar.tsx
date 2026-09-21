import { cn } from '@/lib/utils'

interface ProgressBarProps {
  label: string
  value: number
  color?: string
}

export function ProgressBar({ label, value, color = 'bg-mf-accent' }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between font-display text-sm font-semibold uppercase">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-[10px] w-full bg-mf-dot">
        <div
          className={cn('h-full transition-all duration-700 ease-out', color)}
          style={{ width: `${value}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
