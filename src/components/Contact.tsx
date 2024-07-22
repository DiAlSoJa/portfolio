import React from 'react'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="py-6 md:h-screen" id="contacto">
        <div className="flex justify-center items-center mx-auto lg:px-8  max-md:flex-col h-full">

            <div className="flex-1 flex items-center justify-center py-6 md:py-0 md:px-6">
                <div className=' max-md:text-center '>

                    <h2 className="text-4xl font-bold">Cuentame tu proyecto</h2>
                    <p className="pt-2 pb-4">Rellena el formulario o contactame.</p>
                    <div className="space-y-4 max-md:my-5">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff0000" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Durango, Mexico.</span>
                        </p>
                        {/* <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p> */}
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0000ff" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>diegosotosoftware@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            <form className="flex-1 flex items-center justify-center flex-col py-6 space-y-6 md:py-0 md:px-6">
                <div className='w-[300px] shadow dark:bg-slate-900 p-5 rounded-xl'>
                    <div className="block my-2">
                        <span className="mb-1">Nombre Completo</span>
                        <Input type='text' placeholder='Ingrese su nombre'/>
                    </div>
                    <div className="block my-2">
                        <span className="mb-1">Correo electronico</span>
                        <Input type='email' placeholder='Ingrese su correo electronico'/>
                    </div>
                    <div className="block my-2">
                        <span className="mb-1">Mensage</span>
                        <Textarea placeholder='ingrese su mensaje'/>
                    </div>
                        <Button>
                            enviar 
                        </Button>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact