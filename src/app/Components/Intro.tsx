import Image from "next/image";
import React from "react";
import croppedImage from "../Assets/cropped_image.png";


export default function Intro() {
  return (
    <main className="flex flex-col z-10 space-y-12 justify-center mt-16 text-center mx-96">
      <div className="flex justify-center">
        <Image src={croppedImage} alt={""}  width={200} height={200}/>
      </div>
      <h1 className="text-transparent bg-clip-text text-6xl bg-gradient-to-l from-white to-[#07073a]">Artur Furtado</h1>
      
      <h3 className="text-transparent bg-clip-text text-3xl bg-gradient-to-l from-white to-[#07073a]">Desenvolvedor Web</h3>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </main>
  );
}
