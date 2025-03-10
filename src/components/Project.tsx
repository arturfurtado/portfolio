"use client";
import React from "react";

interface ProjectProps {
  index: number;
  title: string;
  link: string;
  manageModal: (open:boolean, index: number, clientX: number, clientY: number) => void;
}

export default function index({ index, title, link, manageModal }: ProjectProps) {
  return (
    <figure className="w-full px-8 md:px-48 ">
      <div
        className="w-full border-t border-t-gray-200 border-b border-b-gray-200 py-16 cursor-pointer"
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
      >
        <a target="_blank" href={link}>
        <h2 className="text-xl md:text-3xl">{title}</h2>
        <p className="text-lg md:text-xl">Desenvolvimento</p>
        </a>
      </div>
    </figure>
  );
}
