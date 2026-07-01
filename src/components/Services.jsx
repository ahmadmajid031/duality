import CtaButton from './CtaButton'
import { useInView } from '../hooks/useInView'
import sectionProductDesign from '../assets/section-product design.jpg'
import sectionWebDesign from '../assets/section-web design.jpg'
import sectionUXResearch from '../assets/section-UX research.jpg'

const rows = [
  {
    title: 'UX Research & Strategy',
    description:
      'We dig into how real users behave, then translate those insights into a clear product strategy. Every decision is backed by data and validated with your users.',
    reverse: false,
    image: sectionUXResearch,
    alt: 'UX Research',
  },
  {
    title: 'Design Systems & UI',
    description:
      'We build flexible, reusable design systems that scale with your product. Consistent components mean faster shipping without sacrificing quality.',
    reverse: true,
    image: sectionProductDesign,
    alt: 'Product Design',
  },
  {
    title: 'Prototyping & Testing',
    description:
      'Before a single line of code ships, we prototype and test with real users—catching usability issues early so you can launch with confidence.',
    reverse: false,
    image: sectionWebDesign,
    alt: 'Web Design',
  },
]

const dotYPositions = ['0%', '33.3333%', '66.6667%', '100%']
const dotXPositions = ['0%', '100%']

function ImagePanel({ src, alt }) {
  return (
    <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] bg-black overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

function TextPanel({ title, description }) {
  return (
    <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 sm:py-14">
      <h3 className="m-0 font-display font-light text-[28px] sm:text-[32px] text-white">
        {title}
      </h3>
      <p className="m-0 mt-4 max-w-md text-base text-[rgb(170,170,170)] leading-relaxed">
        {description}
      </p>
      <div className="flex gap-2.5 mt-6">
        <CtaButton href="/use-cases" label="View Case Studies" size="sm" />
        <CtaButton href="/contact" label="Book a call" light size="sm" />
      </div>
    </div>
  )
}

function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const reveal = isInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  return (
    <section
      ref={ref}
      className="relative w-full bg-[rgb(5,5,5)] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(0)}
        >
          <p className="m-0 text-sm font-medium text-[rgb(170,170,170)]">
            Services
          </p>
          <h2 className="m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] text-white">
            Design and data working in lockstep
          </h2>
          <p className="m-0 mt-4 text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
            From research to launch, we partner with teams to design digital
            products backed by real user data—trusted by startups and
            growing companies alike.
          </p>
        </div>

        <div
          className={`relative border border-[rgb(46,46,46)] transition-all duration-700 ease-out ${reveal}`}
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
            {rows.map((row, i) => (
              <div
                key={row.title}
                className={`grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-[rgb(46,46,46)] transition-all duration-700 ease-out ${reveal}`}
                style={delayStyle(250 + i * 150)}
              >
                {row.reverse ? (
                  <>
                    <ImagePanel src={row.image} alt={row.alt} />
                    <TextPanel title={row.title} description={row.description} />
                  </>
                ) : (
                  <>
                    <TextPanel title={row.title} description={row.description} />
                    <ImagePanel src={row.image} alt={row.alt} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
