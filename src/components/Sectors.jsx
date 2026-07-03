import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const sectors = [
  { name: 'Financial Technology (Fintech)', companies: 'Mercury, Modern Treasury' },
  { name: 'B2B Enterprise Software',        companies: 'Notion, Asana, HockeyStack' },
  { name: 'Crypto',                          companies: 'Chainalysis' },
  { name: 'Ecommerce',                       companies: 'Faire, Recharge, Whatnot, Honeybee' },
  { name: 'Fashion Tech',                    companies: 'Turoora' },
  { name: 'Venture Capital',                 companies: 'Lux Capital, Homebrew, Craft Ventures' },
  { name: 'Logistics',                       companies: 'Envase Technologies, Nuvocargo, project44' },
  { name: 'Healthcare',                      companies: 'DMI' },
  { name: 'Education',                       companies: 'Meridian University, Quickstart' },
]

function Sectors() {
  const [sectionRef, isInView] = useInView({ threshold: 0.08 })
  const [activeRow, setActiveRow] = useState(null)

  const cursorRef = useRef(null)
  const pos       = useRef({ x: -300, y: -300 })
  const target    = useRef({ x: -300, y: -300 })
  const raf       = useRef(null)
  const navigate  = useNavigate()

  const reveal     = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  /* Lerp-tracked cursor */
  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1
      pos.current.y += (target.current.y - pos.current.y) * 0.1
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center gap-2 bg-white text-black px-4 h-10 rounded-[10px] font-display font-medium text-sm shadow-xl"
        style={{
          willChange: 'transform',
          opacity: activeRow !== null ? 1 : 0,
          scale: activeRow !== null ? '1' : '0.85',
          transition: 'opacity 0.2s ease, scale 0.2s ease',
        }}
      >
        Book a call
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </div>

      {/* Section */}
      <section
        ref={sectionRef}
        className="relative w-full bg-[rgb(5,5,5)] py-16 sm:py-20 lg:py-24 select-none"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div
            className={`mb-12 sm:mb-16 transition-all duration-700 ease-out ${reveal}`}
            style={delayStyle(0)}
          >
            <p className="m-0 font-display text-sm font-medium text-[rgb(170,170,170)]">
              Industries
            </p>
            <h2 className="m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] text-white">
              Sectors we serve
            </h2>
            <p className="m-0 mt-4 font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed max-w-xl">
              We have worked across the following sectors, constantly expanding like the Cosmos.
            </p>
          </div>

          {/* Rows */}
          <div
            className="border-t border-[rgb(32,32,32)] md:[cursor:none]"
            onMouseLeave={() => setActiveRow(null)}
          >
            {sectors.map((sector, i) => (
              <div
                key={sector.name}
                onMouseEnter={() => setActiveRow(i)}
                onClick={() => navigate('/contact')}
                className={`flex items-center justify-between gap-6 py-6 sm:py-7 border-b border-[rgb(32,32,32)] transition-all duration-700 ease-out cursor-pointer md:cursor-[inherit] ${reveal}`}
                style={delayStyle(150 + i * 55)}
              >
                <span
                  className="font-display font-light text-lg sm:text-2xl transition-all duration-300 ease-out"
                  style={{
                    color: activeRow === i ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.5)',
                    transform: activeRow === i ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  {sector.name}
                </span>
                <span
                  className="font-display text-sm sm:text-base text-right shrink-0 transition-colors duration-300 ease-out"
                  style={{
                    color: activeRow === i ? 'rgb(190,190,190)' : 'rgb(90,90,90)',
                  }}
                >
                  {sector.companies}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile CTA — hidden on desktop where the custom cursor handles it */}
          <div className="mt-8 md:hidden">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-white text-black px-5 h-11 rounded-[10px] font-display font-medium text-sm"
            >
              Book a call
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Sectors
