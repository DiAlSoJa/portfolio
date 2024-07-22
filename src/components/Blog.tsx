"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([{}]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://www.sanivers.com/api/post`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] ">
      <h2 className="text-[3rem] text-center">
        Algunos <span className="text-yellow-400">Posts</span>
      </h2>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

const BlogCard = ({ post }:{post:any}) => {
  console.log(post)
  return (
    <Link href={`https://www.sanivers.com/article/${post.slug}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow rounded-md hidden sm:block dark:bg-slate-700">
      <Image 
        alt={post.slug}
        width="100"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={post.banner_img} 
        height={100}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-sky-500">{post.title}</h3>
        <span className="text-xs dark:text-slate-300">{post.createdAt}</span>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}