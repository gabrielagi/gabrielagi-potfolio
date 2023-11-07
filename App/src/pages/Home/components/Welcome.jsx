import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import CardsCarousel from "./CardsCarousel";

const Welcome = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1480px] m-auto grid md:grid-cols-2 md:text-left text-center">
        <div className="sm:py-[180px] py-20 font-poppins sm:ml-20 ml-10 md:ml-20 mr-10">
          <p className="sm:text-2xl text-2xl text-[#fff] font-medium block">
            #fullstackdeveloper
          </p>
          <h1 className="sm:text-8xl text-4xl font-semibold">
            Gabriela Iriart
          </h1>
          <p className="mt-4 text-[16px] text-[#9a9a9a] block">
            I'm a passionate Full Stack Developer with a lot of kpaoiepaierpaior
          </p>
          <Link to="/shop">
            <button className="mt-16 bg-green-500 text-white font-semibold py-4 px-8 rounded hover:bg-green-600 font-poppins flex mx-auto">
              {`Visit our Shop `}
            </button>
          </Link>
        </div>
        <div className="md:ml-40">
          {/* <Carousel /> */}
          <CardsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
