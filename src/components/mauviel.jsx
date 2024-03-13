import React, { useState, useEffect } from "react";
import mauvielLogo from "../media/imagenes/logoMauvielBlanco.png";
import logoMauvielNegro from "../media/imagenes/logoMauvielNegro.png";
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
import image1 from "../media/imagenes/mauviel/1.jpg";
import image2 from "../media/imagenes/mauviel/2.jpeg";
import image3 from "../media/imagenes/mauviel/3.jpg";
import image4 from "../media/imagenes/mauviel/4.jpeg";
import image5 from "../media/imagenes/mauviel/5.jpg";
import banner from "../media/imagenes/mauviel/banner.jpg";
import mauvielCuality1 from "../media/imagenes/mauviel/cualitys/1.png";
import mauvielCuality2 from "../media/imagenes/mauviel/cualitys/2.png";
import mauvielCuality3 from "../media/imagenes/mauviel/cualitys/3.png";
import mauvielCuality4 from "../media/imagenes/mauviel/cualitys/4.png";
import "../styles/efectoLogo.css";

function Mauviel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const timer = setTimeout(() => {
        const nextIndex = activeSlide === 4 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeSlide, isDesktopOrLaptop]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    const previousIndex = activeSlide === 0 ? 4 : activeSlide - 1;
    setActiveSlide(previousIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = activeSlide === 4 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
  };

  return (
    <>
      <div className="bg-fondoMauviel bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={mauvielLogo}
            alt="wholesaleLogo"
            className="tracking-in-contract sm:w-1/3 w-4/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Normandia - Francia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col mb-12">
        <div className="sm:w-8/12 w-11/12 sm:ml-20 sm:mr-0 ml-4 mr-4 mt-12 col-span-2">
          <CarouselProvider
            naturalSlideHeight={46}
            naturalSlideWidth={33}
            totalSlides={5}
            currentSlide={activeSlide}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={image1} alt="emile henry" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={image2} alt="emile henry" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={image3} alt="emile henry" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={image4} alt="emile henry" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={image5} alt="emile henry" />{" "}
                </Slide>
              </Slider>
              <div className="gap-8 justify-center mt-1 flex">
                <ButtonBack
                  onClick={handlePreviousSlide}
                  className="relative left-5 block text-tono4 sm:mr-0 mr-4 active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
                >
                  <i className="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <div className="sm:inline-flex hidden gap-2 text-tono4">
                  {[...Array(5)].map((_, index) => (
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
        <div className="col-span-3 flex text-justify items-center sm:mr-20 mr-0 ">
          <div className="flex flex-col sm:mt-0 mt-8">
            <img
              src={logoMauvielNegro}
              alt="logoMauvielNegro"
              className="sm:w-3/5 w-3/4 mx-auto sm:mb-12 mb-0"
            />
            <hr className="border-tono3 mb-12 sm:hidden grid mt-12 sm:mt-0 mx-6" />
            <div className="text-gray-700 sm:mb-0 mb-8 sm:mx-0  mx-6 indent-8 font-gothamB">
              En 1830, Ernest Mauviel fundó la empresa de utensilios de cocina
              que lleva su mismo nombre en Villedieu-les-Poêles, en Normandía.
              El pueblo tenía una larga historia de excelente trabajo en metal;
              los lugareños eran considerados expertos en el oficio. Hoy en día,
              gran parte de la fabricación todavía se realiza a mano utilizando
              procesos tradicionales transmitidos de generación en generación de
              fabricantes de cobre. Fiel a la rica historia culinaria de
              Francia, Mauviel 1830 es uno de los favoritos en las cocinas
              profesionales, donde la conductividad térmica rápida y uniforme
              del cobre es esencial para preparar salsas delicadas y otros
              clásicos franceses. Mauviel ahora también ofrece colecciones de
              acero inoxidable elaboradas con la misma atención al detalle que
              sus tradicionales utensilios de cocina de cobre.
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-4 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality1}
            alt="mauvielCuality1"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI ">
            10 AÑOS DE GARANTÍA
          </div>
          <div className="flex justify-center self-start sm:mx-0 mx-auto font-gothamB">
            Tus compras garantizadas por 10 años.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality2}
            alt="mauvielCuality2"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">PRODUCTOS</div>
          <div className="flex justify-center self-start font-gothamB">
            Ofrecemos una variedad de utensilios de cocina diseñados para
            propósitos culinarios específicos.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality3}
            alt="mauvielCuality3"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            MADE IN FRANCE
          </div>
          <div className="flex justify-center self-start font-gothamB">
            La empresa emblemática de la bahía del Mont St Michel{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality4}
            alt="mauvielCuality4"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            PRODUCTOS DE CALIDAD
          </div>
          <div className="flex justify-center self-start font-gothamB">
            La mas alta calidad para los chefs mas exigentes.
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="bannerMauviel" className="w-full mb-12" />
      </div>
    </>
  );
}

export default Mauviel;
