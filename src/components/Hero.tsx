import React from "react";

import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
   
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">SAJAL</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam iusto, consectetur laudantium reprehenderit ducimus iure facilis dolor tenetur recusandae assumenda, nemo temporibus aperiam rerum esse error odio alias dolorum?
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#556e65] text-black flex items-center space-x-2">
              <p>Download CV</p>
              <i className="fa-solid fa-arrow-right text-[27px] text-black"></i>
              
            </button>
            <button className="flex items-center space-x-2">
              <div className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200  flex items-center justify-center rounded-full bg-[#556e65] text-[27px]">
                 <i className="fa-solid fa-play"></i>
              </div>
              <p className="text-[20px] font-semibold text-white">Watch The Video</p>
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] hidden lg:flex bg-[#556e65] relative items-center rounded-full">
          <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
