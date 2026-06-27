import { useEffect, useRef, useState } from 'react'

// rootMargin shrinks the viewport's bottom edge inward, so the element must be
// scrolled meaningfully into view (not just touching the edge) before it triggers.
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -35% 0px' } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isInView]
}
