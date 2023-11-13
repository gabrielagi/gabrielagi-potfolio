import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
// import Carousel from "./Swiper/Carousel";
import CardsCarousel from "./Swiper/CardsCarousel";
import { Link } from "react-router-dom";
import CardList from "./Cards/CardList";
import techskills from "./techskills.json";
import Linkedin from "../../../assets/linkedin-logo.png";
import Github from "../../../assets/github-logo.png";
import Email from "../../../assets/email-logo.png";

const Welcome = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  // Usa useEffect para verificar el tamaño de la pantalla y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      // Define el ancho de la pantalla a partir del cual quieres mostrar u ocultar el carousel
      const screenWidth = window.innerWidth;
      const breakpoint = 768; // Puedes ajustar este valor según tus necesidades

      // Actualiza el estado en función del tamaño de la pantalla
      setShowCarousel(screenWidth > breakpoint);
    };

    // Suscribe el manejador de eventos al evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Llama a handleResize una vez al inicio para manejar el estado inicial
    handleResize();

    // Limpia el evento de cambio de tamaño cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Pasa un array vacío para que useEffect solo se ejecute una vez al montar el componente

  return (
    <div className="w-full h-auto">
      <div className="md:max-w-[1900px] w-full h-auto mx-auto grid md:grid-cols-2 md:text-left text-center">
        <div className="md:mr-10 mr-5 ml-5 md:ml-12 relative">
          <p className="sm:text-2xl text-2xl font-baloo2 font-bold text-[#fff] mt-5 md:text-left text-left">
            Full Stack Developer
          </p>
          <div className="bg-[#724FFF] rounded-full text-white text-center px-5 py-2 absolute right-0 md:mt-14 mt-5">
            <p className="text-sm font-semibold">Recent Projects</p>
          </div>
          {showCarousel && (
            <div className="mt-24">
              <CardsCarousel />
            </div>
          )}
          <div className="md:w-[800px] w-full mb-8 ">
            <p className="text-[35px] font-baloo2 font-bold text-[#fff] md:mt-3 mt-20 d:ml-12 ml-3 md:mb-0 mb-4 text-left">
              Tech Skills
            </p>
            <div className="flex md:ml-12 ml-3 mr-3 md:mr-12 mt-3 md:w-[700px] w-full flex-wrap">
              {techskills.map((tech, index) => (
                <p
                  id={index}
                  className="text-[16px] font-baloo2 font-medium text-[#fff] relative"
                  style={{ marginRight: "1.2em" }}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-10/12 h-auto relative mx-auto rounded-2xl mt-5 md:mt-5 bg-white  mb-8">
          <div className="font-baloo2  md:ml-10 ml-4 md:mr-0 mr-2">
            <div className="flex md:mt-5 mt-8 font-bold md:ml-0 ml-4">
              <p className="text-sm text-[#1d252d] block mr-12 ">Projects</p>
              <p className="text-sm text-[#1d252d] block ">Documentation</p>
              <div className="bg-[#724FFF] rounded-full text-white text-center px-5 py-2 absolute md:right-6 right-2 md:mt-0 mt-12">
                <p className="text-sm font-semibold">
                  Welcome to my Portfolio!
                </p>
              </div>
            </div>
            <div className="relative md:flex items-center md:mt-16 mt-24">
              <div className="flex justify-center md:mt-0 mt-5">
                <p className="font-extrabold text-[#1d252d] text-[40px]">Hi!</p>
                <p className="text-[30px] ml-2 mr-2">👋</p>
              </div>
              <p className="font-regular text-[#1d252d] text-[40px] md:ml-0 ml-4 md:mr-0 mr-4">
                I'm Gabriela Iriart
              </p>
            </div>
            <p className="mt-4 text-[16px] text-[#1d252d] block md:mr-5 mr-3 md:ml-0 ml-2">
              I'm an enthusiastic <strong>Full Stack developer</strong> with
              over 2 years of experience crafting{" "}
              <strong>web and mobile applications</strong>. I'm passionate about
              optimizing development practices, improving usability, and
              ensuring top-quality products.
            </p>

            <div className="flex mt-6">
              <CardList />
            </div>

            <div className="mt-12 flex">
              <p className="flex text-[20px] font-baloo2 text-[#1d252d] md:ml-12 ml-3 mr-3">
                New Technologies:
              </p>
              <p className="text-[15px] font-semibold  bg-[#a58eff] rounded-full text-white text-center px-4 py-1 md:mr-0 mr-2">
                React Native, Java, Spring Boot
              </p>
            </div>
            <div>
              <div className="flex justify-center md:mt-10 mt-10">
                <Link
                  to="https://www.linkedin.com/in/gabriela-iriart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src={Linkedin} alt="Instagram" className="w-10 h-10" />
                </Link>
                <Link
                  to="https://www.github.com/gabrielagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img src={Github} alt="Twitter" className="w-10 h-10" />
                </Link>
                <Link className="mx-2" onClick={() => setShowEmail(true)}>
                  <img src={Email} alt="Email" className="w-10 h-10" />
                </Link>

                {showEmail && (
                  <div className="fixed z-10">
                    <div className="bg-white border-2 border-[#724FFF] rounded-full text-[#724FFF] text-center px-10 py-2 absolute">
                      <p className="text-[14px] font-semibold">
                        gabrielairiart.gi@gmail.com
                      </p>
                    </div>
                    <div className="absolute right-4 mt-2">
                      <button
                        className="right-0 bg-red-400 py-0 px-2 justify-center text-center text-[#fff]"
                        onClick={() => setShowEmail(false)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-6 md:mt-8 md:mb-0 mb-8">
              <p className=" text-[#1d252d] block md:text-3xl text-xl md:mt-0 mt-1">
                Get in Touch!
              </p>
              <div className="text-center px-5 py-2 absolute md:right-6 right-0">
                <Link to="https://calendly.com/gabrielairiart/30min">
                  <p className=" text-[#724FFF] ml-auto font-bold text-[18px] ">
                    Schedule a Meeting
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
