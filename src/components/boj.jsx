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
import boj1 from "../media/imagenes/boj/0.jpeg";
import boj2 from "../media/imagenes/boj/1.jpg";
import boj3 from "../media/imagenes/boj/2.jpg";
import boj4 from "../media/imagenes/boj/3.jpg";
import boj5 from "../media/imagenes/boj/4.jpg";
import boj6 from "../media/imagenes/boj/5.jpg";
import gojCuality1 from "../media/imagenes/boj/cualitys/1.png";
import gojCuality2 from "../media/imagenes/boj/cualitys/2.png";
import gojCuality3 from "../media/imagenes/boj/cualitys/3.png";
import gojCuality4 from "../media/imagenes/boj/cualitys/4.png";
import "../styles/efectoLogo.css";

function Mauviel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = activeSlide === 5 ? 0 : activeSlide + 1;
      setActiveSlide(nextIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    const previousIndex = activeSlide === 0 ? 5 : activeSlide - 1;
    setActiveSlide(previousIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = activeSlide === 5 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
  };

  return (
    <>
      <div className="bg-fondoBoj bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={bojLogoBlanco}
            alt="bojLogoBlanco"
            className="tracking-in-contract sm:w-1/5 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
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
            totalSlides={6}
            currentSlide={activeSlide}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={boj1} alt="emile henry" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={boj2} alt="emile henry" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={boj3} alt="emile henry" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={boj4} alt="emile henry" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={boj5} alt="emile henry" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={boj6} alt="emile henry" />{" "}
                </Slide>
                {/*<Slide index={6}>
                  {" "}
                  <img src={emile7} alt="emile henry" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={emile8} alt="emile henry" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={emile9} alt="emile henry" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={emile10} alt="emile henry" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={emile11} alt="emile henry" />{" "}
                </Slide>
                <Slide index={11}>
                  {" "}
                  <img src={emile12} alt="emile henry" />{" "}
                </Slide>
                <Slide index={12}>
                  {" "}
                  <img src={emile1} alt="emile henry" />{" "}
                </Slide> */}
              </Slider>
              <div className="flex gap-8 justify-center mt-1">
                <ButtonBack
                  onClick={handlePreviousSlide}
                  className="relative left-5 sm:block hidden text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
                >
                  <i className="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <div className="flex gap-2 text-tono4">
                  {[...Array(6)].map((_, index) => (
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
                  className="relative right-5 text-tono4 sm:block hidden active:text-tono1 hover:scale-110 hover:text-tono3 focus:text-tono1 transition duration-300 ease-in-out transform"
                >
                  <i className="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="col-span-3 flex text-justify items-center sm:mr-16 mr-6 ml-6 sm:ml-0">
          <div className="flex flex-col">
            <img
              src={bojLogo}
              alt="bojLogo"
              className="sm:w-2/5 w-3/5 mx-auto mb-12 sm:mt-0 mt-12"
            />
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-8 indent-8 font-gothamB">
              Desde 1905 especializandose en la fabricacion de abrelatas,
              sacacorchos y otros utensilios Cada producto esta meticulosamente
              diseñado y fabricado con los mas altos estandares de calidad . La
              empresa se enorgullece de su historia y del legado de calidad que
              ha construido durante más de un siglo. Esto ha permitido que los
              valores y la visión se mantengan intactos a lo largo de 3
              generaciones, lo que ha contribuido en gran medida a afianzar su
              reputación en la industria. Actualmente, BOJ mira hacia el futuro
              con la misma pasión y determinación que caracterizan a la marca
              desde los inicios, afrontando con confianza los desafíos y
              perpetuando su compromiso con la excelencia.
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality1}
            alt="gojCuality1"
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
            src={gojCuality2}
            alt="gojCuality2"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">PRODUCTOS</div>
          <div className="flex justify-center self-start font-gothamB">
            La empresa se especializa en la fabricación de abrelatas,
            sacacorchos y otros utensilios de menaje relacionados.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality3}
            alt="gojCuality3"
            className="w-1/2 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            HECHO EN ESPAÑA
          </div>
          <div className="flex justify-center self-start font-gothamB">
            Desde 1905. Una historia que nos hace fuertes.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={gojCuality4}
            alt="gojCuality4"
            className="w-1/2 sm:row-span-2 mx-auto"
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
    </>
  );
}

export default Mauviel;
