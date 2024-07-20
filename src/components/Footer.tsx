
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[4rem] ">
      <div className="grid border-b-[1px] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] pb-[6rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#556e65]">
            <i className="fa-solid fa-map"></i>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Address</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60"> lorem ipsum alaverga</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#556e65]">
            <i className="fa-solid fa-map"></i>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Phone</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60"> lorem ipsum alaverga</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#556e65]">
            <i className="fa-solid fa-map"></i>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Send us email</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60"> lorem ipsum alaverga</p>
          </div>
        </div>

      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
            Webdev warriors 2023 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
            <p className="text-[18px] text-white opacity-20">Terms & Conditions</p>
            <p className="text-[18px] text-white opacity-20">Privacy Policy</p>
            <p className="text-[18px] text-white opacity-20">Sitemap</p>
        </div>
    </div>

    </div>
  );
};

export default Footer;