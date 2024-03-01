import React from "react";
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
import imagen1 from "../media/imagenes/ooni/funda.jpeg";
import imagen2 from "../media/imagenes/ooni/balanza.jpeg";
import imagen3 from "../media/imagenes/ooni/fullKit.jpeg";
import imagen4 from "../media/imagenes/ooni/hornoAbierto.jpeg";
import imagen5 from "../media/imagenes/ooni/hornoConPala.jpeg";
import imagen6 from "../media/imagenes/ooni/hornoConPizza.jpeg";
import imagen7 from "../media/imagenes/ooni/hornoInterperie.jpeg";
import imagen8 from "../media/imagenes/ooni/hornosHilera.jpeg";
import imagen9 from "../media/imagenes/ooni/hornoSinPizza.jpeg";
import imagen10 from "../media/imagenes/ooni/juntada.jpeg";
import imagen11 from "../media/imagenes/ooni/ollitas.jpeg";
import imagen12 from "../media/imagenes/ooni/utensillos1.jpeg";
import imagen13 from "../media/imagenes/ooni/utensillos2.jpeg";
import "../styles/efectoLogo.css"


function Ooni() {
  return (
    <>
      <div className="bg-fondoOoni bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={ooniLogo}
            alt="wholesaleLogo"
            className="tracking-in-contract sm:w-1/5 w-2/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Edimburgo - Escocia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col">
        <div className="sm:w-9/12 sm:ml-20 my-12 col-span-2 ml-4 mr-4 sm:mr-0">
          <CarouselProvider
            naturalSlideHeight={34}
            naturalSlideWidth={52}
            totalSlides={13}
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
                  <img src={imagen3} alt="Ooni" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={imagen2} alt="Ooni" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={imagen4} alt="Ooni" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={imagen5} alt="Ooni" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={imagen1} alt="Ooni" />{" "}
                </Slide>
                <Slide index={6}>
                  {" "}
                  <img src={imagen6} alt="Ooni" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={imagen8} alt="Ooni" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={imagen9} alt="Ooni" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={imagen10} alt="Ooni" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={imagen11} alt="Ooni" />{" "}
                </Slide>
                <Slide index={11}>
                  {" "}
                  <img src={imagen12} alt="Ooni" />{" "}
                </Slide>
                <Slide index={12}>
                  {" "}
                  <img src={imagen13} alt="Ooni" />{" "}
                </Slide>
              </Slider>

              <div className="flex gap-8 justify-center mt-1">
                <ButtonBack className="relative left-5 sm:block hidden text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform">
                  <i className="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <div className="flex gap-2 text-tono4">
                  <Dot slide={0}>
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={1}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={2}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={3}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={4}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={5}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={6}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={7}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={8}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={9}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={10}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={11}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                  <Dot slide={12}>
                    {" "}
                    <i className="fa-solid fa-circle active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform"></i>
                  </Dot>
                </div>
                <ButtonNext className="relative right-5 sm:block hidden text-tono4 active:text-tono1 hover:scale-110 hover:text-tono3 transition duration-300 ease-in-out transform">
                  <i className="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="sm:col-span-1 flex text-justify items-center sm:mr-28 mr-6 ml-6 sm:ml-0">
          <div className="flex flex-col">
            <img
              src={ooniLogoGris}
              alt="ooniLogoGris"
              className="w-3/5 mx-auto sm:mt-12 mt-10 mb-2 bottom-12 relative"
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

export default Ooni;
