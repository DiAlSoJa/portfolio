import React from "react";

import TextEffect from "./TextEffect";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[90vh] mt-[48px]  bg-slate-100 dark:bg-slate-900">
   
      <div className=" flex items-center justify-center h-full">

        <div>
          <h2 className="text-[3rem]">Hola soy</h2>

          <h1 className="text-[5rem]  text-fuchsia-700 font-bold">
            Diego Soto.
          </h1>

          <h2 className="text-[3rem]">Soy <TextEffect /></h2>
          
          <p className="mt-[2rem] text-[20px] text-slate-800 dark:text-slate-100">
              Cualquiera que se tu nuevo projecto, conmigo ten por seguro que vas a tener calidad.
          </p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Button >
              <p>Download CV</p>
              <i className="fa-solid fa-arrow-right text-[27px] text-black"></i>
              
            </Button>
   
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default Hero;
