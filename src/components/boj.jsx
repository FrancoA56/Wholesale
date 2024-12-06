import React, { useState, useEffect } from "react";
import bojLogo from "../media/imagenes/logo boj negro.png";
import bojLogoBlanco from "../media/imagenes/logo boj png blanco.png";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import { useMediaQuery } from "react-responsive";
import boj1 from "../media/imagenes/boj/0.webp";
import boj2 from "../media/imagenes/boj/1.webp";
import boj3 from "../media/imagenes/boj/2.webp";
import boj4 from "../media/imagenes/boj/3.webp";
import boj5 from "../media/imagenes/boj/4.webp";
import boj6 from "../media/imagenes/boj/5.webp";
import boj7 from "../media/imagenes/boj/6.webp";
import boj8 from "../media/imagenes/boj/7.webp";
import boj9 from "../media/imagenes/boj/8.webp";
import boj10 from "../media/imagenes/boj/9.webp";
import boj11 from "../media/imagenes/boj/10.webp";
import banner from "../media/imagenes/boj/banner.webp";
import gojCuality2 from "../media/imagenes/boj/cualitys/2.png";
import gojCuality3 from "../media/imagenes/boj/cualitys/3.png";
import gojCuality4 from "../media/imagenes/boj/cualitys/4.png";
import "../styles/efectoLogo.css";

function Mauviel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const timer = setTimeout(() => {
        const nextIndex = activeSlide === 10 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeSlide, isDesktopOrLaptop]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    const previousIndex = activeSlide === 0 ? 10 : activeSlide - 1;
    setActiveSlide(previousIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = activeSlide === 10 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
  };

  return (
    <>
      <div className="bg-fondoBoj bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <a
            href="https://bojglobal.com/"
            title="Boj Argentina wholesale dyr venta mayorista"
            className="flex justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bojLogoBlanco}
              alt="Boj Argentina wholesale dyr venta mayorista"
              className="tracking-in-contract sm:w-4/5 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
            />
          </a>
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Éibar, España
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col mb-12">
        <div className="sm:w-8/12 w-11/12 sm:ml-20 sm:mr-0 ml-4 mr-4 mt-12 col-span-2">
          <CarouselProvider
            naturalSlideHeight={46}
            naturalSlideWidth={33}
            totalSlides={11}
            currentSlide={activeSlide}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={boj1} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={boj2} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={boj3} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={boj4} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={boj5} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={boj6} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={6}>
                  {" "}
                  <img src={boj7} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={boj8} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={boj9} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={boj10} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={boj11} alt="Boj Argentina wholesale dyr venta mayorista" />{" "}
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
                  {[...Array(11)].map((_, index) => (
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
        <div className="col-span-3 flex text-justify items-center sm:mr-16 mr-6 ml-6 sm:ml-0">
          <div className="flex flex-col">
            <a
              href="https://bojglobal.com/"
              className="flex justify-center"
              title="Boj Argentina wholesale dyr venta mayorista"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={bojLogo}
                alt="Boj Argentina wholesale dyr venta mayorista"
                className="sm:w-2/5 w-3/5 mx-auto mb-12 sm:mt-0 mt-12"
              />
            </a>
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-8 indent-8 font-gothamB">
              Desde 1905,{" "}
              <h1 className="inline text-gray-700 font-gothamB">Boj</h1> ha
              liderado la fabricación de abrelatas, sacacorchos y una amplia
              variedad de utensilios de cocina, fusionando tradición e
              innovación. Cada pieza es diseñada y bajo los más altos estándares
              de calidad, reflejando el compromiso de la marca con la excelencia
              en cada detalle. Con más de un siglo de historia y tres
              generaciones preservando su legado, Boj se ha consolidado como un
              referente en el sector de menaje. Hoy, la empresa enfrenta el
              futuro con la misma pasión que definió sus inicios, renovando su
              compromiso con la calidad y afrontando nuevos desafíos con
              determinación.
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality2}
            alt="Boj Argentina wholesale dyr venta mayorista"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">PRODUCTOS</div>
          <div className="flex justify-center self-start font-gothamB">
            La empresa se especializa en la fabricación de abrelatas,
            sacacorchos y otros utensilios de menaje relacionados.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality3}
            alt="Boj Argentina wholesale dyr venta mayorista"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            HECHO EN ESPAÑA
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Desde 1905. Una historia que nos hace fuertes.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality4}
            alt="Boj Argentina wholesale dyr venta mayorista"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            PRODUCTOS DE CALIDAD
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Cada uno de nuestros productos está diseñado y fabricado con los más
            altos estándares de calidad.
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="Boj Argentina wholesale dyr venta mayorista" className="w-full mb-12" />
      </div>
    </>
  );
}

export default Mauviel;
