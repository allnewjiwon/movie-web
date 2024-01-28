import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import '../scss/main.scss';

// const imagePaths = [
//   require("../assets/movie01.jpeg").default,
//   require("../assets/movie02.jpeg").default,
//   require("../assets/movie03.jpeg").default,
// ];

function Intro() {
  return (
    <div>
      <main className="container">
        <Swiper
          modules = {[Navigation, Pagination, EffectFade, Autoplay
          ]}
          effect="fade"
          autoplay={{delay:2000}}
          // loop={true}
          // spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="visual-slide-item">
              <img src={require("../assets/static/movie01.jpg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <img src={require("../assets/static/movie02.jpeg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <img src={require("../assets/static/movie03.jpeg")} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="tit-box">
          <span className="idx-txt">ATTENTION</span>
          <h3 className="main-title">Introducing this year's movie</h3>
          <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi doloremque perferendis. Reprehenderit consequuntur maiores ut nostrum velit odio autem quos placeat, itaque quaerat? Ipsam et rem molestiae vel consectetur.</p>
          <button type="button" className="main-link-btn">
            MOVE TO MAIN!
          </button>
        </div>
      </main>
    </div>
  );
}

export default Intro;
