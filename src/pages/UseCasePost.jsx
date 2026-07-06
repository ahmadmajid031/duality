import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { getUseCaseBySlug, tagColors } from '../data/useCases'

const handles = [
  { pos: 'top-[-10px] left-[-14px]', translate: '-translate-x-1/2 -translate-y-1/2' },
  { pos: 'top-[-10px] right-[-14px]', translate: 'translate-x-1/2 -translate-y-1/2' },
  { pos: 'bottom-[-10px] left-[-14px]', translate: '-translate-x-1/2 translate-y-1/2' },
  { pos: 'bottom-[-10px] right-[-14px]', translate: 'translate-x-1/2 translate-y-1/2' },
]

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[rgb(5,5,5)] text-white px-6">
      <p className="m-0 font-display text-lg text-[rgb(170,170,170)]">
        Case study not found.
      </p>
      <Link
        to="/use-cases"
        className="font-display text-sm font-medium text-white no-underline hover:text-[rgb(180,180,180)] transition-colors"
      >
        ← Back to case studies
      </Link>
    </div>
  )
}

function TextBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`border border-[rgb(38,38,38)] rounded-2xl bg-white/[0.02] p-6 sm:p-8 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="m-0 font-display font-light text-xl sm:text-2xl text-white">
        {block.heading}
      </h2>
      <div className="flex flex-col gap-3 mt-4">
        {block.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="m-0 font-display text-base text-[rgb(190,190,190)] leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

function ImageBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <img
        src={block.src}
        alt=""
        className="w-full aspect-[16/10] object-cover"
      />
    </div>
  )
}

function QuoteBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`pl-6 border-l-2 border-white/20 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="m-0 font-display font-light text-xl sm:text-2xl text-white leading-relaxed">
        &ldquo;{block.text}&rdquo;
      </p>
    </div>
  )
}

function StatsBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {block.stats.map((stat, i) => (
        <div
          key={i}
          className="border border-[rgb(38,38,38)] rounded-2xl bg-white/[0.02] p-6 flex flex-col gap-2"
        >
          <p className="m-0 font-display font-light text-3xl sm:text-4xl text-white tracking-tight">
            {stat.value}
          </p>
          <p className="m-0 font-display text-sm text-[rgb(150,150,150)] leading-snug">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

function TLDRBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`border border-[rgb(50,40,70)] rounded-2xl bg-[rgba(127,86,217,0.06)] p-6 sm:p-8 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="m-0 mb-3 font-display text-xs font-semibold tracking-widest uppercase text-[rgb(177,151,242)]">
        TL;DR
      </p>
      <p className="m-0 font-display text-base sm:text-lg text-[rgb(210,210,210)] leading-relaxed">
        {block.text}
      </p>
    </div>
  )
}

function CTABlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`border border-[rgb(38,38,38)] rounded-2xl bg-white/[0.02] p-6 sm:p-8 text-center transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="m-0 mb-6 font-display text-base sm:text-lg text-[rgb(200,200,200)] leading-relaxed max-w-xl mx-auto">
        {block.text}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {block.links.map((link, i) => (
          <Link
            key={i}
            to={link.href}
            className={`no-underline font-display text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 ${
              i === 0
                ? 'bg-white text-[rgb(5,5,5)] hover:bg-[rgb(220,220,220)]'
                : 'border border-[rgb(60,60,60)] text-[rgb(180,180,180)] hover:border-[rgb(100,100,100)] hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function ImageGridBlock({ block }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {block.images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl">
          <img src={src} alt="" className="w-full aspect-[4/3] object-cover" />
        </div>
      ))}
    </div>
  )
}

function UseCasePost() {
  const { slug } = useParams()
  const useCase = getUseCaseBySlug(slug)
  const progress = useScrollProgress()

  if (!useCase) return <NotFound />

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 bg-[rgb(5,5,5)] overflow-hidden">
        <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute left-[8%] top-[-15%] w-[60%] h-[60%] bg-[rgba(127,86,217,0.32)] blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute right-[2%] top-[5%] w-[48%] h-[48%] bg-[rgba(1,100,190,0.2)] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
            {useCase.kicker && (
              <p className="m-0 mb-5 font-display text-sm font-medium text-[rgb(140,140,140)] animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]">
                {useCase.kicker}
              </p>
            )}
            <div className="relative inline-block animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]">
              <h1 className="m-0 font-display font-light text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] text-white">
                {useCase.title}
              </h1>

              <div className="hidden sm:block absolute -top-3 -left-4 -right-4 -bottom-3 shadow-[inset_0_0_0_1px_rgb(46,46,46)] pointer-events-none" />
              {handles.map((h) => (
                <div
                  key={h.pos}
                  className={`hidden sm:block absolute ${h.pos} w-1.5 h-1.5 ${h.translate}`}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </div>
              ))}
            </div>

            {useCase.subtitle && (
              <p
                className="m-0 mt-7 font-display text-base sm:text-lg text-[rgb(155,155,155)] leading-relaxed max-w-2xl mx-auto animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
                style={{ animationDelay: '0.1s' }}
              >
                {useCase.subtitle}
              </p>
            )}

            <div
              className="flex items-center justify-center gap-2 mt-7 font-display text-sm font-medium text-[rgb(170,170,170)] animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
              style={{ animationDelay: '0.12s' }}
            >
              <span>{useCase.author}</span>
              <span className="text-[rgb(90,90,90)]">•</span>
              <span>{useCase.date}</span>
            </div>

            <div
              className="flex flex-wrap justify-center gap-2 mt-4 animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
              style={{ animationDelay: '0.22s' }}
            >
              {useCase.tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-display px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div
          className="max-w-4xl mx-auto px-6 sm:px-8 animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
          style={{ animationDelay: '0.32s' }}
        >
          <img
            src={useCase.image}
            alt={useCase.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl"
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col gap-6">
          {useCase.blocks.map((block, i) => {
            if (block.type === 'quote') return <QuoteBlock key={i} block={block} />
            if (block.type === 'text') return <TextBlock key={i} block={block} />
            if (block.type === 'image') return <ImageBlock key={i} block={block} />
            if (block.type === 'image-grid') return <ImageGridBlock key={i} block={block} />
            if (block.type === 'stats') return <StatsBlock key={i} block={block} />
            if (block.type === 'tldr') return <TLDRBlock key={i} block={block} />
            if (block.type === 'cta') return <CTABlock key={i} block={block} />
            return null
          })}
        </div>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100dvh' }}>
        <Footer />
      </div>
    </>
  )
}

export default UseCasePost
