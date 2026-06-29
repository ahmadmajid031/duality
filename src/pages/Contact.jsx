import { useState } from 'react'
import Footer from '../components/Footer'

const services = [
  'Web design',
  'Product Design',
  'Marketing Automation',
  'AI Integrations',
  'UX Research',
]

const companySizes = ['1–10', '11–50', '51–200', '201–500', '500+']

const dotPositions = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '100%' },
  { top: '100%', left: '0%' },
  { top: '100%', left: '100%' },
]

function Checkbox({ checked, onChange, label, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2.5 cursor-pointer select-none"
    >
      <span className="relative flex-none w-[18px] h-[18px]">
        <input
          id={htmlFor}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-[18px] h-[18px] rounded-[5px] border border-[rgb(80,80,80)] bg-transparent checked:bg-white checked:border-white transition-colors cursor-pointer"
        />
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="font-display text-[15px] text-white">{label}</span>
    </label>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block font-display text-sm font-medium text-white mb-2.5">
        {label}
        {required && <span className="text-[rgb(140,140,140)]"> *</span>}
      </label>
      {children}
    </div>
  )
}

const inputClassName =
  'w-full bg-transparent border-0 border-b border-[rgb(60,60,60)] pb-2.5 font-display text-[15px] text-white placeholder:text-[rgb(120,120,120)] focus:outline-none focus:border-white transition-colors'

function Contact() {
  const [selectedServices, setSelectedServices] = useState([])
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="relative z-10 bg-[rgb(5,5,5)] overflow-hidden">
        <div className="absolute left-[5%] top-[-5%] w-[55%] h-[55%] bg-[rgba(127,86,217,0.35)] blur-[140px] rounded-full pointer-events-none" />

        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]">
              <h1 className="m-0 font-display font-light text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] text-white">
                Let&rsquo;s Talk
              </h1>
              <p className="m-0 mt-5 max-w-md font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                Please enter your details and let us know about your
                requirements.
              </p>
              <p className="m-0 mt-8 max-w-md font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                We typically reply in 3 hours. You can leave information and
                your requirements and we will send you a scope of work
                document.
              </p>
              <p className="m-0 mt-8 max-w-md font-display text-base sm:text-lg text-[rgb(170,170,170)] leading-relaxed">
                Interested in talking us through your problem?{' '}
                <a
                  href="#"
                  className="text-white underline hover:text-[rgb(200,200,200)]"
                >
                  Book a call
                </a>
              </p>
            </div>

            <div
              className="animate-[fadeUp_0.7s_cubic-bezier(.2,.7,.2,1)_both]"
              style={{ animationDelay: '0.12s' }}
            >
              <div className="relative border border-[rgb(46,46,46)] rounded-2xl p-6 sm:p-10">
                {dotPositions.map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={pos}
                  />
                ))}

                {submitted ? (
                  <div className="py-10 text-center">
                    <p className="m-0 font-display font-light text-2xl text-white">
                      Thanks — we&rsquo;ve got it.
                    </p>
                    <p className="m-0 mt-3 font-display text-base text-[rgb(170,170,170)]">
                      We&rsquo;ll get back to you within a few hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                    <div className="grid grid-cols-2 gap-6">
                      <Field label="First name" required>
                        <input
                          type="text"
                          placeholder="First name"
                          required
                          className={inputClassName}
                        />
                      </Field>
                      <Field label="Last name" required>
                        <input
                          type="text"
                          placeholder="Last name"
                          required
                          className={inputClassName}
                        />
                      </Field>
                    </div>

                    <Field label="Email" required>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className={inputClassName}
                      />
                    </Field>

                    <Field label="Phone Number" required>
                      <input
                        type="tel"
                        placeholder="Enter your Phone Number"
                        required
                        className={inputClassName}
                      />
                    </Field>

                    <div>
                      <label className="block font-display text-sm font-medium text-white mb-3">
                        What services are you interested in?
                        <span className="text-[rgb(140,140,140)]"> *</span>
                      </label>
                      <div className="flex flex-col gap-3">
                        {services.map((service) => (
                          <Checkbox
                            key={service}
                            htmlFor={`service-${service}`}
                            label={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => toggleService(service)}
                          />
                        ))}
                      </div>
                    </div>

                    <Field label="What is your company size?" required>
                      <div className="relative">
                        <select
                          required
                          defaultValue=""
                          className={`${inputClassName} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>
                            Select your company size
                          </option>
                          {companySizes.map((size) => (
                            <option key={size} value={size} className="text-black">
                              {size}
                            </option>
                          ))}
                        </select>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute right-0 top-0 text-[rgb(150,150,150)] pointer-events-none"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </Field>

                    <Field label="Enter your Message" required>
                      <textarea
                        rows={3}
                        placeholder="Enter your message and any notes that you want to leave for us"
                        required
                        className={`${inputClassName} resize-none`}
                      />
                    </Field>

                    <Checkbox
                      htmlFor="agree-privacy"
                      checked={agreed}
                      onChange={() => setAgreed((a) => !a)}
                      label={
                        <>
                          You agree to our friendly{' '}
                          <a
                            href="#"
                            className="text-white underline hover:text-[rgb(200,200,200)]"
                          >
                            privacy policy
                          </a>
                          .
                        </>
                      }
                    />

                    <button
                      type="submit"
                      className="h-12 rounded-lg bg-white font-display text-sm font-medium text-black hover:bg-[rgb(230,230,230)] transition-colors"
                    >
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sticky bottom-0 z-0" style={{ top: '100dvh' }}>
        <Footer />
      </div>
    </>
  )
}

export default Contact
