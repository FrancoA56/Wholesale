import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
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
import ooniLogo from "../media/imagenes/Ooni-logo blanco png.png";
import emileLogo from "../media/imagenes/EmileHenry-logo blanco grande.png";

function Resumen() {
  return (
    <>
      <div className="flex justify-center my-12">
        <div className="text-black flex">
          Tienes una tienda y quieres vender nuestros productos?
          <div className="mx-12 bg-tono3 px-2 text-white rounded-md hover:bg-tono2 hover:scale-125 transition duration-300 ease-in-out transform">
            Registrate!
          </div>
        </div>
      </div>
      <div className="flex bg-tono3 py-6">
        <div className="flex-1 flex justify-center items-center">
          <img src={ooniLogo} alt="ooniLogo" className="w-1/4 ml-6 hover:scale-125 transition duration-300 ease-in-out transform" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={emileLogo} alt="emileLogo" className="w-1/4 mr-24 hover:scale-125 transition duration-300 ease-in-out transform" />
        </div>
      </div>

      <div className="flex justify-center gap-12 bg-tono2 py-12">
        <div className="w-2/5">
          <CarouselProvider
            naturalSlideHeight={36}
            naturalSlideWidth={52}
            totalSlides={13}
          >
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
              <div className="flex gap-12 justify-center">
                <ButtonBack className="text-tono4">
                  <i class="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <ButtonNext className="text-tono4">
                  <i class="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="w-2/5 mx-12">
          <CarouselProvider
            naturalSlideHeight={36}
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
              <div className="flex gap-12 justify-center ">
                <ButtonBack className="text-tono4">
                  <i class="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <ButtonNext className="text-tono4">
                  <i class="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}

export default Resumen;
