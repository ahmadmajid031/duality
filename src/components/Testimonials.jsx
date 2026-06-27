import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

function avatar(id) {
  return `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&crop=faces&auto=format&q=80`
}

const testimonials = [
  {
    company: 'Lumen',
    quote:
      "Partnering with DualityUX has been a lifesaver for our team—everything we need is right at our fingertips, and they help us jump right into new projects.",
    name: 'Nikolas Gibbons',
    role: 'Product Designer, Lumen',
    avatar: avatar('1507003211169-0a1dd7228f2d'),
  },
  {
    company: 'Northwind',
    quote: "We love working with DualityUX! They've made our design process super streamlined.",
    name: 'Marco Kelly',
    role: 'UI Designer, Northwind',
    avatar: avatar('1472099645785-5658abf4ff4e'),
  },
  {
    company: 'Brightline',
    quote:
      "Starting projects used to feel daunting, but DualityUX simplifies everything. We've worked with them on both small and large projects, and they never disappoint.",
    name: 'Zaid Schwartz',
    role: 'Founder, Brightline',
    avatar: avatar('1438761681033-6461ffad8d80'),
  },
  {
    company: 'Vertex Labs',
    quote:
      'DualityUX is our secret weapon for staying ahead of deadlines. They give us everything we need to move fast.',
    name: 'Ammar Foley',
    role: 'UX Designer, Vertex Labs',
    avatar: avatar('1517841905240-472988babdf9'),
  },
  {
    company: 'Pulsegrid',
    quote:
      "DualityUX is hands down the best design partner we've worked with. They bring everything we need for any possible project.",
    name: 'Florence Shaw',
    role: 'Web Designer, Pulsegrid',
    avatar: avatar('1494790108377-be9c29b29330'),
  },
  {
    company: 'Faro',
    quote:
      "With DualityUX, we can focus more on our product and less on the tedious design work. Best decision we've made.",
    name: 'Owen Garcia',
    role: 'CTO, Faro',
    avatar: avatar('1506794778202-cad84cf45f1d'),
  },
  {
    company: 'Skyline',
    quote:
      "Our workflow has improved dramatically since we started working with DualityUX, and they've become an integral part of our team. They're easy to work with, and the output is top-notch. I recommend them to everyone!",
    name: 'Mathilde Lewis',
    role: 'Project Lead, Skyline',
    avatar: avatar('1534528741775-53994a69daeb'),
  },
  {
    company: 'Anchor & Co',
    quote:
      "DualityUX is an absolute game-changer for our projects. We can't imagine going back to how we used to work without them.",
    name: 'Stefan Sears',
    role: 'UI/UX Designer, Anchor & Co',
    avatar: avatar('1492562080023-ab3db95bfbce'),
  },
  {
    company: 'Ikigai Labs',
    quote:
      "DualityUX has been a real time-saver for us. They're organized, efficient, and keep us moving forward with every project.",
    name: 'Harriet Rojas',
    role: 'Marketing Lead, Ikigai Labs',
    avatar: avatar('1573496359142-b8d87734a5a2'),
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
      <p className="m-0 text-base font-bold text-white">{testimonial.company}</p>
      <p className="m-0 mt-4 text-[15px] leading-relaxed text-[rgb(180,180,180)]">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 mt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover flex-none"
        />
        <div>
          <p className="m-0 flex items-center gap-1.5 text-sm font-semibold text-white">
            {testimonial.name}
            <VerifiedBadge />
          </p>
          <p className="m-0 text-sm text-[rgb(150,150,150)]">{testimonial.role}</p>
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
          <h2 className="m-0 text-[32px] sm:text-[40px] font-bold text-white">
            Our reviews
          </h2>
          <p className="m-0 mt-4 text-base sm:text-lg text-[rgb(170,170,170)]">
            Hear first-hand from our incredible community of customers.
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
