import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'
import { useCases, tagColors } from '../data/useCases'

const dotYPositions = ['0%', '50%', '100%']
const dotXPositions = ['0%', '100%']

function ArrowUpRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none text-[rgb(170,170,170)] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

function UseCaseCard({ useCase }) {
  return (
    <Link
      to={`/use-cases/${useCase.slug}`}
      className="group block p-6 sm:p-8 no-underline transition-colors duration-300 hover:bg-white/[0.03]"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={useCase.image}
          alt={useCase.title}
          className="w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-8">
        <p className="m-0 font-display text-sm font-medium text-[rgb(170,170,170)]">
          {useCase.author} <span className="text-[rgb(110,110,110)]">•</span>{' '}
          {useCase.date}
        </p>

        <div className="flex items-start justify-between gap-4 mt-2">
          <h3 className="m-0 font-display font-medium text-2xl text-white transition-colors duration-300 group-hover:text-[rgb(220,220,220)]">
            {useCase.title}
          </h3>
          <ArrowUpRight />
        </div>

        <p className="m-0 mt-2 font-display text-base text-[rgb(170,170,170)] leading-relaxed">
          {useCase.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
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
    </Link>
  )
}

function UseCases() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const reveal = isInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)]">
        <section ref={ref} className="w-full pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div
              className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out ${reveal}`}
              style={delayStyle(0)}
            >
              <p className="m-0 font-display text-sm font-medium text-[rgb(170,170,170)]">
                Case Studies
              </p>
              <h1 className="m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] text-white">
                Work that moves the metrics that matter
              </h1>
              <p className="m-0 mt-4 font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                A look at how we partner with product and growth teams to
                design data-driven experiences—from research through launch.
              </p>
            </div>

            <div
              className={`relative max-w-5xl mx-auto border border-[rgb(46,46,46)] transition-all duration-700 ease-out ${reveal}`}
              style={delayStyle(150)}
            >
              <div className="absolute inset-0 pointer-events-none">
                {dotYPositions.flatMap((y) =>
                  dotXPositions.map((x) => (
                    <div
                      key={`${x}-${y}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
                      style={{ top: y, left: x }}
                    />
                  ))
                )}
              </div>

              <div className="divide-y divide-[rgb(46,46,46)]">
                {useCases.map((useCase, i) => (
                  <div
                    key={useCase.slug}
                    className={`transition-all duration-700 ease-out ${reveal}`}
                    style={delayStyle(250 + i * 150)}
                  >
                    <UseCaseCard useCase={useCase} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100dvh' }}>
        <Footer />
      </div>
    </>
  )
}

export default UseCases
