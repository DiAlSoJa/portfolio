import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] ">
      <h1 className="text-[3rem] text-center">
        Algunos <span className="text-yellow-400">Posts</span>
      </h1>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>

            </div>
        </div>
    </section>
    </div>
  );
};

export default Blog;

const BlogCard=()=>{
    return(
        <Link href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow rounded-md hidden sm:block dark:bg-slate-700">
            <Image 
            role="presentation"
            alt="Descripción de la imagen"
            width="100"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="/images/blog1.jpg" 
            height={100}/>
            <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-sky-500">In usu laoreet repudiare legendos</h3>
            <span className="text-xs dark:text-slate-300">January 26, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    )
}