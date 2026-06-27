import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About DualityUX', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
]

function Navbar() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const dy = y - lastY
      if (y <= 10) setCompact(false)
      else if (dy > 2) setCompact(true)
      else if (dy < -2) setCompact(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 sm:px-8">
      <div
        className={`flex items-center gap-1.5 h-12 sm:h-[52px] pl-3 sm:pl-3.5 pr-2 py-2 rounded-xl shadow-[inset_0_0_0_1px_rgb(233,234,235),0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-[padding,background-color,backdrop-filter] duration-[550ms] ease-[cubic-bezier(.7,0,.2,1)] ${
          compact
            ? 'bg-white/70 backdrop-blur-xl'
            : 'bg-white backdrop-blur-none'
        }`}
      >
        <div className="flex-none w-6 h-[22px] flex items-center justify-center">
          <svg
            width="25.6"
            height="22.1"
            viewBox="0 0 32.395 28.055"
            className="block drop-shadow-[0_0_6.2px_rgba(0,188,182,0.25)]"
          >
            <g transform="matrix(0,1,-1,0,32.395,-0.055)">
              <path
                d="M 14.027 0 L 22.126 2.17 L 28.055 8.099 L 14.027 16.198 L 28.055 24.296 L 22.126 30.225 L 14.027 32.395 L 5.929 30.225 L 0 24.296 L 14.027 16.198 L 0 8.099 L 5.929 2.17 L 14.027 0 Z"
                fill="rgb(52,52,52)"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>

        <div
          className={`flex items-center gap-5 overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-[550ms] ease-[cubic-bezier(.7,0,.2,1)] ${
            compact
              ? 'max-w-0 opacity-0 mx-0'
              : 'max-w-[760px] opacity-100 mr-4'
          }`}
        >
          <span className="flex-none font-coolvetica text-xl leading-none text-[rgb(52,52,52)]">
            DualityUX
          </span>
          <div className="hidden md:flex items-center gap-4 flex-none">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold leading-6 text-[rgb(83,88,98)] no-underline transition-colors duration-200 hover:text-[rgb(24,29,39)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#case-studies"
              className="flex items-center gap-1 text-sm font-semibold leading-6 text-[rgb(83,88,98)] no-underline transition-colors duration-200 hover:text-[rgb(24,29,39)]"
            >
              Case Studies
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        <a
          href="#contact"
          className="flex-none flex items-center justify-center h-9 px-4 rounded-[8px] bg-black shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),0px_1px_2px_0px_rgba(10,13,18,0.05)] no-underline text-sm font-semibold leading-6 text-white whitespace-nowrap transition-colors duration-200 hover:bg-neutral-800"
        >
          Book a call
        </a>
      </div>
    </div>
  )
}

export default Navbar
