import React, { useRef } from "react";
import emileLogo from "../media/imagenes/EmileHenry-logo blanco grande.png";
import emileLogoRojo from "../media/imagenes/EmileHenry-logo blanco png.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import emile1 from "../media/imagenes/emile/bowl.webp";
import emile2 from "../media/imagenes/emile/budinera.webp";
import emile3 from "../media/imagenes/emile/corazon.webp";
import emile5 from "../media/imagenes/emile/fuente.webp";
import emile6 from "../media/imagenes/emile/fuenteCebolla.webp";
import emile7 from "../media/imagenes/emile/fuenteOnda.webp";
import emile10 from "../media/imagenes/emile/fuentePlana2.webp";
import emile11 from "../media/imagenes/emile/panera.webp";
import emile12 from "../media/imagenes/emile/ramekin.webp";
import emile13 from "../media/imagenes/emile/tajine.webp";
import banner from "../media/imagenes/emile/banner.webp";
import "../styles/efectoLogo.css";
import emileCuality1 from "../media/imagenes/emile/cualidades/garantia.png";
import emileCuality2 from "../media/imagenes/emile/cualidades/ceramica-calidad.png";
import emileCuality3 from "../media/imagenes/emile/cualidades/made-in-france.png";
import emileCuality4 from "../media/imagenes/emile/cualidades/producto-artesanal.png";
import "../styles/carrousels.css";

function Emile() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const swiperRef = useRef(null);

  const slides = [
    { id: 0, image: emile13 },
    { id: 1, image: emile2 },
    { id: 2, image: emile3 },
    { id: 3, image: emile11 },
    { id: 4, image: emile5 },
    { id: 5, image: emile6 },
    { id: 6, image: emile7 },
    { id: 7, image: emile1 },
    { id: 8, image: emile12 },
    { id: 9, image: emile10 },
  ];

  return (
    <>
      <div className="bg-fondoEmile bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tonoblackb h-screen w-screen flex justify-center items-center">
          <a
            href="https://www.emilehenry.com/en/"
            title="Emile Henry Argentina wholesale dyr venta mayorista"
            className="flex justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emileLogo}
              alt="Emile Henry Argentina wholesale dyr venta mayorista"
              className="tracking-in-contract sm:w-1/3 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
            />
          </a>
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Borgoña - Francia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col sm:mb-12 mb-0">
        <div className="sm:w-9/12 w-11/12 sm:ml-20 ml-4 mr-4 sm:mr-0 mt-12 sm:col-span-3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            autoplay={
              isDesktopOrLaptop
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false
            }
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {isDesktopOrLaptop ? (
                  <div className="h-[60vh] flex justify-center items-center overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Emile Henry Argentina wholesale dyr venta mayorista"
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="h-[28vh] flex justify-center items-center overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Emile Henry Argentina wholesale dyr venta mayorista"
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination" />
        </div>

        <div className="sm:col-span-2 flex text-justify items-center sm:mr-16 sm:ml-0 mr-4 ml-4">
          <div className="flex flex-col mt-16 sm:mt-0">
            <a
              href="https://www.emilehenry.com/en/"
              title="Emile Henry Argentina DYR venta mayorista"
              className="flex justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={emileLogoRojo}
                alt="Emile Henry Argentina wholesale dyr venta mayorista"
                className="w-3/5 mx-auto sm:mt-12 mt-8 mb-2 bottom-12 relative"
              />
            </a>
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
            alt="Emile Henry Argentina wholesale dyr venta mayorista"
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
            alt="Emile Henry Argentina wholesale dyr venta mayorista"
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
            alt="Emile Henry Argentina wholesale dyr venta mayorista"
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
            alt="Emile Henry Argentina wholesale dyr venta mayorista"
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
        <img
          src={banner}
          alt="Banner Emile Henry Argentina DYR wholesale venta mayorista"
          className="w-full mb-12"
        />
      </div>
    </>
  );
}

export default Emile;
