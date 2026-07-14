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
    role: 'Head of Product',
    company: 'HubSpot',
    avatar: avatarUrl('1573496359142-b8d87734a5a2'),
  },
  {
    quote:
      'Working with Duality felt like having a world-class design team embedded in ours. They move fast, communicate clearly, and the output is always a step above.',
    name: 'James Harrington',
    role: 'Engineering Lead',
    company: 'Linear',
    avatar: avatarUrl('1506794778202-cad84cf45f1d'),
  },
  {
    quote:
      "The redesign Duality delivered didn't just look better — it performed better. Activation improved noticeably in the first month.",
    name: 'Sofia Andersen',
    role: 'Product Manager',
    company: 'Notion',
    avatar: avatarUrl('1494790108377-be9c29b29330'),
  },
  {
    quote:
      "Duality proved me wrong. They integrated seamlessly, asked the right questions, and shipped a design system we're still building on today.",
    name: 'Marcus Webb',
    role: 'VP of Design',
    company: 'Intercom',
    avatar: avatarUrl('1472099645785-5658abf4ff4e'),
  },
  {
    quote:
      'Duality helped us cut our onboarding drop-off in half. They ran the research, proposed the solution, and validated it — all within the first six weeks.',
    name: 'Leila Okonkwo',
    role: 'Growth Lead',
    company: 'Segment',
    avatar: avatarUrl('1438761681033-6461ffad8d80'),
  },
]

const cornerDots = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '100%' },
  { top: '100%', left: '0%' },
  { top: '100%', left: '100%' },
]

function ArrowBtn({ onClick, label, children, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 border border-[rgb(70,70,70)] rounded-full flex items-center justify-center text-[rgb(160,160,160)] hover:text-white hover:border-[rgb(120,120,120)] active:scale-95 transition-all duration-200 cursor-pointer bg-transparent ${className}`}
    >
      {children}
    </button>
  )
}

function ChevronLeft() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

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

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const person = testimonials[active]

  return (
    <section
      ref={ref}
      className="relative w-full bg-[rgb(5,5,5)] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-[10%] bottom-0 w-[60%] h-[40%] bg-[rgba(127,86,217,0.4)] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(0)}
        >
          <h2 className="m-0 font-display font-light text-[32px] sm:text-[40px] text-white">
            What do our clients say?
          </h2>
          <p className="m-0 mt-4 font-display text-base sm:text-lg text-[rgb(170,170,170)]">
            No one can be more truthful than those who had to pay a price.
          </p>
        </div>

        {/* Card — full width of the max-w-7xl container */}
        <div
          className={`relative border border-[rgb(46,46,46)] px-8 pt-12 pb-12 sm:px-14 sm:pt-16 sm:pb-16 flex flex-col items-center transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(150)}
        >
          {cornerDots.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={pos}
            />
          ))}

          {/* Badge */}
          <span className="mb-10 sm:mb-12 border border-[rgb(55,55,55)] rounded-full px-4 py-1.5 font-display text-[13px] text-[rgb(150,150,150)]">
            Trusted by clients across the globe
          </span>

          {/* Quote — min-h to never clip, items-start so text anchors at top */}
          <div className="w-full max-w-2xl min-h-[160px] sm:min-h-[140px] flex items-start justify-center mb-10 sm:mb-12">
            <p
              key={active}
              className="m-0 text-center font-display font-light text-[20px] leading-[32px] sm:text-[26px] sm:leading-[40px] lg:text-[30px] lg:leading-[46px] text-white"
              style={{ animation: 'quoteIn 0.55s cubic-bezier(.2,.7,.2,1) both' }}
            >
              &ldquo;{person.quote}&rdquo;
            </p>
          </div>

          {/* Avatar row — desktop: arrows pushed to far edges via justify-between
                         mobile: only the avatar, arrows appear below */}
          <div className="w-full flex items-center justify-between sm:justify-between">
            {/* Left arrow — hidden on mobile */}
            <ArrowBtn onClick={prev} label="Previous testimonial" className="hidden sm:flex">
              <ChevronLeft />
            </ArrowBtn>

            {/* Avatar — animates the outer container so rounded clip stays clean */}
            <div
              key={active}
              className="w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] rounded-full overflow-hidden ring-1 ring-white/10 mx-auto sm:mx-0"
              style={{ animation: 'quoteIn 0.5s cubic-bezier(.2,.7,.2,1) both' }}
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right arrow — hidden on mobile */}
            <ArrowBtn onClick={next} label="Next testimonial" className="hidden sm:flex">
              <ChevronRight />
            </ArrowBtn>
          </div>

          {/* Name · Role · Company */}
          <div
            key={`info-${active}`}
            className="mt-5 text-center"
            style={{ animation: 'quoteIn 0.5s cubic-bezier(.2,.7,.2,1) both', animationDelay: '0.07s' }}
          >
            <p className="m-0 font-display text-sm sm:text-base font-medium text-white">
              {person.name}
            </p>
            <p className="m-0 mt-1 font-display text-xs sm:text-sm text-[rgb(130,130,130)]">
              {person.role} &middot; {person.company}
            </p>
          </div>

          {/* Bottom row — mobile: left arrow + dots + right arrow
                         desktop: just dots */}
          <div className="flex items-center gap-3 mt-8">
            {/* Left arrow — mobile only */}
            <ArrowBtn onClick={prev} label="Previous testimonial" className="sm:hidden">
              <ChevronLeft />
            </ArrowBtn>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="bg-transparent border-0 p-1 cursor-pointer flex items-center"
                >
                  <div
                    className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ease-out ${
                      i === active ? 'w-6 bg-[rgb(60,60,60)]' : 'w-1.5 bg-[rgb(85,85,85)]'
                    }`}
                  >
                    {i === active && (
                      <div
                        key={active}
                        className="h-full bg-white rounded-full origin-left"
                        style={{ animation: `progress-grow ${DURATION}ms linear forwards` }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right arrow — mobile only */}
            <ArrowBtn onClick={next} label="Next testimonial" className="sm:hidden">
              <ChevronRight />
            </ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsV2
