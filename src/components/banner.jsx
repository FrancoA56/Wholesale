import React, { useRef } from "react";
import banner1 from "../media/imagenes/Banners-ooni-desktop (1).png";
import banner2 from "../media/imagenes/Banners-boj-desktop (1).png";
import banner3 from "../media/imagenes/Banners-emile-henry-desktop1 (1).png";
import banner4 from "../media/imagenes/Banners-mauviel-desktop (2).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carrousels.css";
import { useMediaQuery } from "react-responsive";

function Banner() {

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const swiperRef = useRef(null);

  const images = [
    { id: 0, image: banner1 },
    { id: 1, image: banner2 },
    { id: 2, image: banner3 },
    { id: 3, image: banner4 },
  ];

  return (
    <div className="sm:mx-12 mx-4 mt-6 z-80">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={isDesktopOrLaptop ? true : false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center">
            <img
              src={image.image}
              alt={`Banner ${image.id}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;