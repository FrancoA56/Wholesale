import React from "react";
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
import emile1 from "../media/imagenes/emile/bowl.jpeg";
import emile2 from "../media/imagenes/emile/budinera.jpeg";
import emile3 from "../media/imagenes/emile/corazon.jpeg";
import emile4 from "../media/imagenes/emile/fondue.jpeg";
import emile5 from "../media/imagenes/emile/fuente.jpeg";
import emile6 from "../media/imagenes/emile/fuenteCebolla.jpeg";
import emile7 from "../media/imagenes/emile/fuenteOnda.jpeg";
import emile8 from "../media/imagenes/emile/fuenteOndulada.jpeg";
import emile9 from "../media/imagenes/emile/fuentePlana.jpeg";
import emile10 from "../media/imagenes/emile/fuentePlana2.jpeg";
import emile11 from "../media/imagenes/emile/panera.jpeg";
import emile12 from "../media/imagenes/emile/ramekin.jpeg";
import emile13 from "../media/imagenes/emile/tajine.jpeg";

function Mauviel() {
  return (
    <>
      <div className="bg-fondoMauviel bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={mauvielLogo}
            alt="wholesaleLogo"
            className="sm:w-1/3 w-2/3 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Normandia - Francia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col">
        <div className="sm:w-9/12 w-11/12 sm:ml-20 sm:mr-0 ml-4 mr-4 my-12 col-span-2">
          <CarouselProvider
            naturalSlideHeight={33}
            naturalSlideWidth={52}
            totalSlides={13}
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
                  <img src={emile4} alt="emile henry" />{" "}
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
                </Slide>
              </Slider>
              <div className="flex gap-8 justify-center mt-1">
                <ButtonBack className="relative left-5 sm:block hidden text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform">
                  <i class="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <div className="flex gap-2 text-tono4">
                  <Dot slide={0}>
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={1}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={2}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={3}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={4}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={5}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={6}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={7}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={8}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={9}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={10}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={11}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={12}>
                    {" "}
                    <i class="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                </div>
                <ButtonNext className="relative right-5 sm:block hidden text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform">
                  <i class="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="col-span-1 flex text-justify items-center sm:mr-28 mr-6 ml-6 sm:ml-0">
          <div className="flex flex-col">
            <img
              src={logoMauvielNegro}
              alt="logoMauvielNegro"
              className="w-3/4 mx-auto mt-6 bottom-12 relative"
            />
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mauviel;
