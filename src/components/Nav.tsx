import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <header className="w-full fixed z-50 top-0 h-16 dark:bg-slate-800 bg-slate-100 shadow-md">
            <div className="flex items-center  justify-between mx-auto h-full max-w-6xl px-4">
                
                <div className="text-lg text-slate-800 dark:text-slate-100 font-bold cursor-pointer">
                    Diego <span className="text-fuchsia-700">Soto</span>
                </div>
                
                <ul className="items-center gap-4 hidden md:flex">
                    <li className="nav-link"><a href="#inico">Inicio</a></li>
                    <li className="nav-link"><a href="#servicios">Servicios</a></li>
                    <li className="nav-link"><a href="#sobreMi">Sobre mi</a></li>
                    <li className="nav-link"><a href="#proyectos">Proyectos</a></li>
                    <li className="nav-link"><a href="#blogs">Blogs</a></li>
                    <li className="nav-link"><a href="#contacto">Contacto</a></li>
                </ul>

                <div className="flex items-center">

                  <ModeToggle/>

                  <Button onClick={openNav} variant={"ghost"} className=" md:hidden">
                    <Menu />
                  </Button>

                </div>

            </div>
        </header>
    );
};

export default Nav;