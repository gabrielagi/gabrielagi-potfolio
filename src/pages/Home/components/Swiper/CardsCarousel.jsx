import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import slide_image1 from "../../../assets/swiper-currencycharmeleon.png";
import slide_image2 from "../../../../assets/swiper-greencorner.png";
import slide_image3 from "../../../../assets/swiper-pokemon.png";
import slide_image4 from "../../../../assets/swiper-rickandmorty.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function CardsCarousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={slide_image1} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={slide_image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
