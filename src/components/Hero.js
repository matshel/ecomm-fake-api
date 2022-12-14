import React from "react";

// import bg image
import WomanImg from "../assets/images/woman_hero.png";

// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='h-[800px] bg-blue-200 bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className=' flex justify-around container mx-auto h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pre-title */}
          <div className='flex items-center font-semibold uppercase'>
            <span className='w-10 h-[2px] bg-red-500 mr-3'></span>
            New Trend
          </div>
          {/* title */}
          <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-4'>
            Winter Sale Stylish <br />
            <span className='uppercase font-semibold'>Women's</span>
          </h1>
          <Link
            to={"/"}
            className='self-start uppercase font-semibold border-primary border-b-2'
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='woman' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
