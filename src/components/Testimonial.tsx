import React from "react";
import TestimonialsSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className=" pt-[4rem] md:pt-[8rem]">
      <h1 className="heading">
        Client <span className="text-yellow-400">Review</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default Testimonial;