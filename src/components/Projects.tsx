"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Link from "next/link";
import { Badge } from "./ui/badge";


const Projects = () => {
  return (
    <div className=" pt-[4rem] md:pt-[8rem] pb-[1rem]" id="proyectos">
      <h2 className="text-center text-[3rem]">
        Mis<span className="text-yellow-400"> proyectos</span>
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        
        <Link href="https://www.sanivers.com"  data-aos="zoom-in">
          <div className="hover:-translate-y-3 transition-all duration-200 p-2  rounded-md shadow-xl dark:bg-slate-700 border dark:border-slate-600"> 

            <div className="overflow-hidden rounded-md mb-2 transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]  border dark:border-slate-600">
              <img
                src="/images/sanivers.png"
                alt="portfolio"
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="dark:text-slate-100 text-slate-900 text-xl mb-3">Sanivers | blog</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>Next js</Badge>
                <Badge>React js</Badge>
                <Badge>Tailwind</Badge>
                <Badge>CSS</Badge>
                <Badge>Shadcn-ui</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
          </div>
        </Link>

        <Link href="https://carpetas-docs.vercel.app/" data-aos="zoom-in">
         <div className="hover:-translate-y-3 transition-all duration-200 p-2  rounded-md shadow-xl dark:bg-slate-700 border dark:border-slate-600"> 

            <div className="overflow-hidden rounded-md mb-2 transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]  border dark:border-slate-600">
              <img
                src="/images/carpetas.png"
                alt="portfolio"
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="dark:text-slate-100 text-slate-900 text-xl mb-3">Carpetas publicas</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>Next js</Badge>
                <Badge>React js</Badge>
                <Badge>Tailwind</Badge>
                <Badge>CSS</Badge>
                <Badge>Shadcn-ui</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
         </div>
        </Link>
        <Link href="https://projecto-idiomas.vercel.app/es/courses"  data-aos="zoom-in">
          <div className="hover:-translate-y-3 transition-all duration-200 p-2  rounded-md shadow-xl dark:bg-slate-700 border dark:border-slate-600"> 

            <div className="overflow-hidden rounded-md mb-2 transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]  border dark:border-slate-600">
              <img
                src="/images/idiomas.png"
                alt="portfolio"
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="dark:text-slate-100 text-slate-900 text-xl mb-3">Aplicacion de Aprendizaje de idiomas</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>Next js</Badge>
                <Badge>React js</Badge>
                <Badge>Tailwind</Badge>
                <Badge>CSS</Badge>
                <Badge>Shadcn-ui</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Projects;

// const SingleProject=()=>{
//   const [open,setOpen] = useState();
//   return(
//     <div className="overflow-hidden rounded-md mb-2 transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
//       <Dialog>
//         <DialogTrigger>
//           <Image
//             src="/images/p1.jpg"
//             alt="portfolio"
//             layout="fill"
//             className="object-contain"
//           />
//         </DialogTrigger>
//         <DialogContent className="max-w-[700px] w-full flex">
     
//             <div className="flex-1 h-[500px] w-[px]">
//                 <Image
//                 src="/images/p1.jpg"
//                 alt="portfolio"
                
//                 className="h-full w-full"

//               />
//             </div>
//             <div className="flex-1 bg-red-300">
//                 <h3>hola</h3>
//                 <p>esta es una descripcion</p>
//             </div>
      
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
