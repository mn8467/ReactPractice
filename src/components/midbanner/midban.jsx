import React, { useRef, useState, useEffect } from 'react';
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

export default function Midban() {

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <div className="hidden" id="winSize">size</div>

      <Swiper scrollbar={{hide: false, size:1 }}
        slidesPerView={slidesPerView} // 페이지의 창 크기가 640px 미만일 때 1장, 그 이상일 때 4장 표시
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
