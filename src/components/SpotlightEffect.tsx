'use client'

import { useEffect } from 'react'

export function SpotlightEffect() {
  useEffect(() => {
    const spotlight = document.querySelector('.spotlight') as HTMLElement
    
    if (!spotlight) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      spotlight.style.setProperty('--mouse-x', `${clientX}px`)
      spotlight.style.setProperty('--mouse-y', `${clientY}px`)
      
      if (!spotlight.classList.contains('active')) {
        spotlight.classList.add('active')
      }
    }

    const handleMouseLeave = () => {
      spotlight.classList.remove('active')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <div className="spotlight" />
}