import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

function avatar(id) {
  return `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&crop=faces&auto=format&q=80`
}

const testimonials = [
  {
    company: 'HubSpot',
    domain: 'hubspot.com',
    quote:
      "Duality completely changed how we think about our product's UX. They didn't just hand us designs — they helped us understand why every decision mattered. The research phase alone uncovered things we'd been missing for years.",
    name: 'Priya Mehta',
    role: 'Head of Product, HubSpot',
    avatar: avatar('1573496359142-b8d87734a5a2'),
  },
  {
    company: 'Linear',
    domain: 'linear.app',
    quote:
      "Working with Duality felt like having a world-class design team embedded in ours. They move fast, communicate clearly, and the output is always a step above what we imagined.",
    name: 'James Harrington',
    role: 'Engineering Lead, Linear',
    avatar: avatar('1506794778202-cad84cf45f1d'),
  },
  {
    company: 'Notion',
    domain: 'notion.so',
    quote:
      "The redesign Duality delivered didn't just look better — it performed better. Activation improved noticeably in the first month. They understood our users faster than most internal hires would have.",
    name: 'Sofia Andersen',
    role: 'Product Manager, Notion',
    avatar: avatar('1494790108377-be9c29b29330'),
  },
  {
    company: 'Intercom',
    domain: 'intercom.com',
    quote:
      "I was skeptical of bringing in an external design partner at this stage, but Duality proved me wrong. They integrated seamlessly, asked the right questions, and shipped a design system we're still building on today.",
    name: 'Marcus Webb',
    role: 'VP of Design, Intercom',
    avatar: avatar('1472099645785-5658abf4ff4e'),
  },
  {
    company: 'Segment',
    domain: 'segment.com',
    quote:
      "Duality helped us cut our onboarding drop-off in half. They ran the research, proposed the solution, and validated it — all within the first six weeks. Genuinely impressive.",
    name: 'Leila Okonkwo',
    role: 'Growth Lead, Segment',
    avatar: avatar('1438761681033-6461ffad8d80'),
  },
  {
    company: 'Mixpanel',
    domain: 'mixpanel.com',
    quote:
      "Our dashboard was full of data nobody could read. Duality restructured the whole experience around what our users actually needed to answer, not just what we thought they wanted to see.",
    name: 'Ryan Tsukamoto',
    role: 'Head of Analytics, Mixpanel',
    avatar: avatar('1517841905240-472988babdf9'),
  },
  {
    company: 'Amplitude',
    domain: 'amplitude.com',
    quote:
      "We had a tight timeline and a complicated brief. Duality delivered on both without cutting corners. The quality of thinking behind every design decision stood out.",
    name: 'Chiara Bianchi',
    role: 'Senior PM, Amplitude',
    avatar: avatar('1534528741775-53994a69daeb'),
  },
  {
    company: 'Hotjar',
    domain: 'hotjar.com',
    quote:
      "Duality doesn't just design interfaces — they help you understand your users at a deeper level. The behavioral research they brought to the table changed how our entire team talks about product decisions.",
    name: 'Tobi Adekunle',
    role: 'UX Researcher, Hotjar',
    avatar: avatar('1492562080023-ab3db95bfbce'),
  },
  {
    company: 'Loom',
    domain: 'loom.com',
    quote:
      "Best design partner we've worked with. They ask the hard questions, move at the right pace, and never lose sight of the user. We've renewed our engagement three times now.",
    name: 'Nina Castillo',
    role: 'Co-founder, Loom',
    avatar: avatar('1507003211169-0a1dd7228f2d'),
  },
]

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block shrink-0">
      <path
        d="M12 2l2.4 1.7 2.8-.5 1.2 2.6 2.6 1.2-.5 2.8L22 12l-1.7 2.4.5 2.8-2.6 1.2-1.2 2.6-2.8-.5L12 22l-2.4-1.7-2.8.5-1.2-2.6-2.6-1.2.5-2.8L2 12l1.7-2.4-.5-2.8 2.6-1.2 1.2-2.6 2.8.5L12 2z"
        fill="rgb(59,130,246)"
      />
      <path
        d="M8.5 12.2l2.2 2.2 4.8-4.8"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl border border-[rgb(38,38,38)] p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <img
          src={`https://logo.clearbit.com/${testimonial.domain}?size=40`}
          alt={testimonial.company}
          className="w-5 h-5 rounded object-contain opacity-80"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <p className="m-0 font-display text-sm font-medium text-[rgb(170,170,170)]">
          {testimonial.company}
        </p>
      </div>
      <p className="m-0 mt-4 font-display text-[15px] leading-relaxed text-[rgb(200,200,200)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover flex-none"
        />
        <div>
          <p className="m-0 font-display flex items-center gap-1.5 text-sm font-medium text-white">
            {testimonial.name}
            <VerifiedBadge />
          </p>
          <p className="m-0 font-display text-sm text-[rgb(150,150,150)]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

function MobileCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="lg:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-full flex-none px-1">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-5">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-white' : 'w-1.5 bg-[rgb(70,70,70)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const reveal = isInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  return (
    <section
      ref={ref}
      className="relative w-full bg-[rgb(5,5,5)] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-[10%] bottom-0 w-[60%] h-[40%] bg-[rgba(127,86,217,0.4)] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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

        <div
          className={`transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(150)}
        >
          <MobileCarousel />
        </div>

        <div
          className="hidden lg:block columns-3 gap-6"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`mb-6 break-inside-avoid transition-all duration-700 ease-out ${reveal}`}
              style={delayStyle(150 + (i % 3) * 120)}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
