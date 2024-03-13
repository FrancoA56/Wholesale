import React, { useState, useEffect } from "react";
import ooniLogo from "../media/imagenes/Ooni-logo blanco png.png";
import ooniLogoGris from "../media/imagenes/Ooni-03.png";
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
import imagen1 from "../media/imagenes/ooni/funda.jpeg";
import imagen2 from "../media/imagenes/ooni/balanza.jpeg";
import imagen4 from "../media/imagenes/ooni/pizzaCruda.jpg";
import imagen5 from "../media/imagenes/ooni/hornoConPala.jpeg";
import imagen6 from "../media/imagenes/ooni/hornoConPizza.jpeg";
import imagen7 from "../media/imagenes/ooni/hornoInterperie.jpeg";
import imagen9 from "../media/imagenes/ooni/hornoSinPizza.jpeg";
import imagen10 from "../media/imagenes/ooni/juntada.jpeg";
import imagen11 from "../media/imagenes/ooni/ollitas.jpeg";
import imagen12 from "../media/imagenes/ooni/utensillos1.jpeg";
import imagen13 from "../media/imagenes/ooni/utensillos2.jpeg";
import banner from "../media/imagenes/ooni/banner.jpeg";
import ooniCuality1 from "../media/imagenes/ooni/cualitys/1.png";
import ooniCuality2 from "../media/imagenes/ooni/cualitys/2.png";
import ooniCuality3 from "../media/imagenes/ooni/cualitys/3.png";
import ooniCuality4 from "../media/imagenes/ooni/cualitys/4.png";
import "../styles/efectoLogo.css";

function Ooni() {
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
      <div className="bg-fondoOoni bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={ooniLogo}
            alt="wholesaleLogo"
            className="tracking-in-contract sm:w-1/5 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Edimburgo - Escocia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col mb-12">
        <div className="sm:w-9/12 sm:ml-20 mt-12 col-span-3 ml-4 mr-4 sm:mr-0">
          <CarouselProvider
            naturalSlideHeight={34}
            naturalSlideWidth={52}
            totalSlides={11}
            currentSlide={activeSlide}
          >
            {" "}
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={imagen7} alt="Ooni" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={imagen2} alt="Ooni" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={imagen4} alt="Ooni" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={imagen5} alt="Ooni" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={imagen1} alt="Ooni" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={imagen6} alt="Ooni" />{" "}
                </Slide>

                <Slide index={6}>
                  {" "}
                  <img src={imagen13} alt="Ooni" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={imagen10} alt="Ooni" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={imagen11} alt="Ooni" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={imagen12} alt="Ooni" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={imagen9} alt="Ooni" />{" "}
                </Slide>
              </Slider>

              <div className="flex gap-8 justify-center mt-1">
                <ButtonBack
                  onClick={handlePreviousSlide}
                  className="relative left-5 sm:mr-0 mr-4 block text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
                >
                  {" "}
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
                  className="relative right-5 text-tono4 sm:ml-0 ml-4 block active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
                >
                  <i className="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="sm:col-span-2 flex text-justify items-center sm:mr-28 mr-6 sm:mr-0 ml-6 sm:ml-0 sm:mt-0 mt-12">
          <div className="flex flex-col sm:mt-6 mt-0">
            <img
              src={ooniLogoGris}
              alt="ooniLogoGris"
              className="w-5/12 mx-auto sm:mt-12 mt-10 mb-2 bottom-12 relative"
            />
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-8 indent-8 font-gothamB">
              Ooni comenzó con la búsqueda de pizza auténtica, del tipo que
              tiene aderezos cocidos al fuego y una corteza con manchas de
              leopardo. Desde 2012, diseñan, fabrican y venden hornos para pizza
              INCREÍBLES. Son tan INCREÍBLES que los adjetivos en minúsculas
              simplemente no les hacen justicia. Una pizza verdaderamente
              excelente necesita calor alto, es por eso que todos los hornos
              para pizza con fuego real de Ooni se calientan muchísimo (es
              decir, 500 °C/950 °F) y cocinar una pizza increíble en solo 60
              segundos. Antes de Ooni, si querías una pizza tan buena tenías que
              ir a un restaurante o gastar en un horno de pizza tradicional.
              Ahora, todo lo que tienes que hacer es elegir el horno Ooni
              adecuado para ti.
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={ooniCuality1}
            alt="ooniCuality1"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI ">
            1 A 5 AÑOS DE GARANTÍA
          </div>
          <div className="flex justify-center self-start sm:mx-0 mx-auto font-gothamB">
            Tus compras garantizadas de 1 a 5 años.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={ooniCuality2}
            alt="ooniCuality2"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">PRODUCTOS</div>
          <div className="flex justify-center self-start font-gothamB">
            Diseñamos, fabricamos y vendemos hornos para pizza increíbles.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={ooniCuality3}
            alt="ooniCuality3"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            MADE IN SCOTLAND
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Reconocimiento internacional en el mercado.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={ooniCuality4}
            alt="ooniCuality4"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            PRODUCTOS DE CALIDAD
          </div>
          <div className="flex justify-center self-start font-gothamB">
            El Mejor Horno de Pizza segun WIRED y nuestros clientes.
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="bannerooni" className="w-full mb-12" />
      </div>
    </>
  );
}

export default Ooni;
