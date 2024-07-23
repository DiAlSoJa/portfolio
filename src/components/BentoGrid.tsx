import Link from 'next/link'
import React from 'react'

const BentoGrid = () => {
  return (
    <div>
        <h2 className="text-center text-[3rem]">
        Mis<span className="text-yellow-400"> proyectos</span>
      </h2>

      <div className='grid gap-8 grid-cols-3 grid-rows-6 max-w-[1100px] mx-auto px-4 min-h-[700px] max-md:flex max-md:flex-col'>
            <div className=' bg-slate-200 rounded-xl col-span-1 row-span-4 max-md:h-[400px]'>
                <Link href="https://www.sanivers.com" className="h-full" data-aos="zoom-in">
                
                        <img
                        src="/images/sanivers.png"
                        alt="portfolio"
                        className="h-full object-cover" 
                        />
                
                </Link>
            </div>
            <div className='p-8 bg-slate-200 rounded-xl col-span-1 row-span-2 max-md:h-[500px]'>2</div>
            <div className='p-8 bg-slate-200 rounded-xl col-span-1 row-span-2 max-md:h-[500px]'>3</div>
            <div className='p-8 bg-slate-200 rounded-xl col-span-2 row-span-2 max-md:h-[500px]'>4</div>
            <div className='p-8 bg-slate-200 rounded-xl col-span-3 row-span-2 max-md:h-[500px]'>6</div>
        </div>
    </div>
  )
}

export default BentoGrid