import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import Carousel from "./Carousel";
import CardsCarousel from "./CardsCarousel";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1900px] mx-auto grid md:grid-cols-2 md:text-left text-center">
        <div className="mr-10 ml-12 relative">
          <p className="sm:text-2xl text-2xl font-baloo2 font-bold text-[#fff] mt-5">
            Full Stack Developer
          </p>
          <div className="bg-[#724FFF] rounded-full text-white text-center px-5 py-2 absolute right-0 mt-20">
            <p className="text-sm">Last Projects</p>
          </div>
          <div className="mt-28">
            <CardsCarousel />
          </div>
        </div>

        <div className="w-10/12 h-auto relative mx-auto rounded-2xl mt-5 md:mt-5 bg-white mb-5">
          <div className="font-baloo2  ml-10">
            <div className="flex mt-4 font-bold">
              <p className="text-sm text-[#1d252d] block mr-10 ">Projects</p>
              <p className="text-sm text-[#1d252d] block ">Documentation</p>
            </div>
            <h1 className="font-bold text-[#1d252d] mt-20">Hi!</h1>
            <p className="text-[40px]">👋</p>
            <h1 className="font-regular text-[#1d252d]">I'm Gabriela Iriart</h1>
            <p className="mt-4 text-[16px] text-[#1d252d] block mr-28">
              I'm an enthusiastic Full Stack developer with over 2 years of
              experience crafting web and mobile applications. I'm passionate
              about optimizing development practices, improving usability, and
              ensuring top-quality products.
            </p>

            <p className="backgroun">Welcome to my portfolio!</p>
            <Link to="/shop">
              <button className="mt-16 bg-green-500 text-white font-semibold py-4 px-8 rounded hover:bg-green-600 font-baloo2 flex mx-auto">
                {`Visit my projects `}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

{
  /* <div className="sm:py-[140px] py-20 font-poppins ml-10">
          <p className="sm:text-2xl text-2xl text-[#fff] font-medium block">
            #fullstackdeveloper
          </p>
          <h1 className="sm:text-8xl text-4xl font-semibold">
            Gabriela Iriart
          </h1>
          <p className="mt-4 text-[16px] text-[rgb(255,235,235)] block mr-28">
            I'm an enthusiastic Full Stack developer with over 2 years of
            experience crafting web and mobile applications. I'm passionate
            about optimizing development practices, improving usability, and
            ensuring top-quality products.
          </p>

          <p className="backgroun">Welcome to my portfolio!</p>
          <Link to="/shop">
            <button className="mt-16 bg-green-500 text-white font-semibold py-4 px-8 rounded hover:bg-green-600 font-poppins flex mx-auto">
              {`Visit my projects `}
            </button>
          </Link>
        </div> */
}
