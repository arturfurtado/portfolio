"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CopyrightText() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer select-none font-bold"
    >
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.span
            key="furtado"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            &copy; Artur Furtado
          </motion.span>
        ) : (
          <motion.span
            key="normal"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            &copy; Código por Artur
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CopyrightText;
