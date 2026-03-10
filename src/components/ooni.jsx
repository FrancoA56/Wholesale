import React, { useRef } from "react";
import ooniLogo from "../media/imagenes/Ooni-logo blanco png.png";
import ooniLogoGris from "../media/imagenes/Ooni-03.png";
import { useMediaQuery } from "react-responsive";
import imagen1 from "../media/imagenes/ooni/funda.webp";
import imagen2 from "../media/imagenes/ooni/balanza.webp";
import imagen4 from "../media/imagenes/ooni/pizzaCruda.webp";
import imagen5 from "../media/imagenes/ooni/hornoConPala.webp";
import imagen6 from "../media/imagenes/ooni/hornoConPizza.webp";
import imagen7 from "../media/imagenes/ooni/hornoInterperie.webp";
import imagen9 from "../media/imagenes/ooni/hornoSinPizza.webp";
import imagen10 from "../media/imagenes/ooni/juntada.webp";
import imagen11 from "../media/imagenes/ooni/ollitas.webp";
import imagen12 from "../media/imagenes/ooni/utensillos1.webp";
import imagen13 from "../media/imagenes/ooni/utensillos2.webp";
import banner from "../media/imagenes/ooni/banner.webp";
import ooniCuality1 from "../media/imagenes/ooni/cualitys/1.png";
import ooniCuality2 from "../media/imagenes/ooni/cualitys/2.png";
import ooniCuality3 from "../media/imagenes/ooni/cualitys/3.png";
import ooniCuality4 from "../media/imagenes/ooni/cualitys/4.png";
import "../styles/efectoLogo.css";
import "../styles/carrousels.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Ooni() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const swiperRef = useRef(null);

  const slides = [
    { id: 0, image: imagen7 },
    { id: 1, image: imagen2 },
    { id: 2, image: imagen4 },
    { id: 3, image: imagen5 },
    { id: 4, image: imagen1 },
    { id: 5, image: imagen6 },
    { id: 6, image: imagen13 },
    { id: 7, image: imagen10 },
    { id: 8, image: imagen11 },
    { id: 9, image: imagen12 },
    { id: 10, image: imagen9 },
  ];

  return (
    <>
      <div className="bg-fondoOoni bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tonoblackb h-screen w-screen flex justify-center items-center">
          <a
            href="https://ooni.com/"
            title="Argentina venta mayorista wholesale dyr ooni"
            className="flex justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ooniLogo}
              alt="Argentina venta mayorista wholesale dyr ooni"
              className="tracking-in-contract sm:w-1/5 w-3/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
            />
          </a>
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Edimburgo - Escocia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col mb-12">
        <div className="sm:w-9/12 sm:ml-20 mt-12 col-span-3 ml-4 mr-4 sm:mr-0">
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
                  <div className="rounded-xl h-[60vh] flex justify-center items-center overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Argentina venta mayorista wholesale dyr ooni"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="h-[28vh] flex justify-center items-center overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Argentina venta mayorista wholesale dyr ooni"
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination" />
        </div>
        <div className="sm:col-span-2 flex text-justify items-center sm:mr-40 mr-6 ml-6 sm:ml-0 sm:mt-0 mt-12">
          <div className="flex flex-col sm:mt-6 mt-0">
            <a
              href="https://ooni.com/"
              className="flex justify-center"
              title="Argentina venta mayorista wholesale dyr ooni"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ooniLogoGris}
                alt="Argentina venta mayorista wholesale dyr ooni"
                className="w-5/12 mx-auto sm:mt-12 mt-10 mb-2 bottom-12 relative"
              />
            </a>
            <hr className="border-tono3 mb-12 sm:hidden grid" />
            <div className="text-gray-700 sm:mb-0 mb-8 indent-8 font-gothamB">
              <h1 className="inline text-gray-700 font-gothamB">Ooni</h1> fue
              fundada en 2012 con la misión de hacer accesible la auténtica
              pizza artesanal en cualquier hogar. Sus hornos para pizza alcanzan
              temperaturas de hasta 500 °C (950 °F), permitiendo cocinar pizzas
              perfectas en sólo 60 segundos. Inspirados en las técnicas
              tradicionales de cocción al fuego, los productos de Ooni ofrecen
              una calidad que antes solo se encontraba en restaurantes o
              costosos hornos especializados. La marca combina diseño innovador
              y practicidad, redefiniendo la experiencia de disfrutar una pizza
              de calidad profesional en casa.
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-4 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={ooniCuality1}
            alt="Argentina venta mayorista wholesale dyr ooni"
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
            alt="Argentina venta mayorista wholesale dyr ooni"
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
            alt="Argentina venta mayorista wholesale dyr ooni"
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
            alt="Argentina venta mayorista wholesale dyr ooni"
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
        <img
          src={banner}
          alt="banner Argentina venta mayorista wholesale dyr ooni"
          className="w-full mb-12"
        />
      </div>
    </>
  );
}

export default Ooni;
