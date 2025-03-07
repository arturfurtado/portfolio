"use client";

import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav className="fixed top-0 z-10 w-full py-6 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <p className="relative inline-block text-3xl font-bold select-none">
            <span className="text-transparent bg-gradient-to-l from-black to-white bg-clip-text">
              Artur
            </span>
            <motion.span
              className="absolute inset-0 text-transparent bg-gradient-to-l from-white to-black bg-clip-text"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Artur
            </motion.span>
          </p>
        </div>
        <div className="flex space-x-8">
          {["Home", "Stack", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <Linkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
