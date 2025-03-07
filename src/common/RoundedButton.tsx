import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

export default function RoundedButton({ children, backgroundColor, ...attributes }) {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
        className="group relative flex items-center justify-center py-[15px] px-[60px] border border-[#888888] rounded-[3em] cursor-pointer overflow-hidden"
      >
        {React.isValidElement(children) ? (
          React.cloneElement(children, {
            className:
              "relative z-10 transition-colors duration-[400ms] ease-linear group-hover:text-white",
          })
        ) : (
          <span className="relative z-10 transition-colors duration-[400ms] ease-linear group-hover:text-white">
            {children}
          </span>
        )}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute w-full h-[150%] rounded-full top-full"
        ></div>
      </div>
    </Magnetic>
  );
}
