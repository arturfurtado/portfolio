"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RoundedButton from "@/common/RoundedButton";

const Contact: React.FC = () => {
  const finalText = "Entre em Contato";
  const [displayText, setDisplayText] = useState<string>(
    Array.from(finalText)
      .map(() => getRandomChar())
      .join("")
  );
  const animationRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  function getRandomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!?#<>&%";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  useEffect(() => {
    if (!animationRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(animationRef.current);

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let reveal = 0;
    const interval = setInterval(() => {
      setDisplayText(() => {
        let text = "";
        for (let i = 0; i < finalText.length; i++) {
          text += i < reveal ? finalText[i] : getRandomChar();
        }
        return text;
      });
      reveal++;
      if (reveal > finalText.length) clearInterval(interval);
    }, 65);

    return () => clearInterval(interval);
  }, [hasAnimated, finalText]);

  const scrollContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 5], [120, 120]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="text-white flex flex-col items-center justify-center bg-[#141516] relative"
      id="contato"
    >
      <div className="py-6 md:py-[100px] w-full max-w-[1800px] bg-[#141516]">
        {/* Texto animado */}
        <div
          ref={animationRef}
          className="flex md:w-full justify-center text-lg md:text-3xl font-bold md:mb-8"
        >
          {displayText}
        </div>

        {/* Container com botão e SVG */}
        <div className="border-b border-[rgb(134,134,134)] pb-6 md:pb-[100px] mx-4 md:mx-[200px] md:relative flex ">
          <h2 className="md:text-[5vw] m-0 font-light"></h2>
          <motion.div
            style={{
              x,
              left: isMobile ? "calc(100% - 200px)" : "calc(100% - 400px)",
              top: isMobile ? "calc(100% - 50px)" : "calc(100% - 75px)",
            }}
            className="md:absolute"
          >
            <RoundedButton
              backgroundColor="#334BD3"
              className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer"
            >
              <p className="md:text-[16px] font-light z-10 md:relative">Email</p>
            </RoundedButton>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute md:left-full top-[10%] md:top-[30%] hidden md:flex"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>

        {/* Contato (email e telefone) */}
        <div className="flex flex-col md:flex-row gap-5 mt-6 md:mt-16 mx-4 md:mx-[200px]">
          <RoundedButton backgroundColor="#455CE9">
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&to=artururtado@gmail.com&su=Assunto&body=Olá+Artur,+estou+entrando+em+contato...&tf=cm"
              className="m-0 md:text-[16px] font-light relative after:content-[''] after:w-0 after:h-[1px] after:bg-white after:block after:mt-[2px] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-200 hover:after:w-full"
            >
              artururtado@gmail.com
            </a>
          </RoundedButton>
          <RoundedButton backgroundColor="#455CE9">
            <p className="m-0 text-[14px] md:text-[16px] font-light relative after:content-[''] after:w-0 after:h-[1px] after:bg-white after:block after:mt-[2px] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-200 hover:after:w-full">
              +55 (47) 99983-8278
            </p>
          </RoundedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
