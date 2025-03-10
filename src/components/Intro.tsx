import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <main 
      id="home"
      className="flex flex-col z-10 space-y-12 mt-24 justify-center items-center text-center xl:mx-96"
    >
    <div className="relative w-48 h-48 md:w-full md:h-64">
  <Image 
    src="/cropped_image.png" 
    alt="foto" 
    quality={100}
    fill
    className="object-contain"
  />
</div>
      <h1 className="text-3xl md:text-6xl fade-in-left">
        Artur Furtado
      </h1>
      <h3 className="text-xl md:text-3xl">
        Desenvolvedor Web
      </h3>
      <div className="md:text-xl xl:mx-[25vh]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fade-in-left {
          animation: fadeInLeft 1s ease forwards;
        }
      `}</style>
    </main>
  );
}
