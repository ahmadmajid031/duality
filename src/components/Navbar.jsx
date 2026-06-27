import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About DualityUX', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Case Studies', href: '/use-cases' },
]

function Navbar() {
  const [compact, setCompact] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const dy = y - lastY
      if (y <= 10) setCompact(false)
      else if (dy > 2) {
        setCompact(true)
        setMenuOpen(false)
      } else if (dy < -2) setCompact(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [menuOpen])

  return (
    <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 sm:px-8">
      <div ref={wrapperRef} className="relative w-full max-w-[420px] sm:w-auto sm:max-w-none">
        <div
          className={`flex items-center gap-1.5 h-12 sm:h-[52px] pl-3 sm:pl-3.5 pr-2 py-2 shadow-[inset_0_0_0_1px_rgb(233,234,235),0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-[padding,background-color,backdrop-filter] duration-[450ms] ease-[cubic-bezier(.7,0,.2,1)] ${
            menuOpen ? 'rounded-t-xl rounded-b-none' : 'rounded-xl'
          } ${
            compact && !menuOpen
              ? 'bg-white/70 backdrop-blur-xl'
              : 'bg-white backdrop-blur-none'
          }`}
        >
          <div className="flex-none flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
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
              className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-[550ms] ease-[cubic-bezier(.7,0,.2,1)] ${
                compact && !menuOpen
                  ? 'max-w-0 opacity-0 mx-0'
                  : 'max-w-[760px] opacity-100 mr-3'
              }`}
            >
              <div className="flex items-center gap-5">
                <span className="flex-none flex items-center h-6 font-coolvetica text-xl leading-none text-[rgb(52,52,52)]">
                  DualityUX
                </span>
                <div className="hidden md:flex items-center gap-4 flex-none">
                  {navLinks.slice(0, 3).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold leading-6 text-[rgb(83,88,98)] no-underline transition-colors duration-200 hover:text-[rgb(24,29,39)]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    to="/use-cases"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative flex-none flex items-center justify-center w-9 h-9 rounded-[8px] text-[rgb(52,52,52)]"
          >
            <span
              className={`absolute block h-[1.5px] w-[18px] bg-current rounded-full transition-transform duration-300 ease-[cubic-bezier(.6,0,.3,1)] ${
                menuOpen ? 'rotate-45' : '-translate-y-[3.5px]'
              }`}
            />
            <span
              className={`absolute block h-[1.5px] w-[18px] bg-current rounded-full transition-transform duration-300 ease-[cubic-bezier(.6,0,.3,1)] ${
                menuOpen ? '-rotate-45' : 'translate-y-[3.5px]'
              }`}
            />
          </button>

          <a
            href="#contact"
            className="hidden md:flex flex-none items-center justify-center h-9 px-4 rounded-[8px] bg-black shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),0px_1px_2px_0px_rgba(10,13,18,0.05)] no-underline text-sm font-semibold leading-6 text-white whitespace-nowrap transition-colors duration-200 hover:bg-neutral-800"
          >
            Book a call
          </a>
        </div>

        <div
          className={`md:hidden overflow-hidden bg-white rounded-b-xl shadow-[0px_8px_24px_0px_rgba(10,13,18,0.18),inset_0_0_0_1px_rgb(233,234,235)] transition-[max-height] duration-[400ms] ease-[cubic-bezier(.7,0,.2,1)] ${
            menuOpen ? 'max-h-[360px]' : 'max-h-0'
          }`}
        >
          <div className="p-2 flex flex-col gap-0.5">
            {navLinks.map((link, i) => {
              const itemClassName =
                'px-3 py-2.5 rounded-lg text-sm font-semibold text-[rgb(83,88,98)] no-underline transition-[color,background-color,opacity,transform] duration-300 hover:bg-[rgb(247,247,248)] hover:text-[rgb(24,29,39)]'
              const itemStyle = {
                transitionDelay: menuOpen ? `${80 + i * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
              }
              return link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={itemClassName}
                  style={itemStyle}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={itemClassName}
                  style={itemStyle}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-center h-10 rounded-lg bg-black no-underline text-sm font-semibold text-white transition-[opacity,transform] duration-300 hover:bg-neutral-800"
              style={{
                transitionDelay: menuOpen ? `${80 + navLinks.length * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
              }}
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
