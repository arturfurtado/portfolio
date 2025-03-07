import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <main className="flex flex-col z-10 space-y-12 mt-24 justify-center items-center text-center mx-96">
      <Image className="" src="/cropped_image.png" width={300} height={300} alt="foto" quality={100}/>
      <h1 className="text-transparent bg-clip-text text-6xl bg-gradient-to-l from-white to-[#07073a]">
        Artur Furtado
      </h1>
      <h3 className="text-transparent bg-clip-text text-3xl bg-gradient-to-l from-white to-[#07073a]">
        Desenvolvedor Web
      </h3>
      <div className="text-xl mx-[25vh]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{" "}
      </div>
    </main>
  );
}
