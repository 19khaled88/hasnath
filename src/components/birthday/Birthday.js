import Typed from "react-typed";
import "../../css/open.css";
import React, { useState } from "react";
import {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { birthday } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
const Birthday = () => {
  return (
    <div className="birthday" style={{ backgroundColor: "#BBBBBB" }}>
      <div style={{ textAlign: "center" }}>
        <Typed
          style={{ fontSize: "30px", color: "#1C82AD", fontWeight: "600" }}
          strings={["Birthday events at a glance"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView="auto"
          pagination={false}
          scrollbar={false}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          autoplay={{
            delay: 9000,
            speed: 800,
            autoplayDisableOnInteraction: false,
          }}
        >
          {birthday.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.image} alt="no Image" />
              <p>test</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Birthday;
