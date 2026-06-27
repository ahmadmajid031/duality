import CtaButton from './CtaButton'

const rows = [
  {
    title: 'UX Research & Strategy',
    description:
      'We dig into how real users behave, then translate those insights into a clear product strategy. Every decision is backed by data and validated with your users.',
    reverse: false,
    glow: 'top-right',
  },
  {
    title: 'Design Systems & UI',
    description:
      'We build flexible, reusable design systems that scale with your product. Consistent components mean faster shipping without sacrificing quality.',
    reverse: true,
    glow: 'top-left-strong',
  },
  {
    title: 'Prototyping & Testing',
    description:
      'Before a single line of code ships, we prototype and test with real users—catching usability issues early so you can launch with confidence.',
    reverse: false,
    glow: 'bottom-right-teal',
  },
]

const dotYPositions = ['0%', '33.3333%', '66.6667%', '100%']
const dotXPositions = ['0%', '100%']

function GlowPanel({ variant }) {
  return (
    <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] bg-black overflow-hidden">
      {variant === 'top-right' && (
        <div className="absolute -top-[20%] -right-[15%] w-[70%] h-[70%] bg-[rgba(127,86,217,0.28)] blur-[100px] rounded-full pointer-events-none" />
      )}
      {variant === 'top-left-strong' && (
        <div className="absolute -top-[25%] -left-[20%] w-[95%] h-[95%] bg-[rgba(127,86,217,0.5)] blur-[110px] rounded-full pointer-events-none" />
      )}
      {variant === 'bottom-right-teal' && (
        <div className="absolute -bottom-[20%] -right-[15%] w-[65%] h-[65%] bg-[rgba(1,150,190,0.32)] blur-[100px] rounded-full pointer-events-none" />
      )}
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
        <CtaButton href="#case-studies" label="View Case Studies" size="sm" />
        <CtaButton href="#contact" label="Book a call" light size="sm" />
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="relative w-full bg-[rgb(5,5,5)] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="m-0 text-sm font-semibold text-[rgb(170,170,170)]">
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

        <div className="relative border border-[rgb(46,46,46)]">
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
            {rows.map((row) => (
              <div
                key={row.title}
                className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-[rgb(46,46,46)]"
              >
                {row.reverse ? (
                  <>
                    <GlowPanel variant={row.glow} />
                    <TextPanel title={row.title} description={row.description} />
                  </>
                ) : (
                  <>
                    <TextPanel title={row.title} description={row.description} />
                    <GlowPanel variant={row.glow} />
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
