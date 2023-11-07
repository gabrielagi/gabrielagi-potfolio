import React from "react";
import slide_image1 from "../../../assets/swiper-currencycharmeleon.png";
import slide_image2 from "../../../assets/swiper-greencorner.png";
import slide_image3 from "../../../assets/swiper-pokemon.png";
import slide_image4 from "../../../assets/swiper-rickandmorty.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function Carousel() {
  return (
    <div className="mx-auto flex flex-row bg-blackFred-300 w-full py-[200px] h-[800px] bg-red">
      <Swiper
        // className="w-[600px] h-[600px]"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        loading="lazy"
        loop={true}
        navigation={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 600,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slide_image1}
            alt="slide_image"
            className="w-[250px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image2}
            alt="slide_image"
            className="w-[450px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image3}
            alt="slide_image"
            className="w-[450px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image4}
            alt="slide_image"
            // className="w-[600px] h-[400px]"
            className="w-[450px] h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
