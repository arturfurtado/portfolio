"use client";
import React from "react";
import { motion } from "framer-motion";
import Typescript from "./Icons/Typescript";
import PostgreSQL from "./Icons/PostgreSQL";
import NodeJS from "./Icons/NodeJS";
import ReactIcon from "./Icons/React";
import Docker from "./Icons/Docker";
import Javascript from "./Icons/Javascript";
import Tailwind from "./Icons/Tailwind";
import Fastify from "./Icons/Fastify";
import Express from "./Icons/Express";

const icons = [
  { component: Typescript, id: "typescript" },
  { component: Javascript, id: "javascript" },
  { component: Tailwind, id: "tailwind" },
  { component: ReactIcon, id: "react" },
  { component: NodeJS, id: "nodejs" },
  { component: Express, id: "express" },
  { component: Fastify, id: "fastify" },
  { component: Docker, id: "docker" },
  { component: PostgreSQL, id: "postgresql" },
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
    <>
      <h1 className="text-center mt-24 md:mt-32 text-3xl font-bold">Minha Stack</h1>
      <motion.div
        id="stack"
        className="pl-12 md:pl-0 mt-12 md:mt-24 grid grid-cols-3 gap-3 md:flex md:justify-center md:space-x-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
      </motion.div>
    </>
  );
}
