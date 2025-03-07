'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Rounded from '@/common/RoundedButton'

const Contact: React.FC = () => {
  const finalText = "Entre em Contato"
  const [displayText, setDisplayText] = useState<string>(
    Array.from(finalText).map(() => getRandomChar()).join('')
  )
  const animationRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  function getRandomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!?#<>&%"
    return chars.charAt(Math.floor(Math.random() * chars.length))
  }

  useEffect(() => {
    if (!animationRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
          }
        })
      },
      { threshold: 1 }
    )

    observer.observe(animationRef.current)

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current)
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    let reveal = 0
    const interval = setInterval(() => {
      setDisplayText(() => {
        let text = ""
        for (let i = 0; i < finalText.length; i++) {
          text += i < reveal ? finalText[i] : getRandomChar()
        }
        return text
      })
      reveal++
      if (reveal > finalText.length) clearInterval(interval)
    }, 65)

    return () => clearInterval(interval)
  }, [hasAnimated, finalText])

  const scrollContainer = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

  return (
    <motion.div 
      ref={scrollContainer}
      style={{ y }}
      className="text-white flex flex-col items-center justify-center bg-[#141516] relative"
    >
      <div className="py-[200px] w-full max-w-[1800px] bg-[#141516]">
        <div ref={animationRef} className="flex w-full justify-center text-3xl font-bold mb-8">
          {displayText}
        </div>
        <div className="border-b border-[rgb(134,134,134)] pb-[100px] mx-[200px] relative">
          
          <h2 className="text-[5vw] m-0 font-light"></h2>
          <motion.div 
            style={{ x, left: 'calc(100% - 400px)', top: 'calc(100% - 75px)' }}
            className="absolute"
          >
            <Rounded backgroundColor="#334BD3" className="w-[180px] h-[180px] bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer">
              <p className="m-0 text-[16px] font-light z-10 relative">Email</p>
            </Rounded>
          </motion.div>
          <motion.svg 
            style={{ rotate, scale: 2 }}
            width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-full"
          >
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
          </motion.svg>
        </div>
        <div className="flex gap-[20px] mt-[100px] mx-[200px]">
          <Rounded>
            <p className="m-0 text-[16px] font-light relative after:content-[''] after:w-0 after:h-[1px] after:bg-white after:block after:mt-[2px] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-200 hover:after:w-full">
             artururtado@gmail.com
            </p>
          </Rounded>
          <Rounded>
            <p className="m-0 text-[16px] font-light relative after:content-[''] after:w-0 after:h-[1px] after:bg-white after:block after:mt-[2px] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-200 hover:after:w-full">
              +55 (47) 99983-8278
            </p>
          </Rounded>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
