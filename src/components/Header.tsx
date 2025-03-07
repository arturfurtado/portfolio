"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/common/Magnetic";
import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import RoundedButton from "@/common/RoundedButton";
import CopyrightText from "./CopyrightText";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 100);
      if (currentScrollY < lastScrollY && sidebarOpen) {
        setSidebarOpen(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <>
      <motion.nav
        className="fixed top-0 z-10 w-full py-6 bg-black/70 backdrop-blur-md"
        animate={{ x: scrolled ? "-100%" : "0%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <p className="relative inline-block text-3xl font-bold select-none">
              <span className="text-transparent bg-gradient-to-l from-black to-white bg-clip-text">
                Artur
              </span>
              <motion.span
                className="absolute inset-0 text-transparent bg-gradient-to-l from-white to-black bg-clip-text"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                Artur
              </motion.span>
            </p>
          </div>
          <div className="flex space-x-8">
            {["Home", "Stack", "Projetos", "Contato"].map((item) => (
              <Magnetic key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </Magnetic>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 bg-white rounded-sm"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-4 z-20"
          >
            <RoundedButton onClick={toggleSidebar} backgroundColor="#455CE9">
              <span>Menu</span>
            </RoundedButton>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-30 w-64 h-full bg-gray-800 p-4"
          >
            <button onClick={toggleSidebar} className="mb-4 text-white">
              Fechar
            </button>
            <ul className="space-y-4">
              {["Home", "Stack", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleSidebar}
                    className="text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
      
      <div className="fixed bottom-4 right-4 z-20">
        <CopyrightText />
      </div>
    </>
  );
}
