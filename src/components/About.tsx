import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className=" pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h2 className="text-[20px] font-bold uppercase text-yellow-500 mb-[1rem]">
            Sobre mi
          </h2>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-slate-600 dark:text-slate-100">
            Yo Desarrollo tus <span className="text-yellow-500">Proyectos</span>
          </h2>
        
        <div className="mb-[3rem] flex items-center md:space-x-10">
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
          <p className="text-[19px] text-slate-500 dark:text-slate-300 w-[80%]">
          Con varios años de experiencia en el desarrollo de software, me especializo en la creación de landing pages, sitios de e-commerce, portafolios digitales, juegos y aplicaciones personalizadas. Mi trayectoria abarca proyectos tanto personales como empresariales, siempre con el compromiso de ofrecer soluciones innovadoras y eficientes que se adaptan a las necesidades específicas de cada cliente.
          </p>
        </div>
        <Button className="">
            <p>Descargar CV</p>
            <i className="fa-solid fa-download"></i>
        </Button>
    </div>
    <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
        <img
            src="/images/about.jpg"
            alt="user"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
        />
        <div className="absolute w-[100%] h-[100%] z-[10] bg-[#556e65] top-[-2rem] right-[-2rem]"></div>

    </div>
  </div>
 </div>
  );
};

export default About;