
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
                <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

            </div>
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend</h2>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
            </p>
        </div>

        <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
                <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

            </div>
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend</h2>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
            </p>
        </div>

        <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
                <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

            </div>
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">FullStack</h2>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
            </p>
        </div>
        
      </div>
    </div>
  );
};

export default Services;