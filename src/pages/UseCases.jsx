import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'

const tagColors = {
  Design: 'bg-[rgba(127,86,217,0.16)] text-[rgb(177,151,242)]',
  Research: 'bg-[rgba(67,97,238,0.18)] text-[rgb(150,170,250)]',
  Presentation: 'bg-[rgba(219,39,119,0.18)] text-[rgb(244,151,196)]',
  'Design Systems': 'bg-[rgba(124,58,237,0.18)] text-[rgb(196,168,250)]',
  Engineering: 'bg-[rgba(2,132,199,0.18)] text-[rgb(146,206,250)]',
  Product: 'bg-[rgba(5,150,105,0.18)] text-[rgb(134,224,189)]',
}

const cards = [
  {
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=750&fit=crop&auto=format&q=80',
    author: 'Olivia Rhye',
    date: '20 Jan 2025',
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    tags: ['Design', 'Research', 'Presentation'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=750&fit=crop&auto=format&q=80',
    author: 'Phoenix Baker',
    date: '15 Feb 2025',
    title: 'Migrating to a new design system',
    description:
      'Switching your tech stack is a big decision—here is how we approach a seamless, low-risk migration.',
    tags: ['Design Systems', 'Engineering', 'Product'],
  },
]

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
      className="flex-none text-[rgb(170,170,170)]"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

function UseCaseCard({ card }) {
  return (
    <div className="p-6 sm:p-8">
      <img
        src={card.image}
        alt={card.title}
        className="w-full aspect-[16/9] object-cover rounded-2xl"
      />

      <div className="mt-8">
        <p className="m-0 text-sm font-semibold text-[rgb(170,170,170)]">
          {card.author} <span className="text-[rgb(110,110,110)]">•</span>{' '}
          {card.date}
        </p>

        <div className="flex items-start justify-between gap-4 mt-2">
          <h3 className="m-0 font-sans font-bold text-2xl text-white">
            {card.title}
          </h3>
          <ArrowUpRight />
        </div>

        <p className="m-0 mt-2 text-base text-[rgb(170,170,170)] leading-relaxed">
          {card.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
              <p className="m-0 text-sm font-semibold text-[rgb(170,170,170)]">
                Features
              </p>
              <h1 className="m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] text-white">
                Beautiful analytics to grow smarter
              </h1>
              <p className="m-0 mt-4 text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
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
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`transition-all duration-700 ease-out ${reveal}`}
                    style={delayStyle(250 + i * 150)}
                  >
                    <UseCaseCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100vh' }}>
        <Footer />
      </div>
    </>
  )
}

export default UseCases
