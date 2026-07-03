import aboutImage from '../assets/about-image.jpg'
import { useInView } from '../hooks/useInView'

function About() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  const reveal = (delayMs) =>
    `transition-all duration-700 ease-out ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`

  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  return (
    <section
      ref={ref}
      className="relative w-full bg-[rgb(5,5,5)] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-[6%] top-0 w-[30%] h-[24%] bg-[rgba(1,100,190,0.22)] blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute right-[6%] top-0 w-[30%] h-[24%] bg-[rgba(207,113,188,0.18)] blur-[110px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <img
          src={aboutImage}
          alt=""
          className={`w-full h-auto rounded-2xl sm:rounded-3xl ${reveal(0)}`}
          style={delayStyle(0)}
        />

        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
          <div className="max-w-2xl">
            <p className={`m-0 text-sm font-medium text-[rgb(170,170,170)] ${reveal(150)}`} style={delayStyle(150)}>
              Nice to meet you
            </p>
            <h2
              className={`m-0 mt-3 font-display font-light text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px] tracking-[0.01em] text-white ${reveal(250)}`}
              style={delayStyle(250)}
            >
              Our mission is to transform digital experiences by blending AI, design, and technology
            </h2>
          </div>

          <p
            className={`m-0 max-w-md text-base sm:text-lg leading-relaxed text-[rgb(170,170,170)] lg:pt-2 ${reveal(350)}`}
            style={delayStyle(350)}
          >
            Duality is a design agency that helps teams turn data into clear,
            usable products. Our focus is to create real connections. We
            combine design with behavioral science and user psychology to make
            products that feel human.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
