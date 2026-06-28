import AboutSection from '../components/About'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)] pt-24 sm:pt-28">
        <AboutSection />
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100vh' }}>
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
