"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Link from "next/link";


const Projects = () => {
  return (
    <div className=" pt-[4rem] md:pt-[8rem] pb-[1rem]" id="proyectos">
      <h2 className="text-center text-[3rem]">
        Mis<span className="text-yellow-400"> proyectos</span>
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        
        <Link href="/" className="hover:-translate-y-3 transition-all duration-200" data-aos="zoom-in">
          <div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
            <img
              src="/images/p1.jpg"
              alt="portfolio"
              className="w-full h-full object-cover" 
            />
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
//     <div className="transform cursor-pointer hover:-translate-y-3 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
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
