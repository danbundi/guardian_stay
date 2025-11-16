import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/generated-image-removebg-preview.png'

const Header = () => {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide down animation
      gsap.fromTo(headerRef.current,
        { 
          opacity: 0,
          y: -100
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      )

      // Logo scale and fade animation
      gsap.fromTo(logoRef.current,
        { 
          opacity: 0,
          scale: 0.5,
          rotation: -180
        },
        { 
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3
        }
      )

      // Button slide in from right
      gsap.fromTo(buttonRef.current,
        { 
          opacity: 0,
          x: 100,
          scale: 0.8
        },
        { 
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5
        }
      )

      // Button hover animation
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const handleContactClick = () => {
    window.open('https://wa.link/b7csds')
  }

  return (
    <header ref={headerRef} className="bg-gray-300 backdrop-blur-md shadow-sm m-[25px] rounded-4xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              ref={logoRef}
              src={logo} 
              className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm"
              alt="GuardianStay Logo"
            />
            <span className="text-xl font-bold text-blue-900">GuardianStay</span>
          </div>

          {/* Call to Action Button */}
          <button 
            ref={buttonRef}
            onClick={handleContactClick}
            className="bg-amber-500 text-white px-6 py-3 rounded-3xl font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header