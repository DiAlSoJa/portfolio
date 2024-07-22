import { X } from "lucide-react";
import React from "react";
interface Props{
    nav: boolean,
    closeNav:()=>void;
}
const MobileNav = ({nav,closeNav}:Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`fixed ${navAnimation} w-[100vw] h-[100vh] px-5 transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000000] bg-slate-300/70 dark:bg-slate-900/70 `}>
      <ul className="  pt-[5rem]">

        <li >
          <a href="#inicio" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Inicio</a>
        </li>

        <li >
          <a href="#servicios" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Servicios</a>
        </li>

        <li >
          <a href="#sobreMi" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Sobre mi</a>
        </li>

        <li >
          <a href="#proyectos" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Proyectos</a>
        </li>

        <li >
         <a href="#blogs" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Blogs</a>
        </li>

        <li >
         <a href="#contacto" className="block cursor-pointer px-4 py-2 border-b border-slate-900 bg-slate-900/10 dark:bg-slate-100/10 dark:border-slate-100 hover:rounded-md hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 mb-5">Contacto</a>
        </li>

      </ul>
      <div onClick={closeNav} className="flex justify-center items-center absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] rounded-full bg-slate-700 dark:bg-slate-100">
        <X className="text-slate-100 dark:text-slate-700"/>
      </div>
    </div>
  );
};

export default MobileNav;