import { useState, useEffect, useRef } from 'react'

const OPEN_AFTER_MS = 10000

// Emil: strong ease-out — starts fast, settles naturally
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)'

const dotPositions = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '100%' },
  { top: '100%', left: '0%' },
  { top: '100%', left: '100%' },
]

function NewsletterDialog() {
  const [mounted, setMounted]     = useState(false) // in DOM
  const [visible, setVisible]     = useState(false) // drives CSS transition
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [blurring, setBlurring]   = useState(false) // Emil: blur-mask crossfade
  const rafRef = useRef(null)

  // Show 10 s after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), OPEN_AFTER_MS)
    return () => clearTimeout(t)
  }, [])

  // Double-RAF: let browser paint the initial (invisible) state before
  // applying the visible state so the transition actually fires
  useEffect(() => {
    if (!mounted) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setVisible(true))
    })
    return () => cancelAnimationFrame(rafRef.current)
  }, [mounted])

  const close = () => {
    setVisible(false)
    // Wait for exit transition before unmounting
    setTimeout(() => {
      setMounted(false)
      setSubmitted(false)
      setBlurring(false)
      setEmail('')
    }, 280)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Emil: blur-mask the departing state, then crossfade to success
    setBlurring(true)
    setTimeout(() => {
      setSubmitted(true)
      setBlurring(false)
    }, 180)
  }

  if (!mounted) return null

  // Emil: separate backdrop + dialog transitions — they can differ in timing
  const backdropStyle = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.52)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    opacity: visible ? 1 : 0,
    transition: `opacity ${visible ? `200ms ease-out` : `180ms ease-out`}`,
    cursor: 'pointer',
  }

  // Emil: enter from scale(0.95) + translateY(8px), not scale(0)
  // transform-origin: center — correct for modals (not origin-aware)
  const dialogStyle = {
    pointerEvents: 'all',
    position: 'relative',
    width: '400px',
    maxWidth: '100%',
    background: 'rgba(11,17,32,0.98)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
    transformOrigin: 'center',
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'scale(1) translateY(0px)'
      : 'scale(0.95) translateY(10px)',
    // Emil: duration 300ms modal, ease-out entry; faster exit
    transition: visible
      ? `opacity 320ms ${EASE_OUT}, transform 360ms ${EASE_OUT}`
      : `opacity 220ms ${EASE_OUT}, transform 220ms ${EASE_OUT}`,
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        // Clicks outside modal hit backdrop → close
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      {/* Backdrop */}
      <div style={backdropStyle} onClick={close} aria-hidden="true" />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Subscribe to our newsletter"
        style={dialogStyle}
      >
        {/* Corner dots — DualityUX selection box aesthetic */}
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'white',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              ...pos,
            }}
          />
        ))}

        {/* Close — Emil: scale(0.97) on :active */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(238,242,255,0.35)',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'inherit',
            // Emil: transition only the properties you need
            transition: 'background 150ms ease-out, color 150ms ease-out',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
            e.currentTarget.style.color = 'rgba(238,242,255,0.7)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            e.currentTarget.style.color = 'rgba(238,242,255,0.35)'
          }}
          // Emil: scale(0.97) on :active — confirms the press
          onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          ✕
        </button>

        {/* Content wrapper — Emil: blur-mask crossfade between form and success */}
        <div
          style={{
            filter: blurring ? 'blur(3px)' : 'blur(0px)',
            opacity: blurring ? 0.6 : 1,
            // Emil: only animate opacity + filter (no layout)
            transition: `filter 180ms ease-out, opacity 180ms ease-out`,
          }}
        >
          {!submitted ? (
            /* ── Form state ── */
            <div>
              {/* Envelope icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(238,242,255,0.7)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>

              <p
                style={{
                  margin: '0 0 8px',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#eef2ff',
                  lineHeight: 1.3,
                }}
              >
                Stay in the loop
              </p>

              <p
                style={{
                  margin: '0 0 24px',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '13.5px',
                  color: 'rgba(238,242,255,0.48)',
                  lineHeight: 1.65,
                }}
              >
                Design insights, case studies, and updates from Duality — no noise, just signal. Once a month.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '0 14px',
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '14px',
                    color: '#eef2ff',
                    outline: 'none',
                    // Emil: specify exact property, not `all`
                    transition: 'border-color 150ms ease-out',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                />

                {/* Emil: button scale(0.97) on :active — feels like it hears you */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    height: '44px',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0b1120',
                    cursor: 'pointer',
                    // Emil: only transform, not scale + box-shadow + everything
                    transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background 150ms ease-out',
                    transformOrigin: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#e8eeff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#ffffff' }}
                  onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                  onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
                >
                  Subscribe
                </button>
              </form>

              <p
                style={{
                  margin: '14px 0 0',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '11.5px',
                  color: 'rgba(238,242,255,0.24)',
                  textAlign: 'center',
                }}
              >
                No spam. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            /* ── Success state ── */
            <div
              style={{
                textAlign: 'center',
                padding: '16px 0 8px',
                // Emil: fade in success state (it enters fresh after blur-mask completes)
                opacity: blurring ? 0 : 1,
                transform: blurring ? 'translateY(6px)' : 'translateY(0)',
                transition: `opacity 220ms ${EASE_OUT}, transform 260ms ${EASE_OUT}`,
              }}
            >
              {/* Checkmark */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1px solid rgba(34,197,94,0.3)',
                  background: 'rgba(34,197,94,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 20px rgba(34,197,94,0.1)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <p
                style={{
                  margin: '0 0 8px',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#eef2ff',
                }}
              >
                You&rsquo;re in.
              </p>

              <p
                style={{
                  margin: '0 0 24px',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '13.5px',
                  color: 'rgba(238,242,255,0.48)',
                  lineHeight: 1.65,
                }}
              >
                Thanks for subscribing. We&rsquo;ll be in touch with only the good stuff.
              </p>

              <button
                onClick={close}
                style={{
                  width: '100%',
                  height: '44px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(238,242,255,0.8)',
                  cursor: 'pointer',
                  transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background 150ms ease-out',
                  transformOrigin: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsletterDialog
