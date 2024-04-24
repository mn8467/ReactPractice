import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './midban.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

export default function midban() {
  return (
    <div>
      <Swiper scrollbar={{hide: false, size:1 }}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        modules={[Scrollbar,Pagination]} className="mySwiper">
          
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shirt1.png'} ></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shoe1.png'} ></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shirt2.png'} ></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shoe2.png'}></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shirt3.png'} ></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/shoe3.png'}></img>
        </SwiperSlide>
        <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/image/main/midbanner/jumba1.png'}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};
