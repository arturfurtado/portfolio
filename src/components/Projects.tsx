'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'URL Shortener',
    src: 'urlshortener.png',
    color: '#00042f',
    link: 'https://github.com/arturfurtado/url-shortener'
  },
  {
    id: 2,
    title: 'URL Shortener',
    src: 'urlshortener.png',
    color: '#000220',
    link: 'https://github.com/arturfurtado/url-shortener'
  },
  {
    id: 3,
    title: 'URL Shortener',
    src: 'urlshortener.png',
    color: '#000000',
    link: 'https://github.com/arturfurtado/url-shortener'
  }
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 1, ease: [0.32, 0, 0.67, 0] } }
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  const xMoveContainer = useRef<((value: number) => void) | null>(null);
  const yMoveContainer = useRef<((value: number) => void) | null>(null);
  const xMoveCursor = useRef<((value: number) => void) | null>(null);
  const yMoveCursor = useRef<((value: number) => void) | null>(null);
  const xMoveCursorLabel = useRef<((value: number) => void) | null>(null);
  const yMoveCursorLabel = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  const moveItems = (x: number, y: number) => {
    if (
      xMoveContainer.current &&
      yMoveContainer.current &&
      xMoveCursor.current &&
      yMoveCursor.current &&
      xMoveCursorLabel.current &&
      yMoveCursorLabel.current
    ) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      className="h-screen overflow-y-auto"
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
    >
      <div className="w-full flex flex-col items-center justify-center mb-[100px] pt-[100px]">
        {projects.map((project, i) => (
          <Project
            key={project.id}
            index={i}
            title={project.title}
            manageModal={manageModal}
            link={project.link}
          />
        ))}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed top-1/2 left-1/2 w-[400px] h-[350px] bg-white pointer-events-none overflow-hidden z-[3]"
        >
          <div
            style={{ top: index * -100 + "%" }}
            className="relative h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          >
            {projects.map((project, i) => {
              const { src, color } = project;
              return (
                <div
                  key={`modal_${i}`}
                  className="h-full w-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <Image
                    src={`/projects/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-[14px] font-light pointer-events-none z-[3]"
        ></motion.div>

        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed w-20 h-20 rounded-full bg-transparent text-white flex items-center justify-center text-[14px] font-light pointer-events-none z-[3]"
        >
          Ver
        </motion.div>
      </>
    </main>
  );
}
