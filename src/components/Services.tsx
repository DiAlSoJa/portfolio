
// import React from "react";

// const Services = () => {
//   return (
//     <div className=" pt-[4rem] md:pt-[8rem] pb-[5rem]">
//       <h2 className="heading text-center text-[3rem]">
//         Mis <span className="text-yellow-400">Servicios</span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
//         <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
//             <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
//                 <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

//             </div>
//             <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend</h2>
//             <p className="text-[15px] text-[#d3d2d2] font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
//             </p>
//         </div>

//         <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
//             <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
//                 <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

//             </div>
//             <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend</h2>
//             <p className="text-[15px] text-[#d3d2d2] font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
//             </p>
//         </div>

//         <div data-aos="zoom-in" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
//             <div className="w-[6rem] h-[6rem] mx-auto  bg-[#d3fae8] rounded-md flex items-center justify-center">
//                 <i className="fa-solid fa-code text-red-700 text-[30px]"></i>

//             </div>
//             <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">FullStack</h2>
//             <p className="text-[15px] text-[#d3d2d2] font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam sunt distinctio fugiat, nobis cupiditate ad fugit! Esse cumque quasi officia itaque deserunt tempore accusantium neque, ab blanditiis dolore excepturi.
//             </p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Services;


const ServiceCard = ({ title, description, icon }) => {


  return (
    <div data-aos="zoom-in" className="bg-slate-100 dark:bg-slate-700 shadow-md rounded-lg p-4 flex flex-col items-center text-center h-[300px]">
      <div className="text-3xl mb-3 p-4 border-2 border-slate-800 dark:border-slate-100">{icon}</div>
      <h3 className="text-lg  text-slate-800 dark:text-slate-100 font-bold text-[2.1rem] my-5">{title}</h3>
      <p className=" text-slate-700 dark:text-slate-200 ">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Expertise in modern web technologies to build engaging websites.', icon: '🌐' },
    { title: 'Photography', description: 'Capturing stunning and vivid photographs for all occasions.', icon: '📷' },
    { title: 'Web Design', description: 'Designing aesthetically pleasing and user-friendly websites.', icon: '🎨' },
    { title: 'App Developing', description: 'Developing mobile applications that solve real-world problems.', icon: '📱' },
    { title: 'Video Editing', description: 'Creating compelling video content for diverse platforms.', icon: '🎥' },
    { title: 'SEO Expert', description: 'Optimizing websites to rank higher in search engine results.', icon: '🔍' }
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-[3rem] text-center text-slate-800 dark:text-slate-100 font-bold mb-6">
          Mi <span className="text-yellow-400">Servicios</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;