import AboutSection from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)] pt-24 sm:pt-28">
        <AboutSection />
        <Testimonials />
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100dvh' }}>
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
