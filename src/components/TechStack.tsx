"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Typescript from './Icons/Typescript';
import PostgreSQL from './Icons/PostgreSQL';
import NodeJS from './Icons/NodeJS';
import ReactIcon from './Icons/React';
import Docker from './Icons/Docker';
import Javascript from './Icons/Javascript';
import Tailwind from './Icons/Tailwind';

const icons = [
  { component: Typescript, id: "typescript" },
  { component: PostgreSQL, id: "postgresql" },
  { component: NodeJS, id: "nodejs" },
  { component: ReactIcon, id: "react" },
  { component: Docker, id: "docker" },
  { component: Javascript, id: "javascript" },
  { component: Tailwind, id: "tailwind" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <motion.article
      className="flex justify-center mt-24 space-x-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id='stack'
    >
      {icons.map(({ component: Icon, id }) => (
        <motion.div
          key={id}
          variants={itemVariants}
          whileHover={{ rotate: 10, filter: "brightness(1.2)" }}
          whileTap={{ rotate: -10, filter: "brightness(0.8)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon />
        </motion.div>
      ))}
    </motion.article>
  );
}
