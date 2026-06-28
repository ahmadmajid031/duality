import { Link } from 'react-router-dom'
import CtaButton from './CtaButton'
import footerLogo from '../assets/footer-logo.svg'

const navLinks = [
  { label: 'About DualityUX', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/use-cases' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Cookies', href: '#' },
]

function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden pt-10 sm:pt-12 lg:pt-14">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div>
          <h2 className="m-0 max-w-3xl font-display font-light text-[24px] leading-[32px] sm:text-[30px] sm:leading-[38px] lg:text-[36px] lg:leading-[44px]">
            <span className="text-white">
              Let&rsquo;s discuss the problem you want solved. Book a call or
              send us a message.{' '}
            </span>
            <span className="text-[rgb(140,140,140)]">
              We typically respond within a few hours.
            </span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-6 sm:mt-8">
          <CtaButton href="/contact" label="Book a call now" light size="sm" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-white no-underline hover:text-[rgb(180,180,180)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <Link to="/" className="block w-full max-w-[760px]">
            <img src={footerLogo} alt="DualityUX" className="w-full h-auto" />
          </Link>
        </div>

        <div className="border-t border-[rgb(38,38,38)] mt-6 sm:mt-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
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
