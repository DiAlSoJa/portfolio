
import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { Button } from "./ui/button";

type Props={
  handleDownload: ()=>void;
}

const Hero = ({handleDownload}:Props) => {
 
  return (
    <div id="inicio" data-aos="fade-right" className="h-[90vh] mt-[65px] bg-slate-100 dark:bg-slate-900">
      <div className="flex items-center justify-center h-full max-md:px-5">
        <div>
          <h2 className="text-[3rem] max-md:text-[2rem]">Hola soy</h2>
          <h1 className="text-[5rem] text-fuchsia-700 font-bold max-md:text-[3rem]">
            Diego Soto.
          </h1>
          <h2 className="text-[3rem] max-md:text-[2rem] flex flex-col md:block">
            <span>Soy</span> <TextEffect />
          </h2>
          <p className="mt-[2rem] text-[20px] text-slate-800 dark:text-slate-100">
            Cualquiera que se tu nuevo proyecto, conmigo ten por seguro que vas a tener calidad.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Button onClick={handleDownload}>
              <p>Descargar CV</p>
              <i className="fa-solid fa-arrow-right text-[27px] text-black"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;