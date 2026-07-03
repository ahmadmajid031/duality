import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const DURATION = 5000

function avatarUrl(id) {
  return `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&crop=faces&auto=format&q=80`
}

const testimonials = [
  {
    quote:
      "Duality completely changed how we think about our product's UX. The research phase alone uncovered things we'd been missing for years.",
    name: 'Priya Mehta',
    role: 'Head of Product, HubSpot',
    avatar: avatarUrl('1573496359142-b8d87734a5a2'),
  },
  {
    quote:
      'Working with Duality felt like having a world-class design team embedded in ours. They move fast, communicate clearly, and the output is always a step above.',
    name: 'James Harrington',
    role: 'Engineering Lead, Linear',
    avatar: avatarUrl('1506794778202-cad84cf45f1d'),
  },
  {
    quote:
      "The redesign Duality delivered didn't just look better — it performed better. Activation improved noticeably in the first month.",
    name: 'Sofia Andersen',
    role: 'Product Manager, Notion',
    avatar: avatarUrl('1494790108377-be9c29b29330'),
  },
  {
    quote:
      "Duality proved me wrong. They integrated seamlessly, asked the right questions, and shipped a design system we're still building on today.",
    name: 'Marcus Webb',
    role: 'VP of Design, Intercom',
    avatar: avatarUrl('1472099645785-5658abf4ff4e'),
  },
  {
    quote:
      'Duality helped us cut our onboarding drop-off in half. They ran the research, proposed the solution, and validated it — all within the first six weeks.',
    name: 'Leila Okonkwo',
    role: 'Growth Lead, Segment',
    avatar: avatarUrl('1438761681033-6461ffad8d80'),
  },
]

const dotPositions = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '100%' },
  { top: '100%', left: '0%' },
  { top: '100%', left: '100%' },
]

function TestimonialsV2() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [active, setActive] = useState(0)

  const reveal = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  useEffect(() => {
    const t = setTimeout(
      () => setActive((a) => (a + 1) % testimonials.length),
      DURATION,
    )
    return () => clearTimeout(t)
  }, [active])

  return (
    <section
      ref={ref}
      className="relative w-full bg-[rgb(5,5,5)] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-[10%] bottom-0 w-[60%] h-[40%] bg-[rgba(127,86,217,0.4)] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section heading */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(0)}
        >
          <h2 className="m-0 font-display font-light text-[32px] sm:text-[40px] text-white">
            What do our clients say about us?
          </h2>
          <p className="m-0 mt-4 font-display text-base sm:text-lg text-[rgb(170,170,170)]">
            No one can be more truthful than those who had to pay a price.
          </p>
        </div>

        {/* Card */}
        <div
          className={`relative border border-[rgb(46,46,46)] px-8 pt-10 pb-12 sm:px-14 sm:pt-14 sm:pb-16 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(150)}
        >
          {dotPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={pos}
            />
          ))}

          {/* Badge */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <span className="border border-[rgb(55,55,55)] rounded-full px-4 py-1.5 font-display text-[13px] text-[rgb(150,150,150)]">
              Trusted by clients across the globe
            </span>
          </div>

          {/* Quote — fixed height so card never resizes between testimonials */}
          <div className="h-[220px] sm:h-[200px] lg:h-[180px] flex items-center justify-center mb-14 sm:mb-16 overflow-hidden">
            <p
              key={active}
              className="m-0 text-center max-w-3xl font-display font-light text-[22px] leading-[32px] sm:text-[30px] sm:leading-[42px] lg:text-[36px] lg:leading-[48px] text-white"
              style={{ animation: 'quoteIn 0.55s cubic-bezier(.2,.7,.2,1) both' }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
          </div>

          {/* Avatar row */}
          <div className="flex items-start justify-center gap-3 sm:gap-5 lg:gap-8">
            {testimonials.map((person, i) => {
              const isActive = i === active
              return (
                <button
                  key={person.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center bg-transparent border-0 p-0 cursor-pointer"
                  style={{ width: '80px' }}
                >
                  {/* Square avatar */}
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full object-cover rounded-sm transition-all duration-500 ease-out"
                    style={{
                      aspectRatio: '1 / 1',
                      filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                  />

                  {/* Progress bar — track always visible, white fill only on active */}
                  <div className="mt-2.5 w-full h-[2px] bg-[rgb(38,38,38)] rounded-full overflow-hidden">
                    {isActive && (
                      <div
                        key={active}
                        className="h-full bg-white rounded-full origin-left"
                        style={{ animation: `progress-grow ${DURATION}ms linear forwards` }}
                      />
                    )}
                  </div>

                  {/* Name */}
                  <p
                    className="m-0 mt-2.5 font-display text-[11px] sm:text-[12px] font-medium text-center leading-snug transition-colors duration-300"
                    style={{ color: isActive ? 'rgb(255,255,255)' : 'rgb(130,130,130)' }}
                  >
                    {person.name}
                  </p>

                  {/* Role */}
                  <p
                    className="m-0 mt-0.5 font-display text-[10px] sm:text-[11px] text-center leading-snug transition-colors duration-300"
                    style={{ color: isActive ? 'rgb(120,120,120)' : 'rgb(95,95,95)' }}
                  >
                    {person.role}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsV2
