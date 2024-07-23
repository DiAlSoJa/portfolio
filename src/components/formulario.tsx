"use client"
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:any):void => {
    e.preventDefault();
    emailjs.send(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, formData,process.env.USER_ID!)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);  
      });
    setFormData({
      nombre: '',
      correo: '',
      mensaje: ''
    });
  };

  return (
    <form data-aos="zoom-in" className="flex-1 flex items-center justify-center flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleSubmit}>
      <div className="w-[400px] max-sm:w-[320px] shadow dark:bg-slate-900 p-5 rounded-xl">
        <div className="block my-2">
          <label className="mb-1 block" htmlFor="nombre">
            Nombre Completo
          </label>
          <Input id="nombre" name="nombre" type="text" placeholder="Ingrese su nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="block my-2">
          <label className="mb-1 block" htmlFor="correo">
            Correo Electrónico
          </label>
          <Input id="correo" name="correo" type="email" placeholder="Ingrese su correo electrónico" value={formData.correo} onChange={handleChange} />
        </div>
        <div className="block my-2">
          <label className="mb-1 block" htmlFor="mensaje">
            Mensaje
          </label>
          <Textarea id="mensaje" name="mensaje" placeholder="Ingrese su mensaje" value={formData.mensaje} onChange={handleChange} />
        </div>
        <Button type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
}

export default Formulario;