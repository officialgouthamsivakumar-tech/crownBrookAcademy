'use client'

import { useEffect, useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [children])

  return (
    <div className={`page-transition ${isVisible ? 'page-visible' : 'page-hidden'}`}>
      {children}
    </div>
  )
}
