import { Link } from 'react-router-dom'

const sizeClasses = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 sm:h-12 px-5 text-sm sm:text-base',
}

function CtaButton({ href, label, light, size = 'md', fullWidthOnMobile = false }) {
  const Component = href.startsWith('/') ? Link : 'a'
  const linkProp = href.startsWith('/') ? { to: href } : { href }

  return (
    <Component
      {...linkProp}
      className={`group relative flex items-center justify-center ${sizeClasses[size]} rounded-[10px] overflow-hidden no-underline ${
        fullWidthOnMobile ? 'w-full sm:w-auto' : ''
      } shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),0px_1px_2px_0px_rgba(10,13,18,0.05)] ${
        light ? 'bg-white' : 'bg-black'
      }`}
    >
      <span
        className={`block transition-transform duration-[420ms] ease-[cubic-bezier(.6,0,.15,1)] group-hover:-translate-y-[150%] font-display font-medium leading-6 whitespace-nowrap ${
          light ? 'text-black' : 'text-white'
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-[420ms] ease-[cubic-bezier(.6,0,.15,1)] group-hover:translate-y-0 ${
          light ? 'text-black' : 'text-white'
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </span>
    </Component>
  )
}

export default CtaButton
