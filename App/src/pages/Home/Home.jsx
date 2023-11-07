import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Welcome from "./components/Welcome";
import { BaseHome } from "./components/BaseHome";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2200,
      offset: 0,
    });
  }, []);

  return (
    <div className="w-full">
      <section
        className=" flex items-center justify-center bg-[#5840BB]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Welcome />
      </section>
      {/* 
      <section className="bg-white" data-aos="fade-up" data-aos-duration="1000">
        <p>New Section</p>
      </section>

      <section data-aos="fade-up" data-aos-duration="1000">
        <p>New Section</p>
      </section> */}
    </div>
  );
};

export default Home;
