import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import Carousel from "./Swiper/Carousel";
import CardsCarousel from "./Swiper/CardsCarousel";
import { Link } from "react-router-dom";
import CardList from "./Cards/CardList";
import techskills from "./techskills.json";

const Welcome = () => {
  const items = [
    { id: 1, title: "Card 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Card 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Card 3", subtitle: "Subtitle 3" },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1900px] h-auto mx-auto grid md:grid-cols-2 md:text-left text-center">
        <div className="mr-10 ml-12 relative">
          <p className="sm:text-2xl text-2xl font-baloo2 font-bold text-[#fff] mt-5">
            Full Stack Developer
          </p>
          <div className="bg-[#724FFF] rounded-full text-white text-center px-5 py-2 absolute right-0 mt-16">
            <p className="text-sm font-semibold">Last Projects</p>
          </div>
          <div className="mt-24">
            <CardsCarousel />
          </div>
          <div className="w-[600px]">
            <p className="sm:text-[40px] text-2xl font-baloo2 font-bold text-[#fff] mt-5 ml-12">
              Tech Skills
            </p>
            <div className="flex ml-12 mr-12 mt-5 w-[400px]">
              {techskills.map((tech, index) => (
                <p
                  id={index}
                  className="sm:text-2xl text-2xl font-baloo2 font-regular text-[#fff] relative"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-10/12 h-auto relative mx-auto rounded-2xl mt-5 md:mt-5 bg-white mb-5">
          <div className="font-baloo2  ml-10">
            <div className="flex mt-5 font-bold">
              <p className="text-sm text-[#1d252d] block mr-12 ">Projects</p>
              <p className="text-sm text-[#1d252d] block ">Documentation</p>
              <div className="bg-[#724FFF] rounded-full text-white text-center px-5 py-2 absolute right-6">
                <p className="text-sm font-semibold">
                  Welcome to my Portfolio!
                </p>
              </div>
            </div>
            <div className="relative flex items-center mt-10">
              <p className="font-extrabold text-[#1d252d] text-[40px]">Hi!</p>
              <p className="text-[30px] ml-2 mr-2">👋</p>
              <p className="font-regular text-[#1d252d] text-[40px]">
                I'm Gabriela Iriart
              </p>
            </div>
            <p className="mt-4 text-[16px] text-[#1d252d] block mr-5">
              I'm an enthusiastic <strong>Full Stack developer</strong> with
              over 2 years of experience crafting{" "}
              <strong>web and mobile applications</strong>. I'm passionate about
              optimizing development practices, improving usability, and
              ensuring top-quality products.
            </p>

            <div className="flex mt-6">
              <CardList items={items} />
            </div>
            {/* <Link to="/shop">
              <button className="mt-16 bg-green-500 text-white font-semibold py-4 px-8 rounded hover:bg-green-600 font-baloo2 flex mx-auto">
                {`Visit my projects `}
              </button>
            </Link> */}
            <p className=" text-[#1d252d]">Welcome to my portfolio!</p>
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
