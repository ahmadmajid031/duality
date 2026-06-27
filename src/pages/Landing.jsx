import { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Landing() {
  const footerRef = useRef(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const updateHeight = () => setFooterHeight(el.offsetHeight)
    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className="relative z-10 bg-[rgb(5,5,5)]"
        style={{ marginBottom: footerHeight }}
      >
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
        </main>
      </div>

      <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  )
}

export default Landing
