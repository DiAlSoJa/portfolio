"use client"
import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Contact from "@/components/Contact";
import BentoGrid from "@/components/BentoGrid";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
  // Animation AOS setup
  AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50,
    throttleDelay: 99, 
    offset: 120,
    delay: 0, 
    duration: 1000, 
    easing: 'ease',
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom',
  });
}, []);

  const handleDownload = () => {
    window.open('/cv/diego_soto_cv.pdf', '_blank');
  };

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero  handleDownload={handleDownload}/>
        <div className="bg-slate-100 dark:bg-slate-800 relative z-[30]">
          <About handleDownload={handleDownload}/>
          <Services/>
          <Projects/>
          <Blog/>
          {/* <Footer/> */}
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;