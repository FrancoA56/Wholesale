import React, { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import banner1 from "../media/imagenes/path43041.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import { useMediaQuery } from "react-responsive";
import "../styles/banners.css";

function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const timer = setTimeout(() => {
        const nextIndex = activeSlide === 3 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeSlide, isDesktopOrLaptop]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    const previousIndex = activeSlide === 0 ? 3 : activeSlide - 1;
    setActiveSlide(previousIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = activeSlide === 3 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
  };

  return (
    <div className="sm:mx-12 mx-4 mt-6">
      <CarouselProvider
        naturalSlideHeight={8}
        naturalSlideWidth={30}
        totalSlides={4}
        currentSlide={activeSlide}
      >
        <div>
          <Slider>
            <Slide index={0}>
              <img
                src={banner1}
                alt="Banner Wholesale"
                className="carousel-image"
              />
            </Slide>
            <Slide index={1}>
              {" "}
              <img
                src={banner1}
                alt="Banner Wholesale"
                className="carousel-image"
              />
            </Slide>
            <Slide index={2}>
              {" "}
              <img
                src={banner1}
                alt="Banner Wholesale"
                className="carousel-image"
              />
            </Slide>
            <Slide index={3}>
              {" "}
              <img
                src={banner1}
                alt="Banner Wholesale"
                className="carousel-image"
              />
            </Slide>
          </Slider>
          <div className="flex gap-8 justify-center mt-1">
            <ButtonBack
              onClick={handlePreviousSlide}
              className="relative left-5 block text-tono4 sm:mr-0 mr-4 active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
            >
              <i className="fa-solid fa-circle-left"></i>
            </ButtonBack>
            <div className="sm:inline-flex hidden gap-2 text-tono4">
              {[...Array(4)].map((_, index) => (
                <Dot
                  key={index}
                  slide={index}
                  onClick={() => handleSlideChange(index)}
                  className={activeSlide === index ? "active" : ""}
                >
                  <i
                    className={`fa-solid fa-circle ${
                      activeSlide === index ? "text-tono1" : "text-tono4"
                    }`}
                  ></i>
                </Dot>
              ))}
            </div>
            <ButtonNext
              onClick={handleNextSlide}
              className="relative right-5 text-tono4 block sm:ml-0 ml-4 active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
            >
              <i className="fa-solid fa-circle-right"></i>
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Banner;