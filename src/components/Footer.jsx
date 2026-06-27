import CtaButton from './CtaButton'
import { useInView } from '../hooks/useInView'
import footerLogo from '../assets/footer-logo.svg'

const navLinks = [
  { label: 'Overview', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
]

const legalLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Cookies', href: '#' },
]

function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const reveal = isInView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const delayStyle = (ms) => ({ transitionDelay: isInView ? `${ms}ms` : '0ms' })

  return (
    <footer
      ref={ref}
      className="relative w-full bg-black overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(0)}
        >
          <h2 className="m-0 max-w-3xl font-display font-light text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px]">
            <span className="text-white">
              Let&rsquo;s discuss the problem you want solved. Book a call or
              send us a message.{' '}
            </span>
            <span className="text-[rgb(140,140,140)]">
              We typically respond within a few hours.
            </span>
          </h2>
        </div>

        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-10 sm:mt-12 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(150)}
        >
          <CtaButton href="#contact" label="Book a call now" light />
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white no-underline hover:text-[rgb(180,180,180)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className={`mt-16 sm:mt-20 lg:mt-24 transition-all duration-700 ease-out ${reveal}`}
          style={delayStyle(300)}
        >
          <img
            src={footerLogo}
            alt="DualityUX"
            className="w-full max-w-[1100px] h-auto"
          />
        </div>

        <div className="border-t border-[rgb(38,38,38)] mt-10 sm:mt-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="m-0 text-sm text-[rgb(140,140,140)]">
            © {new Date().getFullYear()} DualityUX. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[rgb(140,140,140)] no-underline hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
