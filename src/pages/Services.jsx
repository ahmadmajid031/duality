import { useState } from 'react'
import CtaButton from '../components/CtaButton'
import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'

const services = [
  {
    title: 'Product Design',
    subtitle:
      'We help teams turn complex requirements into products people enjoy using.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=1400&fit=crop&auto=format&q=80',
    glow: 'rgba(127,86,217,0.32)',
    items: [
      {
        title: 'User-centered interfaces',
        description:
          'Every screen starts with how real users will actually use it, not just how it looks in a deck.',
      },
      {
        title: 'Design systems built to scale',
        description:
          'Reusable components and clear documentation mean your team ships consistent UI without starting from scratch.',
      },
      {
        title: 'Prototyping & validation',
        description:
          'We test ideas with clickable prototypes before a single line of code is written, so we catch problems early.',
      },
    ],
  },
  {
    title: 'Website Design and Development',
    subtitle: 'We help our clients reach their website designs.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=1400&fit=crop&auto=format&q=80',
    glow: 'rgba(1,100,190,0.3)',
    items: [
      {
        title: 'Responsive, pixel-perfect builds',
        description:
          'Every breakpoint gets the same attention to detail, from large desktops down to small phones.',
      },
      {
        title: 'SEO-minded architecture',
        description:
          'Pages are structured and written to be found, not just to look good.',
      },
      {
        title: 'Performance & accessibility audits',
        description:
          'We test load times and screen-reader behavior before launch, not after complaints come in.',
      },
    ],
  },
  {
    title: 'UX Research',
    subtitle:
      'We uncover what your users actually need, not just what they ask for.',
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=1400&fit=crop&auto=format&q=80',
    glow: 'rgba(1,150,190,0.3)',
    items: [
      {
        title: 'User interviews & usability testing',
        description:
          'We talk to your actual users and watch them use your product to find where they get stuck.',
      },
      {
        title: 'Journey mapping',
        description:
          'We map the full path a customer takes, surfacing the moments that make or break their experience.',
      },
      {
        title: 'Research-backed recommendations',
        description:
          'Every recommendation we make ties back to a specific finding, not a hunch.',
      },
    ],
  },
]

const dotPositions = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '100%' },
  { top: '100%', left: '0%' },
  { top: '100%', left: '100%' },
]

const ACCORDION_PANEL_HEIGHT = 96

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[rgb(46,46,46)]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className={`font-display text-lg sm:text-xl transition-colors ${
            isOpen ? 'text-white' : 'text-[rgb(140,140,140)]'
          }`}
        >
          {item.title}
        </span>
        <span className="flex-none text-xl text-[rgb(140,140,140)]">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: isOpen ? `${ACCORDION_PANEL_HEIGHT}px` : '0px' }}
      >
        <p className="m-0 pb-5 max-w-md font-display text-base text-[rgb(170,170,170)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function ServiceBlock({ service, reverse }) {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const reveal = isInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute top-[10%] w-[55%] h-[60%] blur-[140px] rounded-full pointer-events-none"
        style={{ background: service.glow, [reverse ? 'right' : 'left']: '0%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`relative border border-[rgb(46,46,46)] p-8 sm:p-12 lg:p-14 transition-all duration-700 ease-out ${reveal}`}
        >
          {dotPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={pos}
            />
          ))}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className={reverse ? 'lg:order-2' : ''}>
              <h2 className="m-0 font-display font-light text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] text-white">
                {service.title}
              </h2>
              <p className="m-0 mt-4 max-w-md font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                {service.subtitle}
              </p>
              <div className="mt-7">
                <CtaButton href="/contact" label="Book a call" light />
              </div>

              <div className="mt-14 sm:mt-16 border-t border-[rgb(46,46,46)]">
                {service.items.map((item, i) => (
                  <AccordionItem
                    key={item.title}
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div className={reverse ? 'lg:order-1' : ''}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[420px] sm:h-[520px] lg:h-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 })
  const headerReveal = headerInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)]">
        <div ref={headerRef} className="pt-32 sm:pt-40 pb-4">
          <div
            className={`max-w-2xl mx-auto px-6 sm:px-8 text-center transition-all duration-700 ease-out ${headerReveal}`}
          >
            <p className="m-0 font-display text-sm font-medium text-[rgb(170,170,170)]">
              Services
            </p>
            <h1 className="m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] text-white">
              What we help teams build
            </h1>
          </div>
        </div>

        <div className="divide-y divide-[rgb(38,38,38)]">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100dvh' }}>
        <Footer />
      </div>
    </>
  )
}

export default Services
