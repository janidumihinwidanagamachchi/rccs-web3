import { MButton } from './MButton'
import { BANNERS } from '@/data/site'

export function BannerCards() {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: 'linear-gradient(0deg, #5A5B5E 50%, #0F1118 50%)' }}
    >
      <div className="mx-auto max-w-[1260px] px-[5%]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BANNERS.map((card) => (
            <article
              key={card.id}
              className="group bg-mf-bg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="h-64 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-black uppercase text-white">{card.title}</h3>
                <p className="mt-3 text-mf-muted-2">{card.excerpt}</p>
                <div className="mt-6">
                  <MButton to={card.href} variant="pill">
                    SEE MORE
                  </MButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
