import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Header from './Header'

const BentoHero = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const imageRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const listItemsRef = useRef([])
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      // Left content staggered animation
      gsap.fromTo(leftRef.current.children,
        { 
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      )

      // Image slide in from right
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0,
          x: 100,
          scale: 1.1
        },
        { 
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.8
        }
      )

      // Heading text animation
      gsap.fromTo(headingRef.current.children,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 1
        }
      )

      // Paragraph text animation
      gsap.fromTo(paragraphRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.4
        }
      )

      // Button animation
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 1.8,
          ease: "back.out(1.7)"
        }
      )

      // List items animation
      gsap.fromTo(listItemsRef.current,
        {
          opacity: 0,
          x: -20
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 2
        }
      )

      // Stats animation
      gsap.fromTo(statsRef.current.children,
        {
          opacity: 0,
          scale: 0.5
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          delay: 2.2,
          ease: "back.out(1.7)"
        }
      )

      // Button hover animation
      const button = buttonRef.current
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const addToListRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el)
    }
  }

  return (
    <>
    <Header/>

    <section ref={sectionRef} className='bg-gradient-to-br from-gray-100 to-blue-400 rounded-3xl lg:rounded-4xl m-4 lg:m-[25px] min-h-screen'>
        <div className='w-full min-h-[80vh] flex flex-col lg:flex-row justify-center gap-4 lg:gap-5 m-2 lg:m-[10px] px-3 lg:px-3 py-4 lg:py-5'>
            <div ref={leftRef} className="left flex flex-col w-full min-h-full gap-4 lg:gap-5 order-2 lg:order-1">
                {/* Upper Box */}
                <div className='rounded-3xl w-full flex-1 bg-gradient-to-br from-amber-300 to-amber-700 p-6 lg:p-8 flex flex-col justify-center shadow-lg min-h-[300px] lg:min-h-[400px]'>
                    <div ref={headingRef}>
                      <h1 className='text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4'>
                          Your Home's <br />
                          <span className='text-blue-900 drop-shadow-sm'>Guardian Angel</span>
                      </h1>
                    </div>
                    <p ref={paragraphRef} className='text-amber-50 text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed'>
                        Professional house-sitting, pet care, and errand services while you're away. 
                        Peace of mind delivered to your doorstep.
                    </p>
                    <button ref={buttonRef} className='bg-blue-900 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold w-fit hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-md text-sm lg:text-base'>
                        Book Your Guardian
                    </button>
                </div>

                {/* Lower Box - with 2 divs inside */}
                <div className='rounded-3xl w-full flex-1 flex flex-col sm:flex-row gap-4 lg:gap-5 min-h-[200px] lg:min-h-[250px]'>
                    {/* Left small box */}
                    <div className='bg-white rounded-3xl p-4 lg:p-6 flex-1 flex flex-col justify-center shadow-lg border border-gray-100'>
                        <h3 className='text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4'>What We Do</h3>
                        <ul className='text-gray-600 space-y-2 lg:space-y-3 text-sm lg:text-base'>
                            <li ref={addToListRefs} className='flex items-center'>
                                <span className='w-2 h-2 bg-amber-500 rounded-full mr-2 lg:mr-3'></span>
                                Daily Home Checks
                            </li>
                            <li ref={addToListRefs} className='flex items-center'>
                                <span className='w-2 h-2 bg-amber-500 rounded-full mr-2 lg:mr-3'></span>
                                Pet Care & Walking
                            </li>
                            <li ref={addToListRefs} className='flex items-center'>
                                <span className='w-2 h-2 bg-amber-500 rounded-full mr-2 lg:mr-3'></span>
                                Plant Watering
                            </li>
                            <li ref={addToListRefs} className='flex items-center'>
                                <span className='w-2 h-2 bg-amber-500 rounded-full mr-2 lg:mr-3'></span>
                                Mail Collection
                            </li>
                        </ul>
                    </div>
                    
                    {/* Right small box */}
                    <div ref={statsRef} className='bg-gradient-to-br from-blue-900 to-blue-400 rounded-3xl p-4 lg:p-6 flex-1 flex flex-col justify-center items-center text-white shadow-lg'>
                        <div className='text-center'>
                            <div className='text-2xl lg:text-3xl font-bold mb-1 lg:mb-2'>100%</div>
                            <div className='text-blue-100 text-xs lg:text-sm'>Dedicated Care</div>
                        </div>
                        <div className='flex mt-2 lg:mt-4 text-amber-300 text-xs lg:text-sm text-center'>
                            Your Trust, Our Commitment
                        </div>
                    </div>
                </div>
            </div>
            
            <div ref={imageRef} className="bg-[url('/src/assets/housekeeper.jpeg')] bg-cover bg-center w-full lg:w-[80%] rounded-3xl shadow-lg order-1 lg:order-2 min-h-[300px] lg:min-h-full">
            </div>
        </div>
    </section>
    </>
  )
}

export default BentoHero