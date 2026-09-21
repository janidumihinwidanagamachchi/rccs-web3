import { img } from '@/data/site'

export function ImageBand() {
  return (
    <section
      className="relative py-0"
      style={{ background: 'linear-gradient(0deg, #0F1118 50%, #5A5B5E 50%)' }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <img
          src={img('martialarts-home-pic7.webp')}
          alt=""
          className="w-full object-cover"
          width={1280}
          height={540}
          loading="lazy"
        />
      </div>
    </section>
  )
}
