import React, { useState, useEffect } from "react";
import emileLogo from "../media/imagenes/EmileHenry-logo blanco grande.png";
import emileLogoRojo from "../media/imagenes/EmileHenry-logo blanco png.png";
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
import emile1 from "../media/imagenes/emile/bowl.jpeg";
import emile2 from "../media/imagenes/emile/budinera.jpeg";
import emile3 from "../media/imagenes/emile/corazon.jpeg";
import emile5 from "../media/imagenes/emile/fuente.jpeg";
import emile6 from "../media/imagenes/emile/fuenteCebolla.jpeg";
import emile7 from "../media/imagenes/emile/fuenteOnda.jpeg";
import emile10 from "../media/imagenes/emile/fuentePlana2.jpeg";
import emile11 from "../media/imagenes/emile/panera.jpeg";
import emile12 from "../media/imagenes/emile/ramekin.jpeg";
import emile13 from "../media/imagenes/emile/tajine.jpeg";
import banner from "../media/imagenes/emile/banner.jpeg";
import "../styles/efectoLogo.css";
import emileCuality1 from "../media/imagenes/emile/cualidades/garantia.png";
import emileCuality2 from "../media/imagenes/emile/cualidades/ceramica-calidad.png";
import emileCuality3 from "../media/imagenes/emile/cualidades/made-in-france.png";
import emileCuality4 from "../media/imagenes/emile/cualidades/producto-artesanal.png";

function Emile() {
  const [activeSlide, setActiveSlide] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const timer = setTimeout(() => {
        const nextIndex = activeSlide === 9 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeSlide, isDesktopOrLaptop]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    const previousIndex = activeSlide === 0 ? 9 : activeSlide - 1;
    setActiveSlide(previousIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = activeSlide === 9 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
  };

  return (
    <>
      <div className="bg-fondoEmile bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={emileLogo}
            alt="wholesaleLogo"
            className="tracking-in-contract sm:w-1/3 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Borgoña - Francia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col  sm:mb-12 mb-0">
        <div className="sm:w-9/12 w-11/12 sm:ml-20 ml-4 mr-4 sm:mr-0 mt-12 sm:col-span-3">
          <CarouselProvider
            naturalSlideHeight={33}
            naturalSlideWidth={52}
            totalSlides={10}
            currentSlide={activeSlide}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={emile13} alt="emile henry" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={emile2} alt="emile henry" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={emile3} alt="emile henry" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={emile11} alt="emile henry" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={emile5} alt="emile henry" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={emile6} alt="emile henry" />{" "}
                </Slide>
                <Slide index={6}>
                  {" "}
                  <img src={emile7} alt="emile henry" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={emile1} alt="emile henry" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={emile12} alt="emile henry" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={emile10} alt="emile henry" />{" "}
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
                  {[...Array(10)].map((_, index) => (
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
        <div className="sm:col-span-2 flex text-justify items-center sm:mr-16 sm:ml-0 mr-4 ml-4">
          <div className="flex flex-col mt-16 sm:mt-0">
            <img
              src={emileLogoRojo}
              alt="emileLogoRojo"
              className="w-3/5 mx-auto sm:mt-12 mt-8 mb-2 bottom-12 relative"
            />
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-4 indent-8 font-gothamB">
              Desde hace 6 generaciones, Emile Henry transmite la pasión por la
              cerámica de calidad, hecha a mano en los talleres de Borgoña.
              Orgullosos de ofrecer nuestra experiencia de Tierra y Fuego para
              crear deliciosas recetas llenas de sabor. Hoy la Compañía continúa
              más que nunca desarrollándose y evolucionando. Estamos orgullosos
              de utilizar nuestra experiencia para ayudar a hacer que cocinar y
              hornear sea más fácil y placentero para hogares de todo el mundo.
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={emileCuality1}
            alt="emileCuality"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI ">
            5 A 10 AÑOS DE GARANTÍA
          </div>
          <div className="flex justify-center self-start sm:mx-0 mx-auto font-gothamB">
            Tus compras garantizadas de 5 a 10 años.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={emileCuality2}
            alt="emileCuality"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            CERÁMICA DE CALIDAD
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Fabricamos utensilios de cerámica para que puedas cocinar fácilmente
            los mejores platos.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={emileCuality3}
            alt="emileCuality"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            MADE IN FRANCE
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Para Emile Henry, made in France es un compromiso de por vida.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={emileCuality4}
            alt="emileCuality"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            PRODUCTOS ARTESANALES DE CERÁMICA NATURAL
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Los productos son libre de plomo, cadmio y niquel.
          </div>
        </div>
      </div>
    <div>
      <img src={banner} alt="bannerEmile" className="w-full mb-12"/>
    </div>
    </>
  );
}

export default Emile;
