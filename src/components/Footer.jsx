import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/generated-image-removebg-preview.png'

const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer slide up animation
      gsap.fromTo(footerRef.current,
        { 
          opacity: 0,
          y: 50
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Content stagger animation
      gsap.fromTo(contentRef.current.children,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Links hover animation
      linksRef.current.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            x: 5,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const addToLinksRef = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el)
    }
  }

  return (
    <footer ref={footerRef} className="bg-blue-900 text-white py-8 lg:py-12 m-4 lg:m-[25px] rounded-3xl lg:rounded-4xl">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <img 
                src={logo} 
                className="w-8 h-8 lg:w-10 lg:h-10 bg-amber-500 rounded-full flex items-center justify-center"
                alt="GuardianStay Logo"
              />
              <span className="text-lg lg:text-xl font-bold">GuardianStay</span>
            </div>
            <p className="text-blue-200 text-xs lg:text-sm leading-relaxed">
              Your trusted partner for home care and peace of mind while you're away.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold">Our Services</h3>
            <ul className="space-y-1 lg:space-y-2 text-blue-200 text-sm lg:text-base">
              {['House Sitting', 'Pet Care', 'Plant Care', 'Mail Collection', 'Car Services', 'Emergency Response'].map((service, index) => (
                <li 
                  key={index}
                  ref={addToLinksRef}
                  className="cursor-pointer hover:text-amber-400 transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-1 lg:space-y-2 text-blue-200 text-sm lg:text-base">
              <div ref={addToLinksRef} className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
                📞 +254 705 155 010
              </div>
              <div ref={addToLinksRef} className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
                Reach Out To Us Today 
              </div>
              <div ref={addToLinksRef} className="cursor-pointer hover:text-amber-400 transition-colors duration-300">
                📍 Serving Your Local Area
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold">Ready to Start?</h3>
            <button className="bg-amber-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 w-full text-sm lg:text-base">
              <a href="https://wa.link/b7csds" target='_blank' rel="noopener noreferrer" className='p-0 m-0 outline-0 block w-full'>
                Book Your Guardian
              </a>
            </button>
            <p className="text-blue-200 text-xs lg:text-sm">
              Available 24/7 for your peace of mind
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-6 lg:mt-8 pt-4 lg:pt-6 text-center">
          <p className="text-blue-300 text-xs lg:text-sm">
            © 2025 GuardianStay. All rights reserved. 
            <span className="text-amber-400 ml-1 lg:ml-2">Your Home's Guardian Angel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer