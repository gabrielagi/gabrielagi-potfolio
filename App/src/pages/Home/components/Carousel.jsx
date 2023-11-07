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
    <div>
      <Swiper
        // className='w-[600px] h-[600px]'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
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
        spaceBetween={220}
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
            // className="w-[600px] h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image2}
            alt="slide_image"
            // className="w-[600px] h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image3}
            alt="slide_image"
            // className="w-[600px] h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image4}
            alt="slide_image"
            // className="w-[600px] h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
