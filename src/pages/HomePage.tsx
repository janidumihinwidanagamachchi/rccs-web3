import { MartialShell } from '@/components/martial/MartialShell'
import { Hero } from '@/components/martial/Hero'
import { PhilosophyIntro } from '@/components/martial/PhilosophyIntro'
import { TabberTop } from '@/components/martial/TabberTop'
import { BannerCards } from '@/components/martial/BannerCards'
import { StatsBand } from '@/components/martial/StatsBand'
import { ImageBand } from '@/components/martial/ImageBand'
import { TabberLeft } from '@/components/martial/TabberLeft'
import { TeamSlider } from '@/components/martial/TeamSlider'
import { PHILOSOPHY, PHILOSOPHY_2 } from '@/data/site'

export function HomePage() {
  return (
    <MartialShell>
      <Hero />
      <PhilosophyIntro eyebrow={PHILOSOPHY.eyebrow} title={PHILOSOPHY.title} bg={PHILOSOPHY.bg} />
      <TabberTop />
      <BannerCards />
      <StatsBand />
      <ImageBand />
      <PhilosophyIntro eyebrow={PHILOSOPHY_2.eyebrow} title={PHILOSOPHY_2.title} bg={PHILOSOPHY_2.bg} />
      <TabberLeft />
      <TeamSlider />
    </MartialShell>
  )
}
