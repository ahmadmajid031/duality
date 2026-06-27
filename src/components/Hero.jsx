import { Fragment } from 'react'

const handles = [
  { pos: 'top-[-12px] left-[-16px]', translate: '-translate-x-1/2 -translate-y-1/2' },
  { pos: 'top-[-12px] right-[-16px]', translate: 'translate-x-1/2 -translate-y-1/2' },
  { pos: 'bottom-[-12px] left-[-16px]', translate: '-translate-x-1/2 translate-y-1/2' },
  { pos: 'bottom-[-12px] right-[-16px]', translate: 'translate-x-1/2 translate-y-1/2' },
]

const headlineWords = [
  'Where',
  'data',
  'and',
  'design',
  'create',
  'great',
  'digital',
  'experiences',
]

// Placeholder client wordmarks until real logos are supplied.
const clients = [
  'Lumen',
  'Northwind',
  'Vertex Labs',
  'Pulsegrid',
  'Anchor & Co',
  'Skyline',
  'Brightline',
  'Faro',
]

function CtaButton({ href, label, light }) {
  return (
    <a
      href={href}
      className={`group relative flex items-center justify-center h-11 sm:h-12 px-5 rounded-[10px] overflow-hidden no-underline w-full sm:w-auto shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),0px_1px_2px_0px_rgba(10,13,18,0.05)] ${
        light ? 'bg-white' : 'bg-black'
      }`}
    >
      <span
        className={`block transition-transform duration-[420ms] ease-[cubic-bezier(.6,0,.15,1)] group-hover:-translate-y-[150%] font-sans font-semibold text-sm sm:text-base leading-6 whitespace-nowrap ${
          light ? 'text-black' : 'text-white'
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-[420ms] ease-[cubic-bezier(.6,0,.15,1)] group-hover:translate-y-0 ${
          light ? 'text-black' : 'text-white'
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </span>
    </a>
  )
}

function Hero() {
  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[760px] lg:min-h-[820px] h-screen overflow-hidden bg-[rgb(5,5,5)]">
      <div className="absolute left-[-4%] top-[62%] w-[54%] h-[42%] bg-[rgba(207,113,188,0.22)] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[36%] top-[52%] w-[62%] h-[42%] bg-[rgba(1,100,190,0.18)] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-[28%] top-[74%] w-[72%] h-[34%] bg-[rgba(0,0,0,0.64)] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-24 sm:pt-20 px-5 sm:px-6 gap-5 sm:gap-6">
        <div className="relative inline-block max-w-[320px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px]">
          <h1 className="m-0 text-center font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[68px] tracking-[0.02em] text-white">
            {headlineWords.map((word, i) => (
              <Fragment key={word + i}>
                <span
                  className="inline-block animate-[heroWordIn_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  {word}
                </span>
                {i < headlineWords.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </h1>

          {/* Figma-style selection frame, hidden on small screens to avoid clutter */}
          <div
            className="hidden md:block absolute -top-3 -left-4 -right-4 -bottom-3 shadow-[inset_0_0_0_1px_rgb(46,46,46)] pointer-events-none animate-[fadeIn_0.5s_ease_both]"
            style={{ animationDelay: '1.4s' }}
          />

          {handles.map((h) => (
            <div
              key={h.pos}
              className={`hidden md:block absolute ${h.pos} w-1.5 h-1.5 ${h.translate}`}
            >
              <div
                className="w-full h-full rounded-full bg-white animate-[fadeIn_0.5s_ease_both]"
                style={{ animationDelay: '1.4s' }}
              />
            </div>
          ))}
        </div>

        <p
          className="m-0 max-w-[300px] sm:max-w-[460px] md:max-w-[560px] text-center font-display font-light text-base sm:text-lg leading-6 sm:leading-7 text-[rgb(238,238,238)] animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
          style={{ animationDelay: '0.9s' }}
        >
          DualityUX is a design agency dedicated to crafting data-driven
          digital experiences that balance strategy and creativity.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full max-w-[280px] sm:max-w-none animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
          style={{ animationDelay: '1.05s' }}
        >
          <CtaButton href="#case-studies" label="View Case Studies" />
          <CtaButton href="#contact" label="Book a call" light />
        </div>
      </div>

      <div
        className="absolute left-0 bottom-0 w-full z-10 bg-[rgba(0,0,0,0.11)] py-4 sm:py-5 flex flex-col items-center gap-4 sm:gap-6 animate-[fadeUp_0.8s_ease_both]"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="font-display font-light text-xs sm:text-sm leading-5 text-white text-center px-4">
          We've been actively partnering with leading companies across the
          industry
        </span>
        <div className="marquee-mask relative w-full max-w-[1280px] h-8 sm:h-10 overflow-hidden">
          <div className="absolute left-0 top-0 flex items-center gap-8 sm:gap-10 h-8 sm:h-10 w-max animate-[marquee_34s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={name + i}
                className="flex-none h-8 sm:h-10 flex items-center font-sans font-semibold text-sm sm:text-base text-white/70 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
