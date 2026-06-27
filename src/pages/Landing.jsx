import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)]">
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
        </main>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100vh' }}>
        <Footer />
      </div>
    </>
  )
}

export default Landing
